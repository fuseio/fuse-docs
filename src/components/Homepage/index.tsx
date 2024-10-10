import React, { useMemo } from 'react'
import styles from './styles.module.css'
import { MainFeatureCard } from './MainFeatureCard'
import { ExploreApisCard } from './ExploreApisCard'
import { GovernanceCard } from './GovernanceCard'
import { MainFeatureList, ExploreApisList, GovernanceList } from './constants'
import ErrorBoundary from './ErrorBoundary';

export default function Homepage() {
  const mainFeatureCards = useMemo(() => 
    MainFeatureList.map((props, idx) => (
      <MainFeatureCard key={idx} {...props} />
    )),
    []
  );

  const exploreApiCards = useMemo(() => 
    ExploreApisList.map((props, idx) => (
      <ExploreApisCard key={idx} {...props} />
    )),
    []
  );

  const governanceCards = useMemo(() => 
    GovernanceList.map((props, idx) => (
      <GovernanceCard key={idx} {...props} />
    )),
    []
  );

  return (
    <ErrorBoundary>
      <main className={styles.container} role="main" aria-label="Fuse documentation homepage">
        <div className='first-page-header'>
          <div className='first-page-header-title'>
            <h1>Welcome to the Fuse docs</h1>
            <p>
              Fuse is an EVM-compatible blockchain providing a scalable, fast, and
              cost-effective infrastructure for Web3 applications. Catering to
              businesses and consumers, it ensures high transaction volumes,
              security, and decentralization. Dive into our documentation to learn
              more.
            </p>
          </div>
          <img
            className='first-page-image'
            src='img/home-picture.png'
            alt="Fuse Network"
            loading="lazy"
            aria-label="Illustration of Fuse Network"
          />
        </div>

        <section className={styles.grid} aria-labelledby="get-started-heading">
          <div id="get-started-heading" className='explore-apis-section-h1'>Get Started</div>
          {mainFeatureCards}
        </section>

        <section className='explore-apis-section'>
          <div className='explore-apis-section-h1'>Explore our APIs</div>
          <div className='explore-apis-section-container'>
            {exploreApiCards}
          </div>
        </section>

        <section className='social-section'>
          <div className='explore-apis-section-h1'>Governance</div>
          {governanceCards}
        </section>
      </main>
    </ErrorBoundary>
  )
}
