import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "notification-api/notifications-api",
    },
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "doc",
        id: "notification-api/webhooks",
      },
      items: [
        {
          type: "doc",
          id: "notification-api/create-webhook",
          label: "Create Webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notification-api/update-webhook",
          label: "Update Webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "notification-api/get-webhook",
          label: "Get Webhook",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notification-api/delete-webhook",
          label: "Delete Webhook",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "notification-api/get-webhooks-for-project",
          label: "Get Webhooks for Project",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notification-api/add-webhook-addresses",
          label: "Add Webhook Addresses",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notification-api/delete-webhook-addresses",
          label: "Delete Webhook Addresses",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notification-api/get-webhook-addresses-for-webhook-id",
          label: "Get Webhook Addresses for Webhook Id",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
