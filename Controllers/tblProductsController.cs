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
    public class tblProductsController : ApiController
    {
        private dbUberEatsEntities1 db = new dbUberEatsEntities1();

        // GET: api/tblProducts
        public IQueryable<tblProduct> GettblProducts()
        {
            return db.tblProducts;
        }

        // GET: api/tblProducts/5
        [ResponseType(typeof(tblProduct))]
        public IHttpActionResult GettblProduct(int id)
        {
            tblProduct tblProduct = db.tblProducts.Find(id);
            if (tblProduct == null)
            {
                return NotFound();
            }

            return Ok(tblProduct);
        }

        // PUT: api/tblProducts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblProduct(int id, tblProduct tblProduct)
        {
            Console.WriteLine("Hello");
            tblProduct oldDetails = tblProduct;


            if (!ModelState.IsValid)
            {
                return BadRequest("Not valid data");
            }


            using (db)
            {
                var prod = db.tblProducts.Where(g => g.prod_Id.Equals(id)).FirstOrDefault();
                if (prod != null)
                {
                    prod.prod_Name = tblProduct.prod_Name;
                    prod.prod_Price = tblProduct.prod_Price;
                    prod.prod_Type = tblProduct.prod_Type;
                    prod.prod_Description = tblProduct.prod_Description;

                    var res = db.SaveChanges();

                }
                else
                {
                    return NotFound();
                }
            }
            return Ok();
        }

        // POST: api/tblProducts
        [ResponseType(typeof(tblProduct))]
        public IHttpActionResult PosttblProduct(tblProduct tblProduct)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblProducts.Add(tblProduct);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (tblProductExists(tblProduct.prod_Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = tblProduct.prod_Id }, tblProduct);
        }

        // DELETE: api/tblProducts/5
        [ResponseType(typeof(tblProduct))]
        public IHttpActionResult DeletetblProduct(int id)
        {
            tblProduct tblProduct = db.tblProducts.Find(id);
            if (tblProduct == null)
            {
                return NotFound();
            }

            db.tblProducts.Remove(tblProduct);
            db.SaveChanges();

            return Ok(tblProduct);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblProductExists(int id)
        {
            return db.tblProducts.Count(e => e.prod_Id == id) > 0;
        }
    }
}