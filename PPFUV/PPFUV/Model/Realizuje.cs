using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Realizuje
    {
        [Key]
        public int id { get; set; }

        public Predstava predstava { get; set; }

        public Reditelj reditelj { get; set; }
    }
}
