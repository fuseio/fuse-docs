module.exports = {
  // ... other config options

  themeConfig: {
    // ... other theme config options

    navbar: {
      title: "Fuse Docs",
      logo: {
        alt: "Fuse Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "basics/intro",
          position: "left",
          label: "Basics",
        },
        {
          type: "doc",
          docId: "developers/intro",
          position: "left",
          label: "Developers",
        },
        {
          type: "doc",
          docId: "how-fuse-works/intro",
          position: "left",
          label: "How Fuse Works",
        },
        {
          type: "doc",
          docId: "fuse-ember/intro",
          position: "left",
          label: "Fuse Ember",
        },
        {
          type: "doc",
          docId: "businesses/intro",
          position: "left",
          label: "Businesses",
        },
        {
          type: "doc",
          docId: "ecosystem/intro",
          position: "left",
          label: "Ecosystem",
        },
        {
          type: "doc",
          docId: "support-and-faq/intro",
          position: "left",
          label: "Support and FAQ",
        },
        {
          href: "https://github.com/fuseio/fuse-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    // ... other theme config options
  },

  // ... other config options
};
