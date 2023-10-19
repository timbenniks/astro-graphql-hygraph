# Astro Starter Kit: Basics with GraphQL and Hygraph

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │    └── index.astro
│   └── queries/
│       └── getArticles.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Hygraph

Add a `.env` file with your `HYGRAPH_ENDPOINT` parameter in it. Use the high performance read endpoint from the Hygraph interface.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run codegen`         | GraphQL codegen for typescript                   |

## 👀 Want to learn more?

- Check out the [Hygraph documentation](https://hygraph.com/docs) or join the [Hygraph Slack community](https://slack.hygraph.com)
- Check out the [Astro documentation](https://docs.astro.build) or jump into The Astro [Discord server](https://astro.build/chat).
