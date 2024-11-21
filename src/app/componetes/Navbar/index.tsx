"use client";
import  { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
  
const Navbar = () => {
        const [showDropdown, setShowDropdown] = useState(false);
        return (
                <div className="w-full bg-gray-100">
      {/* Top Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 flex items-center justify-between py-2">
          {/* Left - Help Center, Helpline, and Language Dropdown */}
          <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500"
              >
                <span>English</span>
                <i className="fas fa-chevron-down"></i>
              </button>
              {showDropdown && (
                <div className="absolute mt-2 bg-white border rounded shadow-md">
                  <Link
                    href=""
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    English
                  </Link>
                </div>
              )}
            </div>
            <span>Help Center</span>
            <span>Helpline: 0964781656</span>
          
            {/* Language Dropdown */}
         
          </div>

          {/* Right - Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-orange-500 text-sm">
              Become a Seller
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 text-sm">
              Order Track
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 text-sm">
              Sign up / Login
            </a>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/img-1.png" alt="logo" width={100} height={200}></Image>
          </div>

          {/* Search Bar */}
          <div className=" flex-1 relative w-1/2 mx-2">
      <input
        type="text"
        placeholder="Search Product"
        className="w-full px-4 py-2 border rounded pr-10 focus:outline-none"
      />
      {/* Search Icon */}
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-orange-500" />
    </div>
 {/* Icons */}
    <div className="flex gap-4">
    <div>
    <FaUser></FaUser>
    </div>
    <div>
    <FaHeart></FaHeart>
    </div>
<div>
<FaShoppingCart></FaShoppingCart>
</div>
    </div>
          {/* Cloud Service Button */}
          <div className="mx-4">
            <Image src="/img-2.png" alt="logo" width={100} height={200}></Image>
          </div>
        </div>
      </div>
    </div>
        );
};

export default Navbar;