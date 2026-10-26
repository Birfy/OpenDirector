import n from "oa";
import r from "bk";
import l from "z8";
import o from "bT";
import i from "Qey";
import s from "Pp";
import c from "oq";
function d(e) {
  const { promise, resolve } = Promise.withResolvers();
  let d = false;
  c.a.confirm({
    title: i.Ay.t(
      "skill_overwrite_title",
      {},
      "Replace the existing skill with this one?",
    ),
    content: i.Ay.t(
      "skill_overwrite_desc",
      {},
      "A skill with this name already exists. Replacing it will delete the existing skill. To keep it, manage your skills before adding this one.",
    ),
    className: "skill-overwrite-confirmation-XO550G",
    cancelText: i.Ay.t("skill_overwrite_button_manage", {}, "Manage skills"),
    okText: i.Ay.t("skill_overwrite_button_confirm", {}, "Replace"),
    footer: (e, a) => {
      var t = o.isValidElement(e)
        ? l.jsx(
            s.b,
            r._(n._({}, e.props), {
              onClick: (a) => {
                var t;
                var n;
                d = true;
                if ((t = (n = e.props).onClick) != null) {
                  t.call(n, a);
                }
              },
            }),
          )
        : e;
      var i = o.isValidElement(a) ? l.jsx(s.b, n._({}, a.props)) : a;
      return l.jsxs(l.Fragment, {
        children: [t, i],
      });
    },
    onOk: () => {
      resolve("overwrite");
    },
    onCancel: () => {
      resolve(d ? "manage" : "dismiss");
    },
  });
  return promise;
}
export { d as l };
