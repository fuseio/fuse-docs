// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fuse Documentation",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fuse', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: "Fuse_logo",
          src: "img/fuse-logo.png",
          
        },
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            type: "doc",
            docId: "/category/intro-to-fuse",
            position: "left",
            label: "Basics",
          },
          {
            type: "doc",
            docId: "developers/fuse-sdk/README",
            position: "left",
            label: "Developers",
          },
          {
            type: "doc",
            docId: "validators/node-upgrades/README",
            position: "left",
            label: "Validators",
          },
          
          // {to: '/changelog', label: 'Changelog', position: 'left'}
         
        ],
      },
      // footer: {
      //   style: 'light',
      //   links:[
      //   {
      //     title: "Getting Started",
      //     items: [
      //       { label: "Fuse Studio", to: "/" },
      //       {
      //         label: "Fuse Staking",
      //         to: "/",
      //       },
      //       {
      //         label: "Fuse Swap",
      //         to: "/",
      //       },
      //       {
      //         label: "Fuse Cash",
      //         to: "/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Under the hood",
      //     items: [
      //       {
      //         label: "Fuse Network",
      //         to: "/",
      //       },
      //       {
      //         label: "Fuse Token",
      //         to: "/",
      //       },
      //       {
      //         label: "Explorer",
      //         to: "/",
      //       },
      //       {
      //         label: "Documentation",
      //         to: "/",
      //       },
      //       {
      //         label: "Service Status",
      //         to: "/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "General",
      //     items: [
      //       {
      //         label: "About Us",
      //         to: "/",
      //       },
      //       {
      //         label: "Privacy Policy",
      //         to: "/",
      //       },
      //       {
      //         label: "Brand kit",
      //         to: "/",
      //       },
      //       {
      //         label: "Jobs",
      //         to: "/",
      //       },
      //     ],
      //   },
      //   ],
      //   copyright: `© ${new Date().getFullYear()} Fuse. All Rights Reserved`,
      // },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
      
      // algolia: {

      //   contextualSearch: true,
      // },
    }),
    
};

module.exports = config;
