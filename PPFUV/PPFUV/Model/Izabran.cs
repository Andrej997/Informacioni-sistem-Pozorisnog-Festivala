﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Izabran
    {
        [Key]
        public int id { get; set; }

        public OrgOdb OrgOdb { get; set; }

        public Pozoriste Pozoriste { get; set; }
    }
}
