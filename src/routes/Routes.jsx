import Main from "../layout/Main";

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import NotFound from "../pages/NotFound";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoutes from "./privateRoutes";
import AddToy from "../pages/AddToy/AddToy";
import MyToy from "../pages/MyToy/MyToy";
import Blogs from "../pages/Blogs/Blogs";
import ViewDetails from "../pages/ViewDedails/ViewDetails";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'allToys',
                element: <PrivateRoutes><AllToys></AllToys></PrivateRoutes>
            },
            {
                path: 'addToy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: 'myToy',
                element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
            },
            {
                path:'toy/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader:({params})=>fetch(`https://kid-life-server.vercel.app/toy/${params.id}`)
            },
            {
                path: 'updateToy/:id',
                element: <UpdateToy></UpdateToy>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;