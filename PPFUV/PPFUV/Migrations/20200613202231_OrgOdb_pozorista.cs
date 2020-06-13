using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class OrgOdb_pozorista : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pozorista_OrgOdbori_orgOdbid",
                table: "Pozorista");

            migrationBuilder.RenameColumn(
                name: "orgOdbid",
                table: "Pozorista",
                newName: "OrgOdbid");

            migrationBuilder.RenameIndex(
                name: "IX_Pozorista_orgOdbid",
                table: "Pozorista",
                newName: "IX_Pozorista_OrgOdbid");

            migrationBuilder.AddForeignKey(
                name: "FK_Pozorista_OrgOdbori_OrgOdbid",
                table: "Pozorista",
                column: "OrgOdbid",
                principalTable: "OrgOdbori",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pozorista_OrgOdbori_OrgOdbid",
                table: "Pozorista");

            migrationBuilder.RenameColumn(
                name: "OrgOdbid",
                table: "Pozorista",
                newName: "orgOdbid");

            migrationBuilder.RenameIndex(
                name: "IX_Pozorista_OrgOdbid",
                table: "Pozorista",
                newName: "IX_Pozorista_orgOdbid");

            migrationBuilder.AddForeignKey(
                name: "FK_Pozorista_OrgOdbori_orgOdbid",
                table: "Pozorista",
                column: "orgOdbid",
                principalTable: "OrgOdbori",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
