using System;
using System.Collections.Generic;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class DescuentoProd
    {
        public int IdDetalleDes { get; set; }
        public int IdProducto { get; set; }
        public int IdDescuento { get; set; }
        public string Porcentaje { get; set; }
        public double Estado { get; set; }
        public DateTime? FechaActivacion { get; set; }

        public virtual Descuento IdDescuentoNavigation { get; set; }
        public virtual Producto IdProductoNavigation { get; set; }
    }
}
