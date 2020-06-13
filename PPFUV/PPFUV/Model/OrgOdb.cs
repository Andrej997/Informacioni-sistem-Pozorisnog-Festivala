using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class OrgOdb
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }

        public ClanOrgOdb clanOrgOdbora1 { get; set; }

        public ClanOrgOdb clanOrgOdbora2 { get; set; }

        public ClanOrgOdb clanOrgOdbora3 { get; set; }

        public Selektor selektor { get; set; }

        public ICollection<Pozoriste> pozorista { get; set; }
    }
}
