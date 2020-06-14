﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PPFUV.Data;

namespace PPFUV.Migrations
{
    [DbContext(typeof(PPFUVContext))]
    [Migration("20200614094515_izbacio_liste_izabranih")]
    partial class izbacio_liste_izabranih
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PPFUV.Model.ClanOrgOdb", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<string>("ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("prezime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("ClanOrgOdbora");
                });

            modelBuilder.Entity("PPFUV.Model.Festival", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<int>("brojPozorista")
                        .HasColumnType("int");

                    b.Property<int>("budzet")
                        .HasColumnType("int");

                    b.Property<int?>("formaid")
                        .HasColumnType("int");

                    b.Property<DateTime>("krajOdrzavanja")
                        .HasColumnType("datetime2");

                    b.Property<string>("naziv")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("pocetakOdrzavanja")
                        .HasColumnType("datetime2");

                    b.Property<int?>("pozoristeid")
                        .HasColumnType("int");

                    b.Property<string>("sponzor")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("tema")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("formaid");

                    b.HasIndex("pozoristeid");

                    b.ToTable("Festivali");
                });

            modelBuilder.Entity("PPFUV.Model.Forma", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<string>("naziv")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Forme");
                });

            modelBuilder.Entity("PPFUV.Model.Glumac", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<int>("brPredstava")
                        .HasColumnType("int");

                    b.Property<string>("ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("prezime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Glumci");
                });

            modelBuilder.Entity("PPFUV.Model.Izabran", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("OrgOdbid")
                        .HasColumnType("int");

                    b.Property<int?>("Pozoristeid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("OrgOdbid");

                    b.HasIndex("Pozoristeid");

                    b.ToTable("Izabrani");
                });

            modelBuilder.Entity("PPFUV.Model.Nagrada", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<double>("iznos")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.ToTable("Nagrade");
                });

            modelBuilder.Entity("PPFUV.Model.OrgOdb", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<int?>("clanOrgOdbora1id")
                        .HasColumnType("int");

                    b.Property<int?>("clanOrgOdbora2id")
                        .HasColumnType("int");

                    b.Property<int?>("clanOrgOdbora3id")
                        .HasColumnType("int");

                    b.Property<int?>("selektorid")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("clanOrgOdbora1id");

                    b.HasIndex("clanOrgOdbora2id");

                    b.HasIndex("clanOrgOdbora3id");

                    b.HasIndex("selektorid");

                    b.ToTable("OrgOdbori");
                });

            modelBuilder.Entity("PPFUV.Model.Pozoriste", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<int?>("OrgOdbid")
                        .HasColumnType("int");

                    b.Property<int>("brZaposlenih")
                        .HasColumnType("int");

                    b.Property<string>("naziv")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("OrgOdbid");

                    b.ToTable("Pozorista");
                });

            modelBuilder.Entity("PPFUV.Model.Predstava", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<string>("naziv")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Predstave");
                });

            modelBuilder.Entity("PPFUV.Model.PropDeoFest", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<string>("naziv")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("vremeOdrzavanja")
                        .HasColumnType("datetime2");

                    b.HasKey("id");

                    b.ToTable("PropDeoFesta");
                });

            modelBuilder.Entity("PPFUV.Model.Radnik", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<string>("ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("prezime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Radnici");
                });

            modelBuilder.Entity("PPFUV.Model.Reditelj", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<int>("brPredstava")
                        .HasColumnType("int");

                    b.Property<string>("ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("prezime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Reditelji");
                });

            modelBuilder.Entity("PPFUV.Model.Sala", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<int?>("Pozoristeid")
                        .HasColumnType("int");

                    b.Property<int>("kapacPublike")
                        .HasColumnType("int");

                    b.Property<bool>("zauzeta")
                        .HasColumnType("bit");

                    b.HasKey("id");

                    b.HasIndex("Pozoristeid");

                    b.ToTable("Sale");
                });

            modelBuilder.Entity("PPFUV.Model.Selektor", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<int>("brOgledanihSerija")
                        .HasColumnType("int");

                    b.Property<string>("ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("organizacioniOdboriId")
                        .HasColumnType("int");

                    b.Property<string>("prezime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Selektori");
                });

            modelBuilder.Entity("PPFUV.Model.Ugovor", b =>
                {
                    b.Property<int>("id")
                        .HasColumnType("int");

                    b.Property<DateTime>("datumSklapanja")
                        .HasColumnType("datetime2");

                    b.Property<double>("svota")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.ToTable("Ugovori");
                });

            modelBuilder.Entity("PPFUV.Model.Festival", b =>
                {
                    b.HasOne("PPFUV.Model.Forma", "forma")
                        .WithMany()
                        .HasForeignKey("formaid");

                    b.HasOne("PPFUV.Model.Pozoriste", "pozoriste")
                        .WithMany()
                        .HasForeignKey("pozoristeid");
                });

            modelBuilder.Entity("PPFUV.Model.Izabran", b =>
                {
                    b.HasOne("PPFUV.Model.OrgOdb", "OrgOdb")
                        .WithMany()
                        .HasForeignKey("OrgOdbid");

                    b.HasOne("PPFUV.Model.Pozoriste", "Pozoriste")
                        .WithMany()
                        .HasForeignKey("Pozoristeid");
                });

            modelBuilder.Entity("PPFUV.Model.OrgOdb", b =>
                {
                    b.HasOne("PPFUV.Model.ClanOrgOdb", "clanOrgOdbora1")
                        .WithMany()
                        .HasForeignKey("clanOrgOdbora1id");

                    b.HasOne("PPFUV.Model.ClanOrgOdb", "clanOrgOdbora2")
                        .WithMany()
                        .HasForeignKey("clanOrgOdbora2id");

                    b.HasOne("PPFUV.Model.ClanOrgOdb", "clanOrgOdbora3")
                        .WithMany()
                        .HasForeignKey("clanOrgOdbora3id");

                    b.HasOne("PPFUV.Model.Selektor", "selektor")
                        .WithMany()
                        .HasForeignKey("selektorid");
                });

            modelBuilder.Entity("PPFUV.Model.Pozoriste", b =>
                {
                    b.HasOne("PPFUV.Model.OrgOdb", null)
                        .WithMany("pozorista")
                        .HasForeignKey("OrgOdbid");
                });

            modelBuilder.Entity("PPFUV.Model.Sala", b =>
                {
                    b.HasOne("PPFUV.Model.Pozoriste", null)
                        .WithMany("sale")
                        .HasForeignKey("Pozoristeid");
                });
#pragma warning restore 612, 618
        }
    }
}
