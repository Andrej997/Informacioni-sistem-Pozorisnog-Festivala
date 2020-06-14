using Microsoft.EntityFrameworkCore.Migrations;

namespace PPFUV.Migrations
{
    public partial class ManyToMany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "Glume",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    predstavaid = table.Column<int>(nullable: true),
                    glumacid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Glume", x => x.id);
                    table.ForeignKey(
                        name: "FK_Glume_Glumci_glumacid",
                        column: x => x.glumacid,
                        principalTable: "Glumci",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Glume_Predstave_predstavaid",
                        column: x => x.predstavaid,
                        principalTable: "Predstave",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Realizuju",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    predstavaid = table.Column<int>(nullable: true),
                    rediteljid = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Realizuju", x => x.id);
                    table.ForeignKey(
                        name: "FK_Realizuju_Predstave_predstavaid",
                        column: x => x.predstavaid,
                        principalTable: "Predstave",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Realizuju_Reditelji_rediteljid",
                        column: x => x.rediteljid,
                        principalTable: "Reditelji",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Glume_glumacid",
                table: "Glume",
                column: "glumacid");

            migrationBuilder.CreateIndex(
                name: "IX_Glume_predstavaid",
                table: "Glume",
                column: "predstavaid");

            migrationBuilder.CreateIndex(
                name: "IX_Realizuju_predstavaid",
                table: "Realizuju",
                column: "predstavaid");

            migrationBuilder.CreateIndex(
                name: "IX_Realizuju_rediteljid",
                table: "Realizuju",
                column: "rediteljid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Glume");

            migrationBuilder.DropTable(
                name: "Realizuju");

            migrationBuilder.AddColumn<int>(
                name: "Predstavaid",
                table: "Reditelji",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Predstavaid",
                table: "Glumci",
                type: "int",
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
    }
}
