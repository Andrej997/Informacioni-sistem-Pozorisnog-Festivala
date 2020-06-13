﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class OrgOdb
    {
        [Key]
        public int id { get; set; }

        public ICollection<ClanOrgOdb> clanoviOrgOdbora { get; set; }

        public Selektor selektor { get; set; }
    }
}
