if (require.j == "wl4") var a = require("oa");
if (require.j == "wl4") var o = require("bk");
let i = require.j == "wl4" ? 548669 : null;
function n() {
  let e = document.cookie.match(RegExp("(^| )_tea_web_id=([^;]+)"));
  let t = window.GATEWAY_INJECTED_WEB_ID || "";
  if (!(t || e === null)) {
    t = e[2];
  }
  return t;
}
export function sc(e) {
  let t = n();
  e.interceptors.request.use((e) =>
    o._(a._({}, e), {
      params: o._(a._({}, e.params || {}), {
        aid: "513695",
        device_platform: "web",
        region: window.__locationCountryCode || "cn",
        web_id: t,
      }),
    }),
  );
}
export function pP(e) {
  let t = n();
  e.interceptors.request.use((e) => {
    var r;
    var n;
    var c;
    return o._(a._({}, e), {
      params: o._(a._({}, e.params || {}), {
        aid:
          (c =
            (n = e == null || (r = e.params) == null ? undefined : r.aid) !=
            null
              ? n
              : i) != null
            ? c
            : "348188",
        device_platform: "web",
        region: window.__locationCountryCode || "us",
        web_id: t,
      }),
    });
  });
}
