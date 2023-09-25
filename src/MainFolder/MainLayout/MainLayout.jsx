import { Outlet } from "react-router-dom"
import Navbar from "./Pages/Navbar"

const MainLayout = () => {
  return (
    <div className=" mx-auto">
        <div>
        <div className="relative">
        <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default MainLayout