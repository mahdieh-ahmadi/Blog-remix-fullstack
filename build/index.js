var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\practice\Blog-remix-fullstack\app\root.tsx
var root_exports = {};
__export(root_exports, {
  Document: () => Document,
  ErrorBoundary: () => ErrorBoundary,
  Layout: () => Layout,
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/Styles/GLobal.css
var GLobal_default = "/build/_assets/GLobal-2USLYSP3.css";

// app/Components/Footer/Footer.tsx
var import_react_helmet = require("react-helmet");

// app/Components/Footer/Footer.css
var Footer_default = "/build/_assets/Footer-WLAZEJTM.css";

// app/Components/Footer/Footer.tsx
var Footer = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_helmet.Helmet, null, /* @__PURE__ */ React.createElement("link", {
  rel: "stylesheet",
  href: Footer_default
})), /* @__PURE__ */ React.createElement("footer", null, "\xA9 Designed By Mahdie. 2022")), Footer_default2 = Footer;

// route:D:\practice\Blog-remix-fullstack\app\root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "my react app"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null));
}
var Document = (props) => {
  let children = props.children, title = props.title;
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
}, Layout = (props) => {
  let children = props.children;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement("h1", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/"
  }, "My Remix")), /* @__PURE__ */ React.createElement("ul", {
    className: "list-container list-inline"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/new-post"
  }, "New Post")))), /* @__PURE__ */ React.createElement("div", null, children), /* @__PURE__ */ React.createElement(Footer_default2, null));
};
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "my react app"
  }, /* @__PURE__ */ React.createElement("h1", null, "error"), /* @__PURE__ */ React.createElement("p", null, error.message));
}

// route:D:\practice\Blog-remix-fullstack\app\routes\new-post\index.tsx
var new_post_exports = {};
__export(new_post_exports, {
  action: () => action,
  default: () => new_post_default
});

// app/routes/new-post/NewPost.css
var NewPost_default = "/build/_assets/NewPost-5ZMWS5ZH.css";

// route:D:\practice\Blog-remix-fullstack\app\routes\new-post\index.tsx
var import_react_helmet2 = require("react-helmet"), import_node = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), db = global.__db;

// route:D:\practice\Blog-remix-fullstack\app\routes\new-post\index.tsx
var action = async ({ request }) => {
  let form = await request.formData(), title = form.get("title"), body = form.get("body"), description = form.get("description"), fields = { title, body, description }, post = await db.pOST.create({ data: fields });
  return (0, import_node.redirect)(`/posts/${post.id}`);
}, NewPost = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_helmet2.Helmet, null, /* @__PURE__ */ React.createElement("link", {
  rel: "stylesheet",
  href: NewPost_default
})), /* @__PURE__ */ React.createElement("div", {
  className: "container"
}, /* @__PURE__ */ React.createElement(import_react3.Form, {
  method: "post",
  className: "NewPost container"
}, /* @__PURE__ */ React.createElement("input", {
  className: "input",
  type: "text",
  placeholder: "title",
  name: "title"
}), /* @__PURE__ */ React.createElement("input", {
  className: "input",
  type: "text",
  placeholder: "Description",
  name: "description"
}), /* @__PURE__ */ React.createElement("textarea", {
  className: "input textarea",
  placeholder: "Enter your text",
  name: "body"
}), /* @__PURE__ */ React.createElement("button", {
  type: "submit",
  className: "btn btn-primary"
}, "Save")))), new_post_default = NewPost;

// route:D:\practice\Blog-remix-fullstack\app\routes\posts\$postId.tsx
var postId_exports = {};
__export(postId_exports, {
  default: () => postId_default
});
var import_react4 = require("@remix-run/react"), postItem = () => {
  let params = (0, import_react4.useParams)();
  return /* @__PURE__ */ React.createElement("div", null, "post detail ", params.postId);
}, postId_default = postItem;

// route:D:\practice\Blog-remix-fullstack\app\routes\posts\index.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default
});
var Posts = () => /* @__PURE__ */ React.createElement("div", null, "posts"), posts_default = Posts;

// route:D:\practice\Blog-remix-fullstack\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react7 = require("@remix-run/react");

// app/Components/Main/Header.css
var Header_default = "/build/_assets/Header-B4HM4VGG.css";

// app/Components/Main/Header.tsx
var import_react_helmet3 = require("react-helmet"), import_react5 = require("@remix-run/react");

// app/images/header.jpg
var header_default = "/build/_assets/header-MP2M65DO.jpg";

// app/Components/Main/Header.tsx
var Header = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_helmet3.Helmet, null, /* @__PURE__ */ React.createElement("link", {
  rel: "stylesheet",
  href: Header_default
})), /* @__PURE__ */ React.createElement("div", {
  className: "container mainPage-container"
}, /* @__PURE__ */ React.createElement("div", {
  className: "mainPage-container_image"
}, /* @__PURE__ */ React.createElement("img", {
  src: header_default
})), /* @__PURE__ */ React.createElement("h1", {
  className: "main-title"
}, "Discover Various news, ", /* @__PURE__ */ React.createElement("br", null), " article & podcast"), /* @__PURE__ */ React.createElement("p", {
  className: "paragraph mainPage-paragraph"
}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta laborum ut, consequuntur ipsum rerum quasi quod ."), /* @__PURE__ */ React.createElement(import_react5.Link, {
  to: "/posts"
}, /* @__PURE__ */ React.createElement("button", {
  className: "btn mainPage-btn"
}, "explore All")))), Header_default2 = Header;

// app/Components/posts/postItem.css
var postItem_default = "/build/_assets/postItem-YRW5GH5L.css";

// app/Components/posts/PostItem.tsx
var import_react_helmet4 = require("react-helmet"), import_react6 = require("@remix-run/react"), PostItem = (props) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_helmet4.Helmet, null, /* @__PURE__ */ React.createElement("link", {
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
}, props.description), /* @__PURE__ */ React.createElement("p", {
  className: "paragraph postItem--time"
}, new Date(props.createdAt).toLocaleString()), /* @__PURE__ */ React.createElement(import_react6.Link, {
  to: `/posts/${props.id}`
}, /* @__PURE__ */ React.createElement("button", {
  className: "btn postItem--btn"
}, "read article")))), PostItem_default = PostItem;

// app/images/mian.jpg
var mian_default = "/build/_assets/mian-Z2ETN7OL.jpg";

// route:D:\practice\Blog-remix-fullstack\app\routes\index.tsx
var loader = async () => ({
  posts: await db.pOST.findMany({
    take: 3,
    select: {
      id: !0,
      title: !0,
      createdAt: !0,
      description: !0
    },
    orderBy: { createdAt: "desc" }
  })
});
function Index() {
  let { posts } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header_default2, null), /* @__PURE__ */ React.createElement("div", {
    className: "container postsExplore-container"
  }, posts == null ? void 0 : posts.map((item) => /* @__PURE__ */ React.createElement(PostItem_default, {
    description: item.description,
    id: item.id,
    image: item.image || mian_default,
    title: item.title,
    createdAt: item.createdAt,
    key: item.id
  }))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "3c99643b", entry: { module: "/build/entry.client-CKQE2VSY.js", imports: ["/build/_shared/chunk-ENDSL7L4.js", "/build/_shared/chunk-O6YYFGCX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RECDGZLM.js", imports: ["/build/_shared/chunk-HI55HXPO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-STFAUDCE.js", imports: ["/build/_shared/chunk-TCO5B5EL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/new-post/index": { id: "routes/new-post/index", parentId: "root", path: "new-post", index: !0, caseSensitive: void 0, module: "/build/routes/new-post/index-AMMI4FXW.js", imports: ["/build/_shared/chunk-TCO5B5EL.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/$postId": { id: "routes/posts/$postId", parentId: "root", path: "posts/:postId", index: void 0, caseSensitive: void 0, module: "/build/routes/posts/$postId-OX674GYC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts/index": { id: "routes/posts/index", parentId: "root", path: "posts", index: !0, caseSensitive: void 0, module: "/build/routes/posts/index-EA6YWT77.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-3C99643B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/new-post/index": {
    id: "routes/new-post/index",
    parentId: "root",
    path: "new-post",
    index: !0,
    caseSensitive: void 0,
    module: new_post_exports
  },
  "routes/posts/$postId": {
    id: "routes/posts/$postId",
    parentId: "root",
    path: "posts/:postId",
    index: void 0,
    caseSensitive: void 0,
    module: postId_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "root",
    path: "posts",
    index: !0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
