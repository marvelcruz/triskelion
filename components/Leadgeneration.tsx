"use client";
import { Users, MessageCircle, TrendingUp, Star } from "lucide-react";

const Leadgeneration = () => {
  const TriskelionLogo = ({ size = 40, className = "", showText = true, animationDuration = 25 }: {
    size?: number;
    className?: string;
    showText?: boolean;
    animationDuration?: number;
  }) => (
    <div className="flex items-center space-x-3">
      <div 
        className={`relative animate-spin ${className}`}
        style={{ 
          width: size, 
          height: size,
          animationDuration: `${animationDuration}s`
        }}
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
      </div>
      {showText && <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">TRISKELION</span>}
    </div>
  );

  const testimonials = [
    { name: "Jaimee, PLM", quote: "They bring multiple ideas to the table in a fun, energetic and creative manner." },
    { name: "Danae, Little Red", quote: "Their services have been transformative and brought so much value and insight to my business." },
    { name: "Rob, Outdoor Lighting Perspectives", quote: "They have nicest staff and really want to see you and your company become successful." },
    { name: "Brendan, McKellar Construction", quote: "They provide us with exceptional video/photo content, as well as our website. Their quality and customer service is unmatched." },
    { name: "Randy, DuraPro Painting", quote: "Partnering with them will 100% help elevate your business by growing your online presence." }
  ];

  type SocialPlatform = 'Facebook' | 'Instagram' | 'Google' | 'YouTube' | 'LinkedIn' | 'Amazon' | 'TikTok';

  const SocialIcon = ({ platform }: { platform: SocialPlatform }) => {
    const iconProps = { className: "w-8 h-8 text-white" };
    
    switch(platform) {
      case 'Facebook':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'Instagram':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'Google':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        );
      case 'YouTube':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'Amazon':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.544.41-3.146.615-4.805.615-3.44 0-6.824-.927-10.152-2.78-.468-.26-.575-.38-.575-.596 0-.22.180-.48.045-.508zm23.385-1.095c-.317-.098-.57.04-.775.414-.204.374-.476.72-.82 1.036-.46.424-.97.636-1.53.636-.238 0-.45-.034-.634-.1-.184-.067-.314-.157-.39-.27-.076-.114-.09-.245-.042-.395.047-.15.144-.273.29-.37.292-.193.676-.212 1.153-.055.477.156.905.384 1.284.683l.12.094c.068.053.12.085.156.094.035.01.068.006.098-.01.03-.017.053-.044.068-.082.016-.037.018-.078.008-.122-.011-.045-.036-.087-.076-.127-.28-.279-.68-.528-1.202-.748-.522-.22-1.094-.33-1.714-.33-.62 0-1.19.11-1.714.33-.524.22-.95.53-1.278.926-.328.397-.492.856-.492 1.378 0 .522.164.982.492 1.378.328.397.754.707 1.278.927.524.22 1.094.33 1.714.33.62 0 1.19-.11 1.714-.33.524-.22.95-.53 1.278-.926.328-.397.492-.856.492-1.378 0-.353-.068-.678-.202-.974-.135-.296-.32-.555-.558-.777z"/>
          </svg>
        );
      case 'TikTok':
        return (
          <svg {...iconProps} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        );
      default:
        return <div className="w-8 h-8 flex items-center justify-center font-bold">{platform[0]}</div>;
    }
  };

  const socialPlatforms: Array<{ name: SocialPlatform; bgColor: string }> = [
    { name: 'Facebook', bgColor: 'bg-[#1877F2]' },
    { name: 'Instagram', bgColor: 'bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]' },
    { name: 'TikTok', bgColor: 'bg-black' },
    { name: 'Google', bgColor: 'bg-white border-2 border-gray-200' },
    { name: 'YouTube', bgColor: 'bg-[#FF0000]' },
    { name: 'LinkedIn', bgColor: 'bg-[#0A66C2]' },
    { name: 'Amazon', bgColor: 'bg-[#FF9900]' }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      <style jsx>{`
        @keyframes float1 { 0%, 100% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes float2 { 0%, 100% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes float3 { 0%, 100% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes float4 { 0%, 100% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes float5 { 0%, 100% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes float6 { 0%, 100% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes float7 { 0%, 100% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes float8 { 0%, 100% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        
        @keyframes bob1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
        @keyframes bob2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes bob3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes bob4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        
        @keyframes sway1 { 0%, 100% { transform: translateX(0px); } 50% { transform: translateX(-8px); } }
        
        @keyframes pulse1 { 0%, 100% { transform: scale(0.8); } 50% { transform: scale(1.2); } }
        @keyframes pulse2 { 0%, 100% { transform: scale(0.9); } 50% { transform: scale(1.1); } }
        @keyframes pulse3 { 0%, 100% { transform: scale(1); } 50% { transform: scale(0.7); } }
        
        @keyframes complex1 { 
          0% { transform: translateX(0px) translateY(0px); }
          25% { transform: translateX(-12px) translateY(-15px); }
          50% { transform: translateX(12px) translateY(-15px); }
          75% { transform: translateX(12px) translateY(15px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        
        @keyframes complex2 { 
          0% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(-10px) translateY(-5px); }
          66% { transform: translateX(10px) translateY(5px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 relative overflow-hidden z-10">
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
          <div className="mb-6">
            <TriskelionLogo size={80} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Helping Businesses Build Awareness, Foster Connections, and Generate Quality Leads
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-blue-400 font-medium">
            Digital Advertising For Businesses
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TRISKELION helps businesses plan, create, and manage social media that converts followers into leads.
          </p>
          <button className="">
            
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-b from-gray-800 to-gray-900 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              A Fresh Approach to Small Business Ads
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">Build Awareness</h4>
              <p className="text-gray-300 leading-relaxed">
                Boost your brand's visibility with digital ads that are tailored to your target market.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-500/20">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">Generate Leads</h4>
              <p className="text-gray-300 leading-relaxed">
                Drive qualified leads to your business via phone calls, emails, or website inquiries.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-pink-500/20">
                <MessageCircle className="w-8 h-8 text-pink-400" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">Integrated Ecosystem</h4>
              <p className="text-gray-300 leading-relaxed">
                We seamlessly integrate advertising with our photo, video, and design services for a cohesive experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Content Creation</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Thanks to our in-house content and design team, we are able to create on-brand photos, videos, and graphics that resonate with your target market and stand out from the pack.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 bg-white relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Proven Process</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-8"></div>
            <h4 className="text-xl font-semibold mb-8 text-blue-600">The Monthly Routine</h4>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team has developed a collaborative, high-performance monthly routine that ensures we stay consistent with our digital advertising efforts. Resulting in increased brand awareness and lead generation for your business.
            </p>
          </div>

          <div className="space-y-8">
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
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12 bg-gray-50 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">Advertising Platforms</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded mb-6"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              TRISKELION provides professional digital advertising using Facebook, Instagram, TikTok, Google, YouTube, LinkedIn and Amazon platforms. As a team, we select which platforms are most relevant for your business to advertise on.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-8">
              {socialPlatforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:scale-105 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${platform.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg ${platform.name === 'Google' ? 'text-gray-600' : 'text-white'}`}>
                    <SocialIcon platform={platform.name} />
                  </div>
                  <span className="font-medium text-gray-700 text-sm">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6 text-gray-900">What Our Clients Say</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadgeneration;