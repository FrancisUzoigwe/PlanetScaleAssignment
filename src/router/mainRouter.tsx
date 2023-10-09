import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import LandingPage from "../pages/LandingPage"
import PricingScreen from "../pages/PricingScreen"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <LandingPage/>
            },
            {
                path: "/pricing",
                element: <PricingScreen/>
            }
        ]
    }
])