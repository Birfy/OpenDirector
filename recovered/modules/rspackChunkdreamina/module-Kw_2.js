if (require.j == "wl4") var a = require("oa");
if (require.j == "wl4") var o = require("aYe");
if (require.j == "wl4") var i = require("./module-oe_2.js");
function n(e, t, r) {
  let n = e.uiManager[i.M];
  switch (true) {
    case typeof t === "string" || typeof t === "object":
      let c;
      let l;
      let m;
      if (typeof t === "object") {
        t = o.AO(t);
      }
      let s = o.Rr(t);
      let d = n.observableData.configs.find((e) => {
        var t;
        return o.B6(
          e.path,
          (t = s == null ? undefined : s.pathname) != null ? t : "",
        );
      });
      if (!d) {
        return;
      }
      let params = Object.entries(
        (m =
          (c = o.B6(
            d.path,
            (l = s == null ? undefined : s.pathname) != null ? l : "",
          )) == null
            ? undefined
            : c.params) != null
          ? m
          : {},
      ).reduce((acc, entry) => {
        let [r, a] = entry;
        if (r && a) {
          acc[r] = a;
        }
        return acc;
      }, {});
      n.navigate(
        d.id,
        a._(
          {
            query: s.search,
            params,
          },
          r,
        ),
      );
      break;
    case typeof t === "number":
      n.navigateBack(t);
  }
}
export { n as o };
