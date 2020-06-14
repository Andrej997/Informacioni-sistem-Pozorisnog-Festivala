using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Izabran_nagrada : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "nagradaid",
                table: "Izabrani",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Izabrani_nagradaid",
                table: "Izabrani",
                column: "nagradaid");

            migrationBuilder.AddForeignKey(
                name: "FK_Izabrani_Nagrade_nagradaid",
                table: "Izabrani",
                column: "nagradaid",
                principalTable: "Nagrade",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Izabrani_Nagrade_nagradaid",
                table: "Izabrani");

            migrationBuilder.DropIndex(
                name: "IX_Izabrani_nagradaid",
                table: "Izabrani");

            migrationBuilder.DropColumn(
                name: "nagradaid",
                table: "Izabrani");
        }
    }
}
