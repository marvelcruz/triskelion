"use client";

import Link from "next/link";
import { useState, MouseEvent } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import MobileNav from "./MobileNav";
import Button from "./ui/UIButton";

// Navigation links based on your page structure
const navigationLinks = [
  { title: "About", href: "/about" },
  { title: "How We Help You", href: "/help-you" },
  { title: "Portfolio", href: "/designs" },
  { title: "Lead Generation", href: "/lead-generation" },
  { title: "Our Approach", href: "/failure-and-documentation" },
  { title: "Contact", href: "/contact" }
];

// Bold and Clear Triskelion Logo Component
const TriskelionLogo = ({ size = 24, className = "", glow = false }) => (
  <div 
    className={`relative ${className}`}
    style={{ width: size, height: size }}
  >
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      className={`transition-all duration-300`}
      style={{
        animation: 'spin 25s linear infinite'
      }}
    >
      <defs>
        <linearGradient id={`triskelion-gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      <circle cx="60" cy="60" r="4" fill={`url(#triskelion-gradient-${size})`} />
      
      <g transform="translate(60,60)">
        {[0, 120, 240].map((rotation, index) => (
          <g key={index} transform={`rotate(${rotation})`}>
            <path
              d="M 0,0 Q -12,-20 -20,-32 Q -28,-36 -32,-28 Q -28,-20 -20,-16 Q -12,-12 -8,-20 Q -6,-28 -12,-32"
              fill={`url(#triskelion-gradient-${size})`}
              stroke="rgba(59,130,246,0.3)"
              strokeWidth="0.5"
            />
            <circle cx="-20" cy="-28" r="4" fill={`url(#triskelion-gradient-${size})`} />
          </g>
        ))}
      </g>
    </svg>
    
    <style jsx>{`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = (event: MouseEvent) => {
    setShowNav((prev) => !prev);
  };

  // Add this function to close the mobile nav
  const closeMobileNav = () => {
    setShowNav(false);
  };

  return (
    <header className="header border_b bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200">
      <nav className="nav-bar py-4">
        <Link href="/">
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            {/* Larger, Clear Triskelion Logo */}
            <TriskelionLogo size={28} glow />
            
            {/* Bold and Clear TRISKELION Text */}
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wide">
              TRISKELION
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex-center gap-x-2">
          <ul className="flex-center gap-1">
            {navigationLinks.map(({ title, href }, index) => (
              <li key={index}>
                <Link href={href} className="link focus:link-active hover:scale-105 transition-all duration-300 text-lg font-bold transform relative group px-4 py-2 text-gray-800 hover:text-purple-600">
                  {title}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button className="hidden max-lg:flex-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300" onClick={toggleShowNav}>
          {showNav ? (
            <IoMdClose className="text-gray-800" size={24} />
          ) : (
            <CiMenuFries className="text-gray-800" size={24} />
          )}
        </Button>
      </nav>

      {/* Pass the onClose function to MobileNav */}
      <MobileNav links={navigationLinks} show={showNav} onClose={closeMobileNav} />
    </header>
  );
};

export default Navbar;