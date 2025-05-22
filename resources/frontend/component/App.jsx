
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
//import ErrorPage from "./errorElement/ErrorPage";
//Do not forget to import the pages here

import "../../frontend/layout/fonts/fonts.css";
import "../../frontend/layout/button-colors.css"
import "../../frontend/layout/buttons/btn-styles-group-1.css"
import "../../frontend/layout/buttons/btn-styles-group-2.css"
import "../../frontend/layout/buttons/btn-styles-group-3.css"
import "../../frontend/layout/buttons/btn-styles-group-4.css"
import "../../frontend/layout/fonts/btn-font-group-1.css"
import "../../frontend/layout/fonts/btn-font-group-2.css"
import "../../frontend/layout/fonts/btn-font-group-3.css"
import "../../frontend/layout/fonts/btn-font-group-4.css"
import "../../frontend/layout/fonts/cards-font.css"
import "../../frontend/layout/buttons/button-styles.css"
import "../../frontend/layout/styles.css";
//import "../../frontend/layout/style.css";
import Buttons from "../component/Buttons";
import Cards from "../component/Cards";
import Home from "../component/Home";
import Layout from "../component/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        //errorElement: <ErrorPage />,
        children: [ 
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/buttons",
                element: <Buttons />,
            },
            {
                path: "/cards",
                element: <Cards />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
