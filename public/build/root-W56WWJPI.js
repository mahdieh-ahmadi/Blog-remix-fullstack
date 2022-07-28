import {
  Link,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-23SUQHTC.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:D:\practice\Blog-remix-fullstack\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/Styles/GLobal.css
var GLobal_default = "/build/_assets/GLobal-AEPYX3W3.css";

// app/root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "my react app"
  }, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null));
}
var Document = (props) => {
  const children = props.children;
  const title = props.title;
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "UTF-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: GLobal_default
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement("title", null, title || "My first remix app")), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Layout, null, children)));
};
var Layout = (props) => {
  const children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement("h1", null, "My Remix"), /* @__PURE__ */ React.createElement("ul", {
    className: "list-container list-inline"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/posts"
  }, "Posts")))), /* @__PURE__ */ React.createElement("div", null, children));
};
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-W56WWJPI.js.map
