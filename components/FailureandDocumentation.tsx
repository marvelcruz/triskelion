"use client";
import { motion } from "framer-motion";
import { FaLightbulb, FaShieldAlt, FaRocket, FaTrophy } from "react-icons/fa";
import { IoTrendingUp, IoCheckmarkCircle } from "react-icons/io5";

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
          icon: <IoTrendingUp className="text-blue-500" />
        },
        {
          title: "Multi-Platform Strategy",
          description: "Never put all content eggs in one platform basket",
          icon: <FaShieldAlt className="text-green-500" />
        },
        {
          title: "Rapid Response Protocols",
          description: "48-hour pivot plans for any major platform shift",
          icon: <FaRocket className="text-orange-500" />
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
      icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
      title: "Learn Fast, Adapt Faster",
      description: "Every challenge becomes our competitive advantage through rapid iteration."
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-2xl" />,
      title: "Client Success First",
      description: "We've built safeguards to protect your brand through any digital storm."
    },
    {
      icon: <FaTrophy className="text-purple-500 text-2xl" />,
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div {...motionValues} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <FaRocket className="text-blue-600 dark:text-blue-400 text-2xl" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built Through Real Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our systems aren't theoretical—they're battle-tested solutions born from real challenges and refined through continuous learning.
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
                    <FaLightbulb className="text-2xl" />
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
                      <FaRocket className="text-blue-500 mx-4 text-xl" />
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
                    <FaTrophy className="mr-2" />
                    Proven Results
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {story.results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <IoCheckmarkCircle className="text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
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
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningShowcase;