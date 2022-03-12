using System;
using System.Collections.Generic;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class Producto
    {
        public Producto()
        {
            DescuentoProds = new HashSet<DescuentoProd>();
            DetalleReservas = new HashSet<DetalleReserva>();
            PrecioProds = new HashSet<PrecioProd>();
        }

        public int IdProducto { get; set; }
        public string Nombre { get; set; }
        public string DescripcionProd { get; set; }
        public int IdCategoria { get; set; }
        public double Estado { get; set; }
        public string Url { get; set; }
        public DateTime? FechaIngreso { get; set; }

        public virtual Categorium IdCategoriaNavigation { get; set; }
        public virtual ICollection<DescuentoProd> DescuentoProds { get; set; }
        public virtual ICollection<DetalleReserva> DetalleReservas { get; set; }
        public virtual ICollection<PrecioProd> PrecioProds { get; set; }
    }
}
