using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Pozoriste_orgOdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "orgOdbid",
                table: "Pozorista",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pozorista_orgOdbid",
                table: "Pozorista",
                column: "orgOdbid");

            migrationBuilder.AddForeignKey(
                name: "FK_Pozorista_OrgOdbori_orgOdbid",
                table: "Pozorista",
                column: "orgOdbid",
                principalTable: "OrgOdbori",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pozorista_OrgOdbori_orgOdbid",
                table: "Pozorista");

            migrationBuilder.DropIndex(
                name: "IX_Pozorista_orgOdbid",
                table: "Pozorista");

            migrationBuilder.DropColumn(
                name: "orgOdbid",
                table: "Pozorista");
        }
    }
}
