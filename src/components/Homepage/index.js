import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {MainFeatureCard} from "./MainFeatureCard";
import {ExploreApisCard} from "./ExploreApisCard";
import {SocialCard} from "./SocialCard";
import { MainFeatureList, ExploreApisList, SocialsList } from './constants';





export default function Homepage() {
  return (
      <main className={styles.container}>
        <div className='first-page-header'>
          <div className='first-page-header-title'>
          <h1>
          Welcome to the 
            <br /> Fuse docs
          </h1>
          <p>
          Fuse is an EVM-compatible blockchain providing a scalable, fast, and cost-effective infrastructure for Web3 applications. Catering to businesses and consumers, it ensures high transaction volumes, security, and decentralization. Dive into our documentation to learn more.
          </p>
          </div>
          <img className='first-page-image' src="img/firstPageLogo.png" alt="firstPageLogo" />
        </div>
        
        <div className={styles.grid}>
        {MainFeatureList.map((props, idx) => (
            <MainFeatureCard key={idx} {...props} />
          ))}
        </div>
        <div className='explore-apis-section'>
        <div className='explore-apis-section-h1' >Explore our APIs</div>
        <div className='explore-apis-section-container'>
        {ExploreApisList.map((props, idx) => (
            <ExploreApisCard key={idx} {...props} />
          ))}
          </div>
          </div>
          <div className='social-section'>
        {SocialsList.map((props, idx) => (
            <SocialCard key={idx} {...props} />
          ))}
          </div>
      </main>
    
  );
}
