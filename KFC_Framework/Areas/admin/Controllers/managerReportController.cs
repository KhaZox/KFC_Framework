using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KFC_Framework.Areas.admin.Controllers
{
    public class managerReportController : Controller
    {
        // GET: admin/managerReport
        public ActionResult salesReport()
        {
            return View();
        }
        public ActionResult ordersReport()
        {
            return View();
        }
    }
}