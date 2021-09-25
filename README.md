# Project Overview
This is a portfolio project built with Next.js

## Run Scripts
- `npm run dev` - Runs next dev which starts Next.js in development mode
- `npm run build` - Runs next build which builds the application for production usage
- `npm run start` - Runs next start which starts a Next.js production server

### General information
In Next.js, a page is a React Component exported from a file in the pages directory.

Once you create a new post or page in Next.js, the path to the file becomes the URL path.

### Page links
When linking between pages you use the `<Link>` component from `next/Link` to wrap `<a>` tags.
```
import Link from 'next/link';
```
This will import the `Link` component.

Note: If you need to link to an external page outside the Next.js app, just use an `<a>` tag without Link.

If you need to add attributes like, for example, `className`, add it to the `<a>` tag, not to the Link tag.

### Assets
Next.js can serve static assets, like images, under the top-level `public` directory.
Files inside `public` can be referenced from the root of the application similar to `pages`.

Instead of optimizing images at build time, Next.js optimizes images on-demand, as users request them.
Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.

Use the built in `<Image/>` component to handle images.

### Head
Notice that `<Head>` is used instead of the lowercase `<head>`. `<Head>` is a React Component that is built into Next.js.
It allows you to modify the `<head>` of a page.

You can import the Head component from the `next/head` module.






## Static Generation with Data using `getStaticProps`
How does it work? Well, in Next.js, when you export a page component, you can also export an `async` function called `getStaticProps`.
If you do this, then:

- `getStaticProps` runs at build time in production, and…
- Inside the function, you can fetch external data and send it as props to the page.
```javascript
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```
Essentially, getStaticProps allows you to tell Next.js: “Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”

> **Note**: In development mode, getStaticProps runs on each request instead.