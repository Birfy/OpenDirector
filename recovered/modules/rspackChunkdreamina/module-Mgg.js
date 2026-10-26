import n from "bT";
import a from "Qey";
export var Mc = "web_mainframe_canvas_generator_placeholder";
export var jD =
  "输入想法、剧本或上传参考，支持 <skill>/</skill> 使用技能，<strong>@</strong>添加主体，和 Agent 一起创作";
export function ct() {
  return (
    (function e(t) {
      if (typeof t === "string" || typeof t === "number") {
        return String(t);
      }
      if (Array.isArray(t)) {
        return t.map(e).join("");
      }
      if (n.isValidElement(t)) {
        return e(t.props.children);
      }
      return "";
    })(
      a.Ay.t(
        Mc,
        {
          strong: (e) => e,
          skill: (e) => e,
        },
        jD,
      ),
    ) || jD
  ).replace(RegExp("<\\/?(?:skill|strong)>", "gu"), "");
}
