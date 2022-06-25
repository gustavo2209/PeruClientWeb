using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PeruClientWeb.Controllers
{
    public class HomeController : Controller
    {

        private PeruWs.WebServicePeru ws;

        public HomeController()
        {
            ws = new PeruWs.WebServicePeru();
        }

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Departamentos()
        {
            var depa = ws.departamentos(); // anytype

            return Json(depa, JsonRequestBehavior.AllowGet); //json
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}