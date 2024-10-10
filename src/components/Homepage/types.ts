export interface CardProps {
  title: string;
  description: string;
  link: string;
  href?: string;
}

export interface MainFeatureCardProps extends CardProps {
  links: { label: string; href: string }[];
}