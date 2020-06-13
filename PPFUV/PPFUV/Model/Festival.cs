using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Festival
    {
        //[Key]
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }

        public string naziv { get; set; }

        public string tema { get; set; }

        public DateTime pocetakOdrzavanja { get; set; }

        public DateTime krajOdrzavanja { get; set; }

        public string sponzor { get; set; }

        public int budzet { get; set; }

        public int brojPozorista { get; set; }

        public Forma forma { get; set; }

        public Pozoriste pozoriste { get; set; }
    }
}
