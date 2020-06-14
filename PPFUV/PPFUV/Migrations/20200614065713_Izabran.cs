using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Izabran : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ucesnici");

            migrationBuilder.CreateTable(
                name: "Izabrani",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrgOdbid = table.Column<int>(nullable: true),
                    Pozoristeid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Izabrani", x => x.id);
                    table.ForeignKey(
                        name: "FK_Izabrani_OrgOdbori_OrgOdbid",
                        column: x => x.OrgOdbid,
                        principalTable: "OrgOdbori",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Izabrani_Pozorista_Pozoristeid",
                        column: x => x.Pozoristeid,
                        principalTable: "Pozorista",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Izabrani_OrgOdbid",
                table: "Izabrani",
                column: "OrgOdbid");

            migrationBuilder.CreateIndex(
                name: "IX_Izabrani_Pozoristeid",
                table: "Izabrani",
                column: "Pozoristeid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Izabrani");

            migrationBuilder.CreateTable(
                name: "Ucesnici",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrgOdbid = table.Column<int>(type: "int", nullable: true),
                    Pozoristeid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ucesnici", x => x.id);
                    table.ForeignKey(
                        name: "FK_Ucesnici_OrgOdbori_OrgOdbid",
                        column: x => x.OrgOdbid,
                        principalTable: "OrgOdbori",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Ucesnici_Pozorista_Pozoristeid",
                        column: x => x.Pozoristeid,
                        principalTable: "Pozorista",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Ucesnici_OrgOdbid",
                table: "Ucesnici",
                column: "OrgOdbid");

            migrationBuilder.CreateIndex(
                name: "IX_Ucesnici_Pozoristeid",
                table: "Ucesnici",
                column: "Pozoristeid");
        }
    }
}
