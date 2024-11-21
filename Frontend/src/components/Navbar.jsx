import React, { useState } from 'react';
import { cn } from "../utils/cn";
import { Menu } from "./ui/navbar-menu";
import logo from "../assets/vitLogo.png";
import { Button } from "./ui/moving-border";

export function Navbar() {
  return (
    <Navbar1 className="top-2" />
  );
}

function Navbar1({ className }) {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={cn(`fixed top-10 inset-x-0 max-w-5xl mx-auto z-50 rounded-full`, className)}>
      <Menu setActive={setActive} className="bg-white">
        <a href="#">
          <img src={logo} alt="Logo" className='h-12' />
        </a>
        <div className='hidden lg:flex space-x-6 my-auto'>
          <a href="#" className='text-white'>Home</a>
          <a href="#" className='text-white'>About Us</a>
          <a href="#" className='text-white'>Contact Us</a>
        </div>
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </Menu>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black shadow-lg">
          <div className='flex flex-col space-y-4 px-8 py-6'>
            <a href="#" className='text-white'>Home</a>
            <a href="#" className='text-white'>About Us</a>
            <a href="#" className='text-white'>Contact Us</a>
          </div>
        </div>
      )}
    </div>
  );
}