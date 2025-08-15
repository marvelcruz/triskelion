"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TriskelionAgency = () => {
  const [currentRegion, setCurrentRegion] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // More realistic data for a startup
  const regions = [
    {
      country: "United States",
      flag: "🇺🇸",
      audience: "330M+",
      reach: "Americans",
      platforms: "Instagram, TikTok, Facebook, LinkedIn & YouTube",
      description: "Connecting with American audiences through data-driven strategies and creative storytelling that cuts through the noise of a competitive market.",
      accent: "from-blue-600 to-red-500",
      stats: { projects: "12+", followers: "75K+", months: "8" },
      speciality: "B2B & E-commerce focus"
    },
    {
      country: "Canada",
      flag: "🇨🇦", 
      audience: "38M+",
      reach: "Canadians",
      platforms: "Instagram, TikTok, Facebook, LinkedIn & YouTube",
      description: "From Vancouver to Toronto, we help Canadian brands build genuine connections with their communities through bilingual content and cultural insights.",
      accent: "from-red-500 to-red-600",
      stats: { projects: "8+", followers: "25K+", months: "4" },
      speciality: "Bilingual content & Community building"
    },
    {
      country: "United Kingdom", 
      flag: "🇬🇧",
      audience: "67M+",
      reach: "Britons",
      platforms: "Instagram, TikTok, Facebook, LinkedIn & YouTube",
      description: "Understanding the British market from London startups to Manchester SMEs. We create content that resonates across England, Scotland, Wales & Northern Ireland.",
      accent: "from-blue-800 to-blue-600",
      stats: { projects: "10+", followers: "35K+", months: "5" },
      speciality: "Local market expertise"
    },
    {
      country: "Nigeria",
      flag: "🇳🇬", 
      audience: "200M+",
      reach: "Nigerians",
      platforms: "Instagram, TikTok, Facebook, LinkedIn & YouTube",
      description: "Helping Nigerian brands tell their stories authentically. We understand the local culture, trends, and what makes content go viral in Lagos, Abuja, and beyond.",
      accent: "from-green-500 to-green-600",
      stats: { projects: "15+", followers: "50K+", months: "6" },
      speciality: "Afrobeats culture & Local trends"
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRegion((prev) => (prev + 1) % regions.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Simplified logo without excessive animation
  const TriskelionLogo = ({ size = 120, className = "", glow = false }) => (
    <motion.div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      <svg width={size} height={size} viewBox="0 0 120 120" className={`drop-shadow-lg ${glow ? 'filter drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]' : ''}`}>
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Cleaner gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 via-transparent to-pink-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Subtle background logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 opacity-20">
          <TriskelionLogo size={40} />
        </div>
        <div className="absolute bottom-20 right-20 opacity-25">
          <TriskelionLogo size={50} glow />
        </div>
        <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-15">
          <TriskelionLogo size={35} />
        </div>
      </div>

      {/* Social media icons - more subtle */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: "📸", color: "from-pink-500 to-purple-600", pos: "top-24 left-20", size: "w-16 h-16" },
          { icon: "💼", color: "from-blue-600 to-blue-700", pos: "top-32 right-24", size: "w-18 h-18" },
          { icon: "🎵", color: "from-gray-800 to-black", pos: "bottom-28 left-16", size: "w-14 h-14" },
          { icon: "▶️", color: "from-red-600 to-red-700", pos: "bottom-32 right-28", size: "w-16 h-16" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.pos} ${item.size} bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg opacity-60`}
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, 0],
            }}
            transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white text-lg">{item.icon}</span>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex justify-center mb-6">
              <TriskelionLogo size={80} glow />
            </div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight"
            >
              TRISKELION
            </motion.h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-4"></div>
            <motion.p className="text-lg md:text-xl text-blue-200 font-medium">
              Social Media Marketing Agency
            </motion.p>
            <motion.p className="text-sm text-slate-400 mt-2 max-w-md mx-auto">
              New platforms - New behaviours - New audiences - New trends - New technologies - New regulations.
          

            </motion.p>
          </motion.div>

          {/* Region selector */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-8 bg-black/40 backdrop-blur-lg rounded-2xl p-3 max-w-fit mx-auto border border-white/10 shadow-xl">
              {regions.map((region, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    currentRegion === index 
                      ? 'bg-white text-slate-900 shadow-lg' 
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
                  className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {regions[currentRegion].description}
                </motion.p>
                
                <motion.div 
                  className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6"
                  whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <p className="text-xs text-blue-300 mb-2 uppercase tracking-wider font-medium">Our Focus</p>
                  <p className="text-lg text-white font-medium mb-2">{regions[currentRegion].platforms}</p>
                  <p className="text-sm text-slate-400">{regions[currentRegion].speciality}</p>
                </motion.div>
              </div>

              {/* Honest startup stats */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { number: regions[currentRegion].stats.projects, label: "Projects Completed", icon: "" },
                  { number: regions[currentRegion].stats.followers, label: "Followers Grown", icon: "" },
                  { number: regions[currentRegion].stats.months, label: "Months Experience", icon: "" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-black/40 backdrop-blur-lg rounded-xl p-5 border border-white/15 hover:border-white/30 transition-all duration-300"
                    whileHover={{ y: -2, scale: 1.02 }}
                  >
                    <div className="text-xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 font-medium text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Honest CTA */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl text-base font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                We LOVE to work with Your Brand
              </motion.button>
              
              <motion.button
                className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-xl text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
              </motion.button>
            </div>
            
            <motion.p 
              className="text-slate-400 text-xs max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Starting small, growing smart. We're building something genuine with brands who believe in authentic growth over vanity metrics. A global collective, offering round-the-clock delivery at the speed of digital.

            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60"></div>
    </div>
  );
};

export default TriskelionAgency;