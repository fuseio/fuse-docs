import React from 'react';
import Link from "@docusaurus/Link";
import styles from './styles.module.css';

export function GovernanceCard({ href, title, description, icon }) {
    return (
        <Link className='governance-card'
            target={href ? "_blank" : "_self"}
            href={href ? href : ""}
        >
            <div className='governance-card-title'>
                <h2>{title}</h2>
            </div>
            <p>{description}</p>

        </Link>
    );
};