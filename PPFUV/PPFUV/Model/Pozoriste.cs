using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Pozoriste
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }

        public int brZaposlenih { get; set; }

        public string naziv { get; set; }

        public ICollection<Sala> sale { get; set; }

        //public OrgOdb orgOdb { get; set; }

        //public ICollection<Izabran> izabrani { get; set; }
    }
}
