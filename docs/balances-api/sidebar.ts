import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "balances-api/balances-api",
    },
    {
      type: "category",
      label: "Balances",
      link: {
        type: "doc",
        id: "balances-api/balances",
      },
      items: [
        {
          type: "doc",
          id: "balances-api/get-non-fungible-nft-token-balances",
          label: "Get Non Fungible NFT Token Balances",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "balances-api/get-fungible-erc-20-token-balances",
          label: "Get Fungible ERC20 Token Balances",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
