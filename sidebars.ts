import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation

  The sidebars can be generated from the filesystem, or explicitly defined here.

  Create as many sidebars as you want.
 */

const tradeVersions = require("./docs/trade_versioned/versions.json");
const {
  versionSelector,
  versionCrumb,
} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");

const sidebars: SidebarsConfig = {
  basicsSidebar: [
    {
      type: "autogenerated",
      dirName: "basics",
    },
  ],
  // developersSidebar: [
  //   {
  //     type: "autogenerated",
  //     dirName: "developers",
  //   },
  // ],
  fuseBoxSidebar: [
    {
      type: "autogenerated",
      dirName: "fuse-box",
    },
  ],
  validatorsSidebar: [
    {
      type: "autogenerated",
      dirName: "validators",
    },
  ],

  apiSidebar: [
    {
      type: "autogenerated",
      dirName: "api-introduction",
    },
    {
      type: "category",
      label: "Smart Wallets API",
      link: {
        type: "generated-index",
        title: "Smart Wallets API",
      },
      items: require("./docs/smart-wallet-api/sidebar.js"),
    },
    {
      type: "category",
      label: "Balances API",
      link: {
        type: "generated-index",
        title: "Balances API",
      },
      items: require("./docs/balances-api/sidebar.js"),
    },
    {
      type: "category",
      label: "Trade API",
      link: {
        type: "generated-index",
        title: "Trade API",
      },
      items: require("./docs/trade-api/sidebar.js"),
    },
    {
      type: "category",
      label: "Notification API",
      link: {
        type: "generated-index",
        title: "Notification API",
      },
      items: require("./docs/notification-api/sidebar.js"),
    },
    {
      type: "category",
      label: "GraphQL API",
      link: {
        type: "generated-index",
        title: "GraphQL API",
      },
      items: require("./docs/graphql-api/sidebar.js"),
    },
    {
      type: "category",
      label: "Explorer API",
      link: {
        type: "generated-index",
        title: "Explorer API",
      },
      items: require("./docs/explorer-api/sidebar.js"),
    }
  ],
  "trade-2.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(tradeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v2.0.0`),
    },
    {
      type: "category",
      label: "Trade",
      link: {
        type: "generated-index",
        title: "Trade API (latest)",
        slug: "/category/trade-versioned-api",
      },
      items: require("./docs/trade_versioned/sidebar.js"),
    },
  ],

  "trade-1.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(tradeVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v1.0.0`),
    },
    {
      type: "category",
      label: "Trade",
      link: {
        type: "generated-index",
        title: "Trade API (v1.0.0)",
        slug: "/category/trade-api-1.0.0",
      },
      items: require("./docs/trade_versioned/1.0.0/sidebar.js"),
    },
  ],
};

module.exports = sidebars;
