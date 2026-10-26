import r from "oa";
import a from "bk";
import n from "puv";
import s from "Dm";
import o from "kF";
const l = [
  "menu",
  "video_error",
  "agent_video_error",
  "image_error",
  "agent_image_error",
  "pre_audit_tooltip",
];
class c extends o.v {
  get eventName() {
    return "auth_exemption_entry_".concat(this._params.action);
  }
  getEventParams() {
    const { source, error_code } = this._params;
    const current_space_type = n.y() ? "team" : "user";
    if (source === "menu") {
      return {
        source,
        current_space_type,
      };
    }
    return {
      source,
      error_code,
      current_space_type,
    };
  }
}
class u extends o.o {
  _validateParams(e) {
    s.X3(
      e.action === "show" || e.action === "click",
      "授权豁免埋点 action 不合法",
    );
    s.X3(l.includes(e.source), "授权豁免埋点 source 不合法");
    s.X3(
      e.source === "menu"
        ? e.error_code === undefined
        : typeof e.error_code === "number" && Number.isFinite(e.error_code),
      "授权豁免埋点 error_code 不合法",
    );
  }
  _getCollectorClass() {
    return c;
  }
}
function d(e, action, i) {
  try {
    new u(
      a._(r._({}, i), {
        action,
      }),
      e,
    ).report();
  } catch (e) {}
}
export { d as s };
