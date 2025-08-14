import { Fragment } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  SiMeta,
  SiZapier,
  SiGoogleads,
  SiHootsuite,
  SiCanva,
  SiGmail,
  SiHubspot,
  SiBuffer,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

interface StackProps {
  index: number;
  className?: string;
}

const Stack = ({ index, className }: StackProps) => {
  switch (index) {
    case 0:
      return <SiMeta className={className} />; // Meta Ads Manager
    case 2:
      return <SiZapier className={className} />; // Marketing Automation
    case 4:
      return (
        <Image
          src="/images/gohighlevel.png"
          alt="GoHighLevel CRM & Marketing"
          width={20}
          height={20}
          className={className}
        />
      ); // All-in-one marketing platform
    case 7:
      return (
        <Image
          src="/images/clickfunnels.png"
          alt="ClickFunnels"
          width={20}
          height={20}
          className={className}
        />
      ); // Lead generation funnels
    case 9:
      return <SiGoogleads className={className} />; // Google Ads
    case 11:
      return <SiHootsuite className={className} />; // Social media management
    case 12:
      return <FaFacebook className={className} />; // Facebook Marketing
    case 14:
      return <FaInstagram className={className} />; // Instagram Marketing
    case 16:
      return (
        <Image
          src="/images/later.png"
          alt="Later Social Media Scheduler"
          width={20}
          height={20}
          className={className}
        />
      ); // Social media scheduling
    case 19:
      return <SiCanva className={className} />; // Design for social content
    case 21:
      return <SiGmail className={className} />; // Email marketing
    case 23:
      return <MdEmail className={className} />; // Email automation
    case 24:
      return (
        <Image
          src="/images/leadpages.png"
          alt="Leadpages"
          width={20}
          height={20}
          className={className}
        />
      ); // Landing pages for lead gen
    case 26:
      return (
        <Image
          src="/images/convertkit.png"
          alt="ConvertKit"
          width={20}
          height={20}
          className={className}
        />
      ); // Email marketing for creators
    case 28:
      return <SiHubspot className={className} />; // Inbound marketing & CRM
    case 30:
      return <FaLinkedin className={className} />; // LinkedIn Marketing
    case 32:
      return <SiBuffer className={className} />; // Social media management
    case 34:
      return <FaYoutube className={className} />; // YouTube Marketing
    case 36:
      return (
        <Image
          src="/images/mailchimp.png"
          alt="Mailchimp"
          width={20}
          height={20}
          className={className}
        />
      ); // Email marketing
    case 38:
      return (
        <Image
          src="/images/activecampaign.png"
          alt="ActiveCampaign"
          width={20}
          height={20}
          className={className}
        />
      ); // Marketing automation
    case 40:
      return (
        <Image
          src="/images/optinmonster.png"
          alt="OptinMonster"
          width={20}
          height={20}
          className={className}
        />
      ); // Lead generation popups
    case 42:
      return (
        <Image
          src="/images/typeform.png"
          alt="Typeform"
          width={20}
          height={20}
          className={className}
        />
      ); // Interactive forms for lead gen
    default:
      return <Fragment />;
  }
};

// Export tool names for reference
export const getMarketingToolName = (index: number): string | null => {
  const tools: Record<number, string> = {
    0: "Meta Ads Manager",
    2: "Zapier",
    4: "GoHighLevel",
    7: "ClickFunnels",
    9: "Google Ads",
    11: "Hootsuite",
    12: "Facebook",
    14: "Instagram",
    16: "Later",
    19: "Canva",
    21: "Gmail",
    23: "Email Automation",
    24: "Leadpages",
    26: "ConvertKit",
    28: "HubSpot",
    30: "LinkedIn",
    32: "Buffer",
    34: "YouTube",
    36: "Mailchimp",
    38: "ActiveCampaign",
    40: "OptinMonster",
    42: "Typeform"
  };
  
  return tools[index] || null;
};

// Group tools by category
export const getMarketingToolsByCategory = () => {
  return {
    "Social Media Platforms": [12, 14, 30, 34], // Facebook, Instagram, LinkedIn, YouTube
    "Social Media Management": [11, 16, 32], // Hootsuite, Later, Buffer
    "Paid Advertising": [0, 9], // Meta Ads, Google Ads
    "Email Marketing": [21, 26, 36, 38], // Gmail, ConvertKit, Mailchimp, ActiveCampaign
    "Lead Generation": [7, 24, 40, 42], // ClickFunnels, Leadpages, OptinMonster, Typeform
    "CRM & Automation": [4, 28, 2, 23], // GoHighLevel, HubSpot, Zapier, Email Automation
    "Content Creation": [19], // Canva
  };
};

export default Stack;