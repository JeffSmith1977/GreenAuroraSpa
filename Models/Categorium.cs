using System;
using System.Collections.Generic;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class Categorium
    {
        public Categorium()
        {
            Productos = new HashSet<Producto>();
        }

        public int IdCategoria { get; set; }
        public string Descripcion { get; set; }
        public double Estado { get; set; }
        public DateTime? FechaIngreso { get; set; }

        public virtual ICollection<Producto> Productos { get; set; }
    }
}
