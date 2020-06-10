using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Ugovor
    {
        [Key]
        public int id { get; set; }

        public DateTime datumSklapanja { get; set; }

        public double svota { get; set; }
    }
}
