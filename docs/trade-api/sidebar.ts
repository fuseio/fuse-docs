import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "trade-api/trade-api-v-1-v-2",
    },
    {
      type: "category",
      label: "V1 Price",
      link: {
        type: "doc",
        id: "trade-api/v-1-price",
      },
      items: [
        {
          type: "doc",
          id: "trade-api/get-latest-price-for-a-token",
          label: "Get Latest Price for a Token",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "V1 Price Change",
      link: {
        type: "doc",
        id: "trade-api/v-1-price-change",
      },
      items: [
        {
          type: "doc",
          id: "trade-api/get-price-change-for-token-over-last-24-hours",
          label: "Get Price Change for Token Over Last 24 hours",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "trade-api/get-price-change-for-token-over-time-duration",
          label: "Get Price Change for Token Over Time Duration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "trade-api/get-price-change-for-token-over-an-interval",
          label: "Get Price Change for Token Over An Interval",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "V1 Stats",
      link: {
        type: "doc",
        id: "trade-api/v-1-stats",
      },
      items: [
        {
          type: "doc",
          id: "trade-api/get-historical-statistics-of-a-token",
          label: "Get Historical Statistics of a Token",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "V2 Swap",
      link: {
        type: "doc",
        id: "trade-api/v-2-swap",
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
