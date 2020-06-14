using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Predstava_izabran : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "izabranid",
                table: "Predstave",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Predstave_izabranid",
                table: "Predstave",
                column: "izabranid");

            migrationBuilder.AddForeignKey(
                name: "FK_Predstave_Izabrani_izabranid",
                table: "Predstave",
                column: "izabranid",
                principalTable: "Izabrani",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Predstave_Izabrani_izabranid",
                table: "Predstave");

            migrationBuilder.DropIndex(
                name: "IX_Predstave_izabranid",
                table: "Predstave");

            migrationBuilder.DropColumn(
                name: "izabranid",
                table: "Predstave");
        }
    }
}
