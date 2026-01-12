"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaTruck, // IoCarSportOutline ki jagah FaTruck use kiya hai
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 p-2 rounded-lg text-white text-2xl">
                <FaTruck />
              </div>
              <span className="text-2xl font-bold text-slate-900">
                Truck<span className="text-yellow-400">Ease</span>
              </span>
            </div>
            <p className="leading-relaxed text-sm text-slate-600">
              Your trusted partner for reliable logistics and freight transport.
              Safe, secure, and on-time delivery—nationwide.
            </p>
            <div className="flex space-x-4 text-slate-700">
              <FaFacebook className="text-xl hover:text-yellow-400 cursor-pointer transition-colors" />
              <FaInstagram className="text-xl hover:text-yellow-400 cursor-pointer transition-colors" />
              <FaTwitter className="text-xl hover:text-yellow-400 cursor-pointer transition-colors" />
              <FaLinkedin className="text-xl hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/fleet"
                  className="hover:text-yellow-400 transition-colors"
                >
                  View Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About TruckEase
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-yellow-400 transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Get in Touch</h4>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                <span>+92 (300) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                <span>support@truckease.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Subscribe</h4>
            <p className="text-slate-600 text-sm mb-4">
              Get the latest logistics updates and shipping rates to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-white w-full px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} TruckEase Logistics. All rights
            reserved.
          </p>
          <p className="mt-2 md:mt-0 italic">Reliable, Safe & On-Time</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
