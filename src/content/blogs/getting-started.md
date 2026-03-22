---
title: "Getting Started with Spectre"
description: "Find out how to configure Spectre."
image: "../assets/spectre.png"
createdAt: 12-29-2024
draft: true
tags:
  - guide
  - Non-Tech
---

### Blogs

Let's move on to the *real* content. The `posts/` directory is home to all your blog posts, written in MDX. To create a new post, simply create a new file! The filename will be used as the slug for the page.

Each post can provide the following information in the frontmatter:

```mdx
---
title: "Getting Started with Spectre" # The title of the post
description: "Find out how to configure Spectre." # The description of the post
image: "../assets/spectre.png" # The image to be used as the OG image, referenced with a relative path.
createdAt: 12-29-2024 # Creation date
updatedAt: 12-30-2024 # Optional, will be used in the meta tags to tell Google and co. that a post was updated
draft: false # Optional, can be used to hide a post completely
tags: # The tags, referencing the ones defined earlier in the `tags.json` file
  - guide
---
```

After the frontmatter, you can write your post in MDX! If you're not familiar with MDX, you can find a guide [here](https://mdxjs.com/getting-started).

> As for the images, it is recommended to place them in `src/content/assets`. That way, you can separate them from normal images.

### Projects

The `projects/` directory is similar to the `posts/` directory, but for projects. There's a few differences in the frontmatter:

```mdx
---
title: Spectre # The title of the project
date: 12-29-2024 # Date of publication
description: Spectre is a terminal-inspired theme for Astro, built using Astro and TypeScript. # Description of the project
image: ../assets/spectre.png # The image to be used as the OG image, referenced with a relative path
info: # A TOML-like list of information about the project
  - text: GitHub # Text for this info
    link: https://github.com/louisescher/spectre # Optional if you want to link to somewhere
    icon:
      type: lucide # Icon library, either "lucide" or "simple-icons"
      name: github # The name of the icon
---
```

### Other

The `src/content/other/` directory is home to all MDX content which does not need it's own category. For example, you'll find an `about.mdx` file in here, which is responsible for the "About me" section on the homepage!

## Deploying

Spectre uses the [`node`](https://docs.astro.build/en/guides/integrations-guide/node/) adapter by default. If you want to deploy to Netlify or Vercel, you need their respective adapters:
- [`@astrojs/netlify`](https://docs.astro.build/en/guides/integrations-guide/netlify/)
- [`@astrojs/vercel`](https://docs.astro.build/en/guides/integrations-guide/vercel/)

When deploying to GitHub Pages, make sure to remove the adapter from the `astro.config.ts` file altogether:

```ts del={4-6} title="astro.config.ts"
// ...
export default defineConfig({
  // ...
  adapter: node({
    mode: 'standalone'
  })
});
```

After doing so, you can follow the [official guide](https://docs.astro.build/en/guides/deploy/github/) to deploy your site.

When not using an adapter, make sure to set `export const prerender` to `true` in `src/pages/styles/giscus.ts` or to remove the file altogether if you don't provide a custom giscus theme yourself.


## Modifying the theme

As with all themes, you might wish to modify it. In terms of content, you should know where you can do that! If you want to modify the primary color for example, you can do so in the `src/styles/globals.css` file:

| Variable | Description | Default |
| --- | --- | --- |
| `--primary` | The primary color of the page. | `#8c5cf5` |
| `--primary-rgb` | RGB version of the primary color. | `140, 92, 245` |
| `--primary-light` | Used for links. | `#a277ff` |
| `--primary-lightest` | Used for links. | `#c2a8fd` |

### Changing the code block colors

Code snippets declared in `.md` and `.mdx` files are powered by [Expressive Code](https://expressive-code.com). By default, Spectre uses a variation of GitHub's dark theme with custom background colors. 

If you want to change the colors of the code snippets (syntax highlighting, background color, etc.) you can provide your desired theme in the `astro.config.ts` file as such:

```ts ins={8} del={1,7} title="astro.config.ts"
import { spectreDark } from './src/ec-theme';
// ...
export default defineConfig({
  // ...
  integrations: [
    expressiveCode({
      themes: [spectreDark],
      themes: ['catppuccin-mocha'],
    }),
    // ... 
  ],
  // ...
});
```
You can find a list of available themes [on Expressive Code's website](https://expressive-code.com/guides/themes/).
