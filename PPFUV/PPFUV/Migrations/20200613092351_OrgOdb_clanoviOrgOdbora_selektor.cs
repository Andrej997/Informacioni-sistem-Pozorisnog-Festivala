using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class OrgOdb_clanoviOrgOdbora_selektor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "selektorid",
                table: "OrgOdbori",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OrgOdbid",
                table: "ClanOrgOdbora",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrgOdbori_selektorid",
                table: "OrgOdbori",
                column: "selektorid");

            migrationBuilder.CreateIndex(
                name: "IX_ClanOrgOdbora_OrgOdbid",
                table: "ClanOrgOdbora",
                column: "OrgOdbid");

            migrationBuilder.AddForeignKey(
                name: "FK_ClanOrgOdbora_OrgOdbori_OrgOdbid",
                table: "ClanOrgOdbora",
                column: "OrgOdbid",
                principalTable: "OrgOdbori",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrgOdbori_Selektori_selektorid",
                table: "OrgOdbori",
                column: "selektorid",
                principalTable: "Selektori",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClanOrgOdbora_OrgOdbori_OrgOdbid",
                table: "ClanOrgOdbora");

            migrationBuilder.DropForeignKey(
                name: "FK_OrgOdbori_Selektori_selektorid",
                table: "OrgOdbori");

            migrationBuilder.DropIndex(
                name: "IX_OrgOdbori_selektorid",
                table: "OrgOdbori");

            migrationBuilder.DropIndex(
                name: "IX_ClanOrgOdbora_OrgOdbid",
                table: "ClanOrgOdbora");

            migrationBuilder.DropColumn(
                name: "selektorid",
                table: "OrgOdbori");

            migrationBuilder.DropColumn(
                name: "OrgOdbid",
                table: "ClanOrgOdbora");
        }
    }
}
