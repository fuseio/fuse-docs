import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "fuse-box/fuse-apis/Smart Wallets API/smart-wallets-api",
    },
    {
      type: "category",
      label: "Smart Wallets",
      items: [
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Smart Wallets API/auth",
          label: "Auth",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Smart Wallets API/get-wallet-actions",
          label: "Get Wallet Actions",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
