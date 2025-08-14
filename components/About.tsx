"use client";
import { motion } from "framer-motion";
import { useState } from "react";

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
    { number: "Small", label: "Dedicated Team", icon: "👥" },
    { number: "25+", label: "Happy Clients", icon: "😊" },
    { number: "40+", label: "Projects Completed", icon: "✅" },
    { number: "12", label: "Months in Business", icon: "📅" }
  ];

  // What we actually do well
  const strengths = [
    {
      title: "We Actually Answer Our Phone",
      description: "No phone trees, no waiting weeks for responses. When you need us, we're here.",
      icon: "📞",
      color: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Small Enough to Care", 
      description: "You're not client #247. We know your name, your business, and what makes you tick.",
      icon: "💝",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Real Results, Not Vanity Metrics",
      description: "We focus on leads, sales, and actual business growth - not just likes and follows.",
      icon: "📈",
      color: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "No Long-Term Contracts",
      description: "Month-to-month service. If we're not delivering, you can leave anytime.",
      icon: "🤝",
      color: "bg-orange-50 dark:bg-orange-900/20"
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
    <section 
    id="about" className="relative py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-20">
          <TriskelionLogo size={40} />
        </div>
        <div className="absolute bottom-32 left-16">
          <TriskelionLogo size={35} glow />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 z-10">
        
        {/* Simple Hero */}
        <motion.div {...motionValues} className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            Hi, We're Triskelion 👋
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A small social media agency that actually cares about growing your business. 
            No BS, no inflated promises - just real work that gets real results.
          </p>
        </motion.div>

        {/* Simple Navigation */}
        <motion.div {...motionValues} className="flex justify-center mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-1 shadow-sm border border-slate-200 dark:border-slate-700">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'why', label: 'Why Us?' },
              { id: 'stats', label: 'The Numbers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
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
                <TriskelionLogo size={60} glow />
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
              Ready to Try Something Different?
            </h2>
            <p className="mb-6 text-blue-100 max-w-xl mx-auto">
              No 6-month contracts. No setup fees. No BS. Just good work that grows your business.
              Start for just $700/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started - $700/month
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                See Our Work First
              </motion.button>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              30-day money-back guarantee • Cancel anytime • No setup fees
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TriskelionAbout;