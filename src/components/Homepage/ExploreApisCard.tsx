import Link from '@docusaurus/Link';
import React from 'react';
import { CardProps } from './types';
import styles from './styles.module.css';

export function ExploreApisCard({ title, description, link, href }: CardProps) {
  return (
    <Link 
      className='explore-apis-section-card'
      target={href ? "_blank" : "_self"}
      href={href || null}
      to={link || ""}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
};