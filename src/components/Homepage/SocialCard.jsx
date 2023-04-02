import React from 'react';
import Link from "@docusaurus/Link";
import styles from './styles.module.css';

export function SocialCard({ href, title, description, icon }) {
    return (
        <Link className='social-card'
            target={href ? "_blank" : "_self"}
            href={href ? href : ""}
        >
            <img className='social-card-arrow' src='img/social-card-arrow.svg' alt="" />
            <div className='social-card-title'>
                <img className='social-card-title-icon' src={icon} alt='titleIcon' />
                <h2>{title}</h2>
            </div>
            <p>{description}</p>

        </Link>
    );
};