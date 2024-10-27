import { themes as prismThemes } from 'prism-react-renderer';
import { EnumChangefreq } from 'sitemap';

import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fuse Documentation',
  tagline: 'Fuse is an EVM-compatible blockchain providing a scalable, fast, and cost-effective infrastructure for Web3 applications.',
  url: 'https://docs.fuse.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
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
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/fuseio/fuse-docs/blob/master',
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
          changefreq: EnumChangefreq.ALWAYS,
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
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/home-picture.png',
    metadata: [
      { name: 'keywords', content: 'Fuse.io, Fuse, Fuse Documentation, Fuse Docs, Fuse SDK, Fuse Mobile SDK, Fuse Dart SDK, Fuse Flutter SDK, Fuse JS SDK, Fuse TypeScript SDK, Fuse Network, Fuse json rpc, blockchain development, smart contracts, dapps, dApp development, ERC-4337, Account Abstraction, Fuse APIs' },
      { name: 'description', content: 'Fuse is an EVM-compatible blockchain providing a scalable, fast, and cost-effective infrastructure for Web3 applications.' },
      { name: 'og:title', content: 'Fuse Docs' },
      { name: 'og:description', content: 'Fuse is an EVM-compatible blockchain providing a scalable, fast, and cost-effective infrastructure for Web3 applications.' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://docs.fuse.io' },
      { name: 'og:image', content: 'https://docs.fuse.io/img/home-picture.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Fuse Docs' },
      { name: 'twitter:description', content: 'Official documentation for Fuse, an EVM-compatible blockchain providing a scalable, fast, and cost-effective infrastructure for Web3 applications.' },
      { name: 'twitter:image', content: 'https://docs.fuse.io/img/logo.svg' },
    ],
    prism: {
      additionalLanguages: ['dart', 'solidity', 'javascript'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
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
      searchPagePath: 'search',
      externalUrlRegex: 'voltage\\.finance|fuse\\.io',
    },
    navbar: {
      logo: {
        alt: 'Fuse Logo',
        src: 'img/fuse-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'basics/overview/overview',
          position: 'left',
          label: 'Basics',
        },
        {
          type: 'doc',
          docId: 'developers/building-on-fuse/building-on-fuse',
          position: 'left',
          label: 'Developers',
        },
        {
          type: 'doc',
          docId: 'fuse-ember/fuse-ember',
          position: 'left',
          label: 'Fuse Ember',
        },
        {
          href: 'https://github.com/fuseio/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
  } satisfies Preset.ThemeConfig,
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
          notificationApi: {
            specPath: 'api-references/fuse-notification-api.yaml',
            outputDir: 'docs/developers/fusebox/apis/notification-api',

          },
          smartWalletApi: {
            specPath: 'api-references/fuse-smart-wallets-api.yaml',
            outputDir: 'docs/developers/fusebox/apis/smart-wallet-api',

          },
          balancesApi: {
            specPath: 'api-references/balances-api.yaml',
            outputDir: 'docs/developers/fusebox/apis/balances-api',

          },
          tradeApi: {
            specPath: 'api-references/trade-api-merged.yaml',
            outputDir: 'docs/developers/fusebox/apis/trade-api',

          },
          explorerApi: {
            specPath: 'api-references/explorer-api.yaml',
            outputDir: 'docs/developers/fusebox/apis/explorer-api',

          },
          graphqlApi: {
            specPath: 'api-references/graphql-api.yaml',
            outputDir: 'docs/developers/fusebox/apis/graphql-api',

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

export default config;
