// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fuse Documentation',
  url: 'https://docs.fuse.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  staticDirectories: ['static'],
  organizationName: 'fuse',
  projectName: 'fuse-docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/fuseio/fuse-docs/blob/master',
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/ApiItem',
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              {
                sync: true,
                converters: [
                  'yarn',
                  [
                    'Bun',
                    (code) =>
                      code
                        .replace(/npm i /g, 'bun a ')
                        .replace(/npm install /g, 'bun add '),
                  ],
                  'pnpm',
                ],
              },
            ],
          ],
        },
        sitemap: {
          changefreq: 'always',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        blog: false,
        gtag: {
          trackingID: 'G-ZQQQ9Q88VY',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        additionalLanguages: ['dart', 'solidity', 'javascript'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'NPQ4ZLHJEE',
        apiKey: '634a56f04a07683a37e4462981e0a754',
        indexName: 'fuseio',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
        externalUrlRegex: 'voltage\\.finance|fuse\\.io',
      },
      navbar: {
        logo: {
          alt: 'Fuse_logo',
          src: 'img/fuse-logo.svg',
        },
        items: [
          {
            to: 'https://discord.com/invite/jpPMeSZ',
            label: 'Support',
            position: 'right',
            className: 'navbar--discord-logo',
          },
          {
            href: 'https://discord.com/invite/jpPMeSZ',
            position: 'right',
            className: 'navbar--discord-link',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/fuseio/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            label: 'Get API key',
            href: 'https://console.fuse.io/build',
            position: 'right',
            className: 'navbar--get-api-key',
            'aria-label': 'Become an operator',
          },
          {
            type: 'docSidebar',
            sidebarId: 'basicsSidebar',
            position: 'left',
            label: 'Basics',
          },
          {
            type: 'doc',
            docId: 'developers/Quick-Start',
            position: 'left',
            label: 'Fuse Network',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'FuseBox',
            items: [
              {
                label: 'Getting Started',
                to: 'fuse-box/getting-started',
              },
              {
                label: 'SDK Reference',
                to: 'fuse-box/sdk',
              },
              {
                label: 'Tutorials & Guides',
                to: 'category/tutorials',
              },
              {
                type: 'docSidebar',
                label: 'API Reference',
                sidebarId: 'apiSidebar',
              },
              {
                label: 'Trade API (versioned)',
                to: '/category/trade-versioned-api',
              },
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'validatorsSidebar',
            position: 'left',
            label: 'Validators',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Getting Started',
            items: [
              {
                label: 'Fuse Network',
                to: 'https://www.fuse.io/network',
              },
              {
                label: 'Mobile Stack',
                to: 'https://www.fuse.io/mobile',
              },
              {
                label: 'Voltage Finance',
                to: 'https://voltage.finance/',
              },
            ],
          },
          {
            title: 'Under the hood',
            items: [
              {
                label: 'Explorer',
                to: 'https://explorer.fuse.io/',
              },
              {
                label: 'Bridge',
                to: 'https://console.fuse.io/bridge',
              },
              {
                label: 'Staking',
                to: 'https://console.fuse.io/staking',
              },
              {
                label: 'Governance',
                to: 'https://forum.fuse.io/',
              },
              {
                label: 'Service Status',
                to: 'https://status.fuse.io/',
              },
            ],
          },
          {
            title: 'General',
            items: [
              {
                label: 'Brand kits',
                to: 'https://www.fuse.io/brand-kit',
              },
              {
                label: 'Jobs',
                to: 'https://fuse.freshteam.com/jobs',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Fuse. All Rights Reserved`,
      },
    }),
  plugins: [
    [
      'docusaurus-plugin-yandex-metrica',
      {
        counterID: '94018505',
        webvisor: true,
      },
    ],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'api', // e.g. "classic" or the plugin-content-docs id
        config: {
          trade_versioned: {
            specPath: 'api-references/trade-api-v2.yaml',
            outputDir: 'docs/trade_versioned',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
            version: '2.0.0',
            label: 'v2.0.0',
            baseUrl: '/trade_versioned/trade-api',
            versions: {
              '1.0.0': {
                specPath: 'api-references/trade-api-v1.yaml',
                outputDir: 'docs/trade_versioned/1.0.0',
                label: 'v1.0.0',
                baseUrl: '/trade_versioned/1.0.0/trade-api',
              },
            },
          },
          notificationApi: {
            specPath: 'api-references/fuse-notification-api.yaml',
            outputDir: 'docs/notification-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          smartWalletApi: {
            specPath: 'api-references/fuse-smart-wallets-api.yaml',
            outputDir: 'docs/smart-wallet-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          tradeApi: {
            specPath: 'api-references/trade-api-v2.yaml',
            outputDir: 'docs/trade-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          explorerApi: {
            specPath: 'api-references/explorer-api.yaml',
            outputDir: 'docs/explorer-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          graphqlApi: {
            specPath: 'api-references/graphql-api.yaml',
            outputDir: 'docs/graphql-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
          stakingApi: {
            specPath: 'api-references/staking-api.yaml',
            outputDir: 'docs/staking-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],
  themes: ['docusaurus-theme-openapi-docs'],
  customFields: {
    happyReactToken: 'c56b4364-23fd-41f1-8f5b-3ebe7f31d082',
  },
}

module.exports = config
