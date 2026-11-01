import r from "oa";
import o from "z8";
import n from "bT";
import a from "Qey";
import s from "ED";
import c from "GFp";
import l from "z2h";
import u from "Vw4";
import d from "wF";
import h from "Kt";
import v from "sl";
import _ from "hA6";
export var S = s.PA(function (e) {
  const { priceText, sceneOptions } = e;
  const containerService = d.h(h._);
  const p = _.n();
  const onMouseDown = n.useCallback(() => {
    c.iT({
      containerService,
      reportParam: r._(
        {
          source: v.d.Generate,
        },
        sceneOptions
          ? {
              scene: sceneOptions.scene,
              sceneOptions,
            }
          : {},
        sceneOptions && (p == null ? undefined : p.needVip)
          ? {
              interceptionType: l.C.VIP_INSUFFICIENT,
              minVipLevel: p.needMinVipLevel,
            }
          : {},
      ),
    });
    u.sm(containerService, {
      action: u.uS.Click,
    });
  }, [
    containerService,
    p == null ? undefined : p.needMinVipLevel,
    p == null ? undefined : p.needVip,
    sceneOptions,
  ]);
  if (priceText) {
    return o.jsxs("div", {
      className: "tooltip-text-MFDE5I",
      children: [
        o.jsx("div", {
          className: "tooltip-raw-H_R6XK",
          children: a.Ay.t("free_trial_tooltip_title"),
        }),
        o.jsx("div", {
          className: "tooltip-click-PrAOl6",
          onMouseDown,
          children: priceText,
        }),
      ],
    });
  }
  return null;
});
