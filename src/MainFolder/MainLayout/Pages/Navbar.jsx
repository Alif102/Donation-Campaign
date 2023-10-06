import { NavLink } from "react-router-dom"
import './Pages.css'


const Navbar = () => {
  return (
    <div>
         <div>
        <nav id="sidebar" className="flex items-center justify-between p-6">

            <div>
                <img src='/Resources/Logo.png' alt="Logo" />
            </div>
            <ul className="flex gap-7">
                <li>
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
                 Home </NavLink>
                </li>

                <li>
                <NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
                 Donation </NavLink>
                </li>

                <li>
                <NavLink to="/statistic" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
                Statistic </NavLink>
                </li>
            </ul>
        </nav>

    </div>
    </div>
  )
}

export default Navbar