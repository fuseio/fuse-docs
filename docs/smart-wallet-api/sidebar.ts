import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "smart-wallet-api/smart-wallets-api-v-1-deprecated",
    },
    {
      type: "category",
      label: "Smart Wallets",
      items: [
        {
          type: "doc",
          id: "smart-wallet-api/auth",
          label: "Auth",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "smart-wallet-api/create-wallet",
          label: "Create Wallet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "smart-wallet-api/get-wallet",
          label: "Get Wallet",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "smart-wallet-api/relay",
          label: "Relay",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "smart-wallet-api/get-historical-transactions",
          label: "Get Historical Transactions",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
