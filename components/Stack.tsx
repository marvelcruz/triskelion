import { Fragment } from "react";
import Image from "next/image";
import { FaWordpress, FaGoogleDrive } from "react-icons/fa";
import {
  SiAsana,
  SiZapier,
  SiQuickbooks,
  SiTableau,
  SiEventbrite,
  SiCanva,
  SiGmail,
  SiHubspot,
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

const Stack = ({ index, className }: StackProps) => {
  switch (index) {
    case 0:
      return <SiAsana className={className} />;
    case 2:
      return <SiZapier className={className} />;
    case 4:
      return (
        <Image
          src="/images/gohighlevel.png"
          alt="go high level"
          width={20}
          height={20}
          className={className}
        />
      );
    case 7:
      return (
        <Image
          src="/images/keap.png"
          alt="keap"
          width={20}
          height={20}
          className={className}
        />
      );
    case 9:
      return <SiQuickbooks className={className} />;
    case 11:
      return <SiTableau className={className} />;
    case 12:
      return <FaWordpress className={className} />;
    case 14:
      return <SiEventbrite className={className} />;
    case 16:
      return (
        <Image
          src="/images/capcut.png"
          alt="capcut"
          width={20}
          height={20}
          className={className}
        />
      );
    case 19:
      return <SiCanva className={className} />;
    case 21:
      return <SiGmail className={className} />;
    case 23:
      return <TbFileTypeSql className={className} />;
    case 24:
      return <FaGoogleDrive className={className} />;
    case 26:
      return (
        <Image
          src="/images/alchemer.png"
          alt="alchemer"
          width={20}
          height={20}
          className={className}
        />
      );
    case 28:
      return <SiHubspot className={className} />;
    default:
      return <Fragment />;
  }
};

export default Stack;
