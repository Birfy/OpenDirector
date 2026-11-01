import s from "./module-e1_2.js";
import c from "./module-GR_2.js";
import l from "./module-lG_2_2.js";
import f from "bT";
import g from "./module-VQG.js";
let n;
let i;
let a;
let o;
const p = "bodyAttributes";
const m = "htmlAttributes";
const y = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title",
};
Object.keys(y).map((t) => y[t]);
const b = "cssText";
const v = "href";
const I = "innerHTML";
const w = "itemprop";
const C = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex",
};
const B = Object.keys(C).reduce((acc, key) => {
  acc[C[key]] = key;
  return acc;
}, {});
const S = [y.NOSCRIPT, y.SCRIPT, y.STYLE];
const E = "data-react-helmet";
const D = (t, e) => {
  if (!(t instanceof e)) {
    throw TypeError("Cannot call a class as a function");
  }
};
const x = (() => {
  function t(t, e) {
    for (let r = 0; r < e.length; r++) {
      const n = e[r];
      n.enumerable = n.enumerable || false;
      n.configurable = true;
      if ("value" in n) {
        n.writable = true;
      }
      Object.defineProperty(t, n.key, n);
    }
  }
  return function (e, r, n) {
    if (r) {
      t(e.prototype, r);
    }
    if (n) {
      t(e, n);
    }
    return e;
  };
})();
const Q = (t, e) => {
  if (typeof e !== "function" && e !== null) {
    throw TypeError(
      `Super expression must either be null or a function, not ${typeof e}`,
    );
  }
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (e) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(t, e);
    } else {
      t.__proto__ = e;
    }
  }
};
const N = (t, e) => {
  const r = {};
  for (const n in t) {
    if (!(e.indexOf(n) >= 0) && Object.prototype.hasOwnProperty.call(t, n)) {
      r[n] = t[n];
    }
  }
  return r;
};
const R = (t, e) => {
  if (!t) {
    throw ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  if (e && (typeof e === "object" || typeof e === "function")) {
    return e;
  }
  return t;
};
const K = function (t) {
  const e =
    !(arguments.length > 1) || arguments[1] === undefined || arguments[1];
  if (e === false) {
    return String(t);
  }
  return String(t)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
};
const G = (t) => {
  const e = Y(t, y.TITLE);
  const r = Y(t, "titleTemplate");
  if (r && e) {
    return r.replace(/%s/g, () => {
      if (Array.isArray(e)) {
        return e.join("");
      }
      return e;
    });
  }
  const n = Y(t, "defaultTitle");
  return e || n || undefined;
};
const O = (t, e) =>
  e
    .filter((e) => e[t] !== undefined)
    .map((e) => e[t])
    .reduce(
      (acc, item) => ({
        ...acc,
        ...item,
      }),
      {},
    );
const T = (t, e, r) => {
  const n = {};
  return r
    .filter(
      (e) =>
        !!Array.isArray(e[t]) ||
        (e[t] !== undefined &&
          L(
            "Helmet: " +
              t +
              ' should be of type "Array". Instead found type "' +
              typeof e[t] +
              '"',
          ),
        false),
    )
    .map((e) => e[t])
    .reverse()
    .reduce((acc, item) => {
      const i = {};
      item
        .filter((t) => {
          let r;
          for (let a = Object.keys(t), o = 0; o < a.length; o++) {
            const s = a[o];
            const A = s.toLowerCase();
            if (
              e.indexOf(A) !== -1 &&
              (r !== "rel" || t[r].toLowerCase() !== "canonical") &&
              (A !== "rel" || t[A].toLowerCase() !== "stylesheet")
            ) {
              r = A;
            }
            if (e.indexOf(s) !== -1 && (s === I || s === b || s === w)) {
              r = s;
            }
          }
          if (!r || !t[r]) {
            return false;
          }
          const c = t[r].toLowerCase();
          if (!n[r]) {
            n[r] = {};
          }
          if (!i[r]) {
            i[r] = {};
          }
          return !n[r][c] && ((i[r][c] = true), true);
        })
        .reverse()
        .forEach((e) => acc.push(e));
      for (let a = Object.keys(i), o = 0; o < a.length; o++) {
        const s = a[o];
        const A = g({}, n[s], i[s]);
        n[s] = A;
      }
      return acc;
    }, [])
    .reverse();
};
var Y = (t, e) => {
  for (let r = t.length - 1; r >= 0; r--) {
    const n = t[r];
    if (n.hasOwnProperty(e)) {
      return n[e];
    }
  }
  return null;
};
n = Date.now();
const U = function (t) {
  const e = Date.now();
  if (e - n > 16) {
    n = e;
    t(e);
  } else {
    setTimeout(() => {
      U(t);
    }, 0);
  }
};
const W = function (t) {
  return clearTimeout(t);
};
const M =
  typeof window !== "undefined"
    ? (window.requestAnimationFrame &&
        window.requestAnimationFrame.bind(window)) ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      U
    : global.requestAnimationFrame || U;
const J =
  typeof window !== "undefined"
    ? window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      W
    : global.cancelAnimationFrame || W;
var L = (t) => console && typeof console.warn === "function" && console.warn(t);
let H = null;
const Z = (t, e) => {
  const t_baseTag = t.baseTag;
  const t_bodyAttributes = t.bodyAttributes;
  const t_htmlAttributes = t.htmlAttributes;
  const t_linkTags = t.linkTags;
  const t_metaTags = t.metaTags;
  const t_noscriptTags = t.noscriptTags;
  const t_onChangeClientState = t.onChangeClientState;
  const t_scriptTags = t.scriptTags;
  const t_styleTags = t.styleTags;
  const t_title = t.title;
  const t_titleAttributes = t.titleAttributes;
  q(y.BODY, t_bodyAttributes);
  q(y.HTML, t_htmlAttributes);
  P(t_title, t_titleAttributes);
  const f = {
    baseTag: V(y.BASE, t_baseTag),
    linkTags: V(y.LINK, t_linkTags),
    metaTags: V(y.META, t_metaTags),
    noscriptTags: V(y.NOSCRIPT, t_noscriptTags),
    scriptTags: V(y.SCRIPT, t_scriptTags),
    styleTags: V(y.STYLE, t_styleTags),
  };
  const g = {};
  const d = {};
  Object.keys(f).forEach((t) => {
    const e = f[t];
    const e_newTags = e.newTags;
    const e_oldTags = e.oldTags;
    if (e_newTags.length) {
      g[t] = e_newTags;
    }
    if (e_oldTags.length) {
      d[t] = f[t].oldTags;
    }
  });
  if (e) {
    e();
  }
  t_onChangeClientState(t, g, d);
};
const j = (t) => {
  if (Array.isArray(t)) {
    return t.join("");
  }
  return t;
};
var P = (t, e) => {
  if (t !== undefined && document.title !== t) {
    document.title = j(t);
  }
  q(y.TITLE, e);
};
var q = (t, e) => {
  const r = document.getElementsByTagName(t)[0];
  if (r) {
    const n = r.getAttribute(E);
    const i = n ? n.split(",") : [];
    const a = [].concat(i);
    for (var o = Object.keys(e), s = 0; s < o.length; s++) {
      const A = o[s];
      const c = e[A] || "";
      if (r.getAttribute(A) !== c) {
        r.setAttribute(A, c);
      }
      if (i.indexOf(A) === -1) {
        i.push(A);
      }
      const u = a.indexOf(A);
      if (u !== -1) {
        a.splice(u, 1);
      }
    }
    for (let l = a.length - 1; l >= 0; l--) {
      r.removeAttribute(a[l]);
    }
    if (i.length === a.length) {
      r.removeAttribute(E);
    } else if (r.getAttribute(E) !== o.join(",")) {
      r.setAttribute(E, o.join(","));
    }
  }
};
var V = (t, e) => {
  const r = document.head || document.querySelector(y.HEAD);
  const n = r.querySelectorAll(t + "[" + E + "]");
  const oldTags = Array.prototype.slice.call(n);
  const newTags = [];
  let o;
  if (e && e.length) {
    e.forEach((e) => {
      const r = document.createElement(t);
      for (const n in e) {
        if (e.hasOwnProperty(n)) {
          if (n === I) {
            r.innerHTML = e.innerHTML;
          } else if (n === b) {
            if (r.styleSheet) {
              r.styleSheet.cssText = e.cssText;
            } else {
              r.appendChild(document.createTextNode(e.cssText));
            }
          } else {
            const s = e[n] === undefined ? "" : e[n];
            r.setAttribute(n, s);
          }
        }
      }
      r.setAttribute(E, "true");
      if (
        oldTags.some((t, e) => {
          o = e;
          return r.isEqualNode(t);
        })
      ) {
        oldTags.splice(o, 1);
      } else {
        newTags.push(r);
      }
    });
  }
  oldTags.forEach((t) => t.parentNode.removeChild(t));
  newTags.forEach((t) => r.appendChild(t));
  return {
    oldTags,
    newTags,
  };
};
const X = (t) =>
  Object.keys(t).reduce((acc, key) => {
    const n = t[key] !== undefined ? key + '="' + t[key] + '"' : "" + key;
    if (acc) {
      return acc + " " + n;
    }
    return n;
  }, "");
const z = (t, title, titleAttributes, n) => {
  const i = X(titleAttributes);
  const a = j(title);
  if (i) {
    return "<" + t + " " + E + '="true" ' + i + ">" + K(a, n) + "</" + t + ">";
  }
  return "<" + t + " " + E + '="true">' + K(a, n) + "</" + t + ">";
};
const _ = function (t) {
  const e =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(t).reduce((acc, key) => {
    acc[C[key] || key] = t[key];
    return acc;
  }, e);
};
const $ = function (t) {
  const e =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(t).reduce((acc, key) => {
    acc[B[key] || key] = t[key];
    return acc;
  }, e);
};
const tt = (t, title, titleAttributes) => {
  const i = _(titleAttributes, {
    key: title,
    [E]: true,
  });
  return [f.createElement(y.TITLE, i, title)];
};
const te = (t, e, r) => {
  switch (t) {
    case y.TITLE:
      return {
        toComponent: function () {
          return tt(t, e.title, e.titleAttributes);
        },
        toString: function () {
          return z(t, e.title, e.titleAttributes, r);
        },
      };
    case p:
    case m:
      return {
        toComponent: function () {
          return _(e);
        },
        toString: function () {
          return X(e);
        },
      };
    default:
      return {
        toComponent: function () {
          return e.map((e, key) => {
            const i = {
              key,
              [E]: true,
            };
            Object.keys(e).forEach((t) => {
              const r = C[t] || t;
              if (r === I || r === b) {
                i.dangerouslySetInnerHTML = {
                  __html: e.innerHTML || e.cssText,
                };
              } else {
                i[r] = e[t];
              }
            });
            return f.createElement(t, i);
          });
        },
        toString: function () {
          return e.reduce((acc, item) => {
            const i = Object.keys(item)
              .filter((t) => t !== I && t !== b)
              .reduce((acc_1, key) => {
                const i =
                  item[key] === undefined
                    ? key
                    : key + '="' + K(item[key], r) + '"';
                if (acc_1) {
                  return acc_1 + " " + i;
                }
                return i;
              }, "");
            const a = item.innerHTML || item.cssText || "";
            const o = S.indexOf(t) === -1;
            return (
              acc +
              "<" +
              t +
              " " +
              E +
              '="true" ' +
              i +
              (o ? "/>" : ">" + a + "</" + t + ">")
            );
          }, "");
        },
      };
  }
};
const tr = function (t) {
  const t_baseTag = t.baseTag;
  const t_bodyAttributes = t.bodyAttributes;
  const t_encode = t.encode;
  const t_htmlAttributes = t.htmlAttributes;
  const t_linkTags = t.linkTags;
  const t_metaTags = t.metaTags;
  const t_noscriptTags = t.noscriptTags;
  const t_scriptTags = t.scriptTags;
  const t_styleTags = t.styleTags;
  const t_title = t.title;
  const t_titleAttributes = t.titleAttributes;
  return {
    base: te(y.BASE, t_baseTag, t_encode),
    bodyAttributes: te(p, t_bodyAttributes, t_encode),
    htmlAttributes: te(m, t_htmlAttributes, t_encode),
    link: te(y.LINK, t_linkTags, t_encode),
    meta: te(y.META, t_metaTags, t_encode),
    noscript: te(y.NOSCRIPT, t_noscriptTags, t_encode),
    script: te(y.SCRIPT, t_scriptTags, t_encode),
    style: te(y.STYLE, t_styleTags, t_encode),
    title: te(
      y.TITLE,
      {
        title: t_title === undefined ? "" : t_title,
        titleAttributes: t_titleAttributes,
      },
      t_encode,
    ),
  };
};
i = c(
  function (t) {
    let e;
    return {
      baseTag:
        ((e = [v, "target"]),
        t
          .filter((t) => t[y.BASE] !== undefined)
          .map((t) => t[y.BASE])
          .reverse()
          .reduce((acc, item) => {
            if (!acc.length) {
              for (let n = Object.keys(item), i = 0; i < n.length; i++) {
                const a = n[i].toLowerCase();
                if (e.indexOf(a) !== -1 && item[a]) {
                  return acc.concat(item);
                }
              }
            }
            return acc;
          }, [])),
      bodyAttributes: O(p, t),
      defer: Y(t, "defer"),
      encode: Y(t, "encodeSpecialCharacters"),
      htmlAttributes: O(m, t),
      linkTags: T(y.LINK, ["rel", v], t),
      metaTags: T(y.META, ["name", "charset", "http-equiv", "property", w], t),
      noscriptTags: T(y.NOSCRIPT, [I], t),
      onChangeClientState: Y(t, "onChangeClientState") || function () {},
      scriptTags: T(y.SCRIPT, ["src", I], t),
      styleTags: T(y.STYLE, [b], t),
      title: G(t),
      titleAttributes: O("titleAttributes", t),
    };
  },
  function (t) {
    if (H) {
      J(H);
    }
    if (t.defer) {
      H = M(function () {
        Z(t, function () {
          H = null;
        });
      });
    } else {
      Z(t);
      H = null;
    }
  },
  tr,
)(function () {
  return null;
});
o = a = ((t) => {
  function e() {
    D(this, e);
    return R(this, t.apply(this, arguments));
  }
  Q(e, t);
  e.prototype.shouldComponentUpdate = function (t) {
    return !l(this.props, t);
  };
  e.prototype.mapNestedChildrenToProps = function (t, e) {
    if (!e) {
      return null;
    }
    switch (t.type) {
      case y.SCRIPT:
      case y.NOSCRIPT:
        return {
          innerHTML: e,
        };
      case y.STYLE:
        return {
          cssText: e,
        };
    }
    throw Error(
      "<" +
        t.type +
        " /> elements are self-closing and can not contain children. Refer to our API for more information.",
    );
  };
  e.prototype.flattenArrayTypeChildren = function (t) {
    const t_child = t.child;
    const t_arrayTypeChildren = t.arrayTypeChildren;
    const t_newChildProps = t.newChildProps;
    const t_nestedChildren = t.nestedChildren;
    return {
      ...t_arrayTypeChildren,
      ...{
        [t_child.type]: [].concat(t_arrayTypeChildren[t_child.type] || [], [
          {
            ...t_newChildProps,
            ...this.mapNestedChildrenToProps(t_child, t_nestedChildren),
          },
        ]),
      },
    };
  };
  e.prototype.mapObjectTypeChildren = function (t) {
    const t_child = t.child;
    const t_newProps = t.newProps;
    const t_newChildProps = t.newChildProps;
    const t_nestedChildren = t.nestedChildren;
    switch (t_child.type) {
      case y.TITLE:
        return {
          ...t_newProps,
          ...{
            [t_child.type]: t_nestedChildren,
            titleAttributes: {
              ...t_newChildProps,
            },
          },
        };
      case y.BODY:
        return {
          ...t_newProps,
          bodyAttributes: {
            ...t_newChildProps,
          },
        };
      case y.HTML:
        return {
          ...t_newProps,
          htmlAttributes: {
            ...t_newChildProps,
          },
        };
    }
    return {
      ...t_newProps,
      ...{
        [t_child.type]: {
          ...t_newChildProps,
        },
      },
    };
  };
  e.prototype.mapArrayTypeChildrenToProps = function (t, e) {
    let r = {
      ...e,
    };
    Object.keys(t).forEach((e) => {
      r = {
        ...r,
        ...{
          [e]: t[e],
        },
      };
    });
    return r;
  };
  e.prototype.warnOnInvalidChildren = function (t, e) {
    return true;
  };
  e.prototype.mapChildrenToProps = function (t, newProps) {
    const r = this;
    let arrayTypeChildren = {};
    f.Children.forEach(t, function (child) {
      if (child && child.props) {
        const i = child.props;
        const nestedChildren = i.children;
        const newChildProps = $(N(i, ["children"]));
        r.warnOnInvalidChildren(child, nestedChildren);
        switch (child.type) {
          case y.LINK:
          case y.META:
          case y.NOSCRIPT:
          case y.SCRIPT:
          case y.STYLE:
            arrayTypeChildren = r.flattenArrayTypeChildren({
              child,
              arrayTypeChildren,
              newChildProps,
              nestedChildren,
            });
            break;
          default:
            newProps = r.mapObjectTypeChildren({
              child,
              newProps,
              newChildProps,
              nestedChildren,
            });
        }
      }
    });
    return (newProps = this.mapArrayTypeChildrenToProps(
      arrayTypeChildren,
      newProps,
    ));
  };
  e.prototype.render = function () {
    const props = this.props;
    const t_children = props.children;
    let r = {
      ...N(props, ["children"]),
    };
    if (t_children) {
      r = this.mapChildrenToProps(t_children, r);
    }
    return f.createElement(i, r);
  };
  x(e, null, [
    {
      key: "canUseDOM",
      set: function (t) {
        i.canUseDOM = t;
      },
    },
  ]);
  return e;
})(f.Component);
a.propTypes = {
  base: s.object,
  bodyAttributes: s.object,
  children: s.oneOfType([s.arrayOf(s.node), s.node]),
  defaultTitle: s.string,
  defer: s.bool,
  encodeSpecialCharacters: s.bool,
  htmlAttributes: s.object,
  link: s.arrayOf(s.object),
  meta: s.arrayOf(s.object),
  noscript: s.arrayOf(s.object),
  onChangeClientState: s.func,
  script: s.arrayOf(s.object),
  style: s.arrayOf(s.object),
  title: s.string,
  titleAttributes: s.object,
  titleTemplate: s.string,
};
a.defaultProps = {
  defer: true,
  encodeSpecialCharacters: true,
};
a.peek = i.peek;
a.rewind = function () {
  let t = i.rewind();
  if (!t) {
    t = tr({
      baseTag: [],
      bodyAttributes: {},
      encodeSpecialCharacters: true,
      htmlAttributes: {},
      linkTags: [],
      metaTags: [],
      noscriptTags: [],
      scriptTags: [],
      styleTags: [],
      title: "",
      titleAttributes: {},
    });
  }
  return t;
};
var tn = o;
export { tn as m };
tn.renderStatic = tn.rewind;
