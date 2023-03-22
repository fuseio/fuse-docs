import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";


const FeatureList = [
  {
    image: "img/img1.svg",
    imageHover: "img/img7.svg",
    title: "Fuse Basics",
    description:
      "Getting all thr essential information  on tje fuse network and how and ir works.",
    link: "/docs/category/intro-to-fuse",
  },
  {
    image: "img/img2.svg",
    imageHover: "img/img8.svg",
    title: "Developers",
    description:
      "Info on how to build on fuse, including API docs and code references.",
    link: "/docs-developers/Overview",
  },
  {
    image: "img/img3.svg",
    imageHover: "img/img9.svg",
    title: "Tutorials",
    description:
      "Step by step and guides on Fuse. Inc technical and non  technical tutorials.",
    link: "/",
  },
  {
    image: "img/img4.svg",
    imageHover: "img/img10.svg",
    title: "Integration",
    description:
      "your one stop shop for plugging into Fuse, get everything you need for integration on one page.",
    link: "/",
  },
  {
    image: "img/img5.svg",
    imageHover: "img/img11.svg",
    title: "Mobile",
    description:
      "Read more about the fuse open source wallet stack built for the best crypto experience on mobile. ",
    link: "/",
  },
  {
    image: "img/img6.svg",
    imageHover: "img/img12.svg",
    title: "Validators",
    description:
      "See behind the scenes of Fuse, Learn how staking works and join as a validator.",
    link: "/docs-validators/",
  },
];


const FeatureCard = ({ href, image, imageHover, title, link, description }) => {
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

export default function Homepage() {
  return (
      <main className={styles.container}>
        <header>
          <h1>
            Learn How to Build
            <br /> with Fuse
          </h1>
          <p>
            Fuse strives to be the most business and consumer-friendly
            blockchain ecosystem for the mainstream adoption of Web3 payments. A
            fast and low-cost EVM-compatible Fuse Network blockchain powers
            fuse.
          </p>
        </header>
        <div className={styles.grid}>
        {FeatureList.map((props, idx) => (
            <FeatureCard key={idx} {...props} />
          ))}
        </div>
      </main>
    
  );
}
