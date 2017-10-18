using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using UberEATS.Models;

namespace UberEATS.Models
{
    public class UserLogin
    {
        //Customer
        public string cust_Email { get; set; }
        public string cust_Password { get; set; }
        public string cust_Firstname { get; set; }

        //Restuarant
        public string rest_Email { get; set; }
        public string rest_Password { get; set; }
        public string rest_Manager { get; set; }

        //Admin
        public string adm_Email { get; set; }
        public string adm_Password { get; set; }
        public string adm_Firstname { get; set; }

        //Driver
        public string drv_Email { get; set; }
        public string drv_Password { get; set; }
        public string drv_Firstname { get; set; }

    }
}