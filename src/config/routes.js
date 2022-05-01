import LayoutAdmin from "../layouts/LayoutAdmin"
import LayoutBasic from "../layouts/LayoutBasic"
/*Página del administrador */
import AdminHome from "../pages/Admin"
import AdminSignIn from "../pages/Admin/SignIn"
import NotFound from "../pages/NotFound"
/*Layout del Not Found */
import LayoutNotFound from "../layouts/LayoutPageNotFound"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import ModuleOne from "../pages/Admin/ModuleOne"
import ModuleTwo from "../pages/Admin/ModuleTwo"
import ModuleThree from "../pages/Admin/ModuleThree"
/*Arreglo de rutas disponibles para el administrador */
const routesAdmin = [
    {
        path: "/admin",
        layout: LayoutAdmin,
        component: AdminHome,
    },
    {
        path: "/admin/login",
        layout: LayoutAdmin,
        component: AdminSignIn
    },
    {
        path: "/admin/moduleone",
        layout: LayoutAdmin,
        component: ModuleOne
    },
    {
        path: "/admin/moduletwo",
        layout: LayoutAdmin,
        component: ModuleTwo
    },
    {
        path: "/admin/modulethree",
        layout: LayoutAdmin,
        component: ModuleThree
    }

];

const routesClient = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home
    }
];

const routesNotFound = [
    {
        path: "*",
        layout: LayoutBasic,
        component: NotFound
    }
]

const routes = [...routesAdmin, ...routesClient, ...routesNotFound]
export default routes;