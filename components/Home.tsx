"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RotatingCircleWidget = ({ className = "" }) => {
  return (
    <div className={`fixed bottom-6 right-6 w-36 h-36 z-50 cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-110 ${className}`}>
      <div className="w-full h-full relative rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 p-1 shadow-lg shadow-pink-500/30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-black/80 to-gray-900/90 backdrop-blur-md relative overflow-hidden border border-white/10">
          
          {/* Rotating Text */}
          <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '40s' }}>
            <svg viewBox="0 0 180 180" className="w-full h-full">
              <defs>
                <path id="circle-path" d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"/>
              </defs>
              <text className="text-[11px] font-semibold uppercase tracking-wider fill-white drop-shadow-lg opacity-90 hover:opacity-100 hover:text-xs transition-all duration-300">
                <textPath href="#circle-path" startOffset="0%">
                 COMMUNITY • LIFELONG LEARNING • MUSIC • ART • TECH • BUSINESS • LIFESTYLE •
                </textPath>
              </text>
            </svg>
          </div>
          
          {/* Stationary Center Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-10">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-white text-shadow-lg tracking-wide">
              TRISKELION
            </div>
            
            <svg className="w-full h-full filter drop-shadow-lg animate-pulse" style={{ animationDuration: '3s' }} viewBox="0 0 100 100">
              <defs>
                <linearGradient id="triskelionGradWidget" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#00f0ff" />
                </linearGradient>
                <filter id="glowWidget">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <g transform="translate(50,50)" filter="url(#glowWidget)">
                <path d="M 0,0 Q -15,-20 -30,-8 Q -25,8 -12,2 Q -8,-12 0,0" 
                      fill="url(#triskelionGradWidget)" 
                      stroke="#fff" 
                      strokeWidth="0.5"
                      opacity="0.9"
                      transform="rotate(0)"/>
                
                <path d="M 0,0 Q -15,-20 -30,-8 Q -25,8 -12,2 Q -8,-12 0,0" 
                      fill="url(#triskelionGradWidget)" 
                      stroke="#fff" 
                      strokeWidth="0.5"
                      opacity="0.9"
                      transform="rotate(120)"/>
                
                <path d="M 0,0 Q -15,-20 -30,-8 Q -25,8 -12,2 Q -8,-12 0,0" 
                      fill="url(#triskelionGradWidget)" 
                      stroke="#fff" 
                      strokeWidth="0.5"
                      opacity="0.9"
                      transform="rotate(240)"/>
                
                <circle cx="0" cy="0" r="4" fill="url(#triskelionGradWidget)" stroke="#fff" strokeWidth="0.5" opacity="0.95"/>
              </g>
            </svg>
            
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-white text-shadow-lg tracking-wide">
              GIVERS GAIN®
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute w-0.5 h-0.5 bg-pink-400/80 rounded-full animate-bounce" style={{ left: '30%', animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="absolute w-0.5 h-0.5 bg-cyan-400/80 rounded-full animate-bounce" style={{ left: '70%', animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute w-0.5 h-0.5 bg-purple-400/80 rounded-full animate-bounce" style={{ left: '50%', animationDelay: '2s', animationDuration: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

const TriskelionAgency = () => {
  const [currentRegion, setCurrentRegion] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const regions = [
    {
      country: "United States",
      flag: "🇺🇸",
      audience: "330M+",
      reach: "Americans",
      platforms: "TikTok, Instagram, YouTube Shorts",
      description: "Creating viral content that dominates FYP pages across all platforms",
      accent: "from-pink-500 to-cyan-400",
      stats: { projects: "3+", followers: "5K+", months: "8" },
      speciality: "Short-form video specialists"
    },
    {
      country: "Canada",
      flag: "🇨🇦", 
      audience: "38M+",
      reach: "Canadians",
      platforms: "TikTok, Instagram, YouTube Shorts",
      description: "Trend-jacking and meme culture experts for the Canadian market",
      accent: "from-purple-500 to-pink-500",
      stats: { projects: "4+", followers: "3K+", months: "4" },
      speciality: "Meme marketing"
    },
    {
      country: "United Kingdom", 
      flag: "🇬🇧",
      audience: "67M+",
      reach: "Britons",
      platforms: "TikTok, Instagram, YouTube Shorts",
      description: "UK trend forecasting and viral content creation",
      accent: "from-cyan-400 to-purple-500",
      stats: { projects: "3+", followers: "4K+", months: "5" },
      speciality: "Trend forecasting"
    },
    {
      country: "Nigeria",
      flag: "🇳🇬", 
      audience: "200M+",
      reach: "Nigerians",
      platforms: "TikTok, Instagram, YouTube Shorts",
      description: "Afrobeats and pop culture viral content specialists",
      accent: "from-yellow-400 to-pink-500",
      stats: { projects: "15+", followers: "9K+", months: "6" },
      speciality: "Cultural trends"
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRegion((prev) => (prev + 1) % regions.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const TriskelionLogo = ({ size = 120, className = "", glow = true }) => (
    <motion.div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      <svg width={size} height={size} viewBox="0 0 120 120" className={`drop-shadow-lg ${glow ? 'filter drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]' : ''}`}>
        <defs>
          <linearGradient id={`triskelion-gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#00f0ff" />
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
    </motion.div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-black">
        {/* Hybrid background - Dark trendy with light trustworthy accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-700">
          <div className="absolute inset-0 bg-[radial-gradient(at_center,_#ec4899/15%,_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_#00f0ff08_0%,_#ff00f815_50%,_#00ff8508_100%)]"></div>
          {/* Light trustworthy accent */}
          <div className="absolute inset-0 bg-[radial-gradient(at_top_right,_#fbcfe8/5%,_transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,_#dbeafe/3%,_transparent_50%)]"></div>
        </div>

        {/* Floating Triskelion Logos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[1,2,3,4,5,6,7].map(i => (
            <motion.div
              key={i}
              className={`absolute ${[
                'top-16 left-10', 'top-32 right-20', 'bottom-40 left-16', 
                'bottom-20 right-32', 'top-1/2 left-8', 'top-3/4 right-12', 'top-1/4 right-6'
              ][i-1]} opacity-5 hover:opacity-10 transition-opacity duration-500`}
              animate={{ 
                rotate: 360,
                y: [0, -20, 0],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{ 
                rotate: { duration: 45 + i * 5, repeat: Infinity, ease: "linear" },
                y: { duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <svg width={60 + i * 8} height={60 + i * 8} viewBox="0 0 120 120" className="drop-shadow-lg">
                <defs>
                  <linearGradient id={`floating-triskelion-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#00f0ff" />
                  </linearGradient>
                </defs>
                
                <circle cx="60" cy="60" r="4" fill={`url(#floating-triskelion-${i})`} opacity="0.6" />
                
                <g transform="translate(60,60)">
                  {[0, 120, 240].map((rotation, index) => (
                    <g key={index} transform={`rotate(${rotation})`}>
                      <path
                        d="M 0,0 Q -10,-16 -16,-26 Q -22,-30 -26,-22 Q -22,-16 -16,-12 Q -10,-10 -6,-16 Q -4,-22 -10,-26"
                        fill={`url(#floating-triskelion-${i})`}
                        opacity="0.4"
                      />
                      <circle cx="-16" cy="-22" r="4" fill={`url(#floating-triskelion-${i})`} opacity="0.5" />
                    </g>
                  ))}
                </g>
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { 
              platform: "TikTok", 
              pos: "top-32 left-16",
              icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
                </svg>
              )
            },
            { 
              platform: "Instagram", 
              pos: "top-48 right-20",
              icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              )
            },
            { 
              platform: "Facebook", 
              pos: "bottom-40 left-20",
              icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )
            },
            { 
              platform: "Twitter", 
              pos: "bottom-56 right-24",
              icon: (
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              )
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute ${item.pos} opacity-40 hover:opacity-80 transition-all duration-300 z-5 text-white/80`}
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2
              }}
              whileHover={{ 
                scale: 1.3,
                rotate: 15,
                transition: { duration: 0.2 }
              }}
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 hover:border-pink-500/50 transition-all duration-300 filter drop-shadow-lg">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Glowing elements */}
        {[1,2,3,4].map(i => (
          <div key={i} className={`absolute ${['top-20 left-10','bottom-32 right-16','top-1/3 left-1/4','top-3/4 right-1/4'][i-1]} w-32 h-32 rounded-full bg-pink-500/8 blur-[80px] animate-pulse`} style={{ animationDelay: `${i * 2}s`, animationDuration: '6s' }}></div>
        ))}

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="text-center"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex justify-center mb-8">
                <TriskelionLogo size={120} glow />
              </div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight"
              >
                TRISKELION
              </motion.h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4"></div>
              <motion.p className="text-lg md:text-xl text-pink-200 font-medium">
                Viral Content Specialists
              </motion.p>
              <motion.p className="text-sm text-gray-400 mt-2 max-w-md mx-auto">
                We make brands trend on TikTok, Instagram, and beyond
              </motion.p>
            </motion.div>

            {/* Region selector */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8 bg-black/60 backdrop-blur-lg rounded-2xl p-3 max-w-fit mx-auto border border-white/10 shadow-lg">
                {regions.map((region, index) => (
                  <motion.button
                    key={index}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      currentRegion === index 
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentRegion(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {region.flag} {region.country}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Dynamic content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRegion}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
              >
                <div className="mb-10">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                  >
                    Reaching <span className={`bg-gradient-to-r ${regions[currentRegion].accent} bg-clip-text text-transparent font-black`}>
                      {regions[currentRegion].audience}
                    </span> {regions[currentRegion].reach}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {regions[currentRegion].description}
                  </motion.p>
                  
                  <motion.div 
                    className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 mb-6 hover:border-pink-500/50 transition-colors"
                  >
                    <p className="text-xs text-pink-400 mb-2 uppercase tracking-wider font-medium">Platform Focus</p>
                    <p className="text-lg text-white font-medium mb-2">{regions[currentRegion].platforms}</p>
                    <p className="text-sm text-gray-400">{regions[currentRegion].speciality}</p>
                  </motion.div>
                </div>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {[
                    { number: regions[currentRegion].stats.projects, label: "Viral Projects", icon: "🔥" },
                    { number: regions[currentRegion].stats.followers, label: "Followers Grown", icon: "📈" },
                    { number: regions[currentRegion].stats.months, label: "Trending Months", icon: "⏱️" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-black/60 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-pink-500/50 transition-all duration-300"
                      whileHover={{ y: -2, scale: 1.02 }}
                    >
                      <div className="text-xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 font-medium text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <motion.button
                  className=""
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                </motion.button>
                
                <motion.button
                  className=""
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                </motion.button>
              </div>
              
              <motion.p 
                className="text-gray-400 text-xs max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                We don't just post content - we create cultural moments. Let's make your brand the next big trend.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400"></div>
      </div>
      
      {/* Rotating Circle Widget */}
      <RotatingCircleWidget />
    </>
  );
};

export default TriskelionAgency;