import a from "z8";
import "uw5";
import r from "VAR";
import o from "bT";
import l from "Qey";
import i from "yw";
import c from "vb";
import { G } from "./module-uz.js";
function useU(e) {
  const { children, state } = e;
  const u = o.useContext(G);
  const { hintVisible, dismissHint } = state != null ? state : u;
  return a.jsx(r.A, {
    trigger: "click",
    blurToHide: false,
    position: "top",
    popupVisible: hintVisible,
    triggerProps: {
      position: "top",
      popupAlign: {
        top: 8,
      },
      escToClose: true,
    },
    onVisibleChange: (e) => !e && dismissHint(),
    content: a.jsxs("div", {
      className: "content-UgKGlf",
      onMouseDown: (e) => e.preventDefault(),
      children: [
        a.jsx("span", {
          role: "status",
          children: l.Ay.t(
            "videotool_enter_line_break",
            {
              string: c.O.MacOS ? "Cmd + Enter" : "Ctrl + Enter",
            },
            "生成模式下，点击发送按钮或按 {string} 开始生成",
          ),
        }),
        a.jsx("button", {
          type: "button",
          className: "close-fJ0aKl",
          "aria-label": l.Ay.t("common_close", {}, "关闭"),
          onClick: dismissHint,
          children: a.jsx(i.gzW, {
            size: 14,
          }),
        }),
      ],
    }),
    children: a.jsx("span", {
      className: "trigger-al78Du",
      onClickCapture: dismissHint,
      children,
    }),
  });
}
export { useU as o };
