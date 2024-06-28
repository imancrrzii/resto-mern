import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Register from "../components/Register";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import CartPage from "../pages/shop/CartPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart-page",
        element: <CartPage/>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile/>,
      }
    ],
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "dashboard",
    element: <PrivateRouter><DashboardLayout/></PrivateRouter>, 
    children: [
      {
        path: '',
        element: <Dashboard/>
      },
      {
        path: 'users',
        element: <Users/>
      }
    ]
  }
]);

export default router;
