import n from "z8";
import a from "bT";
import s from "ri";
import { qD } from "./module-yJ.js";
import c from "Egb";
import i from "HX";
import { mj } from "./module-QaK.js";
import * as _ from "./module-p6_2.js";
const l = /^(\/[^\/]+)/;
const E = Object.values(c.ph).reduce((acc, item) => {
  var t = item.match(l);
  if (t) {
    acc.add("".concat(c.Js).concat(t[1]));
  }
  return acc;
}, new Set(""));
function useD() {
  const { isBrowser, requestContext } = a.useContext(s.Iw);
  a.useEffect(() => {
    if (isBrowser) {
      performance.mark("SCRIPT_BEFORE_ENTRY_END");
      Promise.all([
        require.e("46qd"),
        require.e("1sx"),
        require.e("lb8"),
        require.e("txw"),
        require.e("pa6"),
        require.e("32b"),
        require.e("4a0"),
        require.e("szx"),
        require.e("rle"),
        require.e("b7h"),
        require.e("5ws"),
        require.e("84i"),
        require.e("x4o"),
        require.e("pvu"),
        require.e("h0h"),
        require.e(894),
        require.e("z9t"),
        require.e("dmi"),
        require.e("tj5a"),
        require.e("lsa"),
        require.e("uoi"),
        require.e("e7a"),
        require.e("72p"),
        require.e("zf5"),
        require.e("1gm"),
        require.e("dks"),
        require.e("59ls"),
        require.e("oqo"),
        require.e("sz3"),
        require.e("swn"),
        require.e("cbb"),
        require.e("0j3"),
        require.e("egz"),
        require.e("91d"),
        require.e("d7n"),
        require.e("v2y"),
        require.e("ki4x"),
        require.e("y"),
        require.e("rz"),
        require.e("i2c"),
        require.e("xr"),
        require.e("ood"),
        require.e("vt2"),
        require.e("2hl"),
        require.e("t7v"),
        require.e("u12"),
        require.e("v"),
        require.e("o94"),
        require.e("oqq"),
        require.e("v0q"),
        require.e("vj"),
        require.e(480),
        require.e("a4n"),
        require.e("x99"),
        require.e("kd2"),
        require.e("jai"),
        require.e("41i"),
        require.e("iu2"),
        require.e("m"),
        require.e("vab"),
      ])
        .then(require.bind(require, "M2D"))
        .then((e) => {
          var { Entry } = e;
          return new Entry();
        });
    }
  }, [isBrowser]);
  if (isBrowser) {
    qD(mj);
    return null;
  }
  const { pathname } = requestContext.request;
  if (
    (pathname == null ? undefined : pathname.startsWith(c.Js)) &&
    E.has(pathname)
  ) {
    return null;
  }
  return n.jsx(_.t, {
    id: i.Du.Home,
    extraBundleNames: [],
  });
}
export { useD as default };
