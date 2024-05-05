import {
    createBrowserRouter

} from "react-router-dom";
import Root from "../page/Root";
import Errorpage from "../page/Errorpage";
import Home from "../page/Home";
import Service from "../page/Service";
import Login from "../login/Login";
import UpdateFile from "../UpdateFile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/service",
                element: <Service></Service>,

            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/update",
                element: <UpdateFile></UpdateFile>
            },
        ],
    },
]);

export default router;