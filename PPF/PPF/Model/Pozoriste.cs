using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PPF.Model
{
    public class Pozoriste
    {
        public int Id { get; set; }

        public string Naziv { get; set; }

        public int BrZaposlenih { get; set; }

        //[ForeignKey("id")]
        //public int IdPredstava { get; set; }
    }
}
