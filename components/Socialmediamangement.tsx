import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Instagram, Facebook, Linkedin, Youtube, TrendingUp, Users, Zap } from 'lucide-react';

// Animated Triskelion Logo Component
const TriskelionLogo = ({ size = 60, className = "" }) => (
  <motion.div 
    className={`relative ${className}`}
    style={{ width: size, height: size }}
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
  >
    <svg width={size} height={size} viewBox="0 0 120 120" className="drop-shadow-lg">
      <defs>
        <linearGradient id="triskelion-gradient-header" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      <circle cx="60" cy="60" r="8" fill="url(#triskelion-gradient-header)" />
      
      <g transform="translate(60,60)">
        {[0, 120, 240].map((rotation, index) => (
          <g key={index} transform={`rotate(${rotation})`}>
            <path
              d="M 0,0 Q -15,-25 -25,-40 Q -35,-45 -40,-32 Q -35,-25 -25,-20 Q -15,-15 -12,-25 Q -8,-32 -15,-37"
              fill="url(#triskelion-gradient-header)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.6"
            />
            <circle cx="-25" cy="-32" r="8" fill="url(#triskelion-gradient-header)" />
          </g>
        ))}
      </g>
    </svg>
  </motion.div>
);

const SocialMediaHeader = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    { icon: Camera, text: "Photo Production" },
    { icon: Video, text: "Video Content" },
    { icon: TrendingUp, text: "Social Media Management" },
    { icon: Users, text: "Community Building" }
  ];

  const socialPlatforms = [
    { Icon: Instagram, name: "Instagram", color: "text-pink-400" },
    { Icon: Facebook, name: "Facebook", color: "text-blue-400" },
    { Icon: Linkedin, name: "LinkedIn", color: "text-blue-300" },
    { Icon: Youtube, name: "YouTube", color: "text-red-400" }
  ];

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 opacity-5">
          <TriskelionLogo size={200} />
        </div>
        <div className="absolute bottom-1/3 right-1/5 opacity-5">
          <TriskelionLogo size={150} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div 
              className="flex items-center gap-4 mb-6"
              variants={fadeInUp}
            >
              <TriskelionLogo size={60} />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  TRISKELION
                </h3>
                <p className="text-sm text-gray-400">Creative Marketing Agency</p>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              variants={fadeInUp}
            >
              Photo, Video &
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Social Media
              </span>
              <span className="text-4xl lg:text-5xl text-gray-300">
                That Drives Results
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
              variants={fadeInUp}
            >
              Before we set up the lights and cameras, we get to know your team. 
              Each month, we work with you to plan, create, edit, and deliver content 
              that drives your business forward across all platforms.
            </motion.p>

            {/* Services Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4 py-8"
              variants={fadeInUp}
            >
              {services.map(({ icon: Icon, text }, index) => (
                <motion.div 
                  key={text}
                  className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="text-white font-medium">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Platforms */}
            <motion.div 
              className="flex items-center gap-6 py-4"
              variants={fadeInUp}
            >
              <span className="text-gray-400 text-sm font-medium">WE MANAGE:</span>
              <div className="flex gap-4">
                {socialPlatforms.map(({ Icon, name, color }, index) => (
                  <motion.div
                    key={name}
                    className="p-3 bg-gray-800/40 rounded-full border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} className={color} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              variants={fadeInUp}
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap size={20} />
                Get Started Today
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Work
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-700"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  5M+
                </div>
                <div className="text-gray-400 text-sm">Total Reach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              {/* Main Card */}
              <motion.div 
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Content Creation</h3>
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl">
                      <Camera className="text-blue-400" size={24} />
                      <div>
                        <div className="text-white font-medium">Photo Session</div>
                        <div className="text-gray-400 text-sm">Professional on-site photography</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl">
                      <Video className="text-purple-400" size={24} />
                      <div>
                        <div className="text-white font-medium">Video Production</div>
                        <div className="text-gray-400 text-sm">Short-form & long-form content</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-700/30 rounded-xl">
                      <TrendingUp className="text-pink-400" size={24} />
                      <div>
                        <div className="text-white font-medium">Analytics & Growth</div>
                        <div className="text-gray-400 text-sm">Data-driven optimization</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Instagram className="text-white" size={32} />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Youtube className="text-white" size={28} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </header>
  );
};

export default SocialMediaHeader;