import o from "NY";
let a;
if (require.j == "wl4") var i = require("gY");
const n = require("JE");
a = o._(function* (e, t) {
  let a = new (yield require
    .e("lckd")
    .then(require.bind(require, "LOk"))).default();
  a.setPublicKey(
    "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC1I/Ml9Qkp6reos86Tjbd1R6q+\nbQwviSEmZzqtrhfGI+iMGKA74XSctUu8ZnWhOKsG5+PujMrIJX2WMRP0E5lhJpCh\nfgK3aiNikvgigORzf0Lz39XS46eAHJrPbMaQiabDfd/+CjkvxbV+LW3oPdoZj9Mn\n38OEHt9qVkUlvpv76wIDAQAB\n-----END PUBLIC KEY-----",
  );
  return a.verify(e, t, n.SHA256);
});
let l = function (e, t) {
  return a.apply(this, arguments);
};
export function X(e, appid) {
  let r;
  e.interceptors.response.use(
    ((r = o._(function* (cause) {
      let r;
      let { response, ret, systime, sign } = (r = cause.data) != null ? r : {};
      let m = {
        appid,
        appvr: "8.4.0",
        "device-time": cause.config.headers["device-time"],
        lan: cause.config.headers.lan,
        pf: "7",
        response,
        ret,
        systime,
      };
      if (sign) {
        let t;
        if (
          !(yield l(
            ((t = []),
            Object.entries(m).forEach((e) => {
              if (!i.A(e[1])) {
                t.push(`${e[0]}=${e[1]}`);
              }
            }),
            t.join("&")),
            sign,
          ))
        ) {
          return Promise.reject(
            Error("Error: auth error", {
              cause,
            }),
          );
        }
      }
      return cause;
    })),
    function (e) {
      return r.apply(this, arguments);
    }),
  );
}
