import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import {
  DiscordIcon,
  GitHubIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
} from "../../../../static/footer-icons";
import Link from "@docusaurus/Link";

export default function FooterLayout({ style, links, logo, copyright }) {
  const data = [
    {
      title: "Medium",
      icon: <DiscordIcon />,
      link: "",
    },
    {
      title: "GitHub",
      icon: <GitHubIcon />,
      link: "https://github.com/fuseio",
    },
    {
      title: "Twitter",
      icon: <TwitterIcon />,
      link: "https://twitter.com/fuse_network",
    },
    {
      title: "Telegram",
      icon: <TelegramIcon />,
      link: "https://t.me/fuseio",
    },
    {
      title: "Discord",
      icon: <DiscordIcon />,
      link: "https://discord.com/invite/jpPMeSZ",
    },
    {
      title: "Docs",
      icon: <MediumIcon />,
      link: "https://docs.fuse.io/",
    },
  ];
  return (
    <>
      <div className={styles.social_container}>
        {data.map((item_, index) => (
          <Link
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            to={item_.link}
            target="_blank"
            key={index}>
            <div className={styles.social_item}>
              {item_.icon}
              <span>{item_.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <footer
        className={clsx("footer", {
          "footer--dark": style === "dark",
        })}>
        <div className="container container-fluid">
          {links}
          {(logo || copyright) && (
            <div className="footer__bottom text--center">
              {logo && <div className="margin-bottom--sm">{logo}</div>}
              {copyright}
            </div>
          )}
        </div>
      </footer>
    </>
  );
}
