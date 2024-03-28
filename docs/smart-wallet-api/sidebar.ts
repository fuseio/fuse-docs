import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "smart-wallet-api/smart-wallets-api",
    },
    {
      type: "category",
      label: "Smart Wallets",
      link: {
        type: "doc",
        id: "smart-wallet-api/smart-wallets",
      },
      items: [
        {
          type: "doc",
          id: "smart-wallet-api/authenticate-user",
          label: "Authenticate user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "smart-wallet-api/get-wallet-actions",
          label: "Get Wallet Actions",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
