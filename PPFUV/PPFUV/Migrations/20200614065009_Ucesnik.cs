using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Ucesnik : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pozorista_OrgOdbori_OrgOdbid1",
                table: "Pozorista");

            migrationBuilder.DropIndex(
                name: "IX_Pozorista_OrgOdbid1",
                table: "Pozorista");

            migrationBuilder.DropColumn(
                name: "OrgOdbid1",
                table: "Pozorista");

            migrationBuilder.CreateTable(
                name: "Ucesnici",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrgOdbid = table.Column<int>(nullable: true),
                    Pozoristeid = table.Column<int>(nullable: true)
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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ucesnici");

            migrationBuilder.AddColumn<int>(
                name: "OrgOdbid1",
                table: "Pozorista",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pozorista_OrgOdbid1",
                table: "Pozorista",
                column: "OrgOdbid1");

            migrationBuilder.AddForeignKey(
                name: "FK_Pozorista_OrgOdbori_OrgOdbid1",
                table: "Pozorista",
                column: "OrgOdbid1",
                principalTable: "OrgOdbori",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
