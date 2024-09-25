import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import ProfileDropdown from "../core/Auth/ProfileDropDown";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-white shadow-md pb-2">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex">
          {/* Logo */}
          <div className="flex gap-4 items-center">
          <div>
          <img src="https://res.cloudinary.com/ddlepk8lb/image/upload/v1727195545/logo_yb3a27.png" alt="logo" className=" h-14 w-22" />
          </div>
          <div className="flex-shrink-0">
            <Link to="/" className=" text-black text-xl font-semibold">
              UrbanZephyr
            </Link>
          </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center hidden sm:ml-6 sm:flex sm:space-x-8 font-bold">
            <Link to="/aboutus" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link to="/research" className="text-gray-600 hover:text-gray-900">
              Research
            </Link>
            <Link to="/impact" className="text-gray-600 hover:text-gray-900">
              Impact
            </Link>
            <Link to="/insights" className="text-gray-600 hover:text-gray-900">
              Insights
            </Link>
          </div>
        </div>

        {/* Login/Signup */}
        {
  location.pathname.startsWith("/dashboard") ? (
    <ProfileDropdown />
  ) : (
    <div className="flex items-center space-x-4">
      <Link
        to="/login"
        className="text-gray-800 hover:text-gray-900 bg-yellow-300 py-1 px-2 font-bold rounded-lg"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-slate-800 text-white px-2 py-1 rounded-lg hover:bg-blue-600 font-bold"
      >
        Sign Up
      </Link>
    </div>
  )
}

      </div>
    </div>
  </nav>
  )
}

export default Navbar