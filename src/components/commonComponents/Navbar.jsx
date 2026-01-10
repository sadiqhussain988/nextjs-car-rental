"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoCarSportOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Service Areas", href: "/services-area" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white fixed border-b border-gray-200 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-lg text-white text-2xl">
              <IoCarSportOutline />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Drive<span className="text-yellow-400">Ease</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-700 hover:text-yellow-400 font-semibold transition-colors group relative pb-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-500 ease-out group-hover:w-full"></span>
              </Link>
            ))}
            <button className="bg-yellow-400 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-yellow-300 transition-shadow shadow-md active:scale-95">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 text-3xl focus:outline-none"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-lg transition-all">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-semibold text-slate-700 hover:bg-gray-50 hover:text-yellow-400 border-b border-gray-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <button className="w-full bg-yellow-400 text-white py-3 rounded-lg font-bold hover:bg-yellow-300 transition-shadow">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
