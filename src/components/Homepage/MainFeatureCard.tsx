import React from 'react';
import Link from "@docusaurus/Link";
import styles from './styles.module.css';
import { MainFeatureCardProps } from './types';

export function MainFeatureCard({
  href,
  image,
  title,
  link,
  description,
}: MainFeatureCardProps) {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
      target={href ? "_blank" : "_self"}
      href={href || ""}
      to={link || ""}>
      <div className={styles.card}>
        <div>
          <img src={image} alt={title} />
        </div>
        <h2>{title}<img src='img/card-arrow.svg' className={styles.cardArrow} /></h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};