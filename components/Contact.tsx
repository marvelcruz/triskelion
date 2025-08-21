'use client';

import { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Github, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

// Types
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Motion values
const motionValues = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

// Contact constants
const contact = {
  title: "Let's Work Together",
  description: "Get in touch and let's create something amazing together"
};

const socials = [
  { name: 'whatsapp', url: 'https://wa.me/1234567890' },
  { name: 'x', url: 'https://x.com/triskelionCo' },
  { name: 'linkedin', url: 'https://www.linkedin.com/company/triskelion-collective/?viewAsMember=true' },
  { name: 'instagram', url: 'https://www.instagram.com/triskelion.collective/' },
  { name: 'email', url: 'mailto:wecare@triskelion.ink' }
];

// Triskelion Logo Component
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

const ContactSection = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent('New Business Inquiry');
    const body = encodeURIComponent(
      'Hi Triskelion Team,\n\n' +
      'I\'m interested in your services. Please contact me to discuss:\n\n' +
      '• My project details:\n' +
      '• Timeline:\n' +
      '• Budget range:\n\n' +
      'Best regards'
    );
    
    const mailtoLink = `mailto:wecare@triskelion.ink?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      className="w-full sm:w-[574px] lg:max-w-[516px] flex flex-col gap-6 items-center text-center"
      {...motionValues}
    >
      <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Click the button below to send us an email directly. We'll get back to you within 24 hours!
        </p>
        
        <button
          onClick={handleEmailClick}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          📧 Send Us an Email
        </button>
        
        <p className="text-sm text-slate-500 mt-4">
          Or email us directly at{' '}
          <a href="mailto:wecare@triskelion.ink" className="text-blue-600 hover:text-blue-800">
            wecare@triskelion.ink
          </a>
        </p>
      </div>
    </motion.div>
  );
};

const SocialIcon = ({ name, className }: { name: string; className: string }) => {
  return (
    <Fragment>
      {name === 'whatsapp' ? (
        <MessageCircle className={className} />
      ) : name === 'github' ? (
        <Github className={className} />
      ) : name === 'x' ? (
        <Twitter className={className} />
      ) : name === 'linkedin' ? (
        <Linkedin className={className} />
      ) : name === 'email' ? (
        <Mail className={className} />
      ) : name === 'instagram' ? (
        <Instagram className={className} />
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

const Contact = () => {
  const { title, description } = contact;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background matching home page */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-50/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(at_center,_#3b82f6/8%,_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_#06b6d408_0%,_#8b5cf608_50%,_#3b82f608_100%)]"></div>
      </div>

      <div className="relative pt-16 z-10">
        {/* Contact Section */}
        <section id='contact' className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-6xl mx-auto flex flex-col items-center gap-12'>
            <motion.h2 className='text-4xl md:text-5xl font-bold text-center text-slate-800' {...motionValues}>
              {title}
            </motion.h2>
            <motion.h3 className='text-xl md:text-2xl text-center text-slate-600 max-w-2xl' {...motionValues}>
              {description}
            </motion.h3>
            
            <div className='flex flex-col lg:flex-row items-center justify-center gap-12 w-full'>
              <ContactSection />
              
              <motion.div className='flex flex-row lg:flex-col gap-6 lg:gap-8' {...motionValues}>
                {socials.map(({ name, url }, index) => {
                  return (
                    <a 
                      key={index} 
                      href={url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className='cursor-pointer hover:scale-110 transition-transform duration-300 p-3 rounded-full bg-white/70 hover:bg-white/90 border border-blue-200/30'
                    >
                      <SocialIcon
                        name={name}
                        className='text-slate-700 text-xl sm:text-2xl'
                      />
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/80 backdrop-blur-sm text-slate-800 py-12 border-t border-blue-200/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="mb-6">
                  <TriskelionLogo size={32} />
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-slate-800">Content & Creative</h4>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">Content creation (posts, stories, reels, videos)</p>
                  <p className="text-sm text-slate-600">Graphic design and visual content</p>
                  <p className="text-sm text-slate-600">Video production and editing</p>
                  <p className="text-sm text-slate-600">Copy writing and caption creation</p>
                  <p className="text-sm text-slate-600">Photography and photo editing</p>
                  <p className="text-sm text-slate-600">Brand storytelling</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-slate-800">Strategy & Planning</h4>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">Social media strategy development</p>
                  <p className="text-sm text-slate-600">Content calendar planning</p>
                  <p className="text-sm text-slate-600">Brand voice and messaging</p>
                  <p className="text-sm text-slate-600">Competitor analysis</p>
                  <p className="text-sm text-slate-600">Platform-specific strategies</p>
                  <p className="text-sm text-slate-600">Content audits</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-slate-800">Management & Ads</h4>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">Daily posting and scheduling</p>
                  <p className="text-sm text-slate-600">Community management</p>
                  <p className="text-sm text-slate-600">Account setup and optimization</p>
                  <p className="text-sm text-slate-600">Paid social advertising</p>
                  <p className="text-sm text-slate-600">Analytics and reporting</p>
                  <p className="text-sm text-slate-600">Influencer marketing</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-blue-200/30 mt-8 pt-8 text-center">
              <p className="text-slate-600">&copy; 2025 Triskelion. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;