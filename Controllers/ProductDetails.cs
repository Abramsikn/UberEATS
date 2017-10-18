using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UberEATS.Controllers
{
    public class ProductDetails
    {
        public string prod_Name { get; set; }
        public string prod_Price { get; set; }
        public string prod_Type { get; set; }
        public string prod_Description { get; set; }
        public byte[] Image { get; set; }

        public ProductDetails() { }
    }
}