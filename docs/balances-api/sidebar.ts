import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "balances-api/balances-api",
    },
    {
      type: "category",
      label: "NFT tokens",
      link: {
        type: "doc",
        id: "balances-api/nft-tokens",
      },
      items: [
        {
          type: "doc",
          id: "balances-api/get-non-fungible-nft-token-balances",
          label: "Get Non Fungible NFT Token Balances",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "ERC20 tokens",
      link: {
        type: "doc",
        id: "balances-api/erc-20-tokens",
      },
      items: [
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
