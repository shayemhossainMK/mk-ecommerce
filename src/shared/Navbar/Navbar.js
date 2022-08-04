import React from "react";
import Header from "./Header";
import logo1 from "../../img/logo/logo1.png";
import logo2 from "../../img/logo/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import photo1 from "../../img/header-logo/photo1.png";
import photo2 from "../../img/header-logo/photo2.png";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  return (
    <div className="">
      <Header></Header>
      <div class="navbar bg-primary md:px-28 md:py-5 shadow-lg shadow-secondary">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a class="text-xl text-white">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
          </a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0 gap-8">
            <li className="border-l rounded-full overflow-hidden flex items-center h-11">
              <input
                type="text"
                placeholder="Search stores, products, coupons"
                class="input w-[370px] px-3 focus:outline-0 hover:bg-base-100 focus:bg-base-100 -mt-2 pl-3"
              />
              <div className="-mt-2 -ml-5 pr-2 hover:bg-base-100 bg-white">
                <FontAwesomeIcon
                  className="text-xl text-white bg-secondary rounded-full p-2 hover:scale-90 duration-100"
                  icon={faMagnifyingGlass}
                ></FontAwesomeIcon>
              </div>
            </li>
            <li className="rounded-full">
              <div className="border border-1 rounded-full">
                <img src={photo1} alt="" />
                <p className="text-white">Track Order</p>
              </div>
            </li>
            <li>
              <div className="border border-1 rounded-full">
                <img src={photo2} alt="" />
                <p className="text-white">Favourite</p>
              </div>
            </li>
            <li>
              <div className="border border-1  rounded-full">
                <FontAwesomeIcon
                  className="text-white"
                  icon={faUser}
                ></FontAwesomeIcon>
                <p className="text-white">Login/Register</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-0.5">
        <SubNavbar></SubNavbar>
      </div>
    </div>
  );
};

export default Navbar;
