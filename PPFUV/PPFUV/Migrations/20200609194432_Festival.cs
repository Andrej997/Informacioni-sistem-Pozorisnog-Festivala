using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Festival : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Festivali",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
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

            migrationBuilder.CreateIndex(
                name: "IX_Festivali_formaid",
                table: "Festivali",
                column: "formaid");

            migrationBuilder.CreateIndex(
                name: "IX_Festivali_pozoristeid",
                table: "Festivali",
                column: "pozoristeid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Festivali");
        }
    }
}
