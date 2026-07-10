import React, { useState } from "react";
import logo from "../assets/logoTransparent.png";
import { navItems } from "../constant/constant";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Prime Web"
                className="h-16 w-auto transition-transform duration-300 hover:scale-105 sm:h-18 lg:h-20"
              />
            </div>

            <ul className="hidden gap-12 lg:flex">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="relative inline-block py-1 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:rounded-full after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex">
              <a
                href="#CTA"
                className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
              >
                Start Your Project
              </a>
            </div>

            <button
              onClick={toggleNavbar}
              className="rounded-xl border border-gray-200 bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 lg:hidden"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileDrawerOpen && (
        <div
          onClick={() => setMobileDrawerOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <div
        className={`fixed top-24 left-4 right-4 z-50 rounded-3xl border border-gray-200 bg-white px-6 py-6 shadow-2xl transition-all duration-300 lg:hidden ${
          mobileDrawerOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
        }`}
      >
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={() => setMobileDrawerOpen(false)}
                className="flex items-center rounded-xl px-4 py-4 font-medium text-gray-700 transition-all duration-300 hover:translate-x-2 hover:bg-blue-50 hover:text-blue-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#CTA"
          onClick={() => setMobileDrawerOpen(false)}
          className="mt-6 flex items-center justify-center rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
        >
          Start Your Project
        </a>
      </div>
    </>
  );
};

export default Navbar;