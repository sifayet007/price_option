import React, { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/login", name: "Login" },
  ];

  return (
    <nav>
      <span
        onClick={() => setOpen(!open)}
        className="text-2xl md:hidden cursor-pointer"
      >
        {open ? <IoCloseSharp /> : <RiMenu2Fill />}
      </span>

      <ul
        className={`md:flex  md:bg-white bg-gray-300 w-fit absolute duration-300 font-bold rounded-2xl p-3  md:static ${
          open ? "top-12" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
