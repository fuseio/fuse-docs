import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "fuse-box/fuse-apis/Trade API/trade-api",
    },
    {
      type: "category",
      label: "Price",
      items: [
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Trade API/get-latest-price-for-a-token",
          label: "Get Latest Price for a Token",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Price Change",
      items: [
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Trade API/get-price-change-for-token-over-last-24-hours",
          label: "Get Price Change for Token Over Last 24 hours",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Trade API/get-price-change-for-token-over-time-duration",
          label: "Get Price Change for Token Over Time Duration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Trade API/get-price-change-for-token-over-an-interval",
          label: "Get Price Change for Token Over An Interval",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Stats",
      items: [
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Trade API/get-historical-statistics-of-a-token",
          label: "Get Historical Statistics of a Token",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Swap",
      items: [
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Trade API/get-a-quote-for-a-token-pair",
          label: "Get a Quote for a Token Pair",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Trade API/create-swap-parameters-for-a-trade",
          label: "Create Swap Parameters for a Trade",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Tokens",
      items: [
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Trade API/get-the-list-of-tokens-on-fuse",
          label: "Get the List of Tokens on Fuse",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
