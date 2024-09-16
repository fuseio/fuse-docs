import React from 'react';
import Link from "@docusaurus/Link";
import styles from './styles.module.css';

interface MainFeatureCardProps {
    href?: string;
    image: string;
    imageHover?: string;
    title: string;
    link: string;
    description: string;
}

export function MainFeatureCard({
    href,
    image,
    imageHover,
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
            href={href ? href : ""}
            to={link ? link : ""}>
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