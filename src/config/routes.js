import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";
/* Importamos los pages */
import AdminHome from "../pages/Admin";
import HomeAdmin from "../pages/Admin/Admin"
import AdminUsers from "../pages/Admin/Users"
import AdminSignIn from "../pages/Admin/SignIn";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound/NotFound";
import Contact from "../pages/Contact";

const routesAdmin = [
  {
    path: "/admin/*",
    layout: LayoutAdmin,
    component: AdminHome,
  },
  {
    path: "/admin/login/*",
    layout: LayoutAdmin,
    component: AdminSignIn,
  },
  {
    path: "/admin/home/*",
    layout: LayoutAdmin,
    component: Contact,
  },
  {
    path: "/admin/users",
    layout: LayoutAdmin,
    component: AdminUsers,
  },
];

/* Ruta home, notfound */
const routesClient = [
  {
    path: "/",
    layout: LayoutBasic,
    component: Home,
  },
];

const routeNotFound = [
  {
    path: "*",
    layout: LayoutBasic,
    component: NotFound,
  },
];

const routes = [...routesAdmin, ...routesClient, ...routeNotFound];
export default routes;
