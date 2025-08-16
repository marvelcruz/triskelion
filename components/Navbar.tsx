"use client";

import Link from "next/link";
import Image from "next/image";
import { links } from "@/constants";
import { useState, MouseEvent } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import MobileNav from "./MobileNav";
import Button from "./ui/UIButton";

// Triskelion Logo Component
const TriskelionLogo = ({ size = 40, className = "", glow = false }) => (
  <div 
    className={`relative ${className}`}
    style={{ width: size, height: size }}
  >
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      className={`drop-shadow-md transition-all duration-300 hover:drop-shadow-lg ${glow ? 'filter drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]' : ''}`}
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
      
      <circle cx="60" cy="60" r="6" fill={`url(#triskelion-gradient-${size})`} />
      
      <g transform="translate(60,60)">
        {[0, 120, 240].map((rotation, index) => (
          <g key={index} transform={`rotate(${rotation})`}>
            <path
              d="M 0,0 Q -12,-20 -20,-32 Q -28,-36 -32,-28 Q -28,-20 -20,-16 Q -12,-12 -8,-20 Q -6,-28 -12,-32"
              fill={`url(#triskelion-gradient-${size})`}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.5"
            />
            <circle cx="-20" cy="-28" r="6" fill={`url(#triskelion-gradient-${size})`} />
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
      <nav className="nav-bar">
        <Link href="/">
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            {/* Triskelion Logo */}
            <TriskelionLogo size={40} glow />
            
            {/* TRISKELION Text */}
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wide">
              TRISKELION
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex-center gap-x-40">
          <ul className="flex-center gap-4">
            {links.map(({ title, href }: Link, index) => (
              <li key={index}>
                <Link href={href} className="link focus:link-active">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button className="hidden max-lg:flex-center" onClick={toggleShowNav}>
          {showNav ? (
            <IoMdClose className="text-color-6" size={30} />
          ) : (
            <CiMenuFries className="text-color-6" size={30} />
          )}
        </Button>
      </nav>

      <MobileNav links={links} show={showNav} />
    </header>
  );
};

export default Navbar;