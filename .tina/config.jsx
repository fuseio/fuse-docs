import React from "react";
import { defineConfig, TextField } from "tinacms";
import { ReferenceField } from "tinacms";
import { FeaturesBlockTemplate } from "../src/components/Features/template";
import { HeroBlockTemplate } from "../src/components/Hero/template";
import { MDXTemplates } from "../src/theme/template";
import { docusaurusDate, titleFromSlug } from "../util";
import title from "title";

const isProduction = process.env.TINA_ENV === 'production';
const branch = isProduction ? "master" : "staging";

const DocsCollection = {
  name: "doc",
  label: "Docs",
  path: "docs",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "number",
      name: "sidebar_position",
      label: "Sidebar-position",
    },
    {
      label: "Tags",
      name: "tags",
      type: "string",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
      templates: [...MDXTemplates],
    },
  ],
};

const DropdownCollection = {
  name: "dropdowns",
  label: "Generated Indexes",
  path: "docs",
  format: "json",
  fields: [
    {
      type: "string",
      name: "label",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "number",
      name: "position",

    },
  ],
};

export default defineConfig({
  branch,
  clientId: isProduction ? process.env.PROD_CLIENT_ID : process.env.STAGING_CLIENT_ID,
  token: isProduction ? process.env.PROD_TOKEN : process.env.STAGING_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      DocsCollection,
      DropdownCollection
    ],
  },
});
