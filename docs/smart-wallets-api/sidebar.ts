import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "smart-wallets-api/smart-wallets-api",
    },
    {
      type: "category",
      label: "Smart Wallets",
      items: [
        {
          type: "doc",
          id: "smart-wallets-api/auth",
          label: "Auth",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "smart-wallets-api/get-wallet-actions",
          label: "Get Wallet Actions",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
