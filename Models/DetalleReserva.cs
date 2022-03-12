using System;
using System.Collections.Generic;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class DetalleReserva
    {
        public int IdProducto { get; set; }
        public int IdReserva { get; set; }
        public decimal SubTotal { get; set; }
        public decimal MtoDescuento { get; set; }
        public decimal Precio { get; set; }

        public virtual Producto IdProductoNavigation { get; set; }
        public virtual Reserva IdReservaNavigation { get; set; }
    }
}
