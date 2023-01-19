This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## NEXTJS 

## Pre - Rendering & Data Fetching ?

## What and why of pre - rendering ?

By default NEXTJS pre-render every page in the application.

# What does pre - render mean ?
 NEXTJS generate HTML for each page in advance instead of having it all done by client-side JavaScript

# Why pre -  render ?

1) Pre -  render improve performance.
2) In react app , you need to wait to javaScript to be executed.
3) Perhaps fetch data from am external  API and then render the UI.
4) There is a wait time for the user.
5) With a pre-rendered , the HTML is already generated and loads faster.
6) Pre - rendering helps SEO.
7) If you builing a E-commerce or blog site it's necessary and conern SEO.
8) With React app, if serach engine hits your page it's only seen a div tag with id equal to root.
9) If search enegine hits the pre-rendered page though, all the content is present in the source code which will help index that page.

## Pre -rendering Summary:
Pre - rendering refers to the process of generating HTML with the necesary data for a page in our application.

Pre - rendering can result in better performance and SEO. 


# Static Generation:

A method of pre-rendering where the HTML pages are generated at build time.

The HTML with all the data that makes up the content of the web page are generated in advance when you build your application.

Recommended method for pre-render pages  whenever it's possible becasue page can be built once , cached by a CDN and served to the client almost instantly.

Example:
When to use static generation (Blog pages, ecommerce product pages, documentation pages and maeketing pages etc)

# Static Generation How ?

By deafult NEXTJS pre-render every page in our app

The HTMl for every page will automatically be statically generated when we build our application

# getStaticProps
1) getStaticProps runs only on the server side
2) The function will never run client-side
3) The code you write inside getStaticProps won't even be included in JS bundle that is sent to the browser
4) You can write server side code directly in getStaticProps
5) Accessing the file systems using the modules or quering database can be done in getStaticProps
6) You also don't have to worry about including API Keys in getStaticProps as that won't make it to the browser
7) getStaticProps is allowed only in a page and can not run from a regular component file.
8) It is used only for pre-rendering and not client-side data fetching
9) getStaticProps should return an object and object contains a props key which is an object*
10) getStaticProps will run at build time.