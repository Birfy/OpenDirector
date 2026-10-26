import a from "oa";
import r from "bk";
import i from "qa";
import o from "z8";
import "Vx";
import l from "Ix";
import s from "ED";
import c from "B59";
import _u from "xb";
import { R } from "./module-djg.js";
export var t = s.PA(function (e) {
  const { previewItem, previewLabel, content, className } = e;
  const p = i._(e, ["previewItem", "previewLabel", "content", "className"]);
  const { active } = c.fF();
  const h =
    content === undefined &&
    !!(previewItem == null ? undefined : previewItem.url);
  return o.jsx(
    l.A,
    r._(
      a._(
        {},
        p,
        active
          ? {
              popupVisible: false,
            }
          : null,
      ),
      {
        className: _u(className, {
          "preview-tJ6ZtY": h,
        }),
        content:
          h && previewItem
            ? o.jsx(R, {
                item: previewItem,
                label: previewLabel,
                labelClassName: "label-DLQPi1",
              })
            : content,
      },
    ),
  );
});
