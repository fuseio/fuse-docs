import React, {useMemo} from "react";
import styles from "./styles.module.css";
import {MainFeatureCard} from "./MainFeatureCard";
import ErrorBoundary from "./ErrorBoundary";
import {MainFeatureList} from "./constants";

export default function Homepage() {
  const mainFeatureCards = useMemo(
    () =>
      MainFeatureList.map((props, idx) => (
        <MainFeatureCard link={""} key={idx} {...props} />
      )),
    []
  );

  return (
    <ErrorBoundary>
      <main
        className={styles.container}
        role="main"
        aria-label="Fuse documentation homepage"
      >
        <div className="first-page-header">
          <div className="first-page-header-title">
            <h1>Web2 user experiences, powered by Web3 tech</h1>
            <p>
              Welcome to Fuse, a fast, cost-effective, and high-throughput
              blockchain solution created for businesses and consumers. Check
              out our documentation to find out how you can use and build on our
              secure, decentralized tech stack.
            </p>
          </div>
          <img
            className="first-page-image"
            src="img/home-picture.png"
            alt="Fuse Network"
            loading="lazy"
            aria-label="Illustration of Fuse Network"
          />
        </div>

        <section className={styles.grid} aria-labelledby="features-heading">
          {mainFeatureCards}
        </section>
      </main>
    </ErrorBoundary>
  );
}
