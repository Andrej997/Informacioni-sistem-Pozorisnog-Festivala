using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Ugovor
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }

        public DateTime datumSklapanja { get; set; }

        public double svota { get; set; }
    }
}
