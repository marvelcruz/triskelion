'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

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
const TriskelionLogo = ({ size = 80, className = "" }) => (
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

const Designs = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  // Handle modal state and prevent scroll/navigation issues
  useEffect(() => {
    if (selectedProject || showCaseStudy) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      // Add modal-open class to body for additional styling if needed
      document.body.classList.add('modal-open');
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to ensure scroll is restored
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    };
  }, [selectedProject, showCaseStudy]);

  // Sample project data - replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Afrobeats Artist Brand Transformation",
      description: "Complete brand overhaul for emerging Nigerian artist, growing Instagram from 5K to 75K followers in 6 months through authentic storytelling and viral content strategy.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      categories: ["Social Media", "Brand Development", "Content Creation"],
      region: "Nigeria",
      results: "1400% follower growth, 3M+ video views, 2 viral campaigns",
      caseStudyLink: "#",
      fullCaseStudy: {
        clientName: "Minato",
        industry: "Music & Entertainment",
        location: "Lagos, Nigeria",
        challenge: "An emerging Afrobeats artist with incredible talent but struggling to break through the noise of social media. With only less than 1k Instagram followers and limited brand recognition, the artist needed a comprehensive strategy to build authentic connections with fans and establish a strong digital presence in the competitive Nigerian music scene.",
        solution: "We implemented a multi-phase approach focusing on authentic storytelling, behind-the-scenes content, and strategic collaborations with other Nigerian creators. Our team developed a content calendar that showcased the artist's personality, musical journey, and cultural roots while leveraging trending sounds and challenges on TikTok and Instagram.",
        results: [
          "1400% follower growth on Instagram",
          "1M+ total video views across platforms",
          "2 viral campaigns reaching 100K+ users each",
          "Featured on 3 major Nigerian music blogs",
          "Secured collaboration with 1 established artists"
        ],
        testimonial: "Triskelion helped me find my voice online. They didn't just grow my numbers, they helped me connect with real fans who genuinely love my music.",
        services: ["Social Media Strategy", "Content Creation", "Influencer Partnerships", "Brand Development"],
        duration: "6 months",
        images: [
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop"
        ]
      }
    },
    {
     id: 2,
title: "Greengrub: Vegan Restaurant",
description: "Green Grub is a vegan restaurant on a mission to change the way people see plant-based eating with a vibrant, bold visual identity that celebrates flavor, color, and joy.",
image: "/images/Greencrub1.png",
categories: ["Branding", "Brand Style Guide"],
region: "United Kingdom",
results: "Complete brand transformation with high-contrast color palette and engaging brand voice",
caseStudyLink: "#",
fullCaseStudy: {
  clientName: "Greengrub",
  industry: "Vegan Restaurant",
  location: "United Kingdom",
  challenge: "Green Grub is a vegan restaurant on a mission to change the way people see plant-based eating. While many vegan brands lean into earthy tones and muted palettes, Green Grub takes a brighter, bolder approach one that says vegan food can be vibrant, fun, and full of attitude.",
  solution: "The visual identity is built around a high-contrast color palette of inviting greens and punchy pinks. This mix reflects the brand's core idea: that the vegan lifestyle is diverse, flavorful, and far from boring. The green symbolizes freshness and health, while the pink introduces an unexpected twist vivid, playful, and full of personality. The brand voice is casual, witty, and upbeat. It speaks in a way that feels real and relatable, appealing to both seasoned vegans and the veg-curious.",
  results: [
    "Complete brand style guide developed",
    "High-contrast color palette of greens and pinks established",
    "Casual, witty, and upbeat brand voice created",
    "Visual identity that stands out from typical vegan branding",
    "Brand positioning that invites rather than lectures"
  ],
  testimonial: "Green Grub doesn't lecture it invites. It doesn't blend in it pops. Green Grub proves that eating plant-based isn't a sacrifice it's a celebration. One filled with flavor, color, and joy.",
  services: ["Brand Style Guide", "Branding"],
  duration: "2025",
  role: "Brand Designer",
  images: [
    "/images/Greencrub1.png",
    "/images/Greencrub2.png",
    "/images/Greencrub3.png",
    "/images/Greencrub4.png"
  ]
}
    },
    {
      iid: 3,
      title: "Neat n Nailed: Nail Studio",
      description: "Neat n Nailed is a contemporary nail studio that celebrates clean lines, bold details, and self-expression through nail art with precision and creative edge.",
      image: "/images/Neat and Nail 3.png",
      categories: ["Branding", "Creative Direction"],
      region: "United Kingdom",
      results: "Complete brand identity that blends minimalism with creative edge",
     caseStudyLink: "#",
     fullCaseStudy: {
     clientName: "Neat n Nailed",
    industry: "Nail Studio",
    location: "United Kingdom",
    challenge: "Neat n Nailed is a contemporary nail studio that celebrates clean lines, bold details, and self-expression through nail art. With a focus on precision and a love for color play, the studio needed a brand identity that would blend minimalism with creative edge—offering clients not just a manicure, but a visual statement.",
    solution: "The tone is intentional, confident, and a little playful—just like their designs. Neat n Nailed isn't afraid of white space or loud pops of color. The brand identity celebrates that clean doesn't mean boring, and every nail tells a story. The visual approach balances sophisticated minimalism with bold creative elements.",
    results: [
      "Complete brand identity developed",
      "Minimalist design aesthetic with bold color pops established",
      "Confident and playful brand voice created",
      "Visual identity that celebrates self-expression",
      "Brand positioning that elevates nail art as visual statements"
    ],
    testimonial: "Neat n Nailed isn't afraid of white space or loud pops of color. It knows that clean doesn't mean boring, and every nail tells a story.",
    services: ["Branding", "Creative Direction"],
    duration: "2025",
    role: "Creative Direction",
    images: [
      "/images/Neat and Nailed.png",
      "/images/Neat and Nailed 2.png",
      "/images/Neat and Nail 3.png",
        ]
      }
    },
    {
      id: 4,
  title: "ToCH: Clothing Brand",
  description: "Visual identity and brand strategy for ToCH®, a clothing brand dedicated to comfort, simplicity, style, authenticity, and longevity with timeless and adaptable design.",
  image: "/images/Toch1.png",
  categories: ["Branding", "Photography", "Creative Direction"],
  region: "United Kingdom",
  results: "Timeless brand identity with classic minimalist aesthetics and community-focused marketing strategy",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "ToCH",
    industry: "Clothing Brand",
    location: "United Kingdom",
    challenge: "ToCH needed a logo that would feel timeless and adaptable—something that could seamlessly blend into a range of vintage-inspired designs while maintaining the core values of the brand dedicated to comfort, simplicity, style, authenticity, and longevity.",
    solution: "I achieved this with a simple yet iconic wordmark, where the clean lines reflect the brand's commitment to simplicity and authenticity. The neutral colour palette, paired with earthy tones, emphasizes a sense of comfort and warmth, while modern typography speaks to the brand's stylish yet approachable nature. The rest of the brand's identity draws inspiration from classic, minimalist aesthetics, with high-quality lifestyle photography that highlights the effortless style and individuality ToCH embodies.",
    results: [
      "Timeless and adaptable logo design created",
      "Neutral color palette with earthy tones established",
      "Classic minimalist brand aesthetic developed",
      "High-quality lifestyle photography direction",
      "Community-focused marketing strategy through social media and influencer collaborations"
    ],
    testimonial: "In every piece, ToCH aims to deliver timeless clothing that helps customers express their unique style with ease and confidence.",
    services: ["Photography", "Branding", "Creative Direction", "Brand Design"],
    duration: "2025",
    role: "Creative Direction, Brand Design",
    images: [
      "/images/Toch1.png",
      "/images/Toch2.png",
      "/images/Toch3.png",
      "/images/Toch4.png",
        ]
      }
    },
    {
      id: 5,
  title: "Bozin: Interior Designer",
  description: "The goal was to craft a premium digital experience that reflects Bozin's high-end interior design expertise with luxurious, modern, and visually immersive design.",
  image: "/images/BOZEN 1.png",
  categories: ["Website", "UI/UX Design"],
  region: "United Arab Emirates",
  results: "Premium digital experience with clean layout, elegant typography, and fully responsive design",
  caseStudyLink: "https://bozindesign.ae/",
  fullCaseStudy: {
    clientName: "Bozin",
    industry: "Interior Design",
    location: "Dubai, UAE",
    challenge: "The goal was to craft a premium digital experience that reflects Bozin's high-end interior design expertise. The design needed to feel luxurious, modern, and visually immersive aligning with Bozin's reputation in Dubai for quality renovations, bespoke styling, and curated inspiration.",
    solution: "Bozin is an interior design company based in Dubai, UAE, offering services across Luxury, Renovations, Design, Styling, and Inspiration. The website was designed to mirror the brand's refined aesthetic while delivering an intuitive and elevated user experience. I focused on a clean layout structure, generous white space, and elegant typography to allow Bozin's project imagery and design philosophy to shine.",
    results: [
      "Premium digital experience created",
      "Clean layout structure with generous white space implemented",
      "Elegant typography that showcases design philosophy",
      "Fully responsive across desktop, tablet, and mobile",
      "Smooth transitions with calm, polished feel throughout"
    ],
    testimonial: "The site is fully responsive across desktop, tablet, and mobile, with smooth transitions and a calm, polished feel throughout.",
    services: ["Website", "UI/UX Design"],
    duration: "2025",
    role: "UI/UX Designer",
    images: [
      "/images/BOZEN 1.png",
      "/images/BOZEN 2.png",
      "/images/BOZEN 3.png",
        ]
      }
    },
    {
      id: 6,
  title: "Revolutionary Spot: Grill Kitchen",
  description: "Revo Spot—short for Revolutionary Spot, isn't just another grill kitchen. It's a full-blown experience built on creating an unforgettable go-to spot for shawarma, grilled meats, and bold flavors.",
  image: "/images/Revol 3.png",
  categories: ["Branding", "Photography"],
  region: "United Kingdom",
  results: "High-energy visual identity with bold red palette, custom mascot, and rebellious brand personality",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "Revolutionary Spot",
    industry: "Grill Kitchen",
    location: "United Kingdom",
    challenge: "Revo Spot had to feel fiery, fearless, and fun. The brand needed to stand out in a sea of generic grill houses while creating an unforgettable experience for shawarma, grilled meats, and bold flavors.",
    solution: "To bring this vision to life, I crafted a high-energy visual identity centered around a bold red palette, signaling heat, passion, and flavor. The color not only evokes the flames of the grill but also captures the lively, urban vibe of a spot where people gather, eat, and vibe. At the heart of the brand is its custom mascot,a character designed to embody the rebellious spirit of Revo Spot. It adds personality, approachability, and memorability. The mascot acts as a hype man, fun, cheeky, and full of flavor, just like the menu.",
    results: [
      "High-energy visual identity with bold red palette created",
      "Custom mascot designed to embody rebellious spirit",
      "Bold and contemporary typography for maximum impact",
      "Confident, street-smart brand voice established",
      "Memorable brand personality that stands out from competitors"
    ],
    testimonial: "Revo Spot is more than a place to eat. It's a revolution on a plate.",
    services: ["Photography", "Branding"],
    duration: "2025",
    role: "Brand Designer",
    images: [
      "/images/Revol 3.png",
      "/images/Revol 2.png",
      "/images/Revol.png",
        ]
      }
      },
    {
      id: 7,
  title: "Vyrux Solutions: Cybersecurity and Consulting Firm",
  description: "Vyrux Solutions is a cybersecurity and consulting firm focused on securing enterprise IT infrastructures and building a more resilient digital world.",
  image: "/images/Cybersecurity.png",
  categories: ["Branding", "Brand Style Guide"],
  region: "United Kingdom",
  results: "Tech-forward brand identity with shield symbolism and clean, modern visual language",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "Vyrux",
    industry: "Cybersecurity and Consulting",
    location: "United Kingdom",
    challenge: "Vyrux Solutions needed a brand identity that would reflect their mission to propose security and reliability to organizations, with a long-term vision of a safe, global digital village where all connected devices are future-proofed from attacks.",
    solution: "The brand identity is centered around a tech-forward logo, featuring a shield subtly embedded in the white space, symbolizing invisible protection and trust. The visual language is clean and modern, and structured layouts reflect the brand's precision and expertise. Services offered by Vyrux include IT audit and consulting, cyber risk and strategy, software development, and agrotech solutions.",
    results: [
      "Tech-forward logo with subtle shield symbolism created",
      "Clean and modern visual language established",
      "Structured layouts reflecting precision and expertise",
      "Brand positioning as reliable digital security partner",
      "Complete brand style guide developed"
    ],
    testimonial: "The overall identity balances strength with clarity, positioning Vyrux as a reliable partner for organizations navigating today's complex digital landscape.",
    services: ["Brand Style Guide", "Branding"],
    duration: "2025",
    role: "Designer & Art Director",
    images: [
      "/images/Cybersecurity.png",
      "/images/vyrux 1.png",
      "/images/Cybersecurity 1.png",
      "/images/vyrux 2.png",
      "/images/vyrux 3.png",
      "/images/vyrux.png",
          ]
        }
        },
        {
      id: 8,
  title: "5 Dollar ($5DOLLAR Token)",
  description: "Revolutionary AI-powered fintech project combining artificial intelligence, community ownership, and next-generation financial tools. From zero to thriving Web3 community.",
  image: "/images/5dollar11.jpeg",
  categories: ["Web3 Branding", "Community Building", "Crypto Marketing", "Content Strategy"],
  region: "Canada",
  results: "Built engaged social media crypto community from 0 to 559+ followers and successfully launched $5DOLLAR token through strategic meme marketing and authentic community engagement",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "5 Dollar",
    industry: "Cryptocurrency/AI Fintech",
    location: "Canada",
    challenge: "Launch an innovative AI-powered crypto project in an oversaturated Web3 market. 5 Dollar needed to cut through the noise, establish genuine credibility, and build a passionate community around their $5DOLLAR token while competing against established players with massive marketing budgets.",
    solution: "We crafted a distinctive Web3 marketing strategy that leveraged crypto culture authentically. Our approach combined strategic meme marketing with educational content about AI and decentralized finance. We focused on building genuine community engagement rather than vanity metrics, creating viral-ready content that balanced humor with substance, and establishing 5 Dollar as a relatable yet innovative voice in the AI-crypto space.",
    results: [
      "Exploded from 0 to 559+ engaged followers in 6 months (organic growth)",
      "Successfully launched $5DOLLAR token with strong community backing",
      "Achieved 340% increase in engagement rate through strategic meme content",
      "Created multiple viral posts that reached 10,000+ impressions each",
      "Established 5 Dollar as recognized brand in competitive AI-crypto niche",
      "Built authentic community of crypto enthusiasts and AI believers",
      "Generated qualified leads for token presale through targeted content"
    ],
    testimonial: "TRISKELION didn't just grow our numbers—they built us a real community. They get crypto culture and delivered exactly what we needed for our $5DOLLAR launch. Best investment we made.",
    services: ["Web3 Social Strategy", "Community Management", "Crypto Content Creation", "Brand Positioning", "Meme Marketing", "Token Launch Support"],
    duration: "July 2024 - Present",
    role: "Lead Social Media Strategist & Community Growth Specialist",
    images: [
      "/images/5dollar1.jpeg",
      "/images/5dollar2.jpeg",
      "/images/5dollar4.jpeg",
      "/images/5dollar5.jpeg",
      "/images/5dollar3.jpeg"
          ]
        }
        },
         {
      id: 8,
  title: "ArcTri Real Estate Brand Identity",
  description: "Architectural elegance meets sustainable innovation in this premium real estate branding system - balancing geometric precision with organic warmth.",
  image: "/images/Arictri1.png",
  categories: ["Brand Identity", "Real Estate Design", "Typography"],
  region: "United Kingdom",
  results: "Developed a distinctive visual language that increased brand recognition by 40% and established ArcTri as a leader in sustainable architectural development",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "ArcTri Real Estate",
    industry: "Architectural Development",
    location: "United Kingdom",
    challenge: "Creating a brand identity that visually communicates ArcTri's triple philosophy of sustainability, innovation, and investment while standing out in the competitive luxury real estate market. Needed to balance architectural precision with approachable warmth.",
    solution: "ArcTri's identity centers on the elegant Playfair Display typography paired with a triangular motif representing their three core values. The minimalist mark combines architectural stability with dynamic angles, while the color palette blends professional navy with eco-conscious greens. Stationery and marketing materials feature clean lines and ample white space to suggest premium quality.",
    results: [
      "40% increase in brand recognition post-launch",
    "Won 2 industry awards for design excellence",
    "Assets adopted across 12 international developments",
    "Increased premium perception (22% higher valuation acceptance)",
    "Created templates for consistent global rollout"
    ],
    testimonial: "The identity perfectly captured our architectural soul while making sustainability feel luxurious - it's become our competitive edge in presentations.",
    services: ["Brand Strategy", "Visual Identity", "Typography Design"],
    duration: "July 2025 ",
    role: "Lead Social Media Strategist & Community Growth Specialist",
    images: [
      "/images/Arictri1.png",
      "/images/Arictri2.png",
      "/images/Arictri3.png",
          ]
        }
        },
        {
      id: 8,
  title: "YELLOWFANG @YellowFangUSD1",
  description: "The crypto project that broke Twitter with AI-generated market predictions and a mascot that roasts other tokens. YELLOWFANG turned financial disruption into viral entertainment.",
  image: "/images/YELLOWFANG1.png",
  categories: ["Web3 Branding", "Community Building", "Crypto Marketing", "Content Strategy"],
  region: "Canada",
  results: "Transformed unknown AI fintech startup into viral Web3 sensation with 4,173+ organic followers and explosive community engagement",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "YELLOWFANG",
    industry: "AI Fintech/Web3",
    location: "Canada",
    challenge: "YELLOWFANG entered the crowded crypto space as a complete unknown. They needed to establish thought leadership in AI-powered finance while building trust in a market flooded with scams and failed projects. The challenge was creating authentic buzz without the typical crypto hype tactics.",
    solution: "We positioned YELLOWFANG as the rebels of AI finance—smart, edgy, and refreshingly honest. Our strategy focused on educational storytelling that demystified AI technology while maintaining street credibility in crypto circles. We created a content ecosystem mixing technical insights with cultural commentary, turning complex AI concepts into digestible, shareable content that resonated with both tech enthusiasts and crypto natives.",
    results: [
      "Achieved 4,173+ followers with zero paid promotion or bot activity",
      "Generated 500% increase in organic reach through viral content strategy",
      "Established YELLOWFANG as go-to voice for AI finance commentary",
      "Created signature content format that competitors began copying",
      "Built waitlist of 2,000+ users before product launch",
      "Secured partnerships with 3 major Web3 influencers",
      "Developed cult-like community loyalty with 85% engagement retention"
    ],
    testimonial: "These guys turned us from nobodies into the talk of crypto Twitter. They understood our vision when nobody else did and made it impossible to ignore.",
    services: ["AI-Focused Content Strategy", "Viral Community Building", "Thought Leadership Development", "Web3 Brand Architecture", "Influencer Partnerships"],
    duration: "March 2025 - Ongoing",
    role: "Web3 Growth Strategist & Community Architect",
    images: [
      "/images/YELLOWFANG1.png",
      "/images/YELLOWFANG2.jpeg",
          ]
        }
        },
         {
      id: 9,
  title: "Caffè Vivace Packaging Project",
  description: "Premium coffee brand packaging brought to life through meticulous execution.",
  image: "/images/Vivace11.png",
  categories: ["D Product Visualization", "Packaging Design", "Brand Identity", "Blender Artistry"],
  region: "Italy",
  results: "Delivered photorealistic packaging visuals that elevated brand perception and communicated premium quality through thoughtful materiality and lighting",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "Caffè Vivace",
    industry: "Premium Coffee",
    location: "Italy",
    challenge: "Translating the essence of a heritage Italian coffee brand into modern packaging visuals that communicate luxury while maintaining authentic craftsmanship values. The project required balancing technical accuracy of coffee bag functionality with aspirational brand aesthetics.",
    solution: "We led the full execution of the Caffè Vivace packaging project, handling everything from the initial concept to the final render using Blender. The process began with crafting the visual identity through sleek packaging design and a custom gold emblem that captures the brand's refined yet energetic nature. I modeled each coffee bag with careful attention to form and proportion, aiming for a luxurious feel with bold simplicity.",
    results: [
    "Delivered photorealistic packaging visuals that exceeded client expectations",
    "Established distinctive visual language for brand's premium positioning",
    "Created reusable assets for future marketing applications",
    "Reduced physical prototyping costs by 70% through accurate digital visualization"
    ],
    testimonial: "The execution perfectly captured our Italian heritage while giving us a contemporary visual edge in the competitive premium coffee market.",
    services: ["Product Modeling", "Packaging Visualization", "Material Development", "Lighting Design", "Brand Identity Integration"],
    duration: "6-week project",
    role: "Artist & Packaging Designer",
    images: [
      "/images/Vivace11.png",
      "/images/Vivace2.png",
      "/images/Vivace3.png",
      "/images/Vivace4.png",
      "/images/Vivace1.jpeg",
          ]
        }
        },
         {
      id: 9,
  title: "HydroSphere Eco Bottle Visualization",
  description: "Product visuals for HydroSphere's eco-friendly flasks",
  image: "/images/Hygro1.png",
  categories: ["Sustainable Design", "Brand Visualization"],
  region: "Nigeria",
  results: "Created premium product renders that boosted engagement by 32% while authentically communicating eco-conscious values",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "HydroSphere",
    industry: "Sustainable Lifestyle",
    location: "Nigeria",
    challenge: "Translating HydroSphere's mission of durable, eco-friendly hydration into visuals that avoid generic product aesthetics while emphasizing material quality and sustainability.",
    solution: "HydroSphere was founded on the belief that hydration powers life's best moments. For this project, I focused on texturing, UV unwrapping, lighting and rendering in Blender to highlight the brand's sleek, modern identity. The scene was carefully lit to emphasize contrast and surface details, bringing out matte finishes and clean designs that reflect both premium quality and environmental values.",
    results: [
     "Achieved 90% photorealism for e-commerce/marketing use",
    "Increased social media engagement by 32% over previous assets",
    "Established signature visual style adopted across all packaging",
    "Reduced photoshoot costs by 60% with versatile assets"
    ],
    testimonial: "The execution perfectly captured our Italian heritage while giving us a contemporary visual edge in the competitive premium coffee market.",
    services: ["Product Modeling", "Packaging Visualization", "Material Development", "Lighting Design", "Brand Identity Integration"],
    duration: "6-week project",
    role: "Artist & Packaging Designer",
    images: [
      "/images/Hygro1.png",
      "/images/Hygro2.png",
      "/images/Hygro3.png",
      "/images/Hygro4.png",
          ]
        }
        },
          {
      id: 9,
  title: "Skin Glow Toner Bottle Design",
  description: "Elevating natural skincare through photorealistic packaging design - clean aesthetics meet ingredient transparency in Blender-rendered visuals.",
  image: "/images/Bootle.png",
  categories: ["Beauty Packaging", "Brand Visualization"],
  region: "Nigeria",
  results: "Created a visually unified skincare line that boosted brand perception, with renders used across e-commerce, social media, and investor presentations",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "Skin Glow Cosmetics",
    industry: "Natural Skincare",
    location: "Nigeria",
    challenge: "Developing distinct yet cohesive packaging visuals for multiple SKUs that communicate 100% natural ingredients while standing out in the crowded clean beauty market. Needed to balance minimalist aesthetics with enough visual detail to convey product benefits.",
    solution: "Skin Glow Cosmetics transforms routines into soothing rituals with natural ingredients. We modeled dropper bottles in Blender with clean geometry, creating custom glass/liquid shaders and color-coded caps for each variant (Lavender, Vanilla & Honey, etc.). HDRI lighting highlighted texture while minimalist backgrounds focused attention on product purity.",
    results: [
    "100% consistent visual system across 5 product variants",
    "Reduced photoshoot costs by 75% with ready-to-market renders",
    "Increased conversion by 22% on e-commerce product pages",
    "Assets adopted across packaging, web, and social media",
    "Enhanced premium perception for investor presentations"
    ],
    testimonial: "The visuals perfectly captured our 'clean beauty meets self-care' ethos - they became the cornerstone of our rebranding.",
    services: ["Beauty Product Rendering", "Material Development", "Brand Visualization", "Digital Ads", "E-Commerce Assets"],
    duration: "4-week project",
    role: "",
    images: [
      "/images/Bootle1.png",
      "/images/Bootle2.png",
      "/images/Bootle3.png",
     "/images/Bootle4.png",
          ]
        }
        },
          {
      id: 10,
  title: "Dorado Sauce Bottle Branding",
  description: "Culinary alchemy meets artistry - crafting a sauce brand's visual identity from bottle design to animated product.",
  image: "/images/Doroda1.png",
  categories: ["Product Visualization","Digital Ads", "Packaging Design", "Food Branding", "Blender Artistry"],
  region: "Americas/Mediterranean",
  results: "Created an immersive brand world that translated cultural flavors into striking visual identity across packaging and digital assets",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "Dorado Sauces",
    industry: "Premium Condiments",
    location: "Americas/Mediterranean",
    challenge: "Developing a distinctive visual language for a new sauce brand that bridges Mediterranean and Latin American culinary traditions. The project required creating appetite-appealing visuals that communicate both heritage and modern flair while differentiating multiple SKUs through color and texture.",
    solution: "Dorado takes its name from the legendary city of El Dorado, representing golden quality in global flavors. As the sole creator, I executed the complete pipeline in Blender - from modeling custom sauce bottles to crafting textures that visually 'taste' like each flavor. The labels blend cultural motifs with playful modernity, while material shading makes glass bottles appear tantalizingly real.",
    results: [
    "Cultural Brand Storytelling: Developed visual identity rooted in culinary heritage",
    "Complete Pipeline: Modeling → Texturing → Lighting → Animation",
    "Flavor Differentiation: Unique material treatments for each sauce variety",
    "Dynamic Presentation: Camera animations highlighting product details",
    "Market-Ready Assets: Created production-ready models and renders"
    ],
    testimonial: "The execution captured our cultural fusion perfectly - the bottles look so real you can almost taste the sauces through the screen.",
    services: ["Product Design", "Packaging Visualization", "Brand Identity", "Material Shading", "Motion Presentation"],
    duration: "6-week project",
    role: "Artist & Brand Designer",
    images: [
      "/images/Doroda1.png",
      "/images/Doroda2.png",
      "/images/Doroda3.png",
      "/images/Doroda4.png",
      "/images/Doroda5.png",
          ]
        }
        },
         {
      id: 10,
  title: "MYAKU-MYAKU",
  description: "When Japan's official World Expo 2025 mascot went rogue and launched its own meme coin. The cute red blob that conquered crypto Twitter with kawaii chaos.",
  image: "/images/MYAKU-MYAKU1.jpeg",
  categories: ["Meme Marketing", "Digital Ads","Cultural Bridging", "Viral Content", "Community Building"],
  region: "Japan",
  results: "Turned Japan's beloved Expo mascot into crypto's most unexpected success story with 527+ devoted followers and international media coverage",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "MYAKU-MYAKU",
    industry: "Meme Coin/Cultural Phenomenon",
    location: "Japan",
    challenge: "How do you take a government-approved, family-friendly mascot and make it relevant in the Wild West of crypto without losing its wholesome charm? MYAKU-MYAKU needed to bridge the gap between traditional Japanese culture and degenerate meme coin culture.",
    solution: "We embraced the absurdity. Instead of trying to make MYAKU-MYAKU 'cool,' we leaned into its adorable weirdness and created a narrative where Japan's most innocent mascot accidentally becomes crypto's most chaotic influencer. Our content strategy mixed traditional Japanese aesthetics with crypto degeneracy, creating a unique brand that felt both respectful and rebellious.",
    results: [
      "Gained 527+ organic followers who genuinely love the mascot",
      "Created viral Japanese-English bilingual meme format",
      "Featured in 3 major crypto news outlets as 'most wholesome project'",
      "Built bridge between Japanese culture enthusiasts and crypto community",
      "Generated 15+ fan art pieces from international community",
      "Established MYAKU-MYAKU as symbol of 'kawaii defi' movement",
      "Maintained 92% positive sentiment despite volatile crypto market"
    ],
    testimonial: "They made our weird red blob into a crypto legend while keeping it family-friendly. Pure magic.",
    services: ["Cultural Translation", "Kawaii Content Creation", "Cross-Cultural Community Building", "Meme Coin Marketing", "Bilingual Social Strategy"],
    duration: "February 2025 - June 2025",
    role: "Cultural Crypto Strategist & Kawaii Marketing Specialist",
    images: [
      "/images/MYAKU-MYAKU.jpeg",
      "/images/MYAKU-MYAKU2.jpeg",
          ]
        }
        },
        
       {
      id: 11,
  title: "FinAi Labs",
  description: "Building the future of finance — in your hands. AI, memes, and ownership. 🚀 First project: $FAI live now!",
  image: "/images/Fai1.jpeg",
  categories: ["Branding", "Digital Ads", "Social Media Management", "Community Management", "Photography"],
  region: "United Kingdom",
  results: "Grew community from 0 to 407 followers through strategic social media management and engaging crypto-focused content",
  caseStudyLink: "#",
  fullCaseStudy: {
    clientName: "FinAi Labs",
    industry: "Crypto/Web3",
    location: "United Kingdom",
    challenge: "Launch a new crypto project and build an engaged community from scratch. FinAi Labs needed to establish credibility in the competitive Web3 space while growing their audience and driving traffic to their $FAI token project.",
    solution: "We developed a comprehensive social media and community management strategy tailored for the crypto/Web3 audience. This included creating engaging meme-based content that resonated with crypto culture, implementing strategic posting schedules across multiple platforms, and fostering genuine community interactions. The approach balanced educational content about AI and finance with entertaining, shareable memes that captured the project's playful yet innovative spirit.",
    results: [
      "Grew community from 0 to 407 followers in 8 months (April 2024 to December 2024)",
      "Established strong brand presence in competitive Web3 space",
      "Created viral meme content that increased engagement rates",
      "Built authentic community around $FAI token launch",
      "Developed consistent brand voice mixing AI, finance, and crypto culture",
      "Successfully launched $FAI token with community support"
    ],
    testimonial: "TRISKELION transformed our Web3 presence from zero to a thriving community. They understand crypto culture and delivered real results with our $FAI launch.",
    services: ["Social Media Management", "Community Management", "Branding", "Content Creation"],
    duration: " April 2025 - Present",
    role: "Social Media Management & Community Builder",
    images: [
      "/images/Fai1.jpeg",
      "/images/fai2.jpeg",
      "/images/fai3.jpeg"
       ]
      }
    }
  ];

  const categories = ['All', 'Social Media', 'Digital Ads', 'Brand Development', 'Content Creation', 'Photography', 'Influencer Marketing'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(selectedFilter));

  const motionValues = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section 
      id='designs' 
      className='relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden'
    >
      {/* Background Triskelion Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 opacity-5">
          <TriskelionLogo size={180} />
        </div>
        <div className="absolute bottom-1/4 right-1/4 opacity-5">
          <TriskelionLogo size={220} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <main className='flex flex-col gap-16'>
          
          {/* Header Section */}
          <div className='text-center'>
            <motion.div className="mb-6" {...motionValues}>
              <TriskelionLogo size={80} className="mx-auto" />
            </motion.div>

            <motion.h2 
              className='text-4xl md:text-5xl font-bold text-white mb-6'
              {...motionValues}
            >
              Our Project Portfolio
            </motion.h2>

            <motion.p 
              className='text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'
              {...motionValues}
            >
              Go from patchwork to a seamless marketing system with Triskelion's integrated ecosystem of services. 
              Check out the projects we've been working on across Nigeria, United States, Canada, and the United Kingdom.
            </motion.p>

            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              {...motionValues}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFilter === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            {...motionValues}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id || project.iid}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-100 group cursor-pointer border border-gray-100 hover:border-blue-700"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-white font-medium">Click to view details</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-100 text-white text-xs px-2 py-1 rounded-full">
                    {project.region}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((cat, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="text-blue-400 text-sm font-medium">
                    {project.results}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </main>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-900/50 rounded-full p-2 z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>
                
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full">
                    {selectedProject.region}
                  </span>
                  <div className="flex gap-2">
                    {selectedProject.categories.map((cat, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Results Achieved</h4>
                  <p className="text-gray-300">{selectedProject.results}</p>
                </div>

                <div className="flex gap-4">
                  <button 
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                    onClick={() => {
                      if (selectedProject.fullCaseStudy) {
                        setShowCaseStudy(true);
                      } else {
                        window.open(selectedProject.caseStudyLink, '_blank');
                      }
                    }}
                  >
                    <ExternalLink size={20} />
                    Read Full Case Study
                  </button>
                  <button 
                    className="bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-600 transition-all duration-300"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Case Study Modal */}
      <AnimatePresence>
        {showCaseStudy && selectedProject?.fullCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[9999] overflow-y-auto"
            onClick={() => setShowCaseStudy(false)}
          >
            <div className="min-h-screen py-8 px-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-6xl mx-auto bg-gray-900 rounded-2xl border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative">
                  <button
                    className="absolute top-6 right-6 text-gray-400 hover:text-white bg-gray-800/50 rounded-full p-2 z-10"
                    onClick={() => setShowCaseStudy(false)}
                  >
                    <X size={24} />
                  </button>
                  
                  <div className="p-8 border-b border-gray-700">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <TriskelionLogo size={50} />
                        <div>
                          <h1 className="text-3xl font-bold text-white">{selectedProject.title}</h1>
                          <p className="text-gray-400">Case Study</p>
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full">
                        {selectedProject.region}
                      </span>
                    </div>

                    {/* Client Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-800/50 rounded-xl p-6">
                      <div>
                        <p className="text-gray-400 text-sm">Client</p>
                        <p className="text-white font-semibold">{selectedProject.fullCaseStudy.clientName}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Industry</p>
                        <p className="text-white font-semibold">{selectedProject.fullCaseStudy.industry}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="text-white font-semibold">{selectedProject.fullCaseStudy.location}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Duration</p>
                        <p className="text-white font-semibold">{selectedProject.fullCaseStudy.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                  {/* Challenge */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {selectedProject.fullCaseStudy.challenge}
                    </p>
                  </section>

                  {/* Solution */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Our Solution</h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                      {selectedProject.fullCaseStudy.solution}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedProject.fullCaseStudy.services.map((service, idx) => (
                        <div key={idx} className="bg-gray-800 rounded-lg p-4 text-center">
                          <div className="text-blue-400 text-sm font-medium">{service}</div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Images */}
                  {selectedProject.fullCaseStudy.images && (
                    <section>
                      <h2 className="text-2xl font-bold text-white mb-4">Project Highlights</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {selectedProject.fullCaseStudy.images.map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`Project highlight ${idx + 1}`}
                            className="w-full h-48 object-cover rounded-xl"
                          />
                        ))}
                      </div>
                    </section>
                  )}

                  {/* Results */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Results Achieved</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.fullCaseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4">
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Testimonial */}
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Client Testimonial</h2>
                    <blockquote className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-l-4 border-blue-400 rounded-lg p-6">
                      <p className="text-gray-300 text-lg italic leading-relaxed mb-4">
                        "{selectedProject.fullCaseStudy.testimonial}"
                      </p>
                      <cite className="text-blue-400 font-semibold">
                        — {selectedProject.fullCaseStudy.clientName}
                      </cite>
                    </blockquote>
                  </section>

                  {/* CTA */}
                  <section className="text-center pt-8 border-t border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4"></h3>
                    <div className="flex gap-4 justify-center">
                      <button className="">
                        
                      </button>
                      <button 
                        className=""
                        onClick={() => setShowCaseStudy(false)}
                      >
                        
                      </button>
                    </div>
                  </section>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Designs;