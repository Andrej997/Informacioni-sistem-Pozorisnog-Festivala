using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class OrgOdb_ucesnici : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OrgOdbid1",
                table: "Pozorista",
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

        protected override void Down(MigrationBuilder migrationBuilder)
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
        }
    }
}
