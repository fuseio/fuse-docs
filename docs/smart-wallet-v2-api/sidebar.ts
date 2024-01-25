import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "smart-wallet-v2-api/smart-wallets-api-v-2",
    },
    {
      type: "category",
      label: "Smart Wallet",
      items: [
        {
          type: "doc",
          id: "smart-wallet-v2-api/auth",
          label: "Auth",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "smart-wallet-v2-api/get-wallet-actions",
          label: "Get Wallet Actions",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
