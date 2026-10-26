import n from "z8";
import t from "bT";
import _o from "xb";
import s from "Qey";
import { A } from "./module-G72.js";
const c = t.memo(function (e) {
  const { title, className } = e;
  return n.jsx("h1", {
    className: _o(A.title, className),
    children: title,
  });
});
export var Y = t.memo(function (e) {
  let i;
  let a;
  let t;
  const { mode, title, className, accentAnimationEnabled = true } = e;
  return n.jsx(c, {
    className: _o(A.domestic, className),
    title:
      title !== undefined
        ? title
        : ((i = mode),
          (a = accentAnimationEnabled),
          (t =
            i === "canvas"
              ? {
                  key: "web_mainframe_home_canvas_headline",
                  fallback: "Start Creating With <highlight>Canvas</highlight>",
                }
              : {
                  key: "web_mainframe_home_chat_headline",
                  fallback:
                    "What Would You Like To <highlight>Create</highlight> Today?",
                }),
          s.Ay.t(
            t.key,
            {
              highlight: (children) =>
                n.jsx(
                  "span",
                  {
                    className: _o(A.accent, !a && A.accentStatic),
                    children,
                  },
                  "".concat(i, "-highlight"),
                ),
            },
            t.fallback,
          )),
  });
});
