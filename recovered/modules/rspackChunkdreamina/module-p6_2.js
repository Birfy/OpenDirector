import a from "z8";
import s from "bT";
import o from "mL";
import c from "ri";
import u from "Egb";
import _ from "HX";
import E from "vS";
let n;
let i = typeof window !== "undefined";
function l() {
  for (let e = arguments.length, r = Array(e), t = 0; t < e; t++) {
    r[t] = arguments[t];
  }
  return "";
}
const d = function (href) {
  let r;
  const fetchpriority =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "low";
  const n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  switch ((r = href.match(/\.([^.]*)$/)) ? r[1] : null) {
    case "js":
      return a.jsx(
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
      if (n) {
        return a.jsx(
          "link",
          {
            rel: "stylesheet",
            href,
            nonce: "argus-csp-token",
          },
          href,
        );
      }
      return a.jsx(
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
      return a.jsx(
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
function f(e) {
  let r;
  const { routeAssets, priority, loadCss = false } = e;
  const o = (r = routeAssets.assets) != null ? r : [];
  return a.jsx(E.m, {
    children: o.map((e) => d(e, priority, loadCss)),
  });
}
const T = {
  assets: [],
  referenceCssAssets: [],
  chunkIds: [],
};
const h = (() => {
  if (n) {
    return n.__REGION__;
  }
  let e = (() => {
    if (i) {
      let e = document.getElementById("__REGION__DATA__INJECTED__");
      if (e) {
        try {
          let r = e.innerHTML.trim();
          let t = JSON.parse(r);
          n = t;
          return t;
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
const I = h === "sg";
const p = h === "va";
const m = h === "oci";
const v = (() => {
  try {
    let e;
    switch (true) {
      case true:
        l("cn", "routes-manifest.json");
        break;
      case I:
        l("sg", "routes-manifest.json");
        break;
      case p:
        l("va", "routes-manifest.json");
        break;
      case m:
        l("oci", "routes-manifest.json");
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
const N = u.Js.replace(/^\//, "");
const g = u.ph[_.Du.GuestPerson].replace(/\/:\w+$/, "");
const D = u.ph[_.Du.WorkDetailPage].replace(/\/:\w+$/, "");
const R = {
  [_.Du.Home]: "".concat(N).concat(u.ph[_.Du.Home], "/page"),
  [_.Du.Asset]: "".concat(N).concat(u.ph[_.Du.Asset], "/page"),
  [_.Du.Login]: "".concat(N).concat(u.ph[_.Du.Login], "/page"),
  [_.Du.AIGeneratedRecord]: ""
    .concat(N)
    .concat(u.ph[_.Du.AIGeneratedRecord], "/page"),
  [_.Du.GuestPerson]: "".concat(N).concat(g, "/(id$)/page"),
  [_.Du.WorkDetailPage]: "".concat(N).concat(D, "/(id$)/page"),
};
const O = ["content-generator-feature-loader"];
const A = "dreamina-main-frame-2026-sidebar";
export function t(e) {
  let r;
  const { id, extraBundleNames = O, stylesheetBundleNames = [] } = e;
  const { isBrowser } = s.useContext(c.Iw);
  if (isBrowser) {
    return null;
  }
  const _ = new Set();
  const l = new Set([...stylesheetBundleNames, A]);
  let E = null;
  const d = R[id];
  if (d) {
    (E = (r = v[d]) != null ? r : o.A(T)).assets.forEach((e) => _.add(e));
  }
  const h = Array.from(new Set(["$", id, ...extraBundleNames, A])).map(
    (bundleKey) => {
      var r;
      var routeAssets = o.A((r = v[bundleKey]) != null ? r : T);
      routeAssets.assets = routeAssets.assets.filter((e) => !_.has(e));
      routeAssets.assets.forEach((e) => _.add(e));
      return {
        bundleKey,
        routeAssets,
      };
    },
  );
  return a.jsx(a.Fragment, {
    children: h.map((e, r) => {
      var { bundleKey, routeAssets } = e;
      var priority = r !== 0 || E ? "low" : "high";
      return a.jsx(
        f,
        {
          routeAssets,
          priority,
          loadCss: l.has(bundleKey),
        },
        bundleKey,
      );
    }),
  });
}
