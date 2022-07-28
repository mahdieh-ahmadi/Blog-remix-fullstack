import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyle from '~/Styles/GLobal.css'
import Footer from "./Components/Footer/Footer";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document title='my react app'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
    </Document>
  );
}

export const Document = (props:{
  children:any[],
  title:string
}) => {
  const children = props.children
  const title = props.title

  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href={globalStyle} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <title>{title|| 'My first remix app'}</title>
    </head>
    <body>
      <Layout>
        {children}
      </Layout>
    </body>
    </html>
  )
}

export const Layout = (props:{
  children:any[]
}) => {
  const children = props.children

  return (
    <>
    <nav className='navbar'>
      <h1>
        My Remix
      </h1>
      <ul className='list-container list-inline'>
        <li className='list-item'>
          <Link to='/posts' >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
    <div>
      {children}
    </div>
    <Footer />
    </>
  )
}
