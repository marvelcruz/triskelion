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

// Enhanced Bold Triskelion Logo Component
const TriskelionLogo = ({ size = 24, className = "", glow = false }) => (
  <div 
    className={`relative ${className}`}
    style={{ width: size, height: size }}
  >
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      className={`transition-all duration-300 ${glow ? 'filter drop-shadow-[0_0_6px_rgba(99,102,241,0.4)] drop-shadow-[0_0_12px_rgba(139,92,246,0.2)]' : ''}`}
      style={{
        animation: 'spin 25s linear infinite'
      }}
    >
      <defs>
        <linearGradient id={`triskelion-gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#db2777" />
        </linearGradient>
        <filter id={`glow-${size}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <circle cx="60" cy="60" r="4" fill={`url(#triskelion-gradient-${size})`} filter={`url(#glow-${size})`} />
      
      <g transform="translate(60,60)">
        {[0, 120, 240].map((rotation, index) => (
          <g key={index} transform={`rotate(${rotation})`}>
            <path
              d="M 0,0 Q -12,-20 -20,-32 Q -28,-36 -32,-28 Q -28,-20 -20,-16 Q -12,-12 -8,-20 Q -6,-28 -12,-32"
              fill={`url(#triskelion-gradient-${size})`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.5"
              filter={`url(#glow-${size})`}
            />
            <circle cx="-20" cy="-28" r="4" fill={`url(#triskelion-gradient-${size})`} filter={`url(#glow-${size})`} />
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
    <header className="header border_b bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl shadow-2xl border-b-2 border-purple-500/20">
      <nav className="nav-bar py-4 px-6">
        <Link href="/">
          <div className="flex items-center gap-3 hover:scale-110 transition-all duration-300 group">
            {/* Enhanced Bold Triskelion Logo */}
            <TriskelionLogo size={24} glow className="group-hover:scale-110 transition-transform duration-300" />
            
            {/* Bold TRISKELION Text with Enhanced Styling */}
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wider drop-shadow-lg group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
              TRISKELION
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex-center gap-x-1">
          <ul className="flex-center gap-2">
            {navigationLinks.map(({ title, href }, index) => (
              <li key={index}>
                <Link href={href} className="link focus:link-active hover:scale-110 transition-all duration-300 text-base font-semibold transform relative group px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-500/10 hover:via-blue-500/10 hover:to-pink-500/10 border border-transparent hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20">
                  <span className="relative z-10 text-slate-200 group-hover:text-white transition-colors duration-300">
                    {title}
                  </span>
                  <span className="absolute bottom-1 left-4 w-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-[calc(100%-2rem)] transition-all duration-300 rounded-full"></span>
                  
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-blue-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:via-blue-600/5 group-hover:to-pink-600/5 rounded-lg transition-all duration-300 blur-sm"></div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button className="hidden max-lg:flex-center p-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 border border-purple-400/30" onClick={toggleShowNav}>
          {showNav ? (
            <IoMdClose className="text-white" size={20} />
          ) : (
            <CiMenuFries className="text-white" size={20} />
          )}
        </Button>
      </nav>

      {/* Pass the onClose function to MobileNav */}
      <MobileNav links={navigationLinks} show={showNav} onClose={closeMobileNav} />
    </header>
  );
};

export default Navbar;