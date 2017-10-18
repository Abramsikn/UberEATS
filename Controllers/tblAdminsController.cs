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
    public class tblAdminsController : ApiController
    {
        private dbUberEatsEntities1 db = new dbUberEatsEntities1();

        // GET: api/tblAdmins
        public IQueryable<tblAdmin> GettblAdmins()
        {
            return db.tblAdmins;
        }

        // GET: api/tblAdmins/5
        [ResponseType(typeof(tblAdmin))]
        public IHttpActionResult GettblAdmin(string adm_Email, string adm_Password)
        {
            var cust = db.tblAdmins.Where(tblAdmin => tblAdmin.adm_Email.Equals(adm_Email) && tblAdmin.adm_Password.Equals(adm_Password)).FirstOrDefault();
            if (cust.adm_Email == null && cust.adm_Password == null)
            {
                return (null);
            }
            else
            {
                return Ok(cust);
            }
        }

        // PUT: api/tblAdmins/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblAdmin(int id, tblAdmin tblAdmin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblAdmin.adm_Id)
            {
                return BadRequest();
            }

            db.Entry(tblAdmin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tblAdminExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/tblAdmins
        [ResponseType(typeof(tblAdmin))]
        public IHttpActionResult PosttblAdmin(tblAdmin tblAdmin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblAdmins.Add(tblAdmin);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tblAdmin.adm_Id }, tblAdmin);
        }

        // DELETE: api/tblAdmins/5
        [ResponseType(typeof(tblAdmin))]
        public IHttpActionResult DeletetblAdmin(int id)
        {
            tblAdmin tblAdmin = db.tblAdmins.Find(id);
            if (tblAdmin == null)
            {
                return NotFound();
            }

            db.tblAdmins.Remove(tblAdmin);
            db.SaveChanges();

            return Ok(tblAdmin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblAdminExists(int id)
        {
            return db.tblAdmins.Count(e => e.adm_Id == id) > 0;
        }
    }
}