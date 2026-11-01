import n from "NY";
import o from "oa";
import l from "bk";
import s from "SZS";
import u from "yMd";
import c from "ks";
import "NT";
import h from "TA";
import m from "aaZ";
import { o as o_1 } from "./module-KRY.js";
let format;
let imageSceneList;
const d = new Map();
var p = function (t) {
  return n._(function* () {
    if (!(format && imageSceneList)) {
      [format, imageSceneList] = yield Promise.all([
        (function t() {
          return n._(function* () {
            if (
              yield ((t, e) => {
                const i = d.get(t);
                if (i) {
                  return i;
                }
                const a = e();
                a.then(
                  () => {
                    d.delete(t);
                  },
                  () => {
                    d.delete(t);
                  },
                );
                d.set(t, a);
                return a;
              })(t.name, c.U)
            ) {
              return "webp";
            }
            return "png";
          })();
        })(),
        n._(function* () {
          const { imageSceneList } = yield n._(function* () {
            const t = h.FY();
            const { result } = yield m.L();
            return {
              imageSceneList: [480]
                .map((i) =>
                  s.w5.map((a) => {
                    var r = Math.round(i * a.span) * (t ? 1.5 : 1);
                    var n = Math.round(r / a.ratio);
                    return o_1(u.Qg.SmartCrop, r, n, result ? "webp" : "png");
                  }),
                )
                .flat(),
            };
          })();
          const e = yield c.U();
          const i = s.KQ.map((t) => {
            var { width, height } = t;
            return o_1(u.Qg.Loss, width, height, e ? "webp" : "png");
          });
          const a = [s.qf].map((t) => {
            var { width, height } = t;
            return o_1(u.Qg.Normal, width, height, e ? "webp" : "png");
          });
          return [...imageSceneList, ...i, ...a];
        })(),
      ]);
    }
    return l._(o._({}, t != null ? t : s.qf), {
      format,
      imageSceneList,
    });
  })();
};
export { p as u };
