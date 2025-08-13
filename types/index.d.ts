declare type Link = { title: string; href: string };

declare type LinkProps = {
  links: Link[];
  show: boolean;
};

declare type StackProps = {
  index: number;
  className: string;
};

declare type ProjectProp = {
  id: string;
  title: string;
  description: string;
  src: string;
  url: string;
  gitLink: string;
  stacks?: string[];
};

declare type ProjectProps = {
  project: ProjectProp;
};

declare type ProjectStacksProps = {
  id: string;
  className: string;
};

declare type Social = {
  name: string;
  url: string;
};

declare type Socials = {
  socials: social[];
};

declare type SocialIconProps = {
  name: string;
  className: string;
};

declare type MotionValues = {
  variants: Variants;
  initial: string;
  whileInView: string;
};

