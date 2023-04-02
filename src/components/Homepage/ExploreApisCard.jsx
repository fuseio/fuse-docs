import Link from '@docusaurus/Link';
import React from 'react';
import styles from './styles.module.css';

export function ExploreApisCard({ title, description }) {
    return (

        <div className='explore-apis-section-card'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

    );
};