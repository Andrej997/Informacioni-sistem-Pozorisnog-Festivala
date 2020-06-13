using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class OrgOdb_clanoviIzmena : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClanOrgOdbora_OrgOdbori_OrgOdbid",
                table: "ClanOrgOdbora");

            migrationBuilder.DropIndex(
                name: "IX_ClanOrgOdbora_OrgOdbid",
                table: "ClanOrgOdbora");

            migrationBuilder.DropColumn(
                name: "OrgOdbid",
                table: "ClanOrgOdbora");

            migrationBuilder.AddColumn<int>(
                name: "clanOrgOdbora1id",
                table: "OrgOdbori",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "clanOrgOdbora2id",
                table: "OrgOdbori",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "clanOrgOdbora3id",
                table: "OrgOdbori",
                nullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_OrgOdbori_ClanOrgOdbora_clanOrgOdbora1id",
                table: "OrgOdbori",
                column: "clanOrgOdbora1id",
                principalTable: "ClanOrgOdbora",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrgOdbori_ClanOrgOdbora_clanOrgOdbora2id",
                table: "OrgOdbori",
                column: "clanOrgOdbora2id",
                principalTable: "ClanOrgOdbora",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrgOdbori_ClanOrgOdbora_clanOrgOdbora3id",
                table: "OrgOdbori",
                column: "clanOrgOdbora3id",
                principalTable: "ClanOrgOdbora",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrgOdbori_ClanOrgOdbora_clanOrgOdbora1id",
                table: "OrgOdbori");

            migrationBuilder.DropForeignKey(
                name: "FK_OrgOdbori_ClanOrgOdbora_clanOrgOdbora2id",
                table: "OrgOdbori");

            migrationBuilder.DropForeignKey(
                name: "FK_OrgOdbori_ClanOrgOdbora_clanOrgOdbora3id",
                table: "OrgOdbori");

            migrationBuilder.DropIndex(
                name: "IX_OrgOdbori_clanOrgOdbora1id",
                table: "OrgOdbori");

            migrationBuilder.DropIndex(
                name: "IX_OrgOdbori_clanOrgOdbora2id",
                table: "OrgOdbori");

            migrationBuilder.DropIndex(
                name: "IX_OrgOdbori_clanOrgOdbora3id",
                table: "OrgOdbori");

            migrationBuilder.DropColumn(
                name: "clanOrgOdbora1id",
                table: "OrgOdbori");

            migrationBuilder.DropColumn(
                name: "clanOrgOdbora2id",
                table: "OrgOdbori");

            migrationBuilder.DropColumn(
                name: "clanOrgOdbora3id",
                table: "OrgOdbori");

            migrationBuilder.AddColumn<int>(
                name: "OrgOdbid",
                table: "ClanOrgOdbora",
                type: "int",
                nullable: true);

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
        }
    }
}
