# Fuse Docs

This repo runs [docs.fuse.io](https://docs.fuse.io).

Source can be viewed in [`docs`](./docs/) directory.

## Running Locally

1. `yarn install`
2. `yarn start`
3. Open `http://localhost:3000/`

## Adding a New Page

1. Create a new file in `docs/`
2. Configure `sidebars.js` to create the sidebar link.

## Editing a Page

1. Open the file in `docs/`

## Modifying routes

Whenever a route is changed DocSearch needs to crawl the website in order to keep the search engine working properly, this is scheduled once a week, it is therefore
recommended to use redirects to avoid broken links. See [link](https://vercel.com/docs/concepts/projects/project-configuration#redirects).

## Customize Settings & Theme

1. Open `docusaurus.config.js`
