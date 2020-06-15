using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Priredi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Prirede",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    propDeoFestid = table.Column<int>(nullable: true),
                    pozoristeid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Prirede", x => x.id);
                    table.ForeignKey(
                        name: "FK_Prirede_Pozorista_pozoristeid",
                        column: x => x.pozoristeid,
                        principalTable: "Pozorista",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Prirede_PropDeoFesta_propDeoFestid",
                        column: x => x.propDeoFestid,
                        principalTable: "PropDeoFesta",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Prirede_pozoristeid",
                table: "Prirede",
                column: "pozoristeid");

            migrationBuilder.CreateIndex(
                name: "IX_Prirede_propDeoFestid",
                table: "Prirede",
                column: "propDeoFestid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Prirede");
        }
    }
}
