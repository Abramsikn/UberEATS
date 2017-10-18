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
    public class tblProImagesController : ApiController
    {
        private dbUberEatsEntities1 db = new dbUberEatsEntities1();

        // GET: api/tblProImages
        public IQueryable<tblProImage> GettblProImages()
        {
            return db.tblProImages;
        }

        // GET: api/tblProImages/5
        [ResponseType(typeof(tblProImage))]
        public IHttpActionResult GettblProImage(int id)
        {
            tblProImage tblProImage = db.tblProImages.Find(id);
            if (tblProImage == null)
            {
                return NotFound();
            }

            return Ok(tblProImage);
        }

        /* This is used for file accessing and post a file to a database using a server */
        public String POST()
        {
            int counter = 0;

            // collecting files
            System.Web.HttpFileCollection files = System.Web.HttpContext.Current.Request.Files;
            string url = HttpContext.Current.Request.Url.AbsoluteUri;
            tblProImage funpic = new tblProImage();

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

                    funpic.Image = imageb;
                    db.tblProImages.Add(funpic);
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

        private bool tblProImageExists(int id)
        {
            return db.tblProImages.Count(e => e.img_Id == id) > 0;
        }
    }
}