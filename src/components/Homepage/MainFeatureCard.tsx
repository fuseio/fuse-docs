import React from "react";
import styles from "./MainFeatureCard.module.css";
import {MainFeatureCardProps} from "./types";

export const MainFeatureCard: React.FC<MainFeatureCardProps> = ({
  title,
  description,
  links,
}) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);
