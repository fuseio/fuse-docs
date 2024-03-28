import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "trade-api/trade-api",
    },
    {
      type: "category",
      label: "Swap",
      link: {
        type: "doc",
        id: "trade-api/swap",
      },
      items: [
        {
          type: "doc",
          id: "trade-api/get-indicative-price",
          label: "Get an indicative price for a transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "trade-api/get-quote",
          label: "Get a quote for buying or selling any ERC20 token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "trade-api/get-liquidity-sources",
          label: "Returns the liquidity sources enabled for the chain",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
