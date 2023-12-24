import {createBrowserRouter} from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../layout/Main/Main";
import Login from "../Components/Login/Login";
import Registration from "../Registration/Registration";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/registration',
                element: <Registration/>,
            }
        ]
    }
])

export default router;