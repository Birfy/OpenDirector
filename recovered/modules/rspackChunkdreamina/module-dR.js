if (require.j == "wl4") var a = require("oa");
if (require.j == "wl4") var o = require("bk");
if (require.j == "wl4") var i = require("./module-oHa.js");
const n = require("dT");
if (require.j == "wl4") var c = require("./module-mef.js");
let appvr = "8.4.0";
export function vo(e, t) {
  e.interceptors.request.use((e) => {
    var r;
    var m;
    var s;
    var d;
    var u;
    var p;
    var C;
    let pf;
    let tdid;
    let f;
    r = e;
    pf =
      (d =
        (s = (m = t) == null ? undefined : m.pf) != null
          ? s
          : i.s8.getVar("pf")) != null
        ? d
        : "7";
    tdid =
      (p =
        (u = m == null ? undefined : m.tdid) != null
          ? u
          : i.s8.getVar("did")) != null
        ? p
        : "";
    f = o._(
      a._(
        {},
        (({ url, pf, appvr, tdid }) => {
          let { pathname } = c.TR(url);
          let i = Math.floor(Date.now() / 1000);
          return {
            sign: n
              .md5(
                `9e2c|${pathname.slice(-7)}|${pf}|${appvr}|${i}|${tdid}|11ac`,
              )
              .toLowerCase(),
            "device-time": i,
            tdid,
          };
        })({
          url: (C = r.url) != null ? C : "",
          pf,
          appvr,
          tdid,
        }),
      ),
      {
        "sign-ver": 1,
        pf,
        appvr,
      },
    );
    Object.assign(r, {
      headers: a._({}, r.headers, f),
    });
    return e;
  });
}
