// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fuse Documentation",
  url: "https://docs.fuse.io",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  staticDirectories: ['static'],
  

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
          // exclude: ['**/developers/*/*README.md'],
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", 
        },
        gtag: {
          trackingID: 'G-ZQQQ9Q88VY',
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      prism: {
        additionalLanguages: ['dart','solidity'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      
      algolia: {
        // The application ID provided by Algolia
        appId: 'NPQ4ZLHJEE',
  
        // Public API key: it is safe to commit it
        apiKey: '634a56f04a07683a37e4462981e0a754',
  
        indexName: 'fuseio',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
     
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
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
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialsSidebar",
          //   label: "Tutorials",
          //   position: "left",
           
          // },          
          {
            type: "docSidebar",
            sidebarId: "apiSidebar",
            label: "API references",
            position: "left",
           
          }
         
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
     
    }),
    plugins: [
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "api",
          docsPluginId: "api", // e.g. "classic" or the plugin-content-docs id
          config: {
            adminApi: { // "petstore" is considered the <id> that you will reference in the CLI
              specPath: "api-references/fuse-admin-api.yaml", // path or URL to the OpenAPI spec
              outputDir: "docs/admin-api", // output directory for generated *.mdx and sidebar.js files
              sidebarOptions: {
                groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
                categoryLinkSource: "tag",
              }
            },
              notificationApi:{
                specPath: "api-references/fuse-notification-api.yaml",
                outputDir: "docs/notification-api",
                sidebarOptions: {
                  groupPathsBy: "tag",
                  categoryLinkSource: "tag",
                }
              },
              smartWalletApi:{
                specPath: "api-references/fuse-smart-wallets-api.yaml",
                outputDir: "docs/smart-wallet-api",
                sidebarOptions: {
                  groupPathsBy: "tag",
                  categoryLinkSource: "tag",
                }
              },
              tradeApi:{
                specPath: "api-references/trade-api.yaml",
                outputDir: "docs/trade-api",
                sidebarOptions: {
                  groupPathsBy: "tag",
                  categoryLinkSource: "tag",
                }
              },
          }
        },
        // "docusaurus-plugin-openapi-docs",
        // {
        //   id: "wallet-api",
        //   docsPluginId: "classc", // e.g. "classic" or the plugin-content-docs id
        //   config: {
        //     reference: { // "petstore" is considered the <id> that you will reference in the CLI
        //       specPath: "api-references/fuse-wallet-api.yaml", // path or URL to the OpenAPI spec
        //       outputDir: "docs/wallet-api", // output directory for generated *.mdx and sidebar.js files
        //       sidebarOptions: {
        //         groupPathsBy: "tag", // generate a sidebar.js slice that groups operations by tag
        //         categoryLinkSource: "tag",
        //       }
        //     },
           
            
        //   }
        // },
      ]
    ],
    themes: ["docusaurus-theme-openapi-docs"],

};

module.exports = config;
