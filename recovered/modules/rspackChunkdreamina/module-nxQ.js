import r from "oa";
import a from "bk";
import o from "qa";
import i from "z8";
import _l from "xb";
import c from "Qey";
import u from "yw";
import d from "pr";
import { A } from "./module-Rm.js";
export function m(e) {
  const { action = "remove", className, "aria-label": aria_label } = e;
  const v = o._(e, ["action", "className", "aria-label"]);
  return i.jsx(
    "div",
    a._(
      r._(
        {
          role: "button",
          tabIndex: 0,
          "aria-disabled": false,
          "aria-label":
            aria_label != null
              ? aria_label
              : action === "remove"
                ? [
                    c.Ay.t("octo_project_members_btn_remove", {}, "移除"),
                    c.Ay.t("video_unified_edit", {}, "参考内容"),
                  ].join(" · ")
                : undefined,
          onKeyDown: d.q,
        },
        v,
      ),
      {
        "data-native-reference-action": action,
        className: _l(A.removeButtonContainer, className, {
          [A.mentionButtonContainer]: action === "mention",
        }),
        children: i.jsx("div", {
          className: A.removeButton,
          children:
            action === "mention"
              ? i.jsx(u.jHH, {
                  size: 8,
                })
              : i.jsx(u.gzW, {
                  size: 8,
                }),
        }),
      },
    ),
  );
}
