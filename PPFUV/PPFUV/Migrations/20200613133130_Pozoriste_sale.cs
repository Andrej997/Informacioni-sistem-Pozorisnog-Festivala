using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Pozoriste_sale : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Pozoristeid",
                table: "Sale",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sale_Pozoristeid",
                table: "Sale",
                column: "Pozoristeid");

            migrationBuilder.AddForeignKey(
                name: "FK_Sale_Pozorista_Pozoristeid",
                table: "Sale",
                column: "Pozoristeid",
                principalTable: "Pozorista",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sale_Pozorista_Pozoristeid",
                table: "Sale");

            migrationBuilder.DropIndex(
                name: "IX_Sale_Pozoristeid",
                table: "Sale");

            migrationBuilder.DropColumn(
                name: "Pozoristeid",
                table: "Sale");
        }
    }
}
