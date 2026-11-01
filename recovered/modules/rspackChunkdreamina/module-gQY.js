import r from "z8";
import n from "bT";
import i from "Qey";
import s from "ED";
import o from "z7R";
import l from "wF";
import c from "ex6";
import d from "CaR";
export function _() {
  const e = d.dK();
  return !d.h4(e);
}
export var b = s.PA(function (e) {
  const { title, legacyContent, description } = e;
  const d = _();
  const m = l.h(o.jV);
  const [p, setP] = n.useState(() => m.getInstanceSync());
  const g = p == null ? undefined : p.vipService;
  const v = (g == null ? undefined : g.isVipReady) === true && !g.isVip;
  n.useEffect(() => {
    if (d) {
      var e = false;
      m.getInstance()
        .then((t) => {
          if (!e) {
            setP(t);
          }
        })
        .catch(() => {});
      return () => {
        e = true;
      };
    }
  }, [m, d]);
  if (d) {
    return r.jsxs("div", {
      className: "modal-title-pZzahP",
      children: [
        r.jsxs("div", {
          className: "title-row-CI0tg_",
          children: [
            r.jsx("span", {
              children: title,
            }),
            r.jsx(c.z, {
              className: "commerce-icon-xQ62nF",
              level: "standard",
              size: 16,
            }),
          ],
        }),
        description
          ? r.jsxs("div", {
              className: "description-gpXWev",
              children: [
                v
                  ? r.jsxs(r.Fragment, {
                      children: [
                        i.Ay.t("dre_m10n_pro_feature", {}, "此功能为VIP专属"),
                        "，",
                      ],
                    })
                  : null,
                description,
              ],
            })
          : null,
      ],
    });
  }
  return r.jsx(r.Fragment, {
    children: legacyContent != null ? legacyContent : title,
  });
});
