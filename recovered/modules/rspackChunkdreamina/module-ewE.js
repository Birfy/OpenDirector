import n from "z8";
import a from "bT";
import _o from "xb";
import c from "Qey";
import s from "yw";
import { ct } from "./module-Mgg.js";
import * as u from "./module-Zz_2.js";
const className_1 = "toolbar-button-NzMD8f";
export var t = a.memo(function (e) {
  const { className, value, focused, onChange, onFocusChange } = e;
  const children = ct();
  const h = focused || value.length > 0;
  return n.jsxs("div", {
    className: _o("generator-Cs9ZZp", className, {
      "expanded-YK4dIT": h,
      "focused-0i2Wz8": focused,
    }),
    role: "region",
    "aria-label": c.Ay.t("web_home_nav_bar_canvas", {}, "画布"),
    "data-testid": "dreamina.canvas-generator",
    "data-interactive": "false",
    "data-state": h ? "expanded" : "collapsed",
    children: [
      n.jsxs("div", {
        className: "editor-area-XFlRS5",
        children: [
          n.jsx("textarea", {
            className: "prompt-input-O8mf7J",
            value,
            rows: 1,
            "aria-label": c.Ay.t("detail_prompt", {}, "提示词"),
            onChange: (e) => {
              onChange(e.target.value);
            },
            onFocus: () => onFocusChange(true),
            onBlur: () => onFocusChange(false),
          }),
          value
            ? null
            : n.jsx("span", {
                className: "prompt-placeholder-p_7KQm",
                "aria-hidden": true,
                children,
              }),
        ],
      }),
      n.jsxs("div", {
        className: "toolbar-crlSSr",
        onMouseDownCapture: (e) => {
          e.preventDefault();
        },
        children: [
          n.jsxs("div", {
            className: "left-actions-LLiyDS",
            "aria-hidden": !h,
            children: [
              n.jsx("button", {
                type: "button",
                className: className_1,
                "aria-label": c.Ay.t(
                  "web_mainframe_canvas_reference_btn_tooltip",
                  {},
                  "上传参考",
                ),
                disabled: true,
                tabIndex: -1,
                children: n.jsx(s.xZp, {
                  size: 16,
                }),
              }),
              n.jsxs("button", {
                type: "button",
                className: _o(className_1, "skill-button-iqx7g6"),
                disabled: true,
                tabIndex: -1,
                children: [
                  n.jsx(s.VKR, {
                    size: 16,
                  }),
                  n.jsx("span", {
                    children: c.Ay.t("web_agent_skill_btn", {}, "使用技能"),
                  }),
                ],
              }),
              n.jsx("button", {
                type: "button",
                className: className_1,
                "aria-label": c.Ay.t(
                  "web_mainframe_canvas_mention_btn_tooltip",
                  {},
                  "引用参考",
                ),
                disabled: true,
                tabIndex: -1,
                children: n.jsx(s.jHH, {
                  size: 16,
                }),
              }),
            ],
          }),
          n.jsx("div", {
            className: "right-actions-kqujQd",
            children: n.jsx(u.h, {
              "aria-label": c.Ay.t("agent_button_tooltip_send", {}, "发送"),
              "data-testid": "dreamina.generator.submit",
              disabled: true,
              tabIndex: -1,
            }),
          }),
        ],
      }),
    ],
  });
});
