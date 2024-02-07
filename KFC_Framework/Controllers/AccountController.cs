using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KFC_Framework.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Index()
        {
            return View();
            //if (User.Identity.IsAuthenticated)
            //{
            //    return View("LoggedInView");
            //}
            //else
            //{
            //    return View("NotLoggedInView");
            //}
        }
        // GET: Account/Create
        public ActionResult register()
        {
            return View();
        }

    }
}