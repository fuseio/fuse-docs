import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "trade_versioned/1.0.0/trade-api",
    },
    {
      type: "category",
      label: "Price",
      link: {
        type: "doc",
        id: "trade_versioned/1.0.0/price",
      },
      items: [
        {
          type: "doc",
          id: "trade_versioned/1.0.0/get-latest-price-for-a-token",
          label: "Get Latest Price for a Token",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Price Change",
      link: {
        type: "doc",
        id: "trade_versioned/1.0.0/price-change",
      },
      items: [
        {
          type: "doc",
          id: "trade_versioned/1.0.0/get-price-change-for-token-over-last-24-hours",
          label: "Get Price Change for Token Over Last 24 hours",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "trade_versioned/1.0.0/get-price-change-for-token-over-time-duration",
          label: "Get Price Change for Token Over Time Duration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "trade_versioned/1.0.0/get-price-change-for-token-over-an-interval",
          label: "Get Price Change for Token Over An Interval",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Stats",
      link: {
        type: "doc",
        id: "trade_versioned/1.0.0/stats",
      },
      items: [
        {
          type: "doc",
          id: "trade_versioned/1.0.0/get-historical-statistics-of-a-token",
          label: "Get Historical Statistics of a Token",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Swap",
      link: {
        type: "doc",
        id: "trade_versioned/1.0.0/swap",
      },
      items: [
        {
          type: "doc",
          id: "trade_versioned/1.0.0/get-a-quote-for-a-token-pair",
          label: "Get a Quote for a Token Pair",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "trade_versioned/1.0.0/create-swap-parameters-for-a-trade",
          label: "Create Swap Parameters for a Trade",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Tokens",
      link: {
        type: "doc",
        id: "trade_versioned/1.0.0/tokens",
      },
      items: [
        {
          type: "doc",
          id: "trade_versioned/1.0.0/get-the-list-of-tokens-on-fuse",
          label: "Get the List of Tokens on Fuse",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
