
namespace UberEATS.Controllers
{
    public class OrderDetails
    {
        public int order_Id { get; set; }
        public string prod_Name { get; set; }
        public string prod_Description { get; set; }
        public decimal totalPrice { get; set; }
        public string order_DeliveryAddress { get; set; }
        public string order_Status { get; set; }

        public OrderDetails() { }
    }
}