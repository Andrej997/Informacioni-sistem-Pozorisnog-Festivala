using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Radnik : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Radnici",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false),
                    brPredstava = table.Column<int>(nullable: true),
                    Reditelj_brPredstava = table.Column<int>(nullable: true),
                    brOgledanihSerija = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Radnici", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Radnici");
        }
    }
}
