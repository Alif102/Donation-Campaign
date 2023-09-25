import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import ErrorPage from "../MainLayout/Pages/ErrorPage"
import Home from "../MainLayout/Pages/Home"
import DonationPage from "../MainLayout/Pages/DonationPage"
import Statistic from "../MainLayout/Pages/Statistic"
import Details from "../MainLayout/Pages/Details"


const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout> ,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/public/DonationData.json')
            },
            {
                path: '/donation',
                element: <DonationPage/>
            },
            {
                path: '/statistic',
                element: <Statistic/>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader : ()=> fetch('/public/DonationData.json')
            }

        ]
    }
])

export default MyRoute