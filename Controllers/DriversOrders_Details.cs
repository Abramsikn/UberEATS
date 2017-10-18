using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UberEATS.Controllers
{
    public class DriversOrders_Details
    {
        public int order_Id { get; set; }
        public int cust_Id { get; set; }
        public decimal totalPrice { get; set; }
        public string order_DeliveryAddress { get; set; }
        public string order_Status { get; set; }
        public string order_DeliveryStatus { get; set; }
        public DriversOrders_Details () { }
    }
}