export interface CardProps {
  title: string;
  description: string;
  link: string;
  href?: string;
}

export interface MainFeatureCardProps {
  title: string;
  description: string;
  links: {
    label: string;
    link?: string;
    href?: string;
  }[];
  img: string;
  imgClassName: string;
}
