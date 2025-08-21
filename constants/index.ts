import { FaLaptopCode, FaHandshake } from "react-icons/fa";
import { LuBrain, LuMessageCircle } from "react-icons/lu";
import { FaChartLine, FaHashtag, FaLightbulb, FaStopwatch } from "react-icons/fa";

export const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" }, // Matches your about section
  { title: "How I Help You", href: "#SolutionsAndResults" }, // Matches your solutions section
  { title: "Designs", href: "#designs" },
  { title: "Projects", href: "#projects" },
  { title: "Leadgeneration", href: "#Lead Generation" },
  { title: "Socialmediamanagemnet", href: "#Socialmediamanagemnet" },
  { title: "Documentation", href: "#Social Media Crisis Documentation" }, // Matches exact section title
  { title: "Contact", href: "#contact" },
]

export const details = {
  aboutTitle: "Hey, I'm Marvellous!",
  aboutSubtitle: "Executive Assistant | Business Operations Coordinator | 5+ Years Supporting Regional Leadership | Process Automation Expert",
  aboutDesc: [
    "Offering a blend of administrative acumen, technological proficiency, and data-driven insight to propel businesses toward growth. As a virtual assistant and online business partner, I streamline operations, eliminate inefficiencies, and identify untapped opportunities for ethical, growth-oriented entrepreneurs.",
    "Going beyond traditional administrative support, I leverage automation and IT & Customer support to provide a comprehensive approach to business management. My broad skillset includes PROJECT & PRODUCT management, IT SUPPORT, and creative solutions such as GRAPHIC DESIGN and SOCIAL MEDIA MANAGEMENT. This versatility allows for seamless idea integration into diverse business needs, ensuring a tailored strategy for each client.",
    "his proactive approach fosters a collaborative environment, extends your business reach, and solidifies long-term success.",
    "Let's connect and build something truly remarkable together!",
    "When I'm not being all creatively administrative, I enjoy playing soccer and listening to Afrobeats, Amapiano & Jazz"
  ]
}

export const About = {
  AboutTitle: "Your Strategic Partner",
  aboutDesc: [""]
};

export const stacks = {
  title: "Social Media Management Toolkit",
  description: "Professional tools we use to manage, create, and optimize social media campaigns",
  tools: [
    "Meta Business Suite",
    "Hootsuite",
    "Buffer",
    "Sprout Social",
    "Later",
    "Canva Pro",
    "Adobe Creative Cloud",
    "CapCut",
    "Google Analytics",
    "ManyChat",
    "Chatfuel",
    "AspireIQ",
    "TikTok Ads Manager",
    "Google Ads",
    "ChatGPT",
    "Gemini",
    "Claude",
    "Copy.ai"
  ]
};

export const HowIHelpYou = {
  HowIHelpYouTitle: "BNI Regional Challenges | Social Media Solutions | Measurable Results",
  aboutDesc: [""]
};

export const projects = {
  title: "Creative Projects & Campaigns",
  description: "From Nigerian music talent to professional networks, we create authentic digital experiences that build real connections and drive engagement across diverse industries.",
  
  // This is the array your component is looking for
  projects: [
    {
      id: "Jackson campaign",
      title: "jackson - Digital Brand Strategy",
      description: "Comprehensive social media strategy for rising Nigerian artist, building authentic fanbase and driving music streaming growth across platforms.",
      url: "", // Apple Music link when provided
      gitLink: "", // Can link to case study or campaign details
      src: "/images/D1.jpg", // Replace with actual image
      stacks: ["Content Strategy", "Music Marketing", "Fan Engagement"],
      category: "Music & Entertainment",
      results: [
        "Increased Instagram engagement by 180%",
        "Grew Twitter following organically by 250%", 
        "Music streaming sessions up 120%"
      ],
      socialLinks: {
        instagram: "", // Update with actual handle
        twitter: "",
        appleMusic: "" // Will be updated with actual link
      }
    },
    {
      id: "music_digital_presence",
      title: "Artist Brand Development", 
      description: "Building digital presence for talented Nigerian artist through strategic content creation and audience engagement campaigns.",
      url: "", // Artist's main streaming platform
      gitLink: "", // Can link to case study
      src: "/images/D2.jpg", // Replace with actual image
      stacks: ["Artist Branding", "Visual Identity", "Music Promotion"],
      category: "Music & Entertainment",
      results: [
        "Built engaged fanbase from 0 to 2,500 followers",
        "Created viral-worthy content series",
        "Secured playlist placements through social proof"
      ],
      socialLinks: {
        instagram: "", // Update with actual handle
        twitter: "",
        spotify: "" // Will be updated with actual link
      }
    },
    {
      id: "bni_digital_transformation",
      title: "BNI Regional Digital Transformation",
      description: "Led comprehensive social media strategy across 18 BNI chapters, creating consistent branding and driving member engagement through strategic content.",
      url: "",
      gitLink: "",
      src: "/images/D3.jpg", // Replace with actual image
      stacks: ["Multi-Platform Strategy", "Professional Branding", "Community Management"],
      category: "Professional Networks",
      results: [
        "50% increase in member engagement across chapters",
        "Unified brand presence across 18 chapters", 
        "35% more qualified visitor inquiries"
      ]
    },
    {
      id: "afrobeats_playlist_campaign",
      title: "Afrobeats Playlist Promotion Campaign",
      description: "Strategic social media campaign promoting Nigerian Afrobeats artists across multiple streaming platforms and social channels.",
      url: "",
      gitLink: "",
      src: "/images/D4.jpg", // Replace with actual image
      stacks: ["Music Curation", "Cross-Platform Promotion", "Artist Collaboration"],
      category: "Music & Entertainment",
      results: [
        "5,000+ playlist saves within first month",
        "Featured 20+ emerging Nigerian artists",
        "Generated 50K+ streams for featured tracks"
      ]
    },
    {
      id: "crm_automation_system", 
      title: "Smart CRM & Automation Suite",
      description: "Built comprehensive automation systems using GoHighLevel, Keap, and Zapier to streamline operations and improve client experiences.",
      url: "",
      gitLink: "",
      src: "/images/D5.jpg", // Replace with actual image
      stacks: ["Marketing Automation", "CRM Development", "Process Optimization"],
      category: "Business Automation", 
      results: [
        "40% reduction in manual administrative tasks",
        "25% improvement in client retention rates",
        "15% increase in lead conversion"
      ]
    },
    {
      id: "nigerian_music_showcase",
      title: "Nigerian Music Talent Showcase",
      description: "Multi-artist campaign showcasing diverse Nigerian musical talent through coordinated social media presence and streaming promotion.",
      url: "",
      gitLink: "",
      src: "/images/D6.jpg", // Replace with actual image
      stacks: ["Artist Development", "Cultural Marketing", "Community Building"],
      category: "Music & Entertainment",
      results: [
        "Launched 5 artist careers on social platforms",
        "Created 100+ pieces of promotional content",
        "Built combined fanbase of 15,000+ engaged followers"
      ]
    }
  ]
};

// Additional showcase data for enhanced presentation
export const projectShowcase = {
  hero: {
    title: "Where Creativity Meets Strategy",
    subtitle: "From Nigerian music stars to professional networks, we create digital experiences that move people and drive results",
    stats: [
      { number: "500K+", label: "Social Media Impressions" },
      { number: "18", label: "BNI Chapters Managed" },
      { number: "250%", label: "Average Growth Rate" },
      { number: "10+", label: "Creative Campaigns Launched" }
    ]
  },
  
  featured: {
    title: "Featured: Nigerian Music Talent", 
    description: "We're proud to work with incredible Nigerian artists, helping them build authentic connections with fans worldwide.",
    artists: [
      {
        name: "micheal jackson",
        genre: "Afrobeats/Pop",
        description: "Rising star with powerful vocals and authentic storytelling",
        handles: {
          instagram: "", // Update when you get actual handles
          twitter: ""
        }
      },
      {
        name: "Magic", 
        genre: "Afrobeats/R&B",
        description: "Emerging talent with unique sound and growing fanbase", 
        handles: {
          instagram: "@magic", // Update when you get actual handles
          twitter: "@magic"
        }
      }
    ]
  }
};

export const Recognition = {
  title: "Recognition",
  description: "A collection of awards, milestones, and professional acknowledgments highlighting my contributions.",
  projects: [
    {
      id: "port1",
      title: "BNI Executive Directors of the Year (2024)",
      description: "Contributed to operational and engagement strategies that led to BNI Alberta South receiving this honor at the BNI Canada USA Conference; personally recognized by regional leadership for behind-the-scenes support.",
      url: "",
      gitLink: "",
      src: "/images/Moji.png",
      stacks: [""],
    },
    {
      id: "port1",
      title: "BNI Alberta South - Canadian Region of the Year (2022)",
      description: "Played a key operational role in helping our region win this prestigious national award through implementing systems that improved member engagement and chapter performance.",
      url: "",
      gitLink: "",
      src: "/images/BNI.png",
      stacks: ["Operational Strategy", "Member Engagement"],
    },
    {
      id: "port3",
      title: "5-Year Anniversary at BNI",
      description: "Received congratulatory message from Aarti (ARTHY) Ahluwalia, Founder of BizStartup Inc., recognizing my sustained contribution to the world's leading referral marketing organization.",
      url: "",
      gitLink: "",
      src: "/images/arti.png",
      stacks: [""],
    },
    {
      id: "port4",
      title: "Leadership Appreciation",
      description: "",
      url: "",
      gitLink: "",
      src: "/images/Arthy333.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Team Recognition",
      description: "",
      url: "",
      gitLink: "",
      src: "/images/Arthy22.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Colleague Testimonial",
      description: "",
      url: "",
      gitLink: "",
      src: "/images/Megan.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Professional Endorsement",
      description: "",
      url: "",
      gitLink: "",
      src: "/images/Sarah.png",
      stacks: [""],
    },
    {
      id: "port3",
      title: "Client Appreciation",
      description: "",
      url: "",
      gitLink: "",
      src: "/images/Arthy44.png",
      stacks: [""],
    },
  ],
};

export const designs = {
  title: "Design Portfolio",
  description: "A showcase of branding, web design, and visual identity projects. Each piece reflects my approach to combining strategy, aesthetics, and user experience to create memorable brands.",
  projects: [
    {
      id: "design1",
      title: "Green Grub - Brand Identity",
      description: "Vegan restaurant branding that breaks stereotypes with bold colors and playful energy. Replaced earthy vegan clichés with vibrant greens and punchy pinks to attract a broader audience.",
      url: "",
      gitLink: "",
      src: "/images/Greencrub 1.png",
      stacks: ["Branding", "Visual Identity"],
    },
    {
      id: "design2",
      title: "Green Grub - Color Strategy",
      description: "High-contrast palette: fresh green for health, unexpected pink for fun. Designed to communicate that plant-based eating is diverse and exciting.",
      url: "",
      gitLink: "",
      src: "/images/Greencrub 2.png",
      stacks: ["Color Theory"],
    },
    {
      id: "design3",
      title: "Green Grub - Tone of Voice",
      description: "Developed a witty, inviting brand voice to make veganism accessible. Copywriting balances humor and inclusivity to appeal to vegans and flexitarians alike.",
      url: "",
      gitLink: "",
      src: "/images/Greencrub 3.png",
      stacks: ["Copywriting"],
    },
    {
      id: "design4",
      title: "Green Grub - Brand Philosophy",
      description: "Every meal is framed as a bold, joyful statement. Packaging and collateral reinforce the idea that veganism is a celebration, not a sacrifice.",
      url: "",
      gitLink: "",
      src: "/images/Greencrub 4.png",
      stacks: ["Packaging Design"],
    },
    {
      id: "design5",
      title: "Bozin Design - Luxury Web Experience",
      description: "Designed a premium website for Dubai-based interior design studio Bozin. Clean layouts, elegant typography, and smooth transitions mirror their high-end aesthetic.",
      url: "https://bozindesign.ae/",
      gitLink: "",
      src: "/images/BOZEN 1.png",
      stacks: ["Web Design", "UX/UI"],
    },
    {
      id: "design6",
      title: "Bozin Design - Project Showcase",
      description: "Curated portfolio section to highlight luxury renovations and bespoke styling work. Imagery-driven design puts focus on their craftsmanship.",
      url: "https://bozindesign.ae/",
      gitLink: "",
      src: "/images/BOZEN 2.png",
      stacks: ["Art Direction"],
    },
    {
      id: "design7",
      title: "Bozin Design - Responsive Framework",
      description: "Fully responsive site with intentional white space and device-optimized interactions. Ensures a polished experience across all platforms.",
      url: "https://bozindesign.ae/",
      gitLink: "",
      src: "/images/BOZEN 3.png",
      stacks: ["Responsive Design"],
    },
    {
      id: "design8",
      title: "Neat n Nailed - Nail Studio Branding",
      description: "Modern nail studio identity blending minimalism with bold accents. Clean lines meet vibrant colors to reflect creative self-expression.",
      url: "",
      gitLink: "",
      src: "/images/Neat and Nailed.png",
      stacks: ["Branding", "Print Design"],
    },
    {
      id: "design9",
      title: "Neat n Nailed - Visual Language",
      description: "Edgy yet sleek design system using white space and striking details. Proves simplicity can make a powerful statement.",
      url: "",
      gitLink: "",
      src: "/images/Neat and Nailed 2.png",
      stacks: ["Visual Systems"],
    },
    {
      id: "design10",
      title: "Neat n Nailed - Brand Voice",
      description: "Confident, playful tone mirroring their nail art philosophy. Marketing materials balance precision with personality.",
      url: "",
      gitLink: "",
      src: "/images/Neat and Nail 3.png",
      stacks: ["Content Strategy"],
    },
    {
      id: "design11",
      title: "Revo Spot - Grill Kitchen Branding",
      description: "High-energy identity for a shawarma and grill spot. Bold reds and urban vibes evoke heat, passion, and community.",
      url: "",
      gitLink: "",
      src: "/images/Revol.png",
      stacks: ["Branding", "Illustration"],
    },
    {
      id: "design12",
      title: "Revo Spot - Mascot Design",
      description: "Custom rebellious mascot embodying the brand's cheeky spirit. Adds memorability to packaging and merch.",
      url: "",
      gitLink: "",
      src: "/images/Revol 2.png",
      stacks: ["Character Design"],
    },
    {
      id: "design13",
      title: "Revo Spot - Streetwise Aesthetic",
      description: "Typography and graphics inspired by street culture. Positions Revo Spot as a revolution in fast-casual dining.",
      url: "",
      gitLink: "",
      src: "/images/Revol 3.png",
      stacks: ["Typography"],
    },
    {
      id: "design14",
      title: "Vyrux - Cybersecurity Branding",
      description: "Trust-driven identity for an IT security firm. Logo's hidden shield symbolizes invisible protection.",
      url: "",
      gitLink: "",
      src: "/images/Cybersecurity 1.png",
      stacks: ["B2B Branding"],
    },
    {
      id: "design15",
      title: "Vyrux - Visual System",
      description: "Tech-forward design reflecting precision and reliability. Supports services from risk audits to agrotech solutions.",
      url: "",
      gitLink: "",
      src: "/images/Cybersecurity.png",
      stacks: ["Visual Identity"],
    },
    {
      id: "design16",
      title: "Vivace - Fashion Branding",
      description: "Sophisticated identity for a contemporary fashion label. (Project details available on request.)",
      url: "",
      gitLink: "",
      src: "/images/10.png",
      stacks: ["Fashion Branding"],
    },
    {
      id: "design17",
      title: "Fuse - Tech Startup",
      description: "Dynamic branding for a SaaS platform. (Project details available on request.)",
      url: "",
      gitLink: "",
      src: "/images/Fuse.png",
      stacks: ["Tech Branding"],
    },
    {
      id: "design18",
      title: "Solbase - Minimalist Logos",
      description: "Geometric logo series for a design studio. (Project details available on request.)",
      url: "",
      gitLink: "",
      src: "/images/15.png",
      stacks: ["Logo Design"],
    },
    {
      id: "design19",
      title: "ArcTri - Architecture Branding",
      description: "Structural identity for a boutique architecture firm. (Project details available on request.)",
      url: "",
      gitLink: "",
      src: "/images/19.png",
      stacks: ["Architecture Branding"],
    },
  ],
};

export const FailureandDocumentation = {
  FailureStoriesandProcessDocumentationTitle: "Failure Stories & Process Documentation",
  aboutDesc: [""]
};

export const contact = {
  title: "Ready to Grow Your Social Media Presence?",
  description: "Stop posting into the void. We help businesses turn social media followers into paying customers with proven strategies and consistent content that actually converts. Ready to see real results?",
};

export const socials = [
  {
    name: "whatsapp",
    url: "https://wa.me/+2348071895503",
  },
  {
    name: "github",
    url: "",
  },
  {
    name: "email",
    url: "mailto:wecare@triskelion.ink",
  },
  {
    name: "linkedin",
    url: "",
  },
];

export const supports = [
  {
    title: "Social Media Strategy & Management",
    values: [
      "End-to-end platform management (Instagram, TikTok, LinkedIn, etc.) with data-driven content calendars",
      "Competitor analysis and audience research to optimize posting schedules",
      "Community engagement systems to boost interaction rates by 40%+"
    ],
  },
  {
    title: "Paid Social Advertising",
    values: [
      "Meta Ads Manager campaigns with A/B testing frameworks",
      "TikTok/YouTube ad strategy tailored to Gen Z audiences",
      "Retargeting funnels that lower CPA by 30%"
    ],
  },
  {
    title: "Content Production",
    values: [
      "Platform-optimized content (Reels, Stories, Carousels, etc.)",
      "Professional-grade visuals using Adobe Creative Cloud/Canva",
      "Video editing for TikTok/Reels with CapCut/Premiere Pro"
    ],
  },
  {
    title: "Analytics & Reporting",
    values: [
      "Monthly performance reports with actionable insights",
      "UTM tracking and conversion attribution",
      "Benchmarking against industry standards"
    ],
  },
  {
    title: "Influencer Collaboration",
    values: [
      "Influencer vetting and campaign management",
      "Performance-based partnership structures",
      "UGC repurposing systems"
    ],
  },
  {
    title: "Crisis Management",
    values: [
      "24/7 comment moderation protocols",
      "Brand voice guidelines for community managers",
      "Response playbooks for PR incidents"
    ],
  },
  {
    title: "Platform Innovations",
    values: [
      "Early adoption of new features (Threads, AI tools, etc.)",
      "Shopping integration (TikTok Shop, Instagram Checkout)",
      "Chatbot automation for DMs"
    ],
  }
];

export const works = {
  title: "Why Choose Our Social Media Management?",
  subtitle: "We don't just post content, we architect digital growth systems that deliver measurable business impact",
  values: [
    {
      title: "Algorithm Optimization Specialist",
      desc: "Increased engagement rates by 60-120% across 32 client accounts through proprietary content timing and formatting strategies tailored to each platform's evolving algorithms.",
      icon: FaChartLine,
      metrics: [
        "40% higher reach than industry averages",
        "28% lower cost-per-click on ad campaigns"
      ]
    },
    {
      title: "Brand Storytelling Expert",
      desc: "Developed viral content frameworks that grew audience size by 3-5x for service businesses through authentic storytelling and strategic hashtag ecosystems.",
      icon: FaHashtag,
      metrics: [
        "5.8% average engagement rate (vs. 2.1% industry standard)",
        "120% more profile visits from strategic content"
      ]
    },
    {
      title: "Conversion-Focused Strategist",
      desc: "Built sales funnels that convert social traffic into leads, achieving 15-25% conversion rates for e-commerce clients through targeted retargeting and engagement sequences.",
      icon: FaLightbulb,
      metrics: [
        "$3.50 average cost-per-lead (vs. $7.20 market average)",
        "18% of followers become qualified leads"
      ]
    },
    {
      title: "Efficiency Automation Pro",
      desc: "Implement tools and workflows that reduce content production time by 50% while increasing output, using AI-assisted creation and smart scheduling systems.",
      icon: FaStopwatch,
      metrics: [
        "80% less time spent on community management",
        "3x more content produced weekly"
      ]
    }
  ],
  methodology: [
    "Free performance audit of your current social presence",
    "Custom strategy session to align with business goals",
    "Bi-weekly optimization meetings",
    "Dedicated content team (no freelancers)",
    "Monthly growth reports with clear ROI analysis"
  ]
};

export const stories = {
  title: "Client Success Stories",
  desc: "Appreciation & Thank You Messages from Clients and Team Members",
  values: [
    {
      title: "Chris Calon",
      desc: "Thank you Marvellous.",
    },
    {
      title: "Arthy (Aarti), BizStartup.ca",
      desc: "Hi Marvel! Thank you – it works!!!!\nThank you, Marv!!! You're the best!\nThank you, Marvellous, for all you do – I so totally appreciate you!",
    },
    {
      title: "Natoya",
      desc: "Hi Marvel! Thank you! I knew you would have the answer – you are amazing!!!!",
    },
    {
      title: "Sarah Moss (CEO, Cornerstone of Hope)",
      desc: "Thank you, Marvellous. I can confirm we received the e-transfer donation from BNI South. I enjoy being a member of BNI.",
    },
    {
      title: "Internal Team Member (BNI LET Loop)",
      desc: "Thank you, GregT and Marvellous! I have looped the LET into this conversation so they can make the necessary decisions.",
    },
    {
      title: "Greg T (BNI Alberta South)",
      desc: "Thank you Marvellous. Appreciate the quick turn over to resolve it. Have a great rest of your day.",
    },
  ],
};

export const workPlans = {
  title: "Our Social Media Management Approach",
  desc: "We don't just post content, we build strategic digital presence that drives real business results",
  values: [
    {
      title: "We Speak Your Audience's Language",
      desc: "You started your business to serve customers, not to decode algorithm changes. We analyze your ideal customers' online behavior and craft content that resonates, so your social media actually converts scrollers into buyers.",
      icon: "💬"
    },
    {
      title: "Platform-Specific Strategies That Work",
      desc: "Forget copy-pasted content across platforms. We create tailored content for Instagram's visual feed, LinkedIn's professional tone, and TikTok's raw authenticity, maximizing engagement on each channel.",
      icon: "📱"
    },
    {
      title: "Your Dedicated Digital Partner",
      desc: "When you work with us, you're not getting a faceless agency. You get a committed team that learns your brand voice, understands your goals, and becomes an extension of your marketing department.",
      icon: "🤝"
    },
    {
      title: "Growth Without the Overwhelm",
      desc: "Whether you're a solopreneur or established brand, we scale your social presence at your pace. From launching your first strategy to managing multi-platform campaigns, we build sustainable systems that deliver consistent results.",
      icon: "📈"
    },
    {
      title: "We Speak the Social Media Lingo",
      desc: "No need to explain what UGC or CTR means. We're fluent in social media metrics, platform updates, and content trends, so you don't have to waste time catching us up on industry basics.",
      icon: "🔤"
    },
    {
      title: "We Understand Your Daily Reality",
      desc: "Last-minute posts, trending opportunities, and urgent client requests, social media never sleeps. Our flexible workflows adapt to your business rhythm, not the other way around.",
      icon: "⏰"
    }
  ],
  methodology: [
    "Free 30-minute strategy audit",
    "Custom content calendar development",
    "Bi-weekly performance reviews",
    "Quarterly platform strategy updates",
    "24-hour response guarantee"
  ]
};

export const services = {
  title: "Social Media Management Services",
  desc: "Tailored solutions to elevate your brand's digital presence and engagement",
  values: [
    {
      title: "Comprehensive Platform Management",
      desc: "End-to-end management of your social media profiles (Instagram, Facebook, LinkedIn, TikTok) including content scheduling, community engagement, and performance tracking.",
      features: [
        "Daily monitoring and response management",
        "Platform-specific content optimization",
        "Competitor benchmarking analysis"
      ]
    },
    {
      title: "Content Strategy & Creation",
      desc: "Data-driven content calendars with platform-optimized posts including Reels, Stories, and Carousels designed to maximize engagement.",
      features: [
        "Strategic content planning",
        "Professional graphic design",
        "Short-form video production"
      ]
    },
    {
      title: "Paid Social Advertising",
      desc: "Targeted ad campaigns with continuous A/B testing to lower cost-per-acquisition and maximize ROI across Meta, TikTok, and LinkedIn.",
      features: [
        "Audience targeting strategy",
        "Creative testing frameworks",
        "Conversion tracking setup"
      ]
    },
    {
      title: "Influencer & UGC Campaigns",
      desc: "Authentic creator partnerships and user-generated content strategies to build trust and expand reach.",
      features: [
        "Influencer vetting & negotiation",
        "UGC rights management",
        "Performance tracking"
      ]
    },
    {
      title: "Analytics & Performance Reporting",
      desc: "Monthly performance reports with actionable insights and competitive benchmarking.",
      features: [
        "Custom KPI dashboards",
        "Engagement trend analysis",
        "ROI measurement"
      ]
    },
    {
      title: "Social Commerce Integration",
      desc: "Seamless shopping experiences through Instagram Shops, TikTok Shop, and Facebook Marketplace setups.",
      features: [
        "Product catalog management",
        "Shoppable post creation",
        "Conversion optimization"
      ]
    }
  ],
  methodology: [
    "30-minute discovery consultation",
    "Custom strategy development",
    "Bi-weekly performance reviews",
    "Quarterly strategy refreshes"
  ]
};