import n from "z8";
import a from "bT";
import o from "mL";
import s from "ri";
import c from "Egb";
import d from "HX";
import m from "vS";
let r;
let l = typeof window !== "undefined";
function u() {
  for (let e = arguments.length, t = Array(e), i = 0; i < e; i++) {
    t[i] = arguments[i];
  }
  return "";
}
const p = function (href) {
  let t;
  const fetchpriority =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "low";
  const r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  switch ((t = href.match(/\.([^.]*)$/)) ? t[1] : null) {
    case "js":
      return n.jsx(
        "link",
        {
          rel: "preload",
          href,
          as: "script",
          fetchpriority,
          crossOrigin: "anonymous",
          nonce: "argus-csp-token",
        },
        href,
      );
    case "css":
      if (r) {
        return n.jsx(
          "link",
          {
            rel: "stylesheet",
            href,
            nonce: "argus-csp-token",
          },
          href,
        );
      }
      return n.jsx(
        "link",
        {
          rel: "preload",
          href,
          as: "style",
          fetchpriority,
          crossOrigin: "anonymous",
          nonce: "argus-csp-token",
        },
        href,
      );
    default:
      return n.jsx(
        "link",
        {
          rel: "preload",
          href,
          fetchpriority,
          crossOrigin: "anonymous",
          nonce: "argus-csp-token",
        },
        href,
      );
  }
};
function h(e) {
  let t;
  const { routeAssets, priority, loadCss = false } = e;
  const o = (t = routeAssets.assets) != null ? t : [];
  return n.jsx(m.m, {
    children: o.map((e) => p(e, priority, loadCss)),
  });
}
const v = {
  assets: [],
  referenceCssAssets: [],
  chunkIds: [],
};
const g = (() => {
  if (r) {
    return r.__REGION__;
  }
  let e = (() => {
    if (l) {
      let e = document.getElementById("__REGION__DATA__INJECTED__");
      if (e) {
        try {
          let t = e.innerHTML.trim();
          let i = JSON.parse(t);
          r = i;
          return i;
        } catch (error) {
          console.error("[Region] parse data error: ", error);
        }
      } else {
        console.warn(
          '[Region] <script id="__REGION__DATA__INJECTED__"> not found',
        );
      }
    }
  })();
  if (e) {
    return e.__REGION__;
  }
})();
const f = g === "sg";
const b = g === "va";
const y = g === "oci";
const _ = (() => {
  try {
    let e;
    switch (true) {
      case true:
        u("cn", "routes-manifest.json");
        break;
      case f:
        u("sg", "routes-manifest.json");
        break;
      case b:
        u("va", "routes-manifest.json");
        break;
      case y:
        u("oci", "routes-manifest.json");
        break;
      default:
        return {};
    }
    if ((e = JSON.parse("").routeAssets) != null) {
      return e;
    }
    return {};
  } catch (e) {
    return {};
  }
})();
const x = c.Js.replace(/^\//, "");
const w = c.ph[d.Du.GuestPerson].replace(/\/:\w+$/, "");
const T = c.ph[d.Du.WorkDetailPage].replace(/\/:\w+$/, "");
const k = {
  [d.Du.Home]: "".concat(x).concat(c.ph[d.Du.Home], "/page"),
  [d.Du.Asset]: "".concat(x).concat(c.ph[d.Du.Asset], "/page"),
  [d.Du.Login]: "".concat(x).concat(c.ph[d.Du.Login], "/page"),
  [d.Du.AIGeneratedRecord]: ""
    .concat(x)
    .concat(c.ph[d.Du.AIGeneratedRecord], "/page"),
  [d.Du.GuestPerson]: "".concat(x).concat(w, "/(id$)/page"),
  [d.Du.WorkDetailPage]: "".concat(x).concat(T, "/(id$)/page"),
};
const R = ["content-generator-feature-loader"];
const N = "dreamina-main-frame-2026-sidebar";
export function t(e) {
  let t;
  const { id, extraBundleNames = R, stylesheetBundleNames = [] } = e;
  const { isBrowser } = a.useContext(s.Iw);
  if (isBrowser) {
    return null;
  }
  const d = new Set();
  const u = new Set([...stylesheetBundleNames, N]);
  let m = null;
  const p = k[id];
  if (p) {
    (m = (t = _[p]) != null ? t : o.A(v)).assets.forEach((e) => d.add(e));
  }
  const g = Array.from(new Set(["$", id, ...extraBundleNames, N])).map(
    (bundleKey) => {
      var t;
      var routeAssets = o.A((t = _[bundleKey]) != null ? t : v);
      routeAssets.assets = routeAssets.assets.filter((e) => !d.has(e));
      routeAssets.assets.forEach((e) => d.add(e));
      return {
        bundleKey,
        routeAssets,
      };
    },
  );
  return n.jsx(n.Fragment, {
    children: g.map((e, t) => {
      var { bundleKey, routeAssets } = e;
      var priority = t !== 0 || m ? "low" : "high";
      return n.jsx(
        h,
        {
          routeAssets,
          priority,
          loadCss: u.has(bundleKey),
        },
        bundleKey,
      );
    }),
  });
}
