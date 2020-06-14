using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Izabran_ugovor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ugovorid",
                table: "Izabrani",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Izabrani_ugovorid",
                table: "Izabrani",
                column: "ugovorid");

            migrationBuilder.AddForeignKey(
                name: "FK_Izabrani_Ugovori_ugovorid",
                table: "Izabrani",
                column: "ugovorid",
                principalTable: "Ugovori",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Izabrani_Ugovori_ugovorid",
                table: "Izabrani");

            migrationBuilder.DropIndex(
                name: "IX_Izabrani_ugovorid",
                table: "Izabrani");

            migrationBuilder.DropColumn(
                name: "ugovorid",
                table: "Izabrani");
        }
    }
}
