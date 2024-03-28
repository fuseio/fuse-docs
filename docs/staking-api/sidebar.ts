import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "staking-api/staking-api",
    },
    {
      type: "category",
      label: "Staking",
      link: {
        type: "doc",
        id: "staking-api/staking",
      },
      items: [
        {
          type: "doc",
          id: "staking-api/retrieve-staking-options",
          label: "Retrieve staking options",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "staking-api/stake-tokens",
          label: "Stake tokens",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "staking-api/unstake-tokens",
          label: "Unstake tokens",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "staking-api/get-staked-tokens-by-wallet-address",
          label: "Get staked tokens by wallet address",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
