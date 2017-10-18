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
    public class tblRestuarantsController : ApiController
    {
        private dbUberEatsEntities1 db = new dbUberEatsEntities1();

        // GET: api/tblRestuarants
        public IQueryable<tblRestuarant> GettblRestuarants()
        {
            return db.tblRestuarants;
        }

        // GET: api/tblRestuarants/5
        [ResponseType(typeof(tblRestuarant))]
        public IHttpActionResult GettblRestuarant(int id)
        {
            tblRestuarant tblRestuarant = db.tblRestuarants.Find(id);
            if (tblRestuarant == null)
            {
                return NotFound();
            }

            return Ok(tblRestuarant);
        }

        // PUT: api/tblRestuarants/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblRestuarant(int id, tblRestuarant tblRestuarant)
        {
            Console.WriteLine("Hello");
            tblRestuarant oldDetails = tblRestuarant;


            if (!ModelState.IsValid)
            {
                return BadRequest("Not valid data");
            }


            using (db)
            {
                var rest = db.tblRestuarants.Where(g => g.rest_Id.Equals(id)).FirstOrDefault();
                if (rest != null)
                {
                    rest.rest_Name = tblRestuarant.rest_Name;
                    rest.rest_Address = tblRestuarant.rest_Address;
                    rest.rest_Contact = tblRestuarant.rest_Contact;
                    rest.rest_Manager = tblRestuarant.rest_Manager;
                    rest.rest_Email = tblRestuarant.rest_Email;
                    rest.rest_Password = tblRestuarant.rest_Password;
                    rest.rest_Type = tblRestuarant.rest_Type;

                    var res = db.SaveChanges();

                }
                else
                {
                    return NotFound();
                }
            }
            return Ok();
        }

        // POST: api/tblRestuarants
        [ResponseType(typeof(tblRestuarant))]
        public IHttpActionResult PosttblRestuarant(tblRestuarant tblRestuarant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblRestuarants.Add(tblRestuarant);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (tblRestuarantExists (tblRestuarant.rest_Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }
            

            return CreatedAtRoute("DefaultApi", new { id = tblRestuarant.rest_Id }, tblRestuarant);
        }

        // DELETE: api/tblRestuarants/5
        [ResponseType(typeof(tblRestuarant))]
        public IHttpActionResult DeletetblRestuarant(int id)
        {
            tblRestuarant tblRestuarant = db.tblRestuarants.Find(id);
            if (tblRestuarant == null)
            {
                return NotFound();
            }

            db.tblRestuarants.Remove(tblRestuarant);
            db.SaveChanges();

            return Ok(tblRestuarant);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblRestuarantExists(int id)
        {
            return db.tblRestuarants.Count(e => e.rest_Id == id) > 0;
        }

        // Defining and calling the stored procedure
        [Route("api/GetResst")]
        public IEnumerable<RestuarantDetails> getInformation()
        {
            GetRestuInfo_Result obj = new GetRestuInfo_Result();
            var res = db.Database.SqlQuery<RestuarantDetails>("SELECT rest_Name, rest_Address, rest_Type, Image FROM dbo.tblRestuarant r, dbo.tblResImage i WHERE r.rest_Id = i.img_Id");

            return res;
        }
    }
}