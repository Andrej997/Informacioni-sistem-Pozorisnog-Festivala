using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Sala
    {
        [Key]
        public int id { get; set; }

        public int kapacPublike { get; set; }
    }
}
