"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Network, Music, Briefcase, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Type definitions
type FullCaseStudy = {
  clientName: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  services: string[];
  duration: string;
  role?: string;
  images?: string[];
};

type Project = {
  id?: number;
  iid?: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  region: string;
  results: string;
  caseStudyLink: string;
  fullCaseStudy: FullCaseStudy;
};

// Triskelion Logo Component
const TriskelionLogo = ({ size = 80, className = "" }: { size?: number; className?: string }) => (
  <motion.div 
    className={`relative ${className}`}
    style={{ width: size, height: size }}
    animate={{ rotate: 360 }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
  >
    <svg width={size} height={size} viewBox="0 0 120 120" className="drop-shadow-lg">
      <defs>
        <linearGradient id="triskelion-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      
      <circle cx="60" cy="60" r="10" fill="url(#triskelion-gradient)" />
      
      <g transform="translate(60,60)">
        {[0, 120, 240].map((rotation, index) => (
          <g key={index} transform={`rotate(${rotation})`}>
            <path
              d="M 0,0 Q -20,-30 -30,-50 Q -45,-55 -50,-40 Q -45,-30 -30,-25 Q -20,-20 -15,-30 Q -10,-40 -20,-45"
              fill="url(#triskelion-gradient)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.8"
            />
            <circle cx="-30" cy="-40" r="10" fill="url(#triskelion-gradient)" />
          </g>
        ))}
      </g>
    </svg>
  </motion.div>
);

// Rotating Circle Widget Component
const RotatingCircleWidget = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`fixed bottom-4 right-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 z-50 cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-110 ${className}`}>
      <div className="w-full h-full relative rounded-full bg-gradient-to-r from-red-400 via-teal-400 via-blue-400 via-green-400 via-yellow-400 to-pink-400 p-1 shadow-lg shadow-red-400/30">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-black/80 backdrop-blur-md relative overflow-hidden border border-white/10">
          
          {/* Rotating Text */}
          <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '40s' }}>
            <svg viewBox="0 0 180 180" className="w-full h-full">
              <defs>
                <path id="circle-path" d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"/>
              </defs>
              <text className="text-[8px] sm:text-[10px] md:text-[11px] font-semibold uppercase tracking-wider fill-white drop-shadow-lg opacity-90 hover:opacity-100 hover:text-xs transition-all duration-300">
                <textPath href="#circle-path" startOffset="0%">
                  COMMUNITY • LIFELONG LEARNING • MUSIC • ART • TECH • BUSINESS • LIFESTYLE •
                </textPath>
              </text>
            </svg>
          </div>
          
          {/* Stationary Center Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 z-10">
            {/* TRISKELION label above */}
            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 text-[6px] sm:text-[7px] md:text-[8px] font-bold text-white text-shadow-lg tracking-wide">
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
            <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 text-[6px] sm:text-[7px] md:text-[8px] font-bold text-white text-shadow-lg tracking-wide">
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

interface CaseStudy {
  id: number;
  title: string;
  category?: string;
  image?: string;
  problem: {
    icon: string;
    header: string;
    statement: string;
    description: string;
    additionalChallenges?: Array<{
      title: string;
      description: string;
    }>;
  };
  solution: {
    icon: string;
    header: string;
    approach: string;
    description: string;
    services: string[];
    additionalSolutions?: Array<{
      title: string;
      description: string;
    }>;
  };
  result: {
    icon: string;
    header: string;
    outcome: string;
    details: string[];
    additionalResults?: Array<{
      title: string;
      details: string[];
    }>;
  };
}

const SolutionsShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);

  const motionValues = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

 const caseStudiesByCategory = {
    networking: [
      {
        id: 1,
        title: "BNI Regional Social Media Transformation",
        problem: {
          icon: "🔴",
          header: "THE CHALLENGE",
          statement: "Inconsistent Digital Presence Across Chapters",
          description: "BNI regions with amazing networking success stories weren't reaching beyond meeting rooms. Chapters posted sporadically, branding was inconsistent, and quality member attraction was suffering.",
          additionalChallenges: [
            {
              title: "The 90-Minute Gap Problem",
              description: "After weekly chapter meetings end, members struggle to stay top of mind with fellow networkers throughout the week. Referral opportunities are missed and business relationships weaken between meetings due to lack of consistent visibility."
            }
          ]
        },
        solution: {
          icon: "",
          header: "OUR SOLUTION",
          approach: "Unified Regional Social Media Strategy",
          description: "We created cohesive social media strategies that amplify BNI success stories while maintaining professional branding consistency across all chapters.",
          additionalSolutions: [
            {
              title: "Strategic Member Engagement Solutions",
              description: "We developed systems to keep members visible and engaged throughout the entire week, not just during the 90-minute meeting window."
            }
          ],
          services: [
            "Regional brand guidelines and visual consistency",
            "Member success story campaigns and spotlights",
            "Visitor conversion and recruitment funnels",
            "Strategic week-long member engagement systems"
          ]
        },
        result: {
          icon: "",
          header: "THE RESULTS",
          outcome: "Professional digital presence driving quality membership growth",
          details: [
            "35% increase in qualified chapter visitors",
            "Consistent branding across 12 regional chapters",
            "Member stories reaching 4,000+ local business owners monthly",
            "20% improvement in member retention rates"
          ],
          additionalResults: [
            {
              title: "Enhanced Member Engagement & Referral Generation",
              details: [
                "Significant increase in member visibility between meetings",
                "Higher referral activity throughout the week",
                "Stronger member relationships and recall",
                "Improved business opportunities beyond meeting rooms"
              ]
            }
          ]
        }
      },
      {
        id: 2,
        title: "Chamber of Commerce Digital Modernization",
        problem: {
          icon: "",
          header: "THE CHALLENGE",
          statement: "Outdated Communication Methods Limiting Growth",
          description: "Traditional chamber relied on newsletters and events but struggled to engage younger business owners and showcase member value through digital channels."
        },
        solution: {
          icon: "",
          header: "OUR SOLUTION",
          approach: "Modern Digital Engagement Strategy",
          description: "Developed contemporary social media presence highlighting member businesses and creating valuable content for local business community.",
          services: [
            "Member business spotlight campaigns",
            "Event promotion and live coverage",
            "Young professional engagement programs"
          ]
        },
        result: {
          icon: "",
          header: "THE RESULTS",
          outcome: "Modernized presence attracting next-generation business leaders",
          details: [
            "60% increase in social media engagement",
            "25% growth in membership applications",
            "40% more event attendance",
            "Enhanced value perception among existing members"
          ]
        }
      }
    ],
    creative: [
      {
        id: 3,
        title: "Independent Musician Brand Development",
        problem: {
          icon: "",
          header: "THE CHALLENGE",
          statement: "Talented Artist Struggling for Digital Recognition",
          description: "Incredibly talented singer-songwriter with great music but no social media strategy. Amazing live performances weren't translating to online following or streaming growth."
        },
        solution: {
          icon: "",
          header: "OUR SOLUTION",
          approach: "Authentic Artist Brand and Content Strategy",
          description: "Built genuine social media presence showcasing personality, creative process, and musical journey while growing engaged fanbase organically.",
          services: [
            "Artist brand identity, visual direction & Music release promotion campaigns",
            "Behind-the-scenes content creation & Live performance documentation",
            "Instagram Reels and TikTok strategy & Fan community building and engagement"
          ]
        },
        result: {
          icon: "",
          header: "THE RESULTS",
          outcome: "Authentic online presence driving real fan engagement",
          details: [
            "Instagram followers grew from 800 to 5,200",
            "Spotify monthly listeners increased 300%",
            "Booked 3 paid gigs directly from social media",
            "Built email list of 1,200+ engaged fans"
          ]
        }
      },
      {
        id: 4,
        title: "Local Art Gallery Community Building",
        problem: {
          icon: "",
          header: "THE CHALLENGE",
          statement: "Beautiful Gallery Invisible to Local Art Community",
          description: "Stunning gallery space with rotating exhibitions but limited foot traffic. Wasn't effectively reaching local art enthusiasts or building collector relationships."
        },
        solution: {
          icon: "",
          header: "OUR SOLUTION",
          approach: "Community-Centered Gallery Promotion",
          description: "Created social media strategy focusing on artist stories, exhibition experiences, and building local art community connections.",
          services: [
            "Exhibition promotion, artist features & Opening night event coverage",
            "Art education content creation & Collector and patron engagement strategy",
            "Local artist collaboration campaigns"
          ]
        },
        result: {
          icon: "",
          header: "THE RESULTS",
          outcome: "Thriving gallery community with consistent attendance",
          details: [
            "Average opening night attendance doubled",
            "20% increase in art sales during exhibitions",
            "Built email list of 800+ art enthusiasts",
            "Became recognized hub for local art community"
          ]
        }
      }
    ],
    business: [
      {
        id: 5,
        title: "Local Restaurant Post-Pandemic Recovery",
        problem: {
          icon: "",
          header: "THE CHALLENGE",
          statement: "Beloved Restaurant Struggling to Rebuild Customer Base",
          description: "Family restaurant with 15-year community history but significantly reduced foot traffic post-pandemic. Needed to reconnect with loyal customers and attract new ones."
        },
        solution: {
          icon: "",
          header: "OUR SOLUTION",
          approach: "Community-Focused Social Media Revival",
          description: "Developed heartwarming social media strategy showcasing family recipes, community connections, and creating FOMO-inducing food content.",
          services: [
            "Mouth-watering food photography and videography",
            "Family story and restaurant history content",
            "Daily specials and behind-the-scenes content",
            "Customer feature campaigns AND Local partnership and event promotion"
          ]
        },
        result: {
          icon: "",
          header: "THE RESULTS",
          outcome: "Successful recovery with stronger community connections",
          details: [
            "Weekend reservations back to pre-pandemic levels",
            "25% increase in takeout orders from social media",
            "Built Instagram following of 3,500+ local food lovers",
            "Featured in local food blogger posts and media"
          ]
        }
      },
      {
        id: 6,
        title: "Professional Services Firm Lead Generation",
        problem: {
          icon: "",
          header: "THE CHALLENGE",
          statement: "Established Law Firm Invisible in Digital Landscape",
          description: "Respected legal practice with excellent client results but zero online presence. Missing opportunities to attract ideal clients who research attorneys online."
        },
        solution: {
          icon: "",
          header: "OUR SOLUTION",
          approach: "Professional Authority Building Strategy",
          description: "Created educational content strategy positioning attorneys as trusted experts while building credibility through client success stories and legal insights.",
          services: [
            "Legal education content creation AND Referral partner collaboration posts",
            "Client success story development",
            "LinkedIn thought leadership strategy AND Professional networking content"
          ]
        },
        result: {
          icon: "",
          header: "THE RESULTS",
          outcome: "Enhanced professional reputation driving quality inquiries",
          details: [
            "Generate 8-12 qualified leads monthly from social media",
            "Positioned as go-to legal expert in local market",
            "LinkedIn connections grew to 200+ professionals",
            "Referral network expanded through strategic partnerships"
          ]
        }
      }
    ]
  };

  // All case studies in one array for easy navigation with images
  const allCaseStudies: CaseStudy[] = [
    {
      ...caseStudiesByCategory.networking[0], // BNI Regional
      category: "Professional Networking",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
    },
    {
      ...caseStudiesByCategory.creative[0], // Independent Musician
      category: "Music & Arts",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
    },
    {
      ...caseStudiesByCategory.networking[1], // Chamber of Commerce
      category: "Professional Networking", 
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
    },
    {
      ...caseStudiesByCategory.creative[1], // Art Gallery
      category: "Music & Arts",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
    },
    {
      ...caseStudiesByCategory.business[0], // Restaurant
      category: "Local Business",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
    },
    {
      ...caseStudiesByCategory.business[1], // Law Firm
      category: "Professional Services",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % allCaseStudies.length);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + allCaseStudies.length) % allCaseStudies.length);
  };

  // Auto-advance every 8 seconds (was 5 seconds)
  useEffect(() => {
    const interval = setInterval(nextCase, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentCase = allCaseStudies[activeCase];

  return (
    <>
      <section 
        className="pt-24 pb-20 bg-gray-50 dark:bg-gray-900"
        style={{ marginTop: '60px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Triskelion Logo */}
          <motion.div {...motionValues} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <TriskelionLogo size={120} className="mx-auto" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Real Solutions for Real Businesses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every business has unique social media challenges. Here's how we've helped businesses like yours achieve measurable growth.
            </p>
          </motion.div>

          {/* Auto-Cycling Case Study Display */}
          <motion.div {...motionValues} className="mb-8 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              {allCaseStudies.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeCase === index
                      ? 'bg-blue-600 w-6'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Case Study Navigation Buttons - Now Optional */}
          <motion.div {...motionValues} className="mb-12">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                 Click any case study to view it immediately:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {allCaseStudies.map((caseStudy, index) => (
                <button
                  key={caseStudy.id}
                  onClick={() => setActiveCase(index)}
                  className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                    activeCase === index
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {caseStudy.title.split(' ').slice(0, 3).join(' ')}
                </button>
              ))}
            </div>
            
            {/* Navigation Controls - Simplified */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <button
                onClick={prevCase}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg transition-all"
                title="Previous case study"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="text-center px-4">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Case {activeCase + 1} of {allCaseStudies.length} • Auto-cycling
                </span>
              </div>
              
              <button
                onClick={nextCase}
                className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg transition-all"
                title="Next case study"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Active Case Study */}
          <motion.div 
            key={activeCase}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Case Study Header with Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentCase.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                    {currentCase.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">
                  {currentCase.title}
                </h3>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Problem */}
                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{currentCase.problem.icon}</span>
                    <h4 className="font-bold text-red-700 dark:text-red-300">
                      {currentCase.problem.header}
                    </h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {currentCase.problem.statement}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    {currentCase.problem.description}
                  </p>
                  
                  {/* Additional Challenges */}
                  {currentCase.problem.additionalChallenges && (
                    <div className="mt-4 pt-3 border-t border-red-200 dark:border-red-800">
                      {currentCase.problem.additionalChallenges.map((challenge: {title: string, description: string}, index: number) => (
                        <div key={index} className="mb-3">
                          <h6 className="font-semibold text-red-800 dark:text-red-200 text-sm mb-1">
                            {challenge.title}
                          </h6>
                          <p className="text-gray-700 dark:text-gray-300 text-xs">
                            {challenge.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solution */}
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{currentCase.solution.icon}</span>
                    <h4 className="font-bold text-blue-700 dark:text-blue-300">
                      {currentCase.solution.header}
                    </h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {currentCase.solution.approach}
                  </h5>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {currentCase.solution.description}
                  </p>
                  
                  {/* Additional Solutions */}
                  {currentCase.solution.additionalSolutions && (
                    <div className="mb-4 pb-3 border-b border-blue-200 dark:border-blue-800">
                      {currentCase.solution.additionalSolutions.map((solution: {title: string, description: string}, index: number) => (
                        <div key={index} className="mb-2">
                          <h6 className="font-semibold text-blue-800 dark:text-blue-200 text-sm mb-1">
                            {solution.title}
                          </h6>
                          <p className="text-gray-700 dark:text-gray-300 text-xs">
                            {solution.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    {currentCase.solution.services.slice(0, 3).map((service, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <span className="mr-2 text-blue-500">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{service}</span>
                      </div>
                    ))}
                    {currentCase.solution.services.length > 3 && (
                      <p className="text-xs text-gray-500 italic">
                        +{currentCase.solution.services.length - 3} more services
                      </p>
                    )}
                  </div>
                </div>

                {/* Result */}
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{currentCase.result.icon}</span>
                    <h4 className="font-bold text-green-700 dark:text-green-300">
                      {currentCase.result.header}
                    </h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {currentCase.result.outcome}
                  </h5>
                  <div className="space-y-2 mb-3">
                    {currentCase.result.details.map((detail, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <span className="mr-2 text-green-500">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional Results */}
                  {currentCase.result.additionalResults && (
                    <div className="mt-4 pt-3 border-t border-green-200 dark:border-green-800">
                      {currentCase.result.additionalResults.map((result: {title: string, details: string[]}, index: number) => (
                        <div key={index} className="mb-3">
                          <h6 className="font-semibold text-green-800 dark:text-green-200 text-sm mb-2">
                            {result.title}
                          </h6>
                          <div className="space-y-1">
                            {result.details.map((detail: string, detailIndex: number) => (
                              <div key={detailIndex} className="flex items-start text-xs">
                                <span className="mr-2 text-green-500">✓</span>
                                <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Progress Indicators - Removed since we have them at the top now */}
        </div>
      </section>
      
      {/* Rotating Circle Widget */}
      <RotatingCircleWidget />
    </>
  );
};

export default SolutionsShowcase;