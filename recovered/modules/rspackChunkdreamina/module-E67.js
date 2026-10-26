import s from "oa";
import i from "bk";
import r from "qa";
import n from "z8";
import o from "bT";
import l from "Qey";
import c from "B3";
import d from "./module-gH_3.js";
import u from "./module-I8F.js";
import m from "Cc";
import * as h from "./module-asr_2.js";
var g = o.memo(function (e) {
  const t = m.D() === c.l.Light ? u : d;
  const {
    image = t,
    description = l.Ay.t("web_toast_no_results_found", {}, "暂未找到相关内容"),
  } = e;
  const g = r._(e, ["image", "description"]);
  return n.jsx(
    h.r,
    i._(s._({}, g), {
      description,
      image,
    }),
  );
});
export { g as d };
