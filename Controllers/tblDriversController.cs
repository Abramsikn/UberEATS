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
    public class tblDriversController : ApiController
    {
        private dbUberEatsEntities1 db = new dbUberEatsEntities1();

        // GET: api/tblDrivers
        public IQueryable<tblDriver> GettblDrivers()
        {
            return db.tblDrivers;
        }

        // GET: api/tblDrivers/5
        [ResponseType(typeof(tblDriver))]
        public IHttpActionResult GettblDriver(int id)
        {
            tblDriver tblDriver = db.tblDrivers.Find(id);
            if (tblDriver == null)
            {
                return NotFound();
            }

            return Ok(tblDriver);
        }

        //  To check the driver details
        public IHttpActionResult GettblDriver(string drv_Email, string drv_Password)
        {
            var drvr = db.tblDrivers.Where(tblDriver => tblDriver.drv_Email.Equals(drv_Email) && tblDriver.drv_Password.Equals(drv_Password)).FirstOrDefault();
            if (drvr.drv_Email == null && drvr.drv_Password == null)
            {
                return (null);
            }
            else
            {
                return Ok(drvr);
            }
        }

        // PUT: api/tblDrivers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblDriver(int id, tblDriver tblDriver)
        {
            Console.WriteLine("Hello");
            tblDriver oldDetails = tblDriver;


            if (!ModelState.IsValid)
            {
                return BadRequest("Not valid data");
            }


            using (db)
            {
                var drvr = db.tblDrivers.Where(g => g.drv_Id.Equals(id)).FirstOrDefault();
                if (drvr != null)
                {
                    drvr.drv_Firstname = tblDriver.drv_Firstname;
                    drvr.drv_Lastname = tblDriver.drv_Lastname;
                    drvr.drv_Contact = tblDriver.drv_Contact;
                    drvr.drv_Location = tblDriver.drv_Location;
                    drvr.drv_VehicleType = tblDriver.drv_VehicleType;
                    drvr.drv_Email = tblDriver.drv_Email;
                    drvr.drv_Password = tblDriver.drv_Password;

                    var res = db.SaveChanges();

                }
                else
                {
                    return NotFound();
                }
            }
            return Ok();
        }

        // POST: api/tblDrivers
        [ResponseType(typeof(tblDriver))]
        public IHttpActionResult PosttblDriver(tblDriver tblDriver)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblDrivers.Add(tblDriver);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (tblDriverExists(tblDriver.drv_Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }


            return CreatedAtRoute("DefaultApi", new { id = tblDriver.drv_Id }, tblDriver);
        }

        // DELETE: api/tblDrivers/5
        [ResponseType(typeof(tblDriver))]
        public IHttpActionResult DeletetblDriver(int id)
        {
            tblDriver tblDriver = db.tblDrivers.Find(id);
            if (tblDriver == null)
            {
                return NotFound();
            }

            db.tblDrivers.Remove(tblDriver);
            db.SaveChanges();

            return Ok(tblDriver);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblDriverExists(int id)
        {
            return db.tblDrivers.Count(e => e.drv_Id == id) > 0;
        }
    }
}