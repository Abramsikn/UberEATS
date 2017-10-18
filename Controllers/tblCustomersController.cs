 using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using UberEATS.Models;

namespace UberEATS.Controllers
{
    public class tblCustomersController : ApiController
    {
        private dbUberEatsEntities1 db = new dbUberEatsEntities1();

        // GET: api/tblCustomers
        public IQueryable<tblCustomer> GettblCustomers()
        {
            return db.tblCustomers;
        }

        // GET: api/tblCustomers/5
        [ResponseType(typeof(tblCustomer))]
        //  Added
        public IHttpActionResult GettblCustomer(string cust_Email, string cust_Password)
        {
            var cust = db.tblCustomers.Where(tblCustomer => tblCustomer.cust_Email.Equals(cust_Email) && tblCustomer.cust_Password.Equals(cust_Password)).FirstOrDefault();
            if (cust.cust_Email == null && cust.cust_Password == null)
            {
                return (null);
            }
            else
            {
                return Ok(cust);
            }
        }

        // PUT: api/tblCustomers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblCustomer(int id, tblCustomer tblCustomer)
        {

            Console.WriteLine("Hello");
            tblCustomer oldDetails = tblCustomer;


            if (!ModelState.IsValid)
            {
                return BadRequest("Not valid data");
            }


            using (db)
            {
                var cust = db.tblCustomers.Where(g => g.cust_Id.Equals(id)).FirstOrDefault();
                if (cust != null)
                {
                    cust.cust_Firstname = tblCustomer.cust_Firstname;
                    cust.cust_Lastname = tblCustomer.cust_Lastname;
                    cust.cust_Contact = tblCustomer.cust_Contact;
                    cust.cust_Cardnumber = tblCustomer.cust_Cardnumber;
                    cust.cust_Email = tblCustomer.cust_Email;
                    cust.cust_Password = tblCustomer.cust_Password;

                    var res = db.SaveChanges();

                }
                else
                {
                    return NotFound();
                }
            }
            return Ok();
        }

        // POST: api/tblCustomers
        [ResponseType(typeof(tblCustomer))]
        public IHttpActionResult PosttblCustomer(tblCustomer tblCustomer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblCustomers.Add(tblCustomer);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (tblCustomerExists (tblCustomer.cust_Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = tblCustomer.cust_Id }, tblCustomer);
        }

        // DELETE: api/tblCustomers/5
        [ResponseType(typeof(tblCustomer))]
        public IHttpActionResult DeletetblCustomer(int id)
        {
            tblCustomer tblCustomer = db.tblCustomers.Find(id);
            if (tblCustomer == null)
            {
                return NotFound();
            }

            db.tblCustomers.Remove(tblCustomer);
            db.SaveChanges();

            return Ok(tblCustomer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblCustomerExists(int id)
        {
            return db.tblCustomers.Count(e => e.cust_Id == id) > 0;
        }
    }
}