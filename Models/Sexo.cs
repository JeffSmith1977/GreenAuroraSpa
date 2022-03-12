using System;
using System.Collections.Generic;

#nullable disable

namespace GreenAuraSpa.Models
{
    public partial class Sexo
    {
        public Sexo()
        {
            Clientes = new HashSet<Cliente>();
        }

        public int Id { get; set; }
        public string Sexo1 { get; set; }
        public double Estado { get; set; }

        public virtual ICollection<Cliente> Clientes { get; set; }
    }
}
