import n from "oa";
import i from "z8";
import a from "bT";
import s from "ED";
import o from "p21";
import "eu";
import c from "wF";
import l from "zbK";
import d from "EYk";
import u from "Q5x";
import p from "oh";
import m from "VN";
import h from "CQu";
import g from "dH4";
import v from "rG7";
export var T = s.PA((e) => {
  var r;
  var t;
  var s;
  var {
    source,
    vipPayManager,
    defaultSubscriptionTab,
    forceTheme,
    onCloseSubscribePage,
  } = e;
  var x = c.h(d.a);
  var w = c.h(u.bE);
  var R = h.v();
  var subscriptionPageHeaderTexts =
    (r = x.resourcePosition) == null ? undefined : r.subscriptionPageHeadTexts;
  a.useEffect(() => {
    if (source) {
      vipPayManager.updateReportParam({
        source,
      });
    }
  }, []);
  var C = c.h(m._);
  var { isVip, isVipExpired } =
    o.F(C, (e) => ({
      isVip: e.isVip,
      isVipExpired: e.isVipExpired,
    })) || {};
  var S = c.h(p.$);
  var { vipTabList } = o.F(S, (e) => ({
    vipTabList: e.vipTabList,
  }));
  var j = a.useMemo(() => {
    var e;
    var r;
    return (
      ((r = vipTabList[0]) == null || (e = r.productIds) == null
        ? undefined
        : e.length) === 3
    );
  }, [vipTabList]);
  var M = w == null ? undefined : w.material;
  var E =
    R === "dark"
      ? M == null || (t = M.bannerDark) == null
        ? undefined
        : t.enable
      : M == null || (s = M.banner) == null
        ? undefined
        : s.enable;
  var style = n._(
    {
      paddingTop: E && !(isVip || isVipExpired) ? "36px" : "48px",
    },
    j
      ? {
          "--price-list-max-width": "1100px",
        }
      : {},
  );
  return i.jsx("div", {
    className: "outerWrapper-scBrsK",
    children: i.jsxs("div", {
      className: "wrapper-d41p1T",
      style,
      onWheel: (e) => e.stopPropagation(),
      children: [
        i.jsx(v.$, {
          pageKind: l.Ac.Personal,
          vipPayManager,
          subscriptionPageHeaderTexts,
          forceTheme,
          onCloseSubscribePage,
        }),
        i.jsx(g.VQ, {
          pageKind: l.Ac.Personal,
          source,
          vipPayManager,
          subscriptionPageHeaderTexts,
          defaultSubscriptionTab,
          forceTheme,
          onCloseSubscribePage,
        }),
      ],
    }),
  });
});
