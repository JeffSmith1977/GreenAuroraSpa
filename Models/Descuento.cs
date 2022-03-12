using System;
using System.Collections.Generic;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class Descuento
    {
        public Descuento()
        {
            DescuentoProds = new HashSet<DescuentoProd>();
        }

        public int IdDescuento { get; set; }
        public string NombreDescuento { get; set; }
        public byte[] Descripcion { get; set; }
        public string PorcentajeDes { get; set; }
        public double Estado { get; set; }
        public DateTime? FechaIngreso { get; set; }

        public virtual ICollection<DescuentoProd> DescuentoProds { get; set; }
    }
}
