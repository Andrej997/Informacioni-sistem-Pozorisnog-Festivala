﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Model
{
    public class Selektor
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }

        public string ime { get; set; }

        public string prezime { get; set; }

        public int brOgledanihSerija { get; set; }

        public int organizacioniOdboriId { get; set; }
    }
}
