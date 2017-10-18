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
    public class tblOrder_ProductController : ApiController
    {
        private dbUberEatsEntities1 db = new dbUberEatsEntities1();

        // GET: api/tblOrder_Product
        public IQueryable<tblOrder_Product> GettblOrder_Product()
        {
            return db.tblOrder_Product;
        }

        // GET: api/tblOrder_Product/5
        [ResponseType(typeof(tblOrder_Product))]
        public IHttpActionResult GettblOrder_Product(int id)
        {
            tblOrder_Product tblOrder_Product = db.tblOrder_Product.Find(id);
            if (tblOrder_Product == null)
            {
                return NotFound();
            }

            return Ok(tblOrder_Product);
        }

        // PUT: api/tblOrder_Product/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PuttblOrder_Product(int id, tblOrder_Product tblOrder_Product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblOrder_Product.op_Id)
            {
                return BadRequest();
            }

            db.Entry(tblOrder_Product).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tblOrder_ProductExists(id))
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

        // POST: api/tblOrder_Product
        [ResponseType(typeof(tblOrder_Product))]
        public IHttpActionResult PosttblOrder_Product(tblOrder_Product tblOrder_Product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tblOrder_Product.Add(tblOrder_Product);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tblOrder_Product.op_Id }, tblOrder_Product);
        }

        // DELETE: api/tblOrder_Product/5
        [ResponseType(typeof(tblOrder_Product))]
        public IHttpActionResult DeletetblOrder_Product(int id)
        {
            tblOrder_Product tblOrder_Product = db.tblOrder_Product.Find(id);
            if (tblOrder_Product == null)
            {
                return NotFound();
            }

            db.tblOrder_Product.Remove(tblOrder_Product);
            db.SaveChanges();

            return Ok(tblOrder_Product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblOrder_ProductExists(int id)
        {
            return db.tblOrder_Product.Count(e => e.op_Id == id) > 0;
        }

        // Defining and calling the stored procedure
        [Route("api/GetOrders")]
        public IEnumerable<OrderDetails> getInfo()
        {
            GetAllOrders_Result oj = new GetAllOrders_Result();
            var result = db.Database.SqlQuery<OrderDetails>("SELECT o.order_Id, prod_Name, prod_Description, totalPrice, c.cust_Id, order_DeliveryAddress, order_DeliveryStatus FROM dbo.tblOrder o, dbo.tblProduct  P, dbo.tblOrder_Product op, dbo.tblCustomer c WHERE o.order_Id = op.ord_Id and P.prod_Id = op.pro_Id and c.cust_Id = o.cust_Id");

            return result;
        }

    }
}