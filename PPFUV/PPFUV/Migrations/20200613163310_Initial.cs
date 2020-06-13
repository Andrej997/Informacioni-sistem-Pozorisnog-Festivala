using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClanOrgOdbora",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClanOrgOdbora", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Forme",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    naziv = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Forme", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Glumci",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true),
                    brPredstava = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Glumci", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Nagrade",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    iznos = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nagrade", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Pozorista",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    brZaposlenih = table.Column<int>(nullable: false),
                    naziv = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pozorista", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Predstave",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    naziv = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Predstave", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "PropDeoFesta",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    naziv = table.Column<string>(nullable: true),
                    vremeOdrzavanja = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PropDeoFesta", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Radnici",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Radnici", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Reditelji",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true),
                    brPredstava = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reditelji", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Selektori",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true),
                    brOgledanihSerija = table.Column<int>(nullable: false),
                    organizacioniOdboriId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Selektori", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Ugovori",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    datumSklapanja = table.Column<DateTime>(nullable: false),
                    svota = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ugovori", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Festivali",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    naziv = table.Column<string>(nullable: true),
                    tema = table.Column<string>(nullable: true),
                    pocetakOdrzavanja = table.Column<DateTime>(nullable: false),
                    krajOdrzavanja = table.Column<DateTime>(nullable: false),
                    sponzor = table.Column<string>(nullable: true),
                    budzet = table.Column<int>(nullable: false),
                    brojPozorista = table.Column<int>(nullable: false),
                    formaid = table.Column<int>(nullable: true),
                    pozoristeid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Festivali", x => x.id);
                    table.ForeignKey(
                        name: "FK_Festivali_Forme_formaid",
                        column: x => x.formaid,
                        principalTable: "Forme",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Festivali_Pozorista_pozoristeid",
                        column: x => x.pozoristeid,
                        principalTable: "Pozorista",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Sale",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    kapacPublike = table.Column<int>(nullable: false),
                    zauzeta = table.Column<bool>(nullable: false),
                    Pozoristeid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sale", x => x.id);
                    table.ForeignKey(
                        name: "FK_Sale_Pozorista_Pozoristeid",
                        column: x => x.Pozoristeid,
                        principalTable: "Pozorista",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OrgOdbori",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false),
                    clanOrgOdbora1id = table.Column<int>(nullable: true),
                    clanOrgOdbora2id = table.Column<int>(nullable: true),
                    clanOrgOdbora3id = table.Column<int>(nullable: true),
                    selektorid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrgOdbori", x => x.id);
                    table.ForeignKey(
                        name: "FK_OrgOdbori_ClanOrgOdbora_clanOrgOdbora1id",
                        column: x => x.clanOrgOdbora1id,
                        principalTable: "ClanOrgOdbora",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OrgOdbori_ClanOrgOdbora_clanOrgOdbora2id",
                        column: x => x.clanOrgOdbora2id,
                        principalTable: "ClanOrgOdbora",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OrgOdbori_ClanOrgOdbora_clanOrgOdbora3id",
                        column: x => x.clanOrgOdbora3id,
                        principalTable: "ClanOrgOdbora",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OrgOdbori_Selektori_selektorid",
                        column: x => x.selektorid,
                        principalTable: "Selektori",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Festivali_formaid",
                table: "Festivali",
                column: "formaid");

            migrationBuilder.CreateIndex(
                name: "IX_Festivali_pozoristeid",
                table: "Festivali",
                column: "pozoristeid");

            migrationBuilder.CreateIndex(
                name: "IX_OrgOdbori_clanOrgOdbora1id",
                table: "OrgOdbori",
                column: "clanOrgOdbora1id");

            migrationBuilder.CreateIndex(
                name: "IX_OrgOdbori_clanOrgOdbora2id",
                table: "OrgOdbori",
                column: "clanOrgOdbora2id");

            migrationBuilder.CreateIndex(
                name: "IX_OrgOdbori_clanOrgOdbora3id",
                table: "OrgOdbori",
                column: "clanOrgOdbora3id");

            migrationBuilder.CreateIndex(
                name: "IX_OrgOdbori_selektorid",
                table: "OrgOdbori",
                column: "selektorid");

            migrationBuilder.CreateIndex(
                name: "IX_Sale_Pozoristeid",
                table: "Sale",
                column: "Pozoristeid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Festivali");

            migrationBuilder.DropTable(
                name: "Glumci");

            migrationBuilder.DropTable(
                name: "Nagrade");

            migrationBuilder.DropTable(
                name: "OrgOdbori");

            migrationBuilder.DropTable(
                name: "Predstave");

            migrationBuilder.DropTable(
                name: "PropDeoFesta");

            migrationBuilder.DropTable(
                name: "Radnici");

            migrationBuilder.DropTable(
                name: "Reditelji");

            migrationBuilder.DropTable(
                name: "Sale");

            migrationBuilder.DropTable(
                name: "Ugovori");

            migrationBuilder.DropTable(
                name: "Forme");

            migrationBuilder.DropTable(
                name: "ClanOrgOdbora");

            migrationBuilder.DropTable(
                name: "Selektori");

            migrationBuilder.DropTable(
                name: "Pozorista");
        }
    }
}
