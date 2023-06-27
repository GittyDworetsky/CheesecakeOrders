using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CheesecakeOrders.Data.Migrations
{
    public partial class fixtablecolumnnames : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Orders",
                newName: "Person");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Person",
                table: "Orders",
                newName: "Name");
        }
    }
}
