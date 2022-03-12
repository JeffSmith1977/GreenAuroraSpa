using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categorium> Categoria { get; set; }
        public virtual DbSet<Cliente> Clientes { get; set; }
        public virtual DbSet<Descuento> Descuentos { get; set; }
        public virtual DbSet<DescuentoProd> DescuentoProds { get; set; }
        public virtual DbSet<DetalleReserva> DetalleReservas { get; set; }
        public virtual DbSet<PrecioProd> PrecioProds { get; set; }
        public virtual DbSet<Producto> Productos { get; set; }
        public virtual DbSet<Reserva> Reservas { get; set; }
        public virtual DbSet<Sexo> Sexos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=SQL5107.site4now.net;Database=db_a83fd9_greeaurareserva;User ID=db_a83fd9_greeaurareserva_admin;Password=GreeAura22;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Modern_Spanish_CI_AS");

            modelBuilder.Entity<Categorium>(entity =>
            {
                entity.HasKey(e => e.IdCategoria)
                    .HasName("PK_Categorias");

                entity.Property(e => e.Descripcion)
                    .IsRequired()
                    .HasMaxLength(80);

                entity.Property(e => e.FechaIngreso).HasColumnType("datetime");
            });

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.IdCliente)
                    .HasName("PK_Clientes");

                entity.ToTable("Cliente");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FechaIngreso).HasColumnType("datetime");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(120);

                entity.Property(e => e.Telefono)
                    .IsRequired()
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdSexoNavigation)
                    .WithMany(p => p.Clientes)
                    .HasForeignKey(d => d.IdSexo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Clientes_Sexo");
            });

            modelBuilder.Entity<Descuento>(entity =>
            {
                entity.HasKey(e => e.IdDescuento)
                    .HasName("PK_Descutos");

                entity.ToTable("Descuento");

                entity.Property(e => e.Descripcion).HasMaxLength(100);

                entity.Property(e => e.FechaIngreso).HasColumnType("datetime");

                entity.Property(e => e.NombreDescuento)
                    .IsRequired()
                    .HasMaxLength(80);

                entity.Property(e => e.PorcentajeDes)
                    .IsRequired()
                    .HasMaxLength(5);
            });

            modelBuilder.Entity<DescuentoProd>(entity =>
            {
                entity.HasKey(e => new { e.IdProducto, e.IdDescuento });

                entity.ToTable("DescuentoProd");

                entity.Property(e => e.FechaActivacion).HasColumnType("datetime");

                entity.Property(e => e.IdDetalleDes).ValueGeneratedOnAdd();

                entity.Property(e => e.Porcentaje)
                    .IsRequired()
                    .HasMaxLength(5);

                entity.HasOne(d => d.IdDescuentoNavigation)
                    .WithMany(p => p.DescuentoProds)
                    .HasForeignKey(d => d.IdDescuento)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DescuentoProd_Descuentos");

                entity.HasOne(d => d.IdProductoNavigation)
                    .WithMany(p => p.DescuentoProds)
                    .HasForeignKey(d => d.IdProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DescuentoProd_Productos");
            });

            modelBuilder.Entity<DetalleReserva>(entity =>
            {
                entity.HasKey(e => new { e.IdProducto, e.IdReserva });

                entity.ToTable("DetalleReserva");

                entity.Property(e => e.MtoDescuento).HasColumnType("numeric(18, 2)");

                entity.Property(e => e.Precio).HasColumnType("numeric(18, 2)");

                entity.Property(e => e.SubTotal).HasColumnType("numeric(18, 2)");

                entity.HasOne(d => d.IdProductoNavigation)
                    .WithMany(p => p.DetalleReservas)
                    .HasForeignKey(d => d.IdProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DetalleReserva_Productos");

                entity.HasOne(d => d.IdReservaNavigation)
                    .WithMany(p => p.DetalleReservas)
                    .HasForeignKey(d => d.IdReserva)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_DetalleReserva_Reservas");
            });

            modelBuilder.Entity<PrecioProd>(entity =>
            {
                entity.HasKey(e => e.IdPrecio);

                entity.ToTable("PrecioProd");

                entity.Property(e => e.Descripcion).HasMaxLength(50);

                entity.Property(e => e.FechaIngreso).HasColumnType("datetime");

                entity.Property(e => e.Precio).HasColumnType("numeric(18, 2)");

                entity.HasOne(d => d.IdProductoNavigation)
                    .WithMany(p => p.PrecioProds)
                    .HasForeignKey(d => d.IdProducto)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_PrecioProd_Producto");
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasKey(e => e.IdProducto)
                    .HasName("PK_Productos");

                entity.ToTable("Producto");

                entity.Property(e => e.FechaIngreso).HasColumnType("datetime");

                entity.Property(e => e.Nombre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Url)
                    .HasMaxLength(100)
                    .HasColumnName("URL");

                entity.HasOne(d => d.IdCategoriaNavigation)
                    .WithMany(p => p.Productos)
                    .HasForeignKey(d => d.IdCategoria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Productos_Categorias");
            });

            modelBuilder.Entity<Reserva>(entity =>
            {
                entity.HasKey(e => e.IdReservacion)
                    .HasName("PK_Reservas");

                entity.ToTable("Reserva");

                entity.Property(e => e.FechaCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaHoraReserva).HasColumnType("datetime");

                entity.Property(e => e.MtoDescuento).HasColumnType("numeric(18, 2)");

                entity.Property(e => e.SubTotal).HasColumnType("numeric(18, 2)");

                entity.Property(e => e.Total).HasColumnType("numeric(18, 2)");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.Reservas)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Reservas_Clientes");
            });

            modelBuilder.Entity<Sexo>(entity =>
            {
                entity.ToTable("Sexo");

                entity.Property(e => e.Sexo1)
                    .IsRequired()
                    .HasMaxLength(40)
                    .HasColumnName("Sexo");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
