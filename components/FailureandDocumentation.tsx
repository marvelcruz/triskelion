"use client";
import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const FailureandDocumentation = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Lessons Learned & Process Improvements",
      problem: {
        icon: "🔥",
        header: "FAILURE ANALYSIS",
        statement: "Valuable Lessons From What Didn't Work",
        description: "Documented failures that led to systemic improvements in my operational approach:",
        failures: [
          {
            title: "Multi-Chapter Social Media Crisis (2022)",
            description: "Rolled out unified content strategy across 18 chapters without testing. Three chapters saw 20% engagement drops due to local audience mismatches.",
            crisis: "Chapter presidents escalated to regional executives within 48 hours",
            response: [
              "Immediate rollout halt and executive accountability",
              "Crisis team assembly (6 specialists in 4 hours)",
              "Daily emergency meetings with affected chapters",
              "Data recovery protocols implementation"
            ],
            outcome: "Full engagement recovery in 14 days",
            lesson: "Always pilot initiatives with 2-3 chapters first"
          },
          {
            title: "GoHighLevel Automation Failure (2021)",
            description: "Built complex weekend automation without team input. Resulted in 200+ misdirected emails and locked-out assistants.",
            crisis: "Member onboarding process completely disrupted",
            response: [
              "Manual override implementation",
              "Step-by-step rollback documentation",
              "Team training sessions",
              "Change control procedures"
            ],
            outcome: "Zero repeat incidents since protocol implementation",
            lesson: "Never deploy automation without testing and training"
          }
        ]
      },
      solution: {
        icon: "🛠️",
        header: "PROCESS IMPROVEMENTS",
        approach: "4-Week Operational Transformation",
        description: "Structured methodology refined through these experiences:",
        phases: [
          {
            title: "Week 1: Discovery & Shadowing",
            tasks: [
              "Workflow observation",
              "Pain point identification",
              "Stakeholder interviews"
            ],
            deliverable: "Current State Report"
          },
          {
            title: "Week 2: Process Mapping",
            tasks: [
              "Value stream analysis",
              "Bottleneck identification",
              "Failure point documentation"
            ],
            deliverable: "Process Flow Diagrams"
          },
          {
            title: "Week 3: Co-Creation",
            tasks: [
              "Solution workshops",
              "User acceptance criteria",
              "Pilot design"
            ],
            deliverable: "Implementation Blueprint"
          },
          {
            title: "Week 4: Controlled Rollout",
            tasks: [
              "Phased implementation",
              "Training materials",
              "Feedback loops"
            ],
            deliverable: "Standard Operating Procedures"
          }
        ]
      },
      result: {
        icon: "📈",
        header: "DOCUMENTED OUTCOMES",
        outcome: "Proven Results From Process Improvements",
        metrics: [
          {
            value: "92%",
            description: "Adoption rate for new cross-chapter training"
          },
          {
            value: "67%",
            description: "Reduction in new chapter setup time (6 weeks → 2 weeks)"
          },
          {
            value: "4→45",
            description: "Emergency response improvement (minutes)"
          },
          {
            value: "25%",
            description: "Performance increase from collaborative campaigns"
          }
        ],
        artifacts: [
          "Social Media Pilot Framework v3.2",
          "Automation Change Control Checklist",
          "Chapter Onboarding Playbook",
          "Crisis Response Protocol"
        ]
      }
    }
  ];

  return (
    <section id="failure-stories" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...motionValues} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Failure Stories & Process Documentation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transparent case studies showing how failures drive systematic improvement
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
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{caseStudy.problem.description}</p>
                  
                  <div className="space-y-6">
                    {caseStudy.problem.failures.map((failure, index) => (
                      <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <h6 className="font-bold text-red-600 dark:text-red-400">{failure.title}</h6>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">{failure.description}</p>
                        
                        <div className="mb-3">
                          <p className="font-semibold text-gray-800 dark:text-gray-200">Crisis Impact:</p>
                          <p className="text-gray-700 dark:text-gray-300">{failure.crisis}</p>
                        </div>
                        
                        <div className="mb-3">
                          <p className="font-semibold text-gray-800 dark:text-gray-200">Response Actions:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            {failure.response.map((action, i) => (
                              <li key={i} className="text-gray-700 dark:text-gray-300">{action}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-3">
                          <p className="font-semibold text-gray-800 dark:text-gray-200">Outcome:</p>
                          <p className="text-gray-700 dark:text-gray-300">{failure.outcome}</p>
                        </div>
                        
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">Key Lesson:</p>
                          <p className="text-gray-700 dark:text-gray-300">{failure.lesson}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Section */}
                <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{caseStudy.solution.icon}</span>
                    <h4 className="font-bold text-blue-700 dark:text-blue-300">{caseStudy.solution.header}</h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">{caseStudy.solution.approach}</h5>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{caseStudy.solution.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {caseStudy.solution.phases.map((phase, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <h6 className="font-bold text-blue-600 dark:text-blue-400 mb-2">{phase.title}</h6>
                        <ul className="mb-3 space-y-1">
                          {phase.tasks.map((task, i) => (
                            <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                              <span className="mr-2">•</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Deliverable: <span className="text-gray-700 dark:text-gray-300">{phase.deliverable}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Result Section */}
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-2">{caseStudy.result.icon}</span>
                    <h4 className="font-bold text-green-700 dark:text-green-300">{caseStudy.result.header}</h4>
                  </div>
                  <h5 className="text-lg font-semibold mb-2">{caseStudy.result.outcome}</h5>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h6 className="font-semibold mb-2">Key Metrics Improved:</h6>
                      <ul className="space-y-3">
                        {caseStudy.result.metrics.map((metric, index) => (
                          <li key={index} className="flex items-baseline">
                            <span className="font-bold text-green-600 dark:text-green-400 text-xl mr-2">
                              {metric.value}
                            </span>
                            <span className="text-gray-700 dark:text-gray-300">{metric.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h6 className="font-semibold mb-2">Documentation Artifacts:</h6>
                      <ul className="space-y-2">
                        {caseStudy.result.artifacts.map((artifact, index) => (
                          <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="mr-2">•</span>
                            <span>{artifact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold text-center text-gray-800 dark:text-gray-200">
                      "These documented processes are now used as regional standards across all 18 chapters"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FailureandDocumentation;