import n from "z8";
import s from "Qey";
import a from "Kpt";
import r from "yw";
import o from "lz";
export var b = {
  id: "SiderMenuNotification",
  type: "icon",
  tooltips: () => s.Ay.t("web_revision_message_center", {}, "消息中心"),
  icon: () =>
    n.jsx(r.pYb, {
      color: "var(--text-primary)",
    }),
  order: 1007,
  position: "bottom",
};
export var H = {
  [a.N.SideMenu]: o.i().ok ? [b] : [],
};
