using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Sala_predstave : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Salaid",
                table: "Predstave",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Predstave_Salaid",
                table: "Predstave",
                column: "Salaid");

            migrationBuilder.AddForeignKey(
                name: "FK_Predstave_Sale_Salaid",
                table: "Predstave",
                column: "Salaid",
                principalTable: "Sale",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Predstave_Sale_Salaid",
                table: "Predstave");

            migrationBuilder.DropIndex(
                name: "IX_Predstave_Salaid",
                table: "Predstave");

            migrationBuilder.DropColumn(
                name: "Salaid",
                table: "Predstave");
        }
    }
}
