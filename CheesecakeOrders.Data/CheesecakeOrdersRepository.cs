using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeOrders.Data
{
    public class CheesecakeOrdersRepository
    {

        private readonly string _connectionString;

        public CheesecakeOrdersRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Order> GetAll()
        {
            using var context = new CheesecakeOrdersDbContext(_connectionString);
            return context.Orders.ToList();
        }

        public void AddOrder(Order order)
        {
            using var context = new CheesecakeOrdersDbContext(_connectionString);
            context.Orders.Add(order);
            context.SaveChanges();
        }

        public Order GetById(int id)
        {
            using var context = new CheesecakeOrdersDbContext(_connectionString);
            return context.Orders.FirstOrDefault(i => i.Id == id);
        }
        
    }
        
}
