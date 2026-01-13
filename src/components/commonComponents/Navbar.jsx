"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaTruck } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white fixed border-b border-gray-200 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-16">

          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-lg text-white text-2xl">
              <FaTruck />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Truck<span className="text-yellow-400">Ease</span>
            </span>
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center w-full">

            {/* Left Spacer */}
            <div className="flex-1"></div>

            {/* Center Nav Links */}
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-yellow-400 font-semibold transition-colors group relative pb-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Right Button */}
            <div className="flex-1 flex justify-end">
              <Link href="/login">
                <button className="bg-yellow-400 text-white px-5 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-md active:scale-95">
                  Sign In
                </button>
              </Link>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 text-3xl"
            >
              {isOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-lg">
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
              <Link href="/login">
                <button className="w-full bg-yellow-400 text-white py-3 rounded-lg font-bold hover:bg-yellow-300 transition-all">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
