export interface CardProps {
  title: string;
  description: string;
  link: string;
  href?: string;
}

export interface MainFeatureCardProps extends CardProps {
  image: string;
  imageHover?: string;
}