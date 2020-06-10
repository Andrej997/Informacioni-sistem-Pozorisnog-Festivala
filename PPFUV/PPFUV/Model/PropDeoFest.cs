using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class PropDeoFest
    {
        [Key]
        public int id { get; set; }

        public string naziv { get; set; }

        public DateTime vremeOdrzavanja { get; set; }
    }
}
