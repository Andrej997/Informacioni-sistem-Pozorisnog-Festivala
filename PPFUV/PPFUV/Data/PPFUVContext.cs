using Microsoft.EntityFrameworkCore;
using PPFUV.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PPFUV.Data
{
    public class PPFUVContext : DbContext
    {
        public PPFUVContext(DbContextOptions<PPFUVContext> options)
            : base(options) { }

        public DbSet<Pozoriste> Pozorista { get; set; }
        public DbSet<Forma> Forme { get; set; }
        public DbSet<Festival> Festivali { get; set; }
        public DbSet<PropDeoFest> PropDeoFesta { get; set; }
        public DbSet<Sala> Sale { get; set; }
        public DbSet<Predstava> Predstave { get; set; }
        public DbSet<Ugovor> Ugovori { get; set; }
        public DbSet<OrgOdb> OrgOdbori { get; set; }
        public DbSet<Nagrada> Nagrade { get; set; }
        public DbSet<Radnik> Radnici { get; set; }
        public DbSet<Selektor> Selektori { get; set; }
        public DbSet<ClanOrgOdb> ClanOrgOdbora { get; set; }
        public DbSet<Glumac> Glumci { get; set; }
        public DbSet<Reditelj> Reditelji { get; set; }
        public DbSet<Izabran> Izabrani { get; set; }
        public DbSet<Realizuje> Realizuju { get; set; }
        public DbSet<Glumi> Glume { get; set; }
        public DbSet<Priredi> Prirede { get; set; }
    }
}
