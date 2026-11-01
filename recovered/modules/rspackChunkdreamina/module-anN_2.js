import i from "oa";
import r from "TA";
import { W } from "./module-hef.js";
export function N(e) {
  let t;
  const n =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          width: 360,
          height: 360,
        };
  const o = W(e);
  if (!(o == null ? undefined : o.coverUrlMap)) {
    if ((t = o == null ? undefined : o.imageUrl) != null) {
      return t;
    }
    return "";
  }
  const l = r.HM(
    i._(
      {
        resolutionUrlMap: o.coverUrlMap,
      },
      n,
    ),
  );
  if (l != null) {
    return l;
  }
  return "";
}
