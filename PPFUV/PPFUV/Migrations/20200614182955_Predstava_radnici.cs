using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Predstava_radnici : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Predstavaid",
                table: "Reditelji",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Predstavaid",
                table: "Glumci",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reditelji_Predstavaid",
                table: "Reditelji",
                column: "Predstavaid");

            migrationBuilder.CreateIndex(
                name: "IX_Glumci_Predstavaid",
                table: "Glumci",
                column: "Predstavaid");

            migrationBuilder.AddForeignKey(
                name: "FK_Glumci_Predstave_Predstavaid",
                table: "Glumci",
                column: "Predstavaid",
                principalTable: "Predstave",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Reditelji_Predstave_Predstavaid",
                table: "Reditelji",
                column: "Predstavaid",
                principalTable: "Predstave",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Glumci_Predstave_Predstavaid",
                table: "Glumci");

            migrationBuilder.DropForeignKey(
                name: "FK_Reditelji_Predstave_Predstavaid",
                table: "Reditelji");

            migrationBuilder.DropIndex(
                name: "IX_Reditelji_Predstavaid",
                table: "Reditelji");

            migrationBuilder.DropIndex(
                name: "IX_Glumci_Predstavaid",
                table: "Glumci");

            migrationBuilder.DropColumn(
                name: "Predstavaid",
                table: "Reditelji");

            migrationBuilder.DropColumn(
                name: "Predstavaid",
                table: "Glumci");
        }
    }
}
