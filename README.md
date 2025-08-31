# Fuse Documentation

Official documentation site for the Fuse blockchain ecosystem, available at [docs.fuse.io](https://docs.fuse.io).

## Overview

This repository contains the source code and content for Fuse's documentation portal, built with Docusaurus 3.8.1 and TinaCMS for content management. The site provides comprehensive documentation for developers, validators, and users of the Fuse blockchain.

## Tech Stack

- **Framework**: [Docusaurus 3.8.1](https://docusaurus.io/) - React-based static site generator
- **CMS**: [TinaCMS 2.8.2](https://tina.io/) - Git-backed content management system
- **Language**: TypeScript with React 19
- **Styling**: CSS Modules with custom CSS
- **API Documentation**: OpenAPI docs generation via `docusaurus-plugin-openapi-docs`
- **Node Version**: 22.x

## Prerequisites

- Node.js 22.x
- Yarn package manager

## Installation

```bash
# Clone the repository
git clone https://github.com/fuseio/fuse-docs.git
cd fuse-docs

# Install dependencies
yarn install
```

## Development

### Local Development Server

```bash
# Start development server (port 3000)
yarn start
```

### TinaCMS Development Mode

```bash
# Start with TinaCMS for content editing
yarn tina
```

This will start both TinaCMS and Docusaurus, allowing you to edit content through the CMS interface at `/admin`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start development server at localhost:3000 |
| `yarn tina` | Start TinaCMS dev mode with Docusaurus |
| `yarn build` | Build production site (TinaCMS + Docusaurus) |
| `yarn serve` | Serve production build locally |
| `yarn clear` | Clear Docusaurus cache |
| `yarn typecheck` | Run TypeScript type checking |
| `yarn gen-all` | Generate all API docs from OpenAPI specs |
| `yarn clean-all` | Clean all generated API docs |
| `yarn re-gen` | Clean and regenerate all API docs |

## Project Structure

```
fuse-docs/
├── docs/                    # Main documentation content
│   ├── basics/             # Overview, ecosystem, governance, FAQ
│   ├── developers/         # Technical docs, APIs, SDKs, tutorials
│   └── fuse-ember/         # Fuse Ember L2 documentation
├── api-references/         # OpenAPI YAML specifications
├── src/
│   ├── components/         # React components
│   ├── theme/             # Docusaurus theme customizations
│   ├── css/               # Global styles and custom fonts
│   └── pages/             # Custom pages
├── static/                # Static assets and images
├── .tina/                 # TinaCMS configuration
│   ├── config.jsx         # TinaCMS content configuration
│   └── __generated__/     # Auto-generated TypeScript types
├── old_docs/              # Legacy documentation (being migrated)
├── docusaurus.config.ts   # Docusaurus configuration
├── sidebars.ts           # Sidebar configuration
└── package.json          # Dependencies and scripts
```

## Content Management

### Adding a New Page

1. Create a new MDX file in the appropriate directory under `docs/`
2. The sidebar will be automatically generated based on the directory structure
3. Use frontmatter to configure page metadata:

```mdx
---
title: Your Page Title
description: Page description for SEO
---

Your content here...
```

### Editing Content

#### Using TinaCMS (Recommended for content editors)
1. Run `yarn tina`
2. Navigate to `http://localhost:3000/admin`
3. Edit content through the visual interface

#### Direct File Editing (For developers)
1. Edit MDX files directly in the `docs/` directory
2. Changes will hot-reload in development mode

### Content Guidelines

- All documentation files use MDX format
- Images should be placed in `static/img/`
- Use provided MDX components for consistent formatting:
  - Admonitions (note, tip, warning, danger)
  - Code blocks with syntax highlighting
  - Tabs for multi-language examples

## API Documentation

The site automatically generates API documentation from OpenAPI specifications for:

- **Notification API** - Push notification services
- **Smart Wallet API** - Smart contract wallet operations
- **Balances API** - Token balance queries
- **Trade API** - DEX trading functionality
- **Explorer API** - Blockchain explorer endpoints
- **GraphQL API** - GraphQL query interface
- **Staking API** - Staking operations

### Regenerating API Docs

```bash
# Generate all API documentation
yarn gen-all

# Clean and regenerate
yarn re-gen
```

## Deployment

### Production Build

```bash
# Create production build
yarn build

# Test production build locally
yarn serve
```

### Branch Strategy

- **master**: Production branch (deployed to docs.fuse.io)
- **staging**: Development and testing branch

## Configuration Files

| File | Purpose |
|------|---------|
| `docusaurus.config.ts` | Main Docusaurus configuration |
| `sidebars.ts` | Sidebar structure (auto-generated) |
| `.tina/config.jsx` | TinaCMS content models and configuration |
| `tsconfig.json` | TypeScript compiler configuration |
| `vercel.json` | Vercel deployment configuration |

## Development Workflow

1. **Before starting work**: Pull latest changes from `master` or `staging`
2. **For content changes**: Use TinaCMS interface (`yarn tina`)
3. **For code changes**: Use standard development server (`yarn start`)
4. **Before committing**: 
   - Run `yarn typecheck` to check TypeScript types
   - Test build with `yarn build`
5. **Create PR**: Target `staging` branch for review

## Troubleshooting

### Clear Cache
If you encounter build issues or stale content:
```bash
yarn clear
```

### Rebuild Dependencies
```bash
rm -rf node_modules yarn.lock
yarn install
```

### Type Errors
```bash
yarn typecheck
```

## Contributing

1. Fork the repository
2. Create a feature branch from `staging`
3. Make your changes
4. Run type checking: `yarn typecheck`
5. Submit a pull request to `staging`

## Support

For issues or questions:
- Open an issue on [GitHub](https://github.com/fuseio/fuse-docs)
- Join the [Fuse Discord](https://discord.gg/fuse)
- Visit [fuse.io](https://fuse.io) for more information

## License

MIT License - see LICENSE file for details