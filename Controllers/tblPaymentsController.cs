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
    public class tblPaymentsController : ApiController
    {
        private dbUberEatsEntities1 db = new dbUberEatsEntities1();

        // GET: api/tblPayments
        public IQueryable<tblPayment> GettblPayments()
        {
            return db.tblPayments;
        }

        // GET: api/tblPayments/5
        [ResponseType(typeof(tblPayment))]
        public IHttpActionResult GettblPayment(int id)
        {
            tblPayment tblPayment = db.tblPayments.Find(id);
            if (tblPayment == null)
            {
                return NotFound();
            }

            return Ok(tblPayment);
        }

        // PUT: api/tblPayments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblPayment(int id, tblPayment tblPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblPayment.payment_Id)
            {
                return BadRequest();
            }

            db.Entry(tblPayment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tblPaymentExists(id))
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

        // POST: api/tblPayments
        [ResponseType(typeof(tblPayment))]
        public IHttpActionResult PosttblPayment(tblPayment tblPayment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblPayments.Add(tblPayment);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tblPayment.payment_Id }, tblPayment);
        }

        // DELETE: api/tblPayments/5
        [ResponseType(typeof(tblPayment))]
        public IHttpActionResult DeletetblPayment(int id)
        {
            tblPayment tblPayment = db.tblPayments.Find(id);
            if (tblPayment == null)
            {
                return NotFound();
            }

            db.tblPayments.Remove(tblPayment);
            db.SaveChanges();

            return Ok(tblPayment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblPaymentExists(int id)
        {
            return db.tblPayments.Count(e => e.payment_Id == id) > 0;
        }
    }
}