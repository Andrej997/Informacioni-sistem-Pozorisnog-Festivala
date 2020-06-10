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
    }
}
