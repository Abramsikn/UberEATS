using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UberEATS.Controllers
{
    public class RestuarantDetails
    {

        public string rest_Name { get; set; }
        public string rest_Address { get; set; }
        public string rest_Type { get; set; }
        public byte[] Image { get; set; }

        public RestuarantDetails() { }
    }
}