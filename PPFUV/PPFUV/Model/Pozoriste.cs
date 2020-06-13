﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Pozoriste
    {
        [Key]
        public int id { get; set; }

        public int brZaposlenih { get; set; }

        public string naziv { get; set; }

        public ICollection<Sala> sale { get; set; }
    }
}
