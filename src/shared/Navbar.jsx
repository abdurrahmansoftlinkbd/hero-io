import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import GradientButton from "./GradientButton";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3] bg-transparent"
              : "hover:text-[#632EE3] hover:border-b hover:bg-transparent hover:border-[#632EE3] transition-all duration-100 ease-in-out"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]"
              : "hover:text-[#632EE3] hover:border-b hover:bg-transparent hover:border-[#632EE3] transition-all duration-100 ease-in-out"
          }
        >
          Apps
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] font-semibold border-b-2 border-[#632EE3]"
              : "hover:text-[#632EE3] hover:border-b hover:bg-transparent hover:border-[#632EE3] transition-all duration-100 ease-in-out"
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="border-b border-[#E9E9E9] backdrop-blur-2xl font-inter sticky top-0 z-50">
      <div className="navbar container w-11/12 mx-auto p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <div className="w-10 h-10">
              <img src={logo} alt="logo" className="w-full" />
            </div>
            <span className="text-xl font-bold text-[#632EE3]">HERO.IO</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium gap-2">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <GradientButton
            icon={<FaGithub size={20} />}
            text="Contribute"
          ></GradientButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
