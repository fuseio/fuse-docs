import React from "react";
import styles from "./MainFeatureCard.module.css";
import {MainFeatureCardProps} from "./types";
import Link from "@docusaurus/Link";

export const MainFeatureCard: React.FC<MainFeatureCardProps> = ({
  title,
  description,
  links,
  img,
  imgClassName,
}) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {links.map((link, idx) => (
        <li key={idx}>
          <Link
            target={link.href ? "_blank" : "_self"}
            href={link.href || null}
            to={link.link || ""}
            className={styles.cardLink}
          >
            {link.label}
            <span className={styles.arrow}>→</span>
          </Link>
        </li>
      ))}
    </ul>
    <div className={styles.imgClassName}>
      <img
        src={img}
        alt={title}
        className={`${styles.cardImage} ${styles[imgClassName]}`}
        style={{objectFit: "contain"}}
      />
    </div>
  </div>
);
