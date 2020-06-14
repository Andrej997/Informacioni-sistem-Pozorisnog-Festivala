using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class Izabran_datumSklapanja : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "datumSklapanja",
                table: "Ugovori");

            migrationBuilder.AddColumn<DateTime>(
                name: "datumSklapanja",
                table: "Izabrani",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "datumSklapanja",
                table: "Izabrani");

            migrationBuilder.AddColumn<DateTime>(
                name: "datumSklapanja",
                table: "Ugovori",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
