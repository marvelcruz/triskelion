"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Rotating Circle Widget Component
const RotatingCircleWidget = ({ className = "" }) => {
  return (
    <div className={`fixed bottom-6 right-6 w-36 h-36 z-50 cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-110 ${className}`}>
      <div className="w-full h-full relative rounded-full bg-gradient-to-r from-red-400 via-teal-400 via-blue-400 via-green-400 via-yellow-400 to-pink-400 p-1 shadow-lg shadow-red-400/30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-black/80 backdrop-blur-md relative overflow-hidden border border-white/10">
          
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
            {/* TRISKELION label above */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-white text-shadow-lg tracking-wide">
              TRISKELION
            </div>
            
            {/* Triskelion SVG */}
            <svg className="w-full h-full filter drop-shadow-lg animate-pulse" style={{ animationDuration: '3s' }} viewBox="0 0 100 100">
              <defs>
                <linearGradient id="triskelionGradWidget" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="50%" stopColor="#f0f0f0" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
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
            
            {/* GIVERS GAIN label below */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[8px] font-bold text-white text-shadow-lg tracking-wide">
              GIVERS GAIN®
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute w-0.5 h-0.5 bg-white/60 rounded-full animate-bounce" style={{ left: '30%', animationDelay: '0s', animationDuration: '4s' }}></div>
          <div className="absolute w-0.5 h-0.5 bg-white/60 rounded-full animate-bounce" style={{ left: '70%', animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute w-0.5 h-0.5 bg-white/60 rounded-full animate-bounce" style={{ left: '50%', animationDelay: '2s', animationDuration: '4s' }}></div>
        </div>
      </div>
    </div>
  );
};

const TriskelionAbout = () => {
  const [activeTab, setActiveTab] = useState('story');

  const motionValues = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 }
  };

  // Simplified Triskelion Logo
  const TriskelionLogo = ({ size = 60, className = "", glow = false }) => (
    <motion.div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <svg width={size} height={size} viewBox="0 0 120 120" className={`drop-shadow-md ${glow ? 'filter drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]' : ''}`}>
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

  // Realistic startup stats
  const realStats = [
    { number: "Small", label: "Dedicated Team", icon: "" },
    { number: "8-ish+", label: "Happy Clients", icon: "" },
    { number: "30+", label: "Projects Completed", icon: "" },
    { number: "7", label: "Months in Business", icon: "" }
  ];

  // What we actually do well
  const strengths = [
    {
      title: "We Actually Answer Our Phone",
      description: "No phone trees, no waiting weeks for responses. When you need us, we're here.",
      icon: "",
      color: ""
    },
    {
      title: "Small Enough to Care", 
      description: "You're not client #247. We know your name, your business, and what makes you tick.",
      icon: "",
      color: ""
    },
    {
      title: "Real Results, Not Vanity Metrics",
      description: "We focus on leads, sales, and actual business growth - not just likes and follows.",
      icon: "",
      color: ""
    },
    {
      title: "No Long-Term Contracts",
      description: "Month-to-month service. If we're not delivering, you can leave anytime.",
      icon: "",
      color: ""
    }
  ];

  // Why clients choose us (honest reasons)
  const whyChooseUs = [
    "We're hungry and work harder than big agencies",
    "Your budget goes to results, not fancy offices",
    "Direct access to the people doing the work",
    "We pivot fast when something isn't working",
    "Personal investment in your success"
  ];

  return (
    <>
      <section 
        id="about" className="relative py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        
        {/* Enhanced background elements with more Triskelion logos */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Top row */}
          <div className="absolute top-20 right-20">
            <TriskelionLogo size={80} glow />
          </div>
          <div className="absolute top-32 left-20">
            <TriskelionLogo size={60} />
          </div>
          
          {/* Middle row */}
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
            <TriskelionLogo size={70} />
          </div>
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
            <TriskelionLogo size={55} glow />
          </div>
          
          {/* Bottom row */}
          <div className="absolute bottom-32 left-16">
            <TriskelionLogo size={90} glow />
          </div>
          <div className="absolute bottom-20 right-32">
            <TriskelionLogo size={65} />
          </div>
          
          {/* Additional scattered logos */}
          <div className="absolute top-80 left-1/3">
            <TriskelionLogo size={45} />
          </div>
          <div className="absolute bottom-80 right-1/4">
            <TriskelionLogo size={50} glow />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 z-10">
          
          {/* Simple Hero */}
          <motion.div {...motionValues} className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <TriskelionLogo size={120} glow />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200 mt-20">
              Hiii, We're Triskelion
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
              A small social media agency that actually cares about growing your business and social media engagement. 
              No BS, no inflated promises — just real work that gets real results.
            </p>
            
            <div className="space-y-6 max-w-2xl mx-auto text-left">
              <div>
                <h2 className="font-semibold text-slate-700 dark:text-slate-300">Foreword</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  We see business as a vehicle for delivering great user experiences. We build relationships 
                  with the community around us by reinventing the way creative services are provided.
                </p>
              </div>
              
              <div>
                <h2 className="font-semibold text-slate-700 dark:text-slate-300">Purpose</h2>
                <p className="text-slate-600 dark:text-slate-400">
                  We give local businesses the chance to share their story.
                </p>
              </div>
              
              <div>
                <h2 className="font-semibold text-slate-700 dark:text-slate-300">Values</h2>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
                  <li><strong>Clarity</strong> - Transparent strategies with no hidden fluff</li>
                  <li><strong>Communication</strong> - We listen first, then create</li>
                  <li><strong>Collaboration</strong> - Working with you to build something remarkable</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Simple Navigation */}
          <motion.div {...motionValues} className="flex justify-center mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-1 shadow-sm border border-slate-200 dark:border-slate-700">
              {[
                { id: 'story', label: 'Our Story' },
                { id: 'services', label: 'Services' },
                { id: 'why', label: 'Why Us?' },
                { id: 'stats', label: 'The Numbers' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Our Story Tab */}
          {activeTab === 'story' && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="text-center mb-8">
                  <TriskelionLogo size={100} glow />
                </div>
                
                <div className="space-y-6 text-slate-700 dark:text-slate-300">
                  <p className="text-lg leading-relaxed">
                    We started Triskelion because we were tired of seeing small businesses get burned by agencies that overpromise and underdeliver.
                  </p>
                  
                  <p>
                    <strong className="text-slate-800 dark:text-slate-200">Here's the truth:</strong> We're not the biggest agency. We don't have a fancy downtown office. We don't throw around buzzwords like "synergistic solutions" or "disruptive paradigms."
                  </p>
                  
                  <p>
                    What we do have is a small team that genuinely cares about your success. We answer emails. We hit deadlines. We track what actually matters to your business.
                  </p>
                  
                  <p>
                    <strong className="text-slate-800 dark:text-slate-200">Our promise:</strong> Work with us for 3 months. If you don't see real improvement in your social media results, we'll refund your last month. That's how confident we are.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8 relative">
                <div className="absolute -top-4 -right-4">
                  <TriskelionLogo size={40} />
                </div>
                <div className="absolute -top-2 -left-6">
                  <TriskelionLogo size={35} glow />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  What Launch Kit Provides
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  A comprehensive suite of digital marketing services designed specifically for small businesses
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Branding & Design",
                    description: "The weight ♎ that tech companies give to branding and design is inconsistent, to say the least. At one end of the spectrum you have the Apples of the world. At the other, you have countless startups that only start to consider these things a few months before going public, if at all.",
                    icon: "",
                    color: ""
                  },
                  {
                    title: "Website + SEO",
                    description: "Mobile friendly, search engine optimized business websites.",
                    icon: "",
                    color: ""
                  },
                  {
                    title: "Social Media",
                    description: "Consistent photos, videos, and account management to promote your business.",
                    icon: "",
                    color: ""
                  },
                  {
                    title: "Graphic Design",
                    description: "On-demand graphic design for all your marketing collateral and customer touchpoints.",
                    icon: "",
                    color: ""
                  },
                  {
                    title: "Photo/Video",
                    description: "Photo and video content to showcase your unique product, team and branding.",
                    icon: "",
                    color: ""
                  },
                  {
                    title: "Digital Ads",
                    description: "Facebook and Google advertising to amplify your marketing reach.",
                    icon: "",
                    color: ""
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center text-xl mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  Launch Kit partners with local businesses through unique programs that combine these services for maximum impact and growth.
                </p>
              </div>
            </motion.div>
          )}

          {/* Why Choose Us Tab */}
          {activeTab === 'why' && (
            <motion.div
              key="why"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`w-12 h-12 rounded-lg ${strength.color} flex items-center justify-center text-xl mb-4`}>
                      {strength.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">
                      {strength.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold mb-6 text-center text-slate-800 dark:text-slate-200">
                  Here's what our clients say about us:
                </h3>
                <div className="space-y-3">
                  {whyChooseUs.map((reason, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-700 dark:text-slate-300">{reason}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Stats Tab */}
          {activeTab === 'stats' && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                  We're Small, But We're Growing Fast
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  These aren't inflated numbers. This is where we actually are right now - and we're proud of it.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {realStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
                  >
                    <div className="text-2xl mb-3">{stat.icon}</div>
                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200 text-center text-sm">
                  <strong>Real talk:</strong> We're not trying to be the next big agency empire. We want to stay small, personal, and focused on getting you results. 
                  When we hit 50 clients, we'll probably stop taking new ones to maintain quality.
                </p>
              </div>
            </motion.div>
          )}

          {/* Strong CTA */}
          <motion.div {...motionValues} className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
             T   R   I   S   K   E  L  I   O   N
              </h2>
              <p className="mb-6 text-blue-100 max-w-xl mx-auto">

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div>
              <p className="text-xs text-blue-200 mt-4">
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Rotating Circle Widget */}
      <RotatingCircleWidget />
    </>
  );
};

export default TriskelionAbout;