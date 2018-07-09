using Microsoft.EntityFrameworkCore.Migrations;

namespace Music_Matchup.Migrations
{
    public partial class MadeYearNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "StartYear",
                table: "Bands",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "EndYear",
                table: "Bands",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "StartYear",
                table: "Bands",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "EndYear",
                table: "Bands",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
