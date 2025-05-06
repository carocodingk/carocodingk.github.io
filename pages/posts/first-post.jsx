import Link from "next/link"
import Head from "next/head"
import Script from "next/script"

export default function FirstPost() {
  return(
    <div style={{padding: '2em'}}>
      <Head>        {/*This page metadata*/}
        <title>First Post!!</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> FOR RUNNING THIRD PARTY SCRIPTS*/}    
      <h1>FIRST POST</h1>
      <div>
        Page Router
        In Next.js, a page is a React component exported from a file in the pages
        directory.
        Pages are associated with a route based on their file name.
        <ol>
          <li>pages/index.js is associated with the / route.</li>
          <li>pages/posts/first-post.js is associated with the /posts/first-post route.</li>
        </ol>
        To create a new page. Create a folder inside of pages and then create a file inside of it. This most be exported as default export
        <h2>
        <Link href="/">Back to home</Link>
        The Link component enables client-side navigation between two pages in the same Next.js app.
        Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.
        </h2>
        <div>
                Code splitting and prefetching

        Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

        This ensures that the homepage loads quickly even if you have hundreds of pages.

        Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.

        Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!        </div>
      </div>
      <div>
      The default export of _app.js is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages, or to add global styles 
      Adding Global CSS

In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.

The reason that global CSS can't be imported outside of pages/_app.js is that global CSS affects all elements on the page.

If you were to navigate from the homepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally.
      </div>
    </div>
  )
}