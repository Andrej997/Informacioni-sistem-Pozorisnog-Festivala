using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Reditelj
    {
        [Key]
        public int id { get; set; }

        public string ime { get; set; }

        public string prezime { get; set; }

        public int brPredstava { get; set; }
    }
}
