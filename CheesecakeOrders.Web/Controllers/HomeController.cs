using CheesecakeOrders.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CheesecakeOrders.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private string _connectionString;

        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public List<Order> GetAllOrders()
        {
            CheesecakeOrdersRepository repo = new CheesecakeOrdersRepository(_connectionString);
            return repo.GetAll();

        }

        [HttpPost]
        [Route("add")]
        public void AddOrder(Order order)
        {
            CheesecakeOrdersRepository repo = new CheesecakeOrdersRepository(_connectionString);
            repo.AddOrder(order);
        }

        [HttpGet]
        [Route("getbyid")]
        public Order GetById(int id)
        {
            CheesecakeOrdersRepository repo = new CheesecakeOrdersRepository(_connectionString);
            return repo.GetById(id);

        }
    }
}
