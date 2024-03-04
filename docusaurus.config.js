// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fuse Documentation",
  url: "https://docs.fuse.io",
  baseUrl: "/",
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: "img/logo.svg",
  staticDirectories: ["static"],
  organizationName: "fuse",
  projectName: "fuse-docs",
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
          editUrl: 'https://github.com/fuseio/fuse-docs/blob/master',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem",
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              {
                sync: true,
                converters: [
                  'yarn',
                  [
                    'Bun',
                    code => code.replace(/npm i /g, 'bun a ').replace(/npm install /g, 'bun add ')
                  ],
                  'pnpm'
                ]
              }
            ]
          ]
        },
        sitemap: {
          changefreq: 'always',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        blog: false,
        gtag: {
          trackingID: "G-ZQQQ9Q88VY",
          anonymizeIP: true,
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
        additionalLanguages: ["dart", "solidity", "javascript"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: "NPQ4ZLHJEE",
        apiKey: "634a56f04a07683a37e4462981e0a754",
        indexName: "fuseio",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
        externalUrlRegex: 'voltage\\.finance|fuse\\.io',
      },
      navbar: {
        logo: {
          alt: "Fuse_logo",
          src: "img/fuse-logo.svg",
        },
        items: [
          {
            to: "https://discord.com/invite/jpPMeSZ",
            label: "Support",
            position: "right",
            className: "navbar--discord-logo",
          },
          {
            href: "https://discord.com/invite/jpPMeSZ",
            position: "right",
            className: "navbar--discord-link",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: 'https://github.com/fuseio/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          },
          {
            label: 'Get API key',
            href: 'https://console.fuse.io/build',
            position: 'right',
            className: 'navbar--get-api-key',
            'aria-label': 'Become an operator',
          },
          {
            type: "docSidebar",
            sidebarId: "basicsSidebar",
            position: "left",
            label: "Basics",
          },
          {
            type: "doc",
            docId: "developers/Quick-Start",
            position: "left",
            label: "Developers",
          },
          {
            type: "doc",
            docId: "fuse-box/getting-started",
            position: "left",
            label: "FuseBox",
          },
          {
            type: "docSidebar",
            sidebarId: "validatorsSidebar",
            position: "left",
            label: "Validators",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Getting Started",
            items: [
              {
                label: "Fuse Network",
                to: "https://www.fuse.io/network"
              },
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
                label: "Bridge",
                to: "https://console.fuse.io/bridge",
              },
              {
                label: "Staking",
                to: "https://console.fuse.io/staking",
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
                to: "https://www.fuse.io/brand-kit",
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
          notificationApi: {
            specPath: "api-references/fuse-notification-api.yaml",
            outputDir: "docs/fuse-box/fuse-apis/Notification API",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          smartWalletApi: {
            specPath: "api-references/fuse-smart-wallets-api.yaml",
            outputDir: "docs/fuse-box/fuse-apis/Smart Wallets API",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          tradeApi: {
            specPath: "api-references/trade-api.yaml",
            outputDir: "docs/fuse-box/fuse-apis/Trade API",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  customFields: {
    happyReactToken: "c56b4364-23fd-41f1-8f5b-3ebe7f31d082",
  },
};

module.exports = config;
