import { a5, nd, r9 } from "./module-k6_2.js";
import { q } from "./module-R3_2.js";
if (require.j == "wl4") var i = require("./module-K8.js");
let n = new q(100);
let c =
  require.j == "wl4"
    ? [
        "logid",
        "ret",
        "errmsg",
        "log_id",
        "logId",
        "status_message",
        "status_code",
      ]
    : null;
function l(e) {
  let config = (e != null ? e : {}).config;
  return !!(config == null ? undefined : config.spanId);
}
function m(e) {
  if (!l(e)) {
    return e;
  }
  let e_config = e.config;
  try {
    let r = e_config.spanId;
    let o = n.get(r);
    if (o) {
      if (e.status !== undefined) {
        o.addEvent(r9.double("status", e.status));
      }
      if (e.statusText !== undefined) {
        o.addEvent(r9.string("status_text", e.statusText));
      }
      Object.entries(e.config.headers.toJSON()).forEach(([e, t]) =>
        o.addEvent(r9.string(`Res.${e}`, JSON.stringify(t))),
      );
      if (e.data) {
        c.forEach((t) => {
          var r;
          var n;
          var c;
          if (e.data[t] !== undefined) {
            o.addEvent(r9.string(`Res.${t}`, JSON.stringify(e.data[t])));
            if (
              (t === "ret" || t === "status_code") &&
              Number(e.data[t]) !== 0
            ) {
              o.markError(
                i.xz(Number(e.data[t]), (n = e.data.errmsg) != null ? n : ""),
              );
            }
          } else if (
            ((r = e.data.data) == null ? undefined : r[t]) !== undefined
          ) {
            o.addEvent(r9.string(`Res.${t}`, JSON.stringify(e.data.data[t])));
            if (
              (t === "ret" || t === "status_code") &&
              Number(e.data.data[t]) !== 0
            ) {
              o.markError(
                i.xz(
                  Number(e.data.data[t]),
                  (c = e.data.errmsg) != null ? c : "",
                ),
              );
            }
          }
        });
      }
      o.end();
      n.remove(r);
    }
  } catch (error) {
    console.error(error);
  }
  return e;
}
function s(e) {
  if (!l(e)) {
    return e;
  }
  let e_config = e.config;
  try {
    let r = e_config.spanId;
    let a = n.get(r);
    if (a) {
      a.markError(e);
      m(e);
    }
  } catch (error) {
    console.error(error);
  }
  return Promise.reject(e);
}
export function F(e, t = "network") {
  e.interceptors.request.use((e) => {
    if (!e.ctx || !e.url) {
      return e;
    }
    try {
      var r;
      var o;
      var i;
      var c;
      let { span } = a5(e.ctx, t, e.url);
      let m = e.ctx.getValue(nd).spanId;
      e.spanId = m;
      n.put(m, span);
      span.addEvent(r9.string("Method", (i = e.method) != null ? i : ""));
      Object.entries(
        (c = (r = (o = e.headers).toJSON) == null ? undefined : r.call(o)) !=
          null
          ? c
          : e.headers,
      ).forEach(([e, t]) =>
        span.addEvent(r9.string(`Req.${e}`, JSON.stringify(t))),
      );
    } catch (error) {
      console.error(error);
    }
    return e;
  });
  e.interceptors.response.use(m, s);
}
