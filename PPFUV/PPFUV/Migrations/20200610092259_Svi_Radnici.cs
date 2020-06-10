using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Svi_Radnici : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "brPredstava",
                table: "Radnici");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Radnici");

            migrationBuilder.DropColumn(
                name: "Reditelj_brPredstava",
                table: "Radnici");

            migrationBuilder.DropColumn(
                name: "brOgledanihSerija",
                table: "Radnici");

            migrationBuilder.CreateTable(
                name: "ClanOrgOdbora",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClanOrgOdbora", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Glumci",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true),
                    brPredstava = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Glumci", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Reditelji",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true),
                    brPredstava = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reditelji", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Selektori",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ime = table.Column<string>(nullable: true),
                    prezime = table.Column<string>(nullable: true),
                    brOgledanihSerija = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Selektori", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClanOrgOdbora");

            migrationBuilder.DropTable(
                name: "Glumci");

            migrationBuilder.DropTable(
                name: "Reditelji");

            migrationBuilder.DropTable(
                name: "Selektori");

            migrationBuilder.AddColumn<int>(
                name: "brPredstava",
                table: "Radnici",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Radnici",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "Reditelj_brPredstava",
                table: "Radnici",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "brOgledanihSerija",
                table: "Radnici",
                type: "int",
                nullable: true);
        }
    }
}
