import a from "Qey";
import i from "K8";
import { E } from "./module-cfI.js";
import { H } from "./module-PGp.js";
export function p(e, t) {
  let r;
  let s;
  const l = E[t];
  if (e.generateModes.includes(l)) {
    return i.nj();
  }
  const string0 =
    (r = (s = H.find((e) => e.value === t)) == null ? undefined : s.label) !=
    null
      ? r
      : t;
  return i.xz(
    -1,
    a.Ay.t(
      "model_hover_feature_conflict",
      {
        string0,
      },
      "已使用".concat(string0, "，暂不支持此模型"),
    ),
  );
}
