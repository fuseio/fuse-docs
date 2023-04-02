import React from 'react';
import Link from "@docusaurus/Link";
import styles from './styles.module.css';

export function MainFeatureCard({ href, image, imageHover, title, link, description }) {
    return (
        <Link
            style={{
                textDecoration: "none",
                color: "inherit",
            }}
            target={href ? "_blank" : "_self"}
            href={href ? href : ""}
            to={link ? link : ""}>
            <div className={styles.card}>
                <div>
                    <img src={image} alt={title} />
                    <img src={imageHover} alt={title} />
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
};