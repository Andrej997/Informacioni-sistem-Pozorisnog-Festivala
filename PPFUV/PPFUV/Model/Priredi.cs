using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Priredi
    {
        [Key]
        public int id { get; set; }

        public PropDeoFest propDeoFest { get; set; }

        public Pozoriste pozoriste { get; set; }
    }
}
