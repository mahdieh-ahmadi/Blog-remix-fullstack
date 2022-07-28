import {
  HelmetExport
} from "/build/_shared/chunk-L4KRPGWG.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-DNEVBLEG.js";

// browser-route-module:D:\practice\Blog-remix-fullstack\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/Components/Main/Header.tsx
init_react();

// app/Components/Main/Header.css
var Header_default = "/build/_assets/Header-OBXWDGMG.css";

// app/Components/Main/Header.tsx
var Header = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HelmetExport, null, /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: Header_default
  })), /* @__PURE__ */ React.createElement("div", {
    className: "container mainPage-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "main-title"
  }, "Discover Various news, ", /* @__PURE__ */ React.createElement("br", null), " article & podcast"), /* @__PURE__ */ React.createElement("p", {
    className: "paragraph mainPage-paragraph"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta laborum ut, consequuntur ipsum rerum quasi quod ."), /* @__PURE__ */ React.createElement("button", {
    className: "btn mainPage-btn"
  }, "explore All")));
};
var Header_default2 = Header;

// app/Components/posts/PostItem.tsx
init_react();

// app/Components/posts/postItem.css
var postItem_default = "/build/_assets/postItem-C4LVDAT4.css";

// app/Components/posts/PostItem.tsx
var PostItem = (props) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(HelmetExport, null, /* @__PURE__ */ React.createElement("link", {
    rel: "stylesheet",
    href: postItem_default
  })), /* @__PURE__ */ React.createElement("div", {
    className: "postItem"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "postItem__image",
    src: props.image,
    alt: props.title
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "secondaryTitle postItem--title"
  }, props.title), /* @__PURE__ */ React.createElement("p", {
    className: "paragraph postItem--paragraph"
  }, props.description), /* @__PURE__ */ React.createElement("button", {
    className: "btn postItem--btn"
  }, "read article")));
};
var PostItem_default = PostItem;

// app/images/mian.jpg
var mian_default = "/build/_assets/mian-Z2ETN7OL.jpg";

// app/routes/index.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header_default2, null), /* @__PURE__ */ React.createElement("div", {
    className: "container postsExplore-container"
  }, /* @__PURE__ */ React.createElement(PostItem_default, {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 1,
    image: mian_default,
    title: "test"
  }), /* @__PURE__ */ React.createElement(PostItem_default, {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 1,
    image: mian_default,
    title: "test"
  }), /* @__PURE__ */ React.createElement(PostItem_default, {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    id: 1,
    image: mian_default,
    title: "test"
  })));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-TDGZN54L.js.map
