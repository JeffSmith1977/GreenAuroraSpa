using System;
using System.Collections.Generic;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class Reserva
    {
        public Reserva()
        {
            DetalleReservas = new HashSet<DetalleReserva>();
        }

        public int IdReservacion { get; set; }
        public DateTime FechaHoraReserva { get; set; }
        public int IdCliente { get; set; }
        public decimal SubTotal { get; set; }
        public decimal MtoDescuento { get; set; }
        public decimal Total { get; set; }
        public DateTime FechaCreacion { get; set; }

        public virtual Cliente IdClienteNavigation { get; set; }
        public virtual ICollection<DetalleReserva> DetalleReservas { get; set; }
    }
}
