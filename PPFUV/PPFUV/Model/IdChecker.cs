using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public enum TypeChecker
    {
        ClanOrgOdb = 1,
        Festival,
        Forma,
        Glumac,
        Nagrada,
        OrgOdb,
        Pozoriste,
        Predstava,
        PropDeoFest,
        Radnik,
        Reditelj,
        Sala,
        Selektor,
        Ugovor
    }
    public class IdChecker
    {
        public int idChecker { get; set; }

        public int type { get; set; }
    }
}
