"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const motionValues = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 }
};

interface CaseStudy {
  id: number;
  client: string;
  industry: string;
  challenge: string;
  whatWeDidDifferently: string;
  results: string[];
  clientQuote: string;
  timeframe: string;
}

const HowWeHelpYou = () => {
  const [activeTab, setActiveTab] = useState('cases');

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      client: "Local Restaurant Chain",
      industry: "Food & Beverage",
      challenge: "Inconsistent posting, low engagement, struggling to convert followers to customers",
      whatWeDidDifferently: "Instead of just posting pretty food pics, we created content that actually drove reservations. We focused on showcasing busy nights, happy customers, and limited-time offers that created urgency.",
      results: [
        "35% increase in reservation calls within 60 days",
        "Doubled Instagram followers with LOCAL audience",
        "Generated $12,000 in trackable revenue from social posts",
        "Reduced owner's time spent on social media by 90%"
      ],
      clientQuote: "Finally, social media that actually brings customers through the door instead of just likes.",
      timeframe: "3 months"
    },
    {
      id: 2,
      client: "B2B Software Startup",
      industry: "Technology",
      challenge: "Zero social media presence, founder too busy to post, needed to build credibility fast",
      whatWeDidDifferently: "We turned the founder into a thought leader by ghostwriting LinkedIn posts about real industry problems. No generic business quotes - just honest insights from someone actually building a company.",
      results: [
        "Grew LinkedIn following from 200 to 2,000 in 4 months",
        "Generated 15 qualified B2B leads directly from LinkedIn",
        "Secured 3 podcast interview invitations",
        "Increased website traffic by 180%"
      ],
      clientQuote: "They made me sound smart without making me sound fake. The leads started coming within weeks.",
      timeframe: "4 months"
    },
    {
      id: 3,
      client: "Local Fitness Studio",
      industry: "Health & Fitness",
      challenge: "Competing with big gym chains, membership growth stalled, high churn rate",
      whatWeDidDifferently: "We focused on the community aspect that big gyms can't offer. Real member transformations, small class sizes, personal attention. We made people feel like they'd be joining a family, not just a gym.",
      results: [
        "50% increase in trial class bookings",
        "Membership retention improved by 25%",
        "Built waitlists for popular classes",
        "Increased membership revenue by $8,500/month"
      ],
      clientQuote: "We're now the 'small gym everyone wants to join' instead of just another fitness option.",
      timeframe: "6 months"
    }
  ];

  const ourProcess = [
    {
      step: "Week 1",
      title: "Deep Dive & Setup",
      description: "We audit your current social media, understand your business goals, and set up tracking systems",
      deliverables: ["Complete social media audit", "Competitor analysis", "Goals & KPI setup", "Content calendar template"]
    },
    {
      step: "Week 2-4", 
      title: "Strategy & Content Creation",
      description: "We create your custom strategy and start producing content that actually converts",
      deliverables: ["Custom social media strategy", "First month's content created", "Posting schedule established", "Brand voice guidelines"]
    },
    {
      step: "Ongoing",
      title: "Execute & Optimize", 
      description: "We post, engage, track results, and constantly improve based on what's actually working",
      deliverables: ["Daily posting & engagement", "Weekly performance reviews", "Monthly strategy adjustments", "Ongoing content creation"]
    }
  ];

  const monthlyDeliverables = {
    reports: [
      "Performance dashboard with real business metrics (not just vanity metrics)",
      "Content performance analysis - what worked, what didn't, why",
      "Audience growth and engagement quality report", 
      "Lead generation and conversion tracking",
      "Competitive analysis updates",
      "Next month's strategy recommendations"
    ],
    content: [
      "20-30 custom posts per platform per month",
      "All graphics, captions, and hashtags included",
      "Story content and highlights management",
      "Community management and response handling",
      "Monthly content calendar for next month",
      "Brand photo and video creation (when needed)"
    ],
    communication: [
      "Weekly check-in emails with performance updates",
      "Monthly 30-minute strategy call",
      "Direct access to our team via Slack or email",
      "Quarterly business review and planning session",
      "Emergency support for time-sensitive posts",
      "Monthly competitive insights and industry trends"
    ]
  };

  const sops = [
    {
      title: "Content Approval Process",
      description: "How we ensure you're always happy with what goes out",
      steps: [
        "We create content based on approved strategy",
        "All posts sent for review 48 hours before posting",
        "You have 24 hours to request changes", 
        "Emergency approval process for time-sensitive content",
        "Monthly content themes approved in advance"
      ]
    },
    {
      title: "Crisis Management",
      description: "What happens when things go wrong online",
      steps: [
        "Immediate notification within 1 hour of any issues",
        "Draft response provided within 2 hours",
        "Your approval required before any crisis response",
        "Post-crisis analysis and prevention planning",
        "Media escalation protocols if needed"
      ]
    },
    {
      title: "Performance Review Process", 
      description: "How we track success and make improvements",
      steps: [
        "Weekly performance data collection",
        "Monthly report creation and analysis",
        "Strategy adjustment recommendations",
        "Quarterly goal setting and review",
        "Annual contract and pricing review"
      ]
    }
  ];

  return (
    <section id="how-we-help" className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div {...motionValues} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
            What's Actually In It For You?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Forget the fluff. Here's what our clients actually get: more customers, more revenue, and their time back.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div {...motionValues} className="flex justify-center mb-12">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700">
            {[
              { id: 'cases', label: 'Real Results' },
              { id: 'process', label: 'Our Process' },
              { id: 'deliverables', label: 'What You Get' },
              { id: 'sops', label: 'How We Work' }
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

        {/* Case Studies Tab */}
        {activeTab === 'cases' && (
          <motion.div
            key="cases"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-1">
                      {study.client}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {study.industry} • {study.timeframe}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">The Problem:</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{study.challenge}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">What We Did Differently:</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{study.whatWeDidDifferently}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">The Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <blockquote className="italic text-slate-700 dark:text-slate-300">
                    "{study.clientQuote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Process Tab */}
        {activeTab === 'process' && (
          <motion.div
            key="process"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {ourProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{step.title}</h3>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        {step.step}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{step.description}</p>
                    <div>
                      <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">You'll receive:</h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((item, idx) => (
                          <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                            <span className="text-green-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Deliverables Tab */}
        {activeTab === 'deliverables' && (
          <motion.div
            key="deliverables"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                What You Get Every Month
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                No surprises. Here's exactly what we deliver, every single month.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                  📊 Reports & Analytics
                </h4>
                <ul className="space-y-2">
                  {monthlyDeliverables.reports.map((item, idx) => (
                    <li key={idx} className="text-sm text-blue-700 dark:text-blue-300 flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                  🎨 Content & Creative
                </h4>
                <ul className="space-y-2">
                  {monthlyDeliverables.content.map((item, idx) => (
                    <li key={idx} className="text-sm text-purple-700 dark:text-purple-300 flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                  💬 Communication & Support
                </h4>
                <ul className="space-y-2">
                  {monthlyDeliverables.communication.map((item, idx) => (
                    <li key={idx} className="text-sm text-green-700 dark:text-green-300 flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* SOPs Tab */}
        {activeTab === 'sops' && (
          <motion.div
            key="sops"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                How We Work Together
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Clear processes so you always know what to expect from us.
              </p>
            </div>

            {sops.map((sop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {sop.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{sop.description}</p>
                
                <div className="space-y-3">
                  {sop.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {stepIdx + 1}
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div {...motionValues} className="text-center mt-16">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
              Ready to See These Results for Your Business?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              Stop wondering if social media actually works for your business. 
              Let's show you exactly how it can grow your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Show Me How - $700/month
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
              >
                See More Examples
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeHelpYou;