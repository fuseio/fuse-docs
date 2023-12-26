// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fuse Documentation",
  url: "https://docs.fuse.io",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  staticDirectories: ["static"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fuse", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // exclude: ['**/developers/*/*README.md'],
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
        },
        gtag: {
          trackingID: "G-ZQQQ9Q88VY",
          anonymizeIP: true,
        },
        blog: {
          blogTitle: "Changelog",
          blogSidebarTitle: "Recent Changes",
          postsPerPage: "ALL",
          routeBasePath: "/changelog",
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      prism: {
        additionalLanguages: ["dart", "solidity"],
        theme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",

      algolia: {
        // The application ID provided by Algolia
        appId: "NPQ4ZLHJEE",

        // Public API key: it is safe to commit it
        apiKey: "634a56f04a07683a37e4462981e0a754",

        indexName: "fuseio",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
      navbar: {
        logo: {
          alt: "Fuse_logo",
          src: "img/fuse-logo.svg",
        },

        items: [
          {
            type: "search",
            position: "right",
          },
          {
            type: "docSidebar",
            sidebarId: "basicsSidebar",
            position: "left",
            label: "Basics",
          },
          {
            type: "doc",
            docId: "developers/overview",
            position: "left",
            label: "Developers",
          },
          {
            type: "docSidebar",
            sidebarId: "validatorsSidebar",
            position: "left",
            label: "Validators",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialsSidebar",
            label: "Tutorials",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "apiSidebar",
            label: "API references",
            position: "left",
          },

          // {to: '/changelog', label: 'Changelog', position: 'left'}
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Getting Started",
            items: [
              { label: "Fuse Network", to: "https://www.fuse.io/network" },
              {
                label: "Mobile Stack",
                to: "https://www.fuse.io/mobile",
              },
              {
                label: "Voltage Finance",
                to: "https://voltage.finance/",
              },
            ],
          },
          {
            title: "Under the hood",
            items: [
              {
                label: "Explorer",
                to: "https://explorer.fuse.io/",
              },
              {
                label: "Documentation",
                to: "https://docs.fuse.io/",
              },
              {
                label: "Staking",
                to: "https://staking.fuse.io/",
              },
              {
                label: "Governance",
                to: "https://forum.fuse.io/",
              },
              {
                label: "Service Status",
                to: "https://status.fuse.io/",
              },
            ],
          },
          {
            title: "General",
            items: [
              {
                label: "Brand kits",
                to: "https://uploads-ssl.webflow.com/63a6d0820bd1f472b4150067/63f758e4017a399398360f78_Brand%20kit.pdf",
              },
              {
                label: "Jobs",
                to: "https://fuse.freshteam.com/jobs",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Fuse. All Rights Reserved`,
      },
    }),
  plugins: [
    [
      "docusaurus-plugin-yandex-metrica",
      {
        counterID: "94018505",
        webvisor: true,
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "api", // e.g. "classic" or the plugin-content-docs id
        config: {
          adminApi: {
            // "petstore" is considered the <id> that you will reference in the CLI
            specPath: "api-references/fuse-admin-api.yaml", // path or URL to the OpenAPI spec
            outputDir: "docs/admin-api", // output directory for generated *.mdx and sidebar.js files
            sidebarOptions: {
              groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
              categoryLinkSource: "tag",
            },
          },
          notificationApi: {
            specPath: "api-references/fuse-notification-api.yaml",
            outputDir: "docs/notification-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          smartWalletApi: {
            specPath: "api-references/fuse-smart-wallets-api.yaml",
            outputDir: "docs/smart-wallet-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          smartWalletvApi: {
            specPath: "api-references/fuse-smart-wallet-v-api.yaml",
            outputDir: "docs/smart-wallet-api-v",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
          tradeApi: {
            specPath: "api-references/trade-api.yaml",
            outputDir: "docs/trade-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  customFields: {
    happyReactToken: "c56b4364-23fd-41f1-8f5b-3ebe7f31d082"
  }
};

module.exports = config;
