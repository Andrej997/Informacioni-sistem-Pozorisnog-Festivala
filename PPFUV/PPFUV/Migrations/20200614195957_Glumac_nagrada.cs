using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Glumac_nagrada : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "nagradaid",
                table: "Glumci",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Glumci_nagradaid",
                table: "Glumci",
                column: "nagradaid");

            migrationBuilder.AddForeignKey(
                name: "FK_Glumci_Nagrade_nagradaid",
                table: "Glumci",
                column: "nagradaid",
                principalTable: "Nagrade",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Glumci_Nagrade_nagradaid",
                table: "Glumci");

            migrationBuilder.DropIndex(
                name: "IX_Glumci_nagradaid",
                table: "Glumci");

            migrationBuilder.DropColumn(
                name: "nagradaid",
                table: "Glumci");
        }
    }
}
