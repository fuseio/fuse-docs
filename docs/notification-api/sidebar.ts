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
          id: "notification-api/create-a-webhook",
          label: "Create a webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notification-api/update-a-webhook",
          label: "Update a webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "notification-api/get-a-webhook-by-id",
          label: "Get a webhook by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notification-api/delete-a-webhook",
          label: "Delete a webhook",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "notification-api/get-webhooks-for-a-project",
          label: "Get webhooks for a project",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "notification-api/add-addresses-to-a-webhook",
          label: "Add addresses to a webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notification-api/delete-addresses-from-a-webhook",
          label: "Delete addresses from a webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "notification-api/get-addresses-for-a-webhook",
          label: "Get addresses for a webhook",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
