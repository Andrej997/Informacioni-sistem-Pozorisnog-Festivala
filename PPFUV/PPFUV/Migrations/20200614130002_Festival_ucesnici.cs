using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Festival_ucesnici : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Festivalid",
                table: "Izabrani",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Izabrani_Festivalid",
                table: "Izabrani",
                column: "Festivalid");

            migrationBuilder.AddForeignKey(
                name: "FK_Izabrani_Festivali_Festivalid",
                table: "Izabrani",
                column: "Festivalid",
                principalTable: "Festivali",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Izabrani_Festivali_Festivalid",
                table: "Izabrani");

            migrationBuilder.DropIndex(
                name: "IX_Izabrani_Festivalid",
                table: "Izabrani");

            migrationBuilder.DropColumn(
                name: "Festivalid",
                table: "Izabrani");
        }
    }
}
