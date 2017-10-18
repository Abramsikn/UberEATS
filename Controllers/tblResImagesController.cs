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
using System.Web;   //
using System.IO;

namespace UberEATS.Controllers
{
    public class tblResImagesController : ApiController
    {
        private dbUberEatsEntities1 db = new dbUberEatsEntities1();

        // GET: api/tblResImages
        public IQueryable<tblResImage> GettblResImages()
        {
            return db.tblResImages;
        }

        // GET: api/tblResImages/5
        [ResponseType(typeof(tblResImage))]
        public IHttpActionResult GettblResImage(int id)
        {
            tblResImage tblResImage = db.tblResImages.Find(id);
            if (tblResImage == null)
            {
                return NotFound();
            }

            return Ok(tblResImage);
        }

        /* This is used for file accessing and post a file to a database using a server */
        public String POST()
        {
            int counter = 0;

            // collecting files
            System.Web.HttpFileCollection files = System.Web.HttpContext.Current.Request.Files;
            string url = HttpContext.Current.Request.Url.AbsoluteUri;
            tblResImage picfun = new tblResImage();

            String Status = "";
            for (int i = 0; i < files.Count; i++)
            {
                //get the posted files
                System.Web.HttpPostedFile file = files[i];

                string fileName = new FileInfo(file.FileName).Name;

                if (file.ContentLength > 0)
                {
                    Guid id = Guid.NewGuid();

                    string modifiedFileName = id.ToString() + "_" + fileName;

                    byte[] imageb = new byte[file.ContentLength];
                    file.InputStream.Read(imageb, 0, file.ContentLength);

                    picfun.Image = imageb;
                    db.tblResImages.Add(picfun);
                    db.SaveChanges();
                    counter++;
                }

            }

            if (counter > 0)
            {
                return Status;
            }
            return "Upload Failed";
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tblResImageExists(int id)
        {
            return db.tblResImages.Count(e => e.img_Id == id) > 0;
        }
    }
}