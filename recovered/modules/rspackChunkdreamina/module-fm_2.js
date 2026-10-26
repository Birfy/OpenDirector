if (require.j == "wl4") var a = require("./module-NT_2.js");
export function uc(e) {
  if (e) {
    return e.replace(/[A-Z]/g, (e) => `_${e.toLowerCase()}`);
  }
  return "";
}
export function Cb(e) {
  if (e) {
    return e.replace(/_([a-z])/g, (e, t) => t.toUpperCase());
  }
  return "";
}
export function wN(e, t) {
  if (e && typeof e === "object") {
    for (let r of Object.keys(e)) {
      let a = t(r);
      if (a !== r) {
        e[a] = e[r];
        delete e[r];
      }
      wN(e[a], t);
    }
  }
  return e;
}
export function $h(
  e,
  t = {
    disableParseRequest: false,
    disableParseResponse: false,
  },
) {
  let { disableParseResponse, disableParseRequest } = t;
  if (!disableParseRequest) {
    e.interceptors.request.use((e) => {
      e.data = wN(a.G(e.data), uc);
      return e;
    });
  }
  if (!disableParseResponse) {
    e.interceptors.response.use((e) => {
      e.data = wN(e.data, Cb);
      return e;
    });
  }
}
