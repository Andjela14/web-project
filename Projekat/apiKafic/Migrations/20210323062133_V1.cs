using Microsoft.EntityFrameworkCore.Migrations;

namespace apiKafic.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Kafic",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    N = table.Column<int>(type: "int", nullable: false),
                    Naziv = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kafic", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Stolovi",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Broj = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    KaficId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stolovi", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stolovi_Kafic_KaficId",
                        column: x => x.KaficId,
                        principalTable: "Kafic",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Stolovi_KaficId",
                table: "Stolovi",
                column: "KaficId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stolovi");

            migrationBuilder.DropTable(
                name: "Kafic");
        }
    }
}
