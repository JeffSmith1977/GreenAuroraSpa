using System;
using System.Collections.Generic;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Reservas = new HashSet<Reserva>();
        }

        public int IdCliente { get; set; }
        public string Nombre { get; set; }
        public int IdSexo { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public DateTime? FechaIngreso { get; set; }

        public virtual Sexo IdSexoNavigation { get; set; }
        public virtual ICollection<Reserva> Reservas { get; set; }
    }
}
