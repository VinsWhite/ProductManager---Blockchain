import { IoHomeOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function NavbarComp() {
  return (
    <>
      <nav className="bg-gray-700 px-6 select-none">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-50">Product Manager</h1>
          <div className="fixed bottom-0 right-0 bg-gray-900 z-30 p-2 md:relative md:bg-inherit flex space-x-10">
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
        </div>
      </nav>
    </>
  );
}
