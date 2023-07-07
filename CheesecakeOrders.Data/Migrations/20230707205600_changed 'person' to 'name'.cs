using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CheesecakeOrders.Data.Migrations
{
    public partial class changedpersontoname : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SpecialRequest",
                table: "Orders",
                newName: "SpecialRequests");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SpecialRequests",
                table: "Orders",
                newName: "SpecialRequest");
        }
    }
}
