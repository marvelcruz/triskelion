"use client";
import React, { useState, useEffect, ChangeEvent, DragEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Camera, Globe, Palette, Video, Target, Share2, CheckCircle } from 'lucide-react';

// Define types
interface ServiceImages {
  [key: string]: string | null;
}

interface ImageUploadProps {
  onImageUpload: (imageData: string | null) => void;
  currentImage: string | null;
  title: string;
}

interface Service {
  title: string;
  description: string;
  defaultImage: string;
  icon: React.ReactNode;
  packages?: { name: string; desc: string }[];
  features?: string[];
  platforms?: string[];
  includes?: string[];
  services?: string[];
}

const RotatingCircleWidget = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`fixed bottom-4 right-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 z-50 cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-110 ${className}`}>
      <div className="w-full h-full relative rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-1 shadow-lg shadow-blue-500/30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/95 to-blue-50/90 backdrop-blur-md relative overflow-hidden border border-blue-200/20">
          <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '40s' }}>
            <svg viewBox="0 0 180 180" className="w-full h-full">
              <defs>
                <path id="circle-path" d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"/>
              </defs>
              <text className="text-[8px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-wider fill-blue-800 drop-shadow-sm opacity-90 hover:opacity-100 transition-all duration-300">
                <textPath href="#circle-path" startOffset="0%">
                 COMMUNITY • LIFELONG LEARNING • MUSIC • ART • TECH • BUSINESS • LIFESTYLE •
                </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 z-10">
            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 text-[6px] sm:text-[7px] md:text-[8px] font-bold text-blue-800 tracking-wide">
              TRISKELION
            </div>
            <svg className="w-full h-full filter drop-shadow-sm animate-pulse" style={{ animationDuration: '3s' }} viewBox="0 0 100 100">
              <defs>
                <linearGradient id="triskelionGradWidget" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="glowWidget">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g transform="translate(50,50)" filter="url(#glowWidget)">
                <path d="M 0,0 Q -15,-20 -30,-8 Q -25,8 -12,2 Q -8,-12 0,0" 
                      fill="url(#triskelionGradWidget)" 
                      stroke="#1e40af" 
                      strokeWidth="0.5"
                      opacity="0.9"
                      transform="rotate(0)"/>
                <path d="M 0,0 Q -15,-20 -30,-8 Q -25,8 -12,2 Q -8,-12 0,0" 
                      fill="url(#triskelionGradWidget)" 
                      stroke="#1e40af" 
                      strokeWidth="0.5"
                      opacity="0.9"
                      transform="rotate(120)"/>
                <path d="M 0,0 Q -15,-20 -30,-8 Q -25,8 -12,2 Q -8,-12 0,0" 
                      fill="url(#triskelionGradWidget)" 
                      stroke="#1e40af" 
                      strokeWidth="0.5"
                      opacity="0.9"
                      transform="rotate(240)"/>
                <circle cx="0" cy="0" r="4" fill="url(#triskelionGradWidget)" stroke="#1e40af" strokeWidth="0.5" opacity="0.95"/>
              </g>
            </svg>
            <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 text-[6px] sm:text-[7px] md:text-[8px] font-bold text-blue-800 tracking-wide">
              GIVERS GAIN®
            </div>
          </div>
          <div className="absolute w-0.5 h-0.5 bg-blue-400/80 rounded-full animate-bounce" style={{ left: '30%', animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="absolute w-0.5 h-0.5 bg-cyan-400/80 rounded-full animate-bounce" style={{ left: '70%', animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute w-0.5 h-0.5 bg-purple-400/80 rounded-full animate-bounce" style={{ left: '50%', animationDelay: '2s', animationDuration: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

const ImageUpload = ({ onImageUpload, currentImage, title }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === 'string') {
          onImageUpload(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative">
      {currentImage && (
        <button
          onClick={() => onImageUpload(null)}
          className="absolute -top-2 -right-2 z-10 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
        >
          <X size={16} />
        </button>
      )}
      <div
        className={`relative border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
          dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : currentImage 
              ? 'border-green-400 bg-green-50' 
              : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        {currentImage ? (
          <div className="space-y-2">
            <img 
              src={currentImage} 
              alt={title} 
              className="w-full h-32 object-cover rounded-lg mx-auto"
            />
            <p className="text-sm text-green-600 font-medium">Custom image uploaded for {title}</p>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="w-8 h-8 text-gray-400 mx-auto" />
            <p className="text-sm text-gray-600">
              Drag & drop an image for <strong>{title}</strong>, or click to select
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const TriskelionAgency = () => {
  const [currentRegion, setCurrentRegion] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentMaximizeIndex, setCurrentMaximizeIndex] = useState(0);
  const [serviceImages, setServiceImages] = useState<ServiceImages>({});

  const maximizeTexts = [
    "Your Wins",
    "Your Growth", 
    "Your Brand",
    "Your Impact",
    "Your Time",
    "Your Potential",
    "Your Revenue",
    "Your Success"
  ];

  const scorpionStats = [
    { number: "Your Vision", label: "", icon: "" },
    { number: "Our Impact", label: "", icon: "" },
    { number: "Your Growth", label: "", icon: "" },
    { number: "Your Success", label: "", icon: "" }
  ];

  const services: Service[] = [
    {
      title: "Branding",
      description: "In-depth design to provide a sustainable brand identity foundation. From crafting compelling logos and selecting vibrant colors to defining your mission, vision, and values.",
      defaultImage: "/images/Branding.png",
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      packages: [
        { name: "Logo Kit", desc: "An efficient design process that gets you the essential items your business needs." },
        { name: "Brand Design", desc: "An in-depth experience that creates the foundation for years of business growth ahead." }
      ]
    },
    {
      title: "Website + SEO",
      description: "Mobile friendly, search engine optimized business websites. Complete web membership program including design, development, hosting, updates, analytics, and SEO.",
      defaultImage: "/images/Website + SEO.png",
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      features: [
        "Website Design",
        "Website Development", 
        "Website Hosting",
        "Website Updates",
        "Website Analytics",
        "Search Engine Optimization (SEO)"
      ]
    },
    {
      title: "Social Media Management",
      description: "Consistent photos, videos, and account management to promote your business. We manage your TikTok, Instagram, Facebook, LinkedIn, YouTube, Google MyBusiness and run your ads.",
      defaultImage: "/images/Social Media Management.png",
      icon: <Share2 className="w-8 h-8 text-cyan-600" />,
      platforms: ["TikTok", "Instagram", "Facebook", "LinkedIn", "YouTube", "Google MyBusiness"]
    },
    {
      title: "Photo/Video Content",
      description: "Photo and video content to showcase your unique product, team and branding. Production days at your job site, office, or storefront to create authentic media.",
      defaultImage: "/images/Photo:Video Content.png",
      icon: <Camera className="w-8 h-8 text-green-600" />,
      includes: ["Monthly Planning Meeting", "Production Days", "Authentic Media Creation"]
    },
    {
      title: "Graphic Design",
      description: "On-demand graphic design for all your marketing collateral and customer touchpoints. Professional designs that align with your brand identity.",
      defaultImage: "/images/Graphic Design.png",
      icon: <Palette className="w-8 h-8 text-amber-600" />
    },
    {
      title: "Digital Ads",
      description: "Facebook and Google advertising to amplify your marketing reach. Account setup, ad creation, and monthly reporting to optimize performance.",
      defaultImage: "/images/Digital Ads.png",
      icon: <Target className="w-8 h-8 text-red-600" />,
      services: ["Account Setup", "Ad Creation", "Monthly Ads Reporting"]
    }
  ];

  const regions = [
    {
      country: "",
      flag: "",
      audience: "",
      reach: "",
      platforms: "",
      description: "",
      accent: "",
      stats: { projects: "", followers: "", months: "" },
      speciality: ""
    },
  ];

  const handleImageUpload = (serviceIndex: string | number, imageData: string | null) => {
    setServiceImages(prev => ({
      ...prev,
      [serviceIndex]: imageData
    }));
  };

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentRegion((prev) => (prev + 1) % regions.length);
    }, 6000);
    
    const maximizeInterval = setInterval(() => {
      setCurrentMaximizeIndex((prev) => (prev + 1) % maximizeTexts.length);
    }, 2000);
    
    return () => {
      clearInterval(interval);
      clearInterval(maximizeInterval);
    };
  }, []);

  const TriskelionLogo = ({ size = 120, className = "", glow = true }: { size?: number; className?: string; glow?: boolean }) => (
    <motion.div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      <svg width={size} height={size} viewBox="0 0 120 120" className={`drop-shadow-md ${glow ? 'filter drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]' : ''}`}>
        <defs>
          <linearGradient id={`triskelion-gradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="6" fill={`url(#triskelion-gradient-${size})`} />
        <g transform="translate(60,60)">
          {[0, 120, 240].map((rotation, index) => (
            <g key={index} transform={`rotate(${rotation})`}>
              <path
                d="M 0,0 Q -12,-20 -20,-32 Q -28,-36 -32,-28 Q -28,-20 -20,-16 Q -12,-12 -8,-20 Q -6,-28 -12,-32"
                fill={`url(#triskelion-gradient-${size})`}
                stroke="rgba(59,130,246,0.3)"
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
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-50/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(at_center,_#3b82f6/8%,_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_#06b6d408_0%,_#8b5cf608_50%,_#3b82f608_100%)]"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[1,2,3,4,5,6,7].map(i => (
            <motion.div
              key={i}
              className={`absolute ${[
                'top-16 left-10', 'top-32 right-20', 'bottom-40 left-16', 
                'bottom-20 right-32', 'top-1/2 left-8', 'top-3/4 right-12', 'top-1/4 right-6'
              ][i-1]} opacity-20 hover:opacity-40 transition-opacity duration-500`}
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
              <svg width={60 + i * 8} height={60 + i * 8} viewBox="0 0 120 120" className="drop-shadow-sm">
                <defs>
                  <linearGradient id={`floating-triskelion-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
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
        <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex justify-center mb-8">
                <TriskelionLogo size={120} glow />
              </div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-slate-800 mb-3 tracking-tight"
              >
                TRISKELION
              </motion.h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-4"></div>
              <div className="mb-6">
                <div className="h-16 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={currentMaximizeIndex}
                      className="text-2xl md:text-3xl text-amber-600 font-semibold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {maximizeTexts[currentMaximizeIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
              <motion.div 
                className="relative rounded-2xl overflow-hidden border border-blue-200/30 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl mb-8 max-w-6xl mx-auto h-96 md:h-[500px]"
                whileHover={{ 
                  y: -2,
                  scale: 1.01,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                }}
              >
                <img 
                  src="/images/sunrise-office-view-stockcake.jpg" 
                  alt="Triskelion Agency - Social Media Marketing Excellence"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
                <div className="absolute top-8 left-8 max-w-md p-6 text-left">
                  <motion.h2 
                    className="text-lg md:text-xl lg:text-2xl font-bold mb-4 leading-tight text-white drop-shadow-2xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    We are a 360 social media creative marketing and lead generation company leveraging technology, community & content to design delightful experiences.
                  </motion.h2>
                  <motion.p 
                    className="text-sm md:text-base lg:text-lg text-white/90 italic drop-shadow-lg mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Every business we serve exists to help others.{' '}
                    <span className="text-amber-400 font-black not-italic text-base md:text-lg lg:text-xl block mt-2">
                      Our job is to help them.
                    </span>
                  </motion.p>
                  <motion.button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    onClick={() => {
                      console.log('Contact button clicked');
                    }}
                  >
                    Contact Us
                  </motion.button>
                </div>
                <div className="absolute top-8 left-8 w-12 h-12 border-2 border-blue-400/50 rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-12 w-8 h-8 bg-purple-500/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-16 left-12 w-16 h-16 border border-cyan-400/40 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                <div className="absolute bottom-8 right-8 w-6 h-6 bg-amber-400/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-blue-400/70 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-cyan-400/70 rounded-br-2xl"></div>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="mb-12">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                  A comprehensive suite of digital marketing services designed to elevate your brand and maximize your business growth.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
                  <p className="text-sm text-blue-800 font-medium">
                    🚀 <strong>How to Get Started:</strong> Build your marketing plan with our team. Whether you hire us or not, the plan is yours to keep.
                  </p>
                </div>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden border border-blue-200/30 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl"
                    whileHover={{ 
                      y: -5,
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      {serviceImages[index] || service.defaultImage ? (
                        <img 
                          src={serviceImages[index] || service.defaultImage} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const iconDiv = document.createElement('div');
                            iconDiv.className = "w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500";
                            const target = e.target as HTMLImageElement;
                            if (target.parentElement) {
                              target.parentElement.replaceChild(iconDiv, target);
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
                          {service.icon}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        {service.icon}
                        <h4 className="text-xl font-bold text-slate-800 ml-3 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                        {service.description}
                      </p>
                      {service.packages && (
                        <div className="mb-4">
                          <p className="font-semibold text-slate-700 mb-2 text-sm">Packages:</p>
                          {service.packages.map((pkg, idx) => (
                            <div key={idx} className="mb-2">
                              <span className="font-medium text-blue-600 text-xs">{pkg.name}:</span>
                              <span className="text-slate-600 text-xs ml-1">{pkg.desc}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      {service.features && (
                        <div className="mb-4">
                          <p className="font-semibold text-slate-700 mb-2 text-sm">Includes:</p>
                          <div className="grid grid-cols-1 gap-1">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-xs text-slate-600">
                                <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {service.platforms && (
                        <div className="mb-4">
                          <p className="font-semibold text-slate-700 mb-2 text-sm">Platforms:</p>
                          <div className="flex flex-wrap gap-1">
                            {service.platforms.map((platform, idx) => (
                              <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {service.includes && (
                        <div className="mb-4">
                          <p className="font-semibold text-slate-700 mb-2 text-sm">Process:</p>
                          {service.includes.map((item, idx) => (
                            <div key={idx} className="flex items-center text-xs text-slate-600 mb-1">
                              <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      )}
                      {service.services && (
                        <div className="mb-4">
                          <p className="font-semibold text-slate-700 mb-2 text-sm">Services:</p>
                          {service.services.map((svc, idx) => (
                            <div key={idx} className="flex items-center text-xs text-slate-600 mb-1">
                              <CheckCircle size={12} className="text-green-500 mr-2 flex-shrink-0" />
                              {svc}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mt-4">
                        <ImageUpload
                          onImageUpload={(imageData) => handleImageUpload(index, imageData)}
                          currentImage={serviceImages[index]}
                          title={service.title}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  Ready to Elevate Your Brand?
                </h3>
                <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                  Our mission is to give small businesses the chance to share their story.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                  <motion.button
                    className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="mb-16">
              <div className="max-w-7xl mx-auto space-y-16">
                <motion.div 
                  className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <ImageUpload
                        onImageUpload={(imageData) => handleImageUpload('brand', imageData)}
                        currentImage={serviceImages['brand']}
                        title="Brand Development"
                      />
                      {!serviceImages['brand'] && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          <Palette className="w-16 h-16 text-blue-600" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Thoughtful <span className="text-blue-600">Brand Development</span>
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        From crafting compelling logos and selecting vibrant colors to defining your mission, vision, and values, our in-house design team covers every aspect.
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200/30">
                        <h4 className="font-bold text-slate-800 mb-3 text-lg">Logo Kit</h4>
                        <p className="text-slate-600 text-sm">
                          An efficient design process that gets you the essential items your business needs.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200/30">
                        <h4 className="font-bold text-slate-800 mb-3 text-lg">Brand Design</h4>
                        <p className="text-slate-600 text-sm">
                          An in-depth experience that creates the foundation for years of business growth ahead.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <ImageUpload
                        onImageUpload={(imageData) => handleImageUpload('website', imageData)}
                        currentImage={serviceImages['website']}
                        title="Website Development"
                      />
                      {!serviceImages['website'] && (
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                          <Globe className="w-16 h-16 text-cyan-600" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        A Fresh Approach To <span className="text-cyan-600">Business Websites</span>
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Triskelion provides businesses with website design through our unique web membership program. The program includes website design, development, ongoing support, and maintenance. Triskelion becomes an extension of your in-house team.
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        {['Website Design', 'Website Development', 'Website Hosting', 'Website Analytics'].map((item, idx) => (
                          <div key={idx} className="flex items-center text-slate-600">
                            <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {['Search Engine Optimization (SEO)', 'Website Updates', 'Monthly Performance Reporting'].map((item, idx) => (
                          <div key={idx} className="flex items-center text-slate-600">
                            <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <ImageUpload
                        onImageUpload={(imageData) => handleImageUpload('digital', imageData)}
                        currentImage={serviceImages['digital']}
                        title="Digital Marketing"
                      />
                      {!serviceImages['digital'] && (
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                          <Video className="w-16 h-16 text-purple-600" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Digital Marketing <span className="text-purple-600">Program</span>
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        To consistently provide your business with high-quality photo and video content, our digital marketing program enables us to create authentic media that showcases your business's story.
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200/30">
                        <h4 className="font-bold text-slate-800 mb-3 text-lg">Monthly Planning Meeting</h4>
                        <p className="text-slate-600 text-sm">
                          Begin each month by looking at business objectives to determine what content we should create.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200/30">
                        <h4 className="font-bold text-slate-800 mb-3 text-lg">Social Media Management + Ads</h4>
                        <p className="text-slate-600 text-sm">
                          We manage your TikTok, Instagram, Facebook, LinkedIn, YouTube, Google MyBusiness and run your ads.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <ImageUpload
                        onImageUpload={(imageData) => handleImageUpload('ads', imageData)}
                        currentImage={serviceImages['ads']}
                        title="Digital Ads"
                      />
                      {!serviceImages['ads'] && (
                        <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 rounded-lg flex items-center justify-center">
                          <Target className="w-16 h-16 text-red-600" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Lead Gen <span className="text-red-600">Digital Ads</span>
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        We properly configure your ad accounts to optimize ad performance and track conversions. Our team designs, produces, and edits eye-catching advertisements across photo, video, and graphic design formats.
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200/30">
                        <h4 className="font-bold text-slate-800 mb-3 text-lg">Account Setup</h4>
                        <p className="text-slate-600 text-sm">
                          We properly configure your ad accounts to optimize ad performance and track conversions.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200/30">
                        <h4 className="font-bold text-slate-800 mb-3 text-lg">Ad Creation</h4>
                        <p className="text-slate-600 text-sm">
                          We design, produce, and edit eye-catching photo, video, and graphic design-based advertisements.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <ImageUpload
                        onImageUpload={(imageData) => handleImageUpload('graphic', imageData)}
                        currentImage={serviceImages['graphic']}
                        title="Graphic Design"
                      />
                      {!serviceImages['graphic'] && (
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center">
                          <Palette className="w-16 h-16 text-amber-600" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        On-Brand <span className="text-amber-600">Graphic Design Material</span>
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Professional marketing collateral designed by our in-house team to align perfectly with your brand identity and business objectives.
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200/30">
                        <h4 className="font-bold text-slate-800 mb-3 text-lg">Marketing Materials</h4>
                        <p className="text-slate-600 text-sm">
                          Flyers, rack cards, business cards, signs, menus and more. You name it; we'll design it.
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200/30">
                        <h4 className="font-bold text-slate-800 mb-3 text-lg">Dedicated Designer</h4>
                        <p className="text-slate-600 text-sm">
                          All your designs are created by our in-house design team ensuring consistency and quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                {scorpionStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/80 backdrop-blur-lg rounded-xl p-3 md:p-6 border border-blue-200/30 text-center hover:border-blue-500/50 transition-all duration-300 shadow-lg"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="text-xl md:text-2xl mb-1 md:mb-2">{stat.icon}</div>
                    <div className="text-sm md:text-2xl lg:text-3xl font-bold text-slate-800 mb-1 md:mb-2 leading-tight">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 text-xs md:text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-12">
              <motion.p 
                className="text-slate-600 text-sm max-w-md mx-auto mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                We don't just post content - we create cultural moments. Let's make your brand the next big trend.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"></div>
      </div>
      <RotatingCircleWidget />
    </>
  );
};

export default TriskelionAgency;