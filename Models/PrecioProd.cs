using System;
using System.Collections.Generic;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class PrecioProd
    {
        public int IdPrecio { get; set; }
        public int IdProducto { get; set; }
        public decimal Precio { get; set; }
        public string Descripcion { get; set; }
        public DateTime? FechaIngreso { get; set; }

        public virtual Producto IdProductoNavigation { get; set; }
    }
}
