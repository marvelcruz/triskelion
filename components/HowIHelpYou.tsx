"use client";
import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const HowIHelpYou = () => {
  const caseStudies = [
    // ... (keep all previous case studies 1-7 exactly as they were) ...
    {
      id: 8,
      title: "Executive Assistant Plus",
      problem: {
        icon: "🔥",
        header: "YOUR CHALLENGE",
        statement: "When You Need More Than Basic Administrative Support",
        description: "You need an Executive Assistant who can handle complex operational coordination, not just calendar management. You want someone who understands systems, can automate processes, and can work independently on high-level projects while maintaining the reliability of traditional EA support."
      },
      solution: {
        icon: "💡",
        header: "MY SOLUTION",
        approach: "Comprehensive Executive Support with Operational Expertise",
        description: "I provide executive assistant services enhanced by 5+ years of operational coordination experience. I bring systems thinking, automation expertise, and multi-stakeholder management to traditional EA responsibilities—giving you administrative excellence with strategic operational support.",
        services: [
          "Advanced Executive Calendar & Communication Management",
          "Cross-departmental project coordination and follow-through",
          "Process automation and workflow optimization",
          "Financial operations support and reporting coordination",
          "Crisis response support and escalation management",
          "Technical troubleshooting and system coordination",
          "Multi-location administrative oversight"
        ]
      },
      result: {
        icon: "🎯",
        header: "YOUR RESULT",
        outcome: "Executive support that scales with your complexity",
        details: [
          "Administrative excellence with operational sophistication",
          "Proactive problem-solving that prevents executive interruptions",
          "Systems and automation that grow with your business",
          "Recent result: Supported executives to #1 global ranking through comprehensive operational coordination"
        ]
      }
    }
  ];

  return (
    <section id="SolutionsAndResults" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...motionValues} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Problems | Solutions | Delivery</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transforming business challenges into measurable success stories
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((caseStudy) => (
            <motion.div 
              key={caseStudy.id}
              {...motionValues}
              className="relative group"
            >
              {/* Vertical connector line */}
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-4 group-first:top-12 group-last:h-1/2" />

              <div className="relative pl-24">
                {/* Number indicator */}
                <div className="absolute left-0 flex items-center justify-center w-16 h-16 rounded-full bg-primary-500 text-white text-2xl font-bold">
                  {caseStudy.id}
                </div>

                <h3 className="text-2xl font-bold mb-8">{caseStudy.title}</h3>

                {/* Problem Section */}
                <div className="mb-10 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{caseStudy.problem.icon}</span>
                    <h4 className="font-bold text-red-700 dark:text-red-300">{caseStudy.problem.header}</h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">{caseStudy.problem.statement}</h5>
                  <p className="text-gray-700 dark:text-gray-300">{caseStudy.problem.description}</p>
                </div>

                {/* Solution Section */}
                <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{caseStudy.solution.icon}</span>
                    <h4 className="font-bold text-blue-700 dark:text-blue-300">{caseStudy.solution.header}</h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">{caseStudy.solution.approach}</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{caseStudy.solution.description}</p>
                  
                  <div className="mb-6">
                    <h6 className="font-medium mb-2">Key Services:</h6>
                    <ul className="space-y-2">
                      {caseStudy.solution.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Result Section */}
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{caseStudy.result.icon}</span>
                    <h4 className="font-bold text-green-700 dark:text-green-300">{caseStudy.result.header}</h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">{caseStudy.result.outcome}</h5>
                  <ul className="space-y-2">
                    {caseStudy.result.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIHelpYou;