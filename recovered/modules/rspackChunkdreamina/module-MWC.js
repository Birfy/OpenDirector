import n from "oa";
import i from "bk";
import a from "z8";
import "Vgx";
import s from "WyQ";
import o from "c8J";
import c from "A6R";
export class p {
  static success(e) {
    const r = a.jsx(c.MOf, {
      color: "var(--brand-bright-default)",
    });
    return s.A.success(
      i._(
        n._(
          {},
          typeof e === "string"
            ? {
                content: e,
              }
            : e,
        ),
        {
          icon: r,
        },
      ),
    );
  }
  static warning(e) {
    const r = a.jsx(c.GBK, {});
    return s.A.warning(
      i._(
        n._(
          {},
          typeof e === "string"
            ? {
                content: e,
              }
            : e,
        ),
        {
          icon: r,
        },
      ),
    );
  }
  static error(e) {
    const r = a.jsx(c.GBK, {});
    return s.A.error(
      i._(
        n._(
          {},
          typeof e === "string"
            ? {
                content: e,
              }
            : e,
        ),
        {
          icon: r,
        },
      ),
    );
  }
  static normal(e) {
    return s.A.normal(
      i._(
        n._(
          {},
          typeof e === "string"
            ? {
                content: e,
              }
            : e,
        ),
        {
          icon: null,
        },
      ),
    );
  }
}
p.warningByThrottle = o.A(
  (e) => {
    p.warning(e);
  },
  2000,
  {
    trailing: false,
  },
);
