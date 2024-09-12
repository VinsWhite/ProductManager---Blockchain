import { IoHomeOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function NavbarComp() {
  return (
    <>
      <nav className="bg-gray-700 px-3">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-50">Product Manager</h1>
          <div className="flex space-x-10">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "flex items-center space-x-2 text-yellow-400 text-xl" : "flex items-center space-x-2 text-gray-50 text-xl"
              }
            >
              <IoHomeOutline className="text-yellow-500" />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                isActive ? "flex items-center space-x-2 text-yellow-400 text-xl" : "flex items-center space-x-2 text-gray-50 text-xl"
              }
            >
              <IoCreateOutline className="text-yellow-500" />
              <span>Create a product</span>
            </NavLink>
          </div>
          <div className="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input className="outline-none text-gray-700" type="text" placeholder="Search" />
          </div>
        </div>
      </nav>
    </>
  );
}
