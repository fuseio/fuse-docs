import Link from '@docusaurus/Link';
import React from 'react';
import styles from './styles.module.css';

export function ExploreApisCard({ title, description, href }) {
    return (

        <Link className='explore-apis-section-card'
            target={href ? "_blank" : "_self"}
            href={href ? href : ""}>

            <h2>{title}</h2>
            <p>{description}</p>
        </Link>

    );
};