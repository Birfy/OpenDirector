import r from "oa";
import n from "bk";
import i from "qa";
import s from "z8";
import o from "bT";
import _l from "xb";
import * as d from "./module-GI.js";
import u from "Qey";
import m from "M9I";
const p = o.memo(function (e) {
  const { option } = e;
  const { value, label = u.Ay.t("dreamina_image4_ratio_auto", {}) } = option;
  return s.jsxs("div", {
    className: "radio-content-f96GFj",
    children: [
      s.jsx(m.z, {
        aspectRatio: value,
        size: 16,
      }),
      s.jsx("span", {
        className: "label-bu1zVQ",
        children: label,
      }),
    ],
  });
});
export var _ = o.memo(function (e) {
  const { className, responsive = false } = e;
  const l = i._(e, ["className", "responsive"]);
  const renderOption = o.useCallback(
    (option) =>
      s.jsx(p, {
        option,
      }),
    [],
  );
  return s.jsx(
    d.h,
    n._(r._({}, l), {
      className: _l(
        "radio-group-dyqHGl",
        {
          "responsive-jlCNWb": responsive,
        },
        className,
      ),
      renderOption,
    }),
  );
});
