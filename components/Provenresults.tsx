"use client";
import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const ProvenResults = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Proven Leadership & Executive Support Impact",
      problem: {
        icon: "🏆",
        header: "LEADERSHIP IMPACT",
        statement: "Demonstrated Operational Excellence",
        description: "Tangible results from my leadership in operational strategy and team management"
      },
      solution: {
        icon: "🛠️",
        header: "LEADERSHIP APPROACH",
        approach: "Results-Driven Operational Leadership",
        description: "My leadership methodology combines strategic vision with hands-on execution to deliver measurable results",
        services: [
          "Operational Strategy Development & Execution",
          "Team Training & Performance Management",
          "Financial Oversight & Budget Optimization",
          "Crisis Management & System Recovery",
          "Process Automation & Efficiency Gains",
          "Client Retention & Success Strategies"
        ]
      },
      result: {
        icon: "📈",
        header: "KEY ACHIEVEMENTS",
        outcome: "Quantifiable Leadership Results",
        details: [
          "Executive Support Excellence: Provided comprehensive operational support contributing to BNI Alberta South achieving #1 REGION IN CANADA",
          "C-Suite Partnership: Served as dedicated contractor to 2 BNI Regional Executive Directors who achieved #1 GLOBALLY (out of 157 worldwide) in 2024",
          "Cross-Chapter Coordination: Supported and facilitated training for 18+ chapter administrators across the region",
          "Financial Operations Support: Assisted with oversight and coordination of $2.3M+ annual revenue across multi-chapter network",
          "Crisis Response Coordination: Supported leadership through 6 major system recovery operations with 100% uptime restoration",
          "Process Excellence Support: Contributed to 45% reduction in manual processes through automation implementation",
          "Client Success Coordination: Supported operations achieving 85% retention rate across 550+ accounts",
        ]
      }
    }
  ];

  return (
    <section id="ProvenResults" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...motionValues} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Proven Leadership Results</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Documented achievements demonstrating operational excellence and leadership impact
          </p>
        </motion.div>

        <div className="space-y-24">
          {caseStudies.map((caseStudy) => (
            <motion.div 
              key={caseStudy.id}
              {...motionValues}
              className="relative group"
            >
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
                  <div>
                    <h6 className="font-medium mb-2">Key Leadership Areas:</h6>
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
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{detail}</span>
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

export default ProvenResults;