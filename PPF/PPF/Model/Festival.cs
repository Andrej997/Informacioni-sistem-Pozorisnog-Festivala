using System;
using System.Collections.Generic;
using System.Text;

namespace PPF.Model
{
    public class Festival
    {
        public int Id { get; set; }

        public string Naziv { get; set; }

        public string Forma { get; set; }

        public string Tema { get; set; }

        public string Sponzor { get; set; }

        public int BrPozorista { get; set; }

        public double Budzet { get; set; }

        public DateTime PocetakOdrzavanja { get; set; }

        public DateTime KrajOdrzavanja { get; set; }
    }
}
