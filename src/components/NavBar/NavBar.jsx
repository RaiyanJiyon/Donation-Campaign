import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../../assets/Logo.png";

const NavBar = () => {
  const link = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-[#FF444A] underline" : "text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/donation"}
          className={({ isActive }) =>
            isActive ? "text-[#FF444A] underline" : "text-black"
          }
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/statistics"}
          className={({ isActive }) =>
            isActive ? "text-[#FF444A] underline" : "text-black"
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-11/12 mx-auto mt-4 navbar">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link to={"/"} className="hidden lg:flex btn btn-ghost text-xl">
          <img className="w-40" src={logoImage} alt={`${logoImage} image`} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <a className="lg:hidden btn btn-ghost text-xl">
          <img className="w-40" src={logoImage} alt={`${logoImage} image`} />
        </a>
        <ul className="hidden lg:flex menu menu-horizontal px-1 gap-4">
          {link}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
