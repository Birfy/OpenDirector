import t from "oa";
import n from "bk";
import i from "z8";
import "yS";
import r from "gL";
import o from "bT";
import l from "xb";
import d from "Qey";
import c from "yw";
import m from "pr";
import p from "Pp";
const v = "modal-AaoLxo";
const F = (e) =>
  n._(t._({}, e), {
    className: l("button-LXYtYi", e == null ? undefined : e.className),
  });
const A = (e) => {
  let u;
  return n._(
    t._(
      {
        icon: null,
        closeIcon: i.jsx(c.gzW, {
          role: "button",
          tabIndex: 0,
          "aria-label": d.Ay.t("dreamina_web_common_close"),
          onKeyDown: m.q,
        }),
        cancelText: d.Ay.t("web_delete_popup_btn_cancel", {}, "取消"),
        okText: d.Ay.t("web_common_popup_btn_confirm", {}, "确认"),
      },
      e,
      "footer" in e
        ? {
            footer:
              typeof (u = e.footer) === "function"
                ? (e, a) =>
                    u(
                      o.isValidElement(e) ? i.jsx(p.b, t._({}, e.props)) : e,
                      o.isValidElement(a) ? i.jsx(p.b, t._({}, a.props)) : a,
                    )
                : u,
          }
        : null,
    ),
    {
      className: l(v, e.className),
      cancelButtonProps: F(e.cancelButtonProps),
      okButtonProps: F(e.okButtonProps),
    },
  );
};
const h = (e) => ({
  update: (u) => {
    var a = t._(
      {},
      u,
      Object.hasOwn(u, "cancelButtonProps") && {
        cancelButtonProps: F(u.cancelButtonProps),
      },
      Object.hasOwn(u, "okButtonProps") && {
        okButtonProps: F(u.okButtonProps),
      },
    );
    e.update(a);
  },
  close: () => e.close(),
});
export var a = {
  confirm: (e) => h(r.A.confirm(A(e))),
  useModal: () => {
    var [e, u] = r.A.useModal();
    return [
      {
        confirm: (u) => {
          var a;
          var t = (a = e.confirm) == null ? undefined : a.call(e, A(u));
          if (!t) {
            throw Error("Modal.useModal confirm is unavailable");
          }
          return h(t);
        },
      },
      u,
    ];
  },
  info: (e) => {
    var u = r.A.info(
      n._(
        t._(
          {
            icon: null,
            closeIcon: i.jsx(c.gzW, {
              role: "button",
              tabIndex: 0,
              "aria-label": d.Ay.t("dreamina_web_common_close"),
              onKeyDown: m.q,
            }),
          },
          e,
        ),
        {
          className: l(v, e.className),
        },
      ),
    );
    return {
      update: (e) => {
        u.update(e);
      },
      close: () => u.close(),
    };
  },
};
