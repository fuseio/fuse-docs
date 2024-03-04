import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "fuse-box/fuse-apis/Notification API/notifications-api",
    },
    {
      type: "category",
      label: "Webhooks",
      items: [
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Notification API/create-webhook",
          label: "Create Webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Notification API/update-webhook",
          label: "Update Webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Notification API/get-webhook",
          label: "Get Webhook",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Notification API/delete-webhook",
          label: "Delete Webhook",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Notification API/get-webhooks-for-project",
          label: "Get Webhooks for Project",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Notification API/add-webhook-addresses",
          label: "Add Webhook Addresses",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Notification API/delete-webhook-addresses",
          label: "Delete Webhook Addresses",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "fuse-box/fuse-apis/Notification API/get-webhook-addresses-for-webhook-id",
          label: "Get Webhook Addresses for Webhook Id",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
