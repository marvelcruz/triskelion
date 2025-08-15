"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Camera, Users, MessageCircle, TrendingUp, CheckCircle, ArrowRight, Star, StarHalf, Car, Clock, Monitor } from "lucide-react";

const Leadgeneration = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const motionValues = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  const TriskelionLogo = ({ size = 40, className = "", showText = true, animationDuration = 25 }) => (
    <div className="flex items-center space-x-3">
      <motion.div 
        className={`relative ${className}`}
        style={{ width: size, height: size }}
        animate={{ rotate: 360 }}
        transition={{ duration: animationDuration, repeat: Infinity, ease: "linear" }}
      >
        <svg width={size} height={size} viewBox="0 0 120 120" className="drop-shadow-lg">
          <defs>
            <linearGradient id={`triskelion-gradient-${size}-${animationDuration}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          
          <circle cx="60" cy="60" r="10" fill={`url(#triskelion-gradient-${size}-${animationDuration})`} />
          
          <g transform="translate(60,60)">
            {[0, 120, 240].map((rotation, index) => (
              <g key={index} transform={`rotate(${rotation})`}>
                <path
                  d="M 0,0 Q -20,-30 -30,-50 Q -45,-55 -50,-40 Q -45,-30 -30,-25 Q -20,-20 -15,-30 Q -10,-40 -20,-45"
                  fill={`url(#triskelion-gradient-${size}-${animationDuration})`}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.8"
                />
                <circle cx="-30" cy="-40" r="10" fill={`url(#triskelion-gradient-${size}-${animationDuration})`} />
              </g>
            ))}
          </g>
        </svg>
      </motion.div>
      {showText && <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">TRISKELION</span>}
    </div>
  );

  // 9 Triskelion logos positioned across different sections - some background, some foreground
  const ScatteredLogos = () => (
    <>
      {/* Background logos - very subtle */}
      
      {/* Logo 1 - Features section background */}
      <motion.div 
        className="absolute top-32 left-16 opacity-5 pointer-events-none z-0"
        animate={{ 
          rotate: [0, 360],
          y: [-5, 5, -5]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <TriskelionLogo size={200} showText={false} animationDuration={35} />
      </motion.div>

      {/* Logo 2 - Content creation section background */}
      <motion.div 
        className="absolute top-12 right-20 opacity-3 pointer-events-none z-0"
        animate={{ 
          rotate: [360, 0],
          x: [-8, 8, -8]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <TriskelionLogo size={150} showText={false} animationDuration={40} />
      </motion.div>

      {/* Logo 3 - Process section background */}
      <motion.div 
        className="absolute bottom-20 left-12 opacity-4 pointer-events-none z-0"
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          y: [-10, 10, -10]
        }}
        transition={{ 
          scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }
        }}
      >
        <TriskelionLogo size={180} showText={false} animationDuration={28} />
      </motion.div>

      {/* Logo 4 - Platforms section background */}
      <motion.div 
        className="absolute top-24 right-8 opacity-2 pointer-events-none z-0"
        animate={{ 
          rotate: [0, -360],
          x: [-12, 12, -12],
          y: [-15, 15, -15]
        }}
        transition={{ 
          rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }
        }}
      >
        <TriskelionLogo size={220} showText={false} animationDuration={50} />
      </motion.div>

      {/* Strategic foreground logos - more visible */}
      
      {/* Logo 5 - Between hero and features */}
      <motion.div 
        className="absolute -top-10 right-32 opacity-15 pointer-events-none z-20"
        animate={{ 
          rotate: [0, 360],
          y: [-8, 8, -8],
          x: [-4, 4, -4]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      >
        <TriskelionLogo size={100} showText={false} animationDuration={25} />
      </motion.div>

      {/* Logo 6 - Next to testimonials */}
      <motion.div 
        className="absolute top-16 left-8 opacity-12 pointer-events-none z-20"
        animate={{ 
          rotate: [360, 0],
          scale: [0.9, 1.1, 0.9],
          x: [-6, 6, -6]
        }}
        transition={{ 
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          scale: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }
        }}
      >
        <TriskelionLogo size={85} showText={false} animationDuration={32} />
      </motion.div>

      {/* Logo 7 - FAQ section accent */}
      <motion.div 
        className="absolute bottom-32 right-16 opacity-10 pointer-events-none z-20"
        animate={{ 
          rotate: [0, 360],
          y: [-12, 12, -12]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          y: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      >
        <TriskelionLogo size={95} showText={false} animationDuration={38} />
      </motion.div>

      {/* Logo 8 - Middle content accent */}
      <motion.div 
        className="absolute top-1/2 left-4 opacity-8 pointer-events-none z-20"
        animate={{ 
          rotate: [0, -360],
          x: [-10, 10, -10],
          y: [-5, 5, -5]
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 6 }
        }}
      >
        <TriskelionLogo size={75} showText={false} animationDuration={42} />
      </motion.div>

      {/* Logo 9 - Footer transition accent */}
      <motion.div 
        className="absolute -bottom-8 left-1/3 opacity-12 pointer-events-none z-20"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 0.7, 1],
          x: [-15, 15, -15]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }
        }}
      >
        <TriskelionLogo size={110} showText={false} animationDuration={28} />
      </motion.div>
    </>
  );

  const teamMembers = [
    { name: "Daniel Bremmer", role: "Content Creator" },
    { name: "Reagan Berce", role: "Content Creator" },
    { name: "Rachel Bolt", role: "Social Media Manager" },
    { name: "Kevin Kamis", role: "Marketing Director" },
    { name: "Austin Johnson", role: "Ads Manager" }
  ];

  const processSteps = [
    "Pulse Meeting",
    "Production Days", 
    "Photo/Video Editing",
    "Social Media Management",
    "Paid Ads Management"
  ];

  const testimonials = [
    { name: "Jaimee, PLM", quote: "They bring multiple ideas to the table in a fun, energetic and creative manner." },
    { name: "Danae, Little Red", quote: "Their services have been transformative and brought so much value and insight to my business." },
    { name: "Rob, Outdoor Lighting Perspectives", quote: "They have nicest staff and really want to see you and your company become successful." },
    { name: "Brendan, McKellar Construction", quote: "They provide us with exceptional video/photo content, as well as our website. Their quality and customer service is unmatched." },
    { name: "Randy, DuraPro Painting", quote: "Partnering with them will 100% help elevate your business by growing your online presence." }
  ];

  const faqs = [
    "What types of ads do you create?",
    "Which platforms do you advertise on?",
    "How do you track ad performance?",
    "What's included in monthly reporting?",
    "How long before we see results?",
    "Can you work with our existing content?",
    "What makes your ads different?",
    "Do you handle ad budget management?"
  ];

  // Social media platforms with their brand colors
  const socialPlatforms = [
    { name: 'Facebook', color: '#1877F2', bgColor: 'bg-[#1877F2]' },
    { name: 'Instagram', color: '#E4405F', bgColor: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]' },
    { name: 'Google', color: '#4285F4', bgColor: 'bg-[#4285F4]' },
    { name: 'YouTube', color: '#FF0000', bgColor: 'bg-[#FF0000]' },
    { name: 'LinkedIn', color: '#0A66C2', bgColor: 'bg-[#0A66C2]' },
    { name: 'Amazon', color: '#FF9900', bgColor: 'bg-[#FF9900]' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Scattered Triskelion logos */}
      <ScatteredLogos />
      
      {/* Header with Triskelion Logo */}
      <header className="bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <TriskelionLogo size={40} />
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Portfolio</a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">About</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section - Updated with Triskelion branding */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden z-10">
        {/* Background Triskelion Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4">
            <TriskelionLogo size={200} showText={false} className="opacity-20" animationDuration={45} />
          </div>
          <div className="absolute bottom-1/3 right-1/4">
            <TriskelionLogo size={180} showText={false} className="opacity-15" animationDuration={32} />
          </div>
          <div className="absolute top-1/3 right-1/3">
            <TriskelionLogo size={150} showText={false} className="opacity-10" animationDuration={38} />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...motionValues}>
            <div className="mb-8">
              <TriskelionLogo size={80} />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Helping Businesses Build Awareness, Foster Connections, and Generate Quality Leads
            </h1>
            <h2 className="text-2xl mb-8 text-blue-400 font-medium">
              Digital Advertising For Businesses
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              TRISKELION helps businesses plan, create, and manage social media that converts followers into leads.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Packages
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Updated with Triskelion colors */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 relative z-10 overflow-hidden">
        <ScatteredLogos />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...motionValues} className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              A Fresh Approach to Small Business Ads
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...motionValues} className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">Build Awareness</h4>
              <p className="text-gray-300 leading-relaxed">
                Boost your brand's visibility with digital ads that are tailored to your target market.
              </p>
            </motion.div>

            <motion.div {...motionValues} className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/20">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">Generate Leads</h4>
              <p className="text-gray-300 leading-relaxed">
                Drive qualified leads to your business via phone calls, emails, or website inquiries.
              </p>
            </motion.div>

            <motion.div {...motionValues} className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-pink-500/20">
                <MessageCircle className="w-8 h-8 text-pink-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">Integrated Ecosystem</h4>
              <p className="text-gray-300 leading-relaxed">
                We seamlessly integrate advertising with our photo, video, and design services for a cohesive experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...motionValues} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Content Creation</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Thanks to our in-house content and design team, we are able to create on-brand photos, videos, and graphics that resonate with your target market and stand out from the pack.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section - Updated with Triskelion styling */}
      <section className="py-16 bg-white relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...motionValues} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Our Proven Process
            </h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-8"></div>
            <h4 className="text-xl font-semibold mb-8 text-blue-600">
              The Monthly Routine
            </h4>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team has developed a collaborative, high-performance monthly routine that ensures we stay consistent with our digital advertising efforts. Resulting in increased brand awareness and lead generation for your business.
            </p>
          </motion.div>

          <motion.div {...motionValues} className="space-y-8">
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border-l-4 border-blue-600">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div>
                <h5 className="text-xl font-bold mb-2 text-gray-900">Monthly Reporting</h5>
                <p className="text-gray-600 leading-relaxed">
                  Begin each month with a report to review ad performance, share business updates, and discuss new ad creation.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gradient-to-r from-green-50 to-white rounded-xl border-l-4 border-green-600">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div>
                <h5 className="text-xl font-bold mb-2 text-gray-900">Ad Creation</h5>
                <p className="text-gray-600 leading-relaxed">
                  Our team produces, edits, designs, and writes your advertisements using our project platform for a collaborative user experience.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-6 p-6 bg-gradient-to-r from-purple-50 to-white rounded-xl border-l-4 border-purple-600">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div>
                <h5 className="text-xl font-bold mb-2 text-gray-900">Ad Monitoring</h5>
                <p className="text-gray-600 leading-relaxed">
                  With ads up and running, we monitor performance and make adjustments to keywords and copywriting as needed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...motionValues} className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Advertising Platforms
            </h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              TRISKELION provides professional digital advertising using Facebook, Instagram, Google, YouTube, LinkedIn and Amazon platforms. As a team, we select which platforms are most relevant for your business to advertise on.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
              {socialPlatforms.map((platform, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 ${platform.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 text-white font-bold text-sm shadow-lg`}>
                    {platform.name[0]}
                  </div>
                  <span className="font-medium text-gray-700 text-sm">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...motionValues} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">What Our Clients Say</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div key={index} {...motionValues} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...motionValues} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </motion.div>

          <motion.div {...motionValues} className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors rounded-xl"
                >
                  <span className="font-medium text-gray-900">{faq}</span>
                  <ArrowRight className={`w-5 h-5 text-blue-600 transform transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-white">
                    <p className="text-gray-600">Our expert team will provide detailed answers about: {faq}</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div {...motionValues} className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              Ready to get started with digital advertising?
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <TriskelionLogo size={32} />
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Our mission is to give small businesses the chance to share their story. This is our way of making that happen.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Digital Advertising</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Content Creation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Photography</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-pink-400">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#0A66C2] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#E4405F] transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-[#1877F2] transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-[#1DA1F2] transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Triskelion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Leadgeneration;