import React from "react";
import Link from "@docusaurus/Link";
import {CardProps} from "./types";

export function GovernanceCard({href, title, description, link}: CardProps) {
  return (
    <Link
      className="governance-card"
      target={href ? "_blank" : "_self"}
      href={href || ""}
      to={link || ""}
    >
      <div className="governance-card-title">
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </Link>
  );
}
