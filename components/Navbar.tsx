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
  { title: "Designs", href: "/designs" },
  { title: "Lead Generation", href: "/lead-generation" },
  { title: "Our Approach", href: "/failure-and-documentation" },
  { title: "Contact", href: "/contact" }
];

// Ultra Compact Triskelion Logo Component
const TriskelionLogo = ({ size = 18, className = "", glow = false }) => (
  <div 
    className={`relative ${className}`}
    style={{ width: size, height: size }}
  >
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      className={`transition-all duration-300 ${glow ? 'filter drop-shadow-[0_0_2px_rgba(99,102,241,0.2)]' : ''}`}
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
      
      <circle cx="60" cy="60" r="3" fill={`url(#triskelion-gradient-${size})`} />
      
      <g transform="translate(60,60)">
        {[0, 120, 240].map((rotation, index) => (
          <g key={index} transform={`rotate(${rotation})`}>
            <path
              d="M 0,0 Q -12,-20 -20,-32 Q -28,-36 -32,-28 Q -28,-20 -20,-16 Q -12,-12 -8,-20 Q -6,-28 -12,-32"
              fill={`url(#triskelion-gradient-${size})`}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.2"
            />
            <circle cx="-20" cy="-28" r="3" fill={`url(#triskelion-gradient-${size})`} />
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

  return (
    <header className="header border_b">
      <nav className="nav-bar py-0">
        <Link href="/">
          <div className="flex items-center gap-1 hover:scale-105 transition-transform duration-300">
            {/* Ultra Small Triskelion Logo */}
            <TriskelionLogo size={18} glow />
            
            {/* Ultra Compact TRISKELION Text */}
            <span className="text-base font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              TRISKELION
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex-center gap-x-2">
          <ul className="flex-center gap-1">
            {navigationLinks.map(({ title, href }, index) => (
              <li key={index}>
                <Link href={href} className="link focus:link-active hover:scale-105 transition-all duration-300 text-sm transform relative group px-1.5 py-0.5">
                  {title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button className="hidden max-lg:flex-center p-1" onClick={toggleShowNav}>
          {showNav ? (
            <IoMdClose className="text-color-6" size={16} />
          ) : (
            <CiMenuFries className="text-color-6" size={16} />
          )}
        </Button>
      </nav>

      <MobileNav links={navigationLinks} show={showNav} />
    </header>
  );
};

export default Navbar;