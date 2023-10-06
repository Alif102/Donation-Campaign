import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout"
import Home from "../MainLayout/Pages/Home"
import DonationPage from "../MainLayout/Pages/DonationPage"
import Statistic from "../MainLayout/Pages/Statistic"
import Details from "../MainLayout/Pages/Details"


const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout> ,
        

        children: [
            {
                path: '/',
                element: <Home></Home>,
            
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
                loader : ()=> fetch('/DonationData.json')
            },
            

        ]
    }
])

export default MyRoute