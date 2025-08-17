"use client";
import { motion } from "framer-motion";
import { Lightbulb, Shield, Rocket, Trophy, TrendingUp, CheckCircle } from "lucide-react";

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
                <path id="circle-path-learning" d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"/>
              </defs>
              <text className="text-[11px] font-semibold uppercase tracking-wider fill-white drop-shadow-lg opacity-90 hover:opacity-100 hover:text-xs transition-all duration-300">
                <textPath href="#circle-path-learning" startOffset="0%">
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
                <linearGradient id="triskelionGradWidgetLearning" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                  <stop offset="50%" stopColor="#f0f0f0" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glowWidgetLearning">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <g transform="translate(50,50)" filter="url(#glowWidgetLearning)">
                <path d="M 0,0 Q -15,-20 -30,-8 Q -25,8 -12,2 Q -8,-12 0,0" 
                      fill="url(#triskelionGradWidgetLearning)" 
                      stroke="#fff" 
                      strokeWidth="0.5"
                      opacity="0.9"
                      transform="rotate(0)"/>
                
                <path d="M 0,0 Q -15,-20 -30,-8 Q -25,8 -12,2 Q -8,-12 0,0" 
                      fill="url(#triskelionGradWidgetLearning)" 
                      stroke="#fff" 
                      strokeWidth="0.5"
                      opacity="0.9"
                      transform="rotate(120)"/>
                
                <path d="M 0,0 Q -15,-20 -30,-8 Q -25,8 -12,2 Q -8,-12 0,0" 
                      fill="url(#triskelionGradWidgetLearning)" 
                      stroke="#fff" 
                      strokeWidth="0.5"
                      opacity="0.9"
                      transform="rotate(240)"/>
                
                <circle cx="0" cy="0" r="4" fill="url(#triskelionGradWidgetLearning)" stroke="#fff" strokeWidth="0.5" opacity="0.95"/>
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

// Component to show the breakdown details
export const WidgetBreakdown = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-slate-800">Rotating Circle Widget Breakdown</h1>
        
        {/* Live Widget Demo */}
        <div className="relative bg-white rounded-xl p-8 mb-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Live Demo</h2>
          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden">
            <RotatingCircleWidget />
          </div>
        </div>

        {/* Technical Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Structure */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-slate-800">Widget Structure</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Position:</strong> Fixed bottom-right (bottom-6 right-6)</li>
              <li><strong>Size:</strong> 144px × 144px (w-36 h-36)</li>
              <li><strong>Z-index:</strong> 50 (stays on top)</li>
              <li><strong>Hover Effects:</strong> Scale 110% + brightness boost</li>
              <li><strong>Border:</strong> Rainbow gradient border</li>
              <li><strong>Background:</strong> Glassmorphism effect</li>
            </ul>
          </div>

          {/* Animations */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-slate-800">Animations</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Rotating Text:</strong> 40s infinite spin</li>
              <li><strong>Center Logo:</strong> 3s pulse animation</li>
              <li><strong>Particles:</strong> 4s bounce with staggered delays</li>
              <li><strong>Hover:</strong> 300ms scale/brightness transition</li>
              <li><strong>Text Hover:</strong> Size increase on hover</li>
            </ul>
          </div>

          {/* Text Content */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-slate-800">Text Elements</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Rotating Text:</strong> "COMMUNITY • LIFELONG LEARNING • MUSIC • ART • TECH • BUSINESS • LIFESTYLE •"</li>
              <li><strong>Top Label:</strong> "TRISKELION"</li>
              <li><strong>Bottom Label:</strong> "GIVERS GAIN®"</li>
              <li><strong>Font:</strong> 11px, semibold, uppercase, wide tracking</li>
            </ul>
          </div>

          {/* Visual Effects */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-slate-800">Visual Effects</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Border Gradient:</strong> Red → Teal → Blue → Green → Yellow → Pink</li>
              <li><strong>Background:</strong> White/Black gradient with backdrop blur</li>
              <li><strong>Shadow:</strong> Red glow shadow</li>
              <li><strong>Triskelion:</strong> White gradient with glow filter</li>
              <li><strong>Particles:</strong> 3 white dots with bounce animation</li>
            </ul>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold mb-4 text-blue-800">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Responsive Design</h4>
              <p className="text-blue-600">Fixed positioning ensures it stays visible on all screen sizes</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Interactive</h4>
              <p className="text-blue-600">Hover effects provide visual feedback for user interaction</p>
            </div>
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Performance</h4>
              <p className="text-blue-600">CSS animations ensure smooth performance without JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LearningShowcase = () => {
  const learningStories = [
    {
      id: 1,
      title: "How We Built Crisis-Proof Social Media Management",
      subtitle: "From reactive to proactive: Our evolution story",
      challenge: "Early platform changes caught us off-guard",
      insight: "Every setback taught us to build stronger systems",
      evolution: {
        before: "Reacting to platform changes",
        after: "Predicting and preparing for them",
        improvement: "85% faster adaptation to algorithm updates"
      },
      solutions: [
        {
          title: "Smart Monitoring System",
          description: "Real-time alerts for platform changes and engagement drops",
          icon: <TrendingUp className="text-blue-500" />
        },
        {
          title: "Multi-Platform Strategy",
          description: "Never put all content eggs in one platform basket",
          icon: <Shield className="text-green-500" />
        },
        {
          title: "Rapid Response Protocols",
          description: "48-hour pivot plans for any major platform shift",
          icon: <Rocket className="text-orange-500" />
        }
      ],
      results: [
        "Zero client losses during major platform updates",
        "Average 23% faster recovery than industry standard",
        "Client satisfaction improved to 4.9/5"
      ]
    }
  ];

  const principles = [
    {
      icon: <Lightbulb className="text-yellow-500 text-2xl" />,
      title: "Learn Fast, Adapt Faster",
      description: "Every challenge becomes our competitive advantage through rapid iteration."
    },
    {
      icon: <Shield className="text-green-500 text-2xl" />,
      title: "Client Success First",
      description: "We've built safeguards to protect your brand through any digital storm."
    },
    {
      icon: <Trophy className="text-purple-500 text-2xl" />,
      title: "Proven Under Pressure",
      description: "Our systems have been tested by real challenges and emerged stronger."
    }
  ];

  const motionValues = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div {...motionValues} className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
              <Rocket className="text-blue-600 dark:text-blue-400 text-2xl" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built Through Real Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our systems aren't theoretical, they're battle-tested solutions born from real challenges and refined through continuous learning.
            </p>
          </motion.div>

          {/* Core Principles */}
          <motion.div {...motionValues} className="grid md:grid-cols-3 gap-8 mb-20">
            {principles.map((principle, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{principle.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{principle.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Learning Stories */}
          <div className="space-y-16">
            {learningStories.map((story) => (
              <motion.div key={story.id} {...motionValues} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                
                {/* Story Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                      <p className="text-blue-100 text-lg">{story.subtitle}</p>
                    </div>
                    <div className="bg-white/20 p-3 rounded-full">
                      <Lightbulb className="text-2xl" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  
                  {/* Challenge & Insight */}
                  <div className="grid md:grid-cols-2 gap-8 mb-10">
                    <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-400">
                      <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">The Challenge</h4>
                      <p className="text-gray-700 dark:text-gray-300">{story.challenge}</p>
                    </div>
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Our Insight</h4>
                      <p className="text-gray-700 dark:text-gray-300">{story.insight}</p>
                    </div>
                  </div>

                  {/* Evolution */}
                  <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Evolution</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-red-600 dark:text-red-400 font-bold">Before</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{story.evolution.before}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                        <Rocket className="text-blue-500 mx-4 text-xl" />
                        <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-green-600 dark:text-green-400 font-bold">After</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{story.evolution.after}</p>
                      </div>
                    </div>
                    <div className="mt-6 text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{story.evolution.improvement}</p>
                      <p className="text-gray-600 dark:text-gray-300">Performance Improvement</p>
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Solutions We Built</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {story.solutions.map((solution, index) => (
                        <div key={index} className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
                          <div className="mb-4">{solution.icon}</div>
                          <h5 className="font-bold text-gray-900 dark:text-white mb-2">{solution.title}</h5>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{solution.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4 flex items-center">
                      <Trophy className="mr-2" />
                      Proven Results
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {story.results.map((result, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                          <p className="text-gray-700 dark:text-gray-300">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div {...motionValues} className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Benefit from Our Experience?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Our learning becomes your competitive advantage from day one.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Rotating Circle Widget */}
      <RotatingCircleWidget />
    </>
  );
};

export default LearningShowcase;