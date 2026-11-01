import n from "oa";
import t from "bk";
import o from "z8";
import r from "bT";
import s from "qa";
import l from "Po";
import c from "Qey";
import d from "yw";
import m from "sf1";
import p from "Du8";
import u from "qO";
import h from "JSz";
import v from "m88";
import x from "n6n";
import g from "zX";
import b from "k7";
import f from "yfx";
import w from "UOA";
import k from "lBB";
import y from "ye";
import N from "gKw";
import W from "vO";
import R from "rk";
import T from "M9I";
import C from "Hxq";
import M from "Lt";
import F from "pa";
import $ from "PSJ";
import S from "v5";
import E from "kD";
import * as z from "./module-tfh.js";
import _ from "dq";
import O from "xb";
import H from "wXm";
import L from "gg";
import I from "I9";
const j = r.memo(function (e) {
  const {
    adjustIcon,
    atIcon,
    creativeModeIcon,
    skillIcon,
    staticAgenticAdvancedFeaturesEnabled,
    typeSelect,
    variant,
  } = e;
  const u = s._(e, [
    "adjustIcon",
    "atIcon",
    "creativeModeIcon",
    "skillIcon",
    "staticAgenticAdvancedFeaturesEnabled",
    "typeSelect",
    "variant",
  ]);
  const h =
    staticAgenticAdvancedFeaturesEnabled != null
      ? staticAgenticAdvancedFeaturesEnabled
      : N.F;
  return o.jsxs(
    w.U,
    t._(n._({}, u), {
      children: [
        typeSelect,
        o.jsx(W.j, {
          icon: adjustIcon,
          label: c.Ay.t("web_canva_agent_param_setting", {}, "Preferences"),
        }),
        variant !== "canvas" && h
          ? o.jsx(k.E, {
              icon: skillIcon,
              children: c.Ay.t("web_agent_skill_btn", {}, "Skills"),
            })
          : null,
        variant !== "canvas" && h
          ? null
          : o.jsx(R.I, {
              icon: creativeModeIcon,
              checked: true,
              children: c.Ay.t(
                "web_canva_agent_creative_model",
                {},
                "创意设计",
              ),
            }),
        variant !== "canvas" && h
          ? o.jsx(k.E, {
              icon: atIcon,
            })
          : null,
      ],
    }),
  );
});
const A = r.memo(function () {
  const { appearance } = r.useContext(p.R);
  const icon = r.useMemo(
    () =>
      o.jsx(T.z, {
        aspectRatio: C.m.aspectRatio,
        size: M.f(appearance) ? 16 : undefined,
      }),
    [appearance],
  );
  return o.jsx(k.E, {
    icon,
    children: o.jsxs("span", {
      className: "button-text-PTy7Cr",
      children: [
        C.m.aspectRatio,
        o.jsx("div", {
          className: "divider-X8mELC",
        }),
        C.M.resolutionName,
      ],
    }),
  });
});
const Z = r.memo(function (e) {
  const i = r.useContext(p.R);
  return o.jsx(
    $.B,
    t._(n._({}, e), {
      children: o.jsx(S.V, {
        children: o.jsx(F.x, {
          className: M.G(i) ? E.A.referenceUpload : undefined,
        }),
      }),
    }),
  );
});
const B = r.memo(function (e) {
  return o.jsx(z.m, {
    children: o.jsx(
      _.F,
      n._(
        {
          disabled: true,
        },
        e,
      ),
    ),
  });
});
const X = r.memo(function (e) {
  const { className } = e;
  const a = s._(e, ["className"]);
  return o.jsx(
    k.E,
    t._(
      n._(
        {
          branded: true,
          "data-static-content-generator-type-select": true,
        },
        a,
      ),
      {
        className: O("type-select-NhiE5b", className),
      },
    ),
  );
});
const P = r.memo(function (e) {
  let i;
  let a;
  let N;
  const {
    className,
    renderGeneratorFloatingPanel,
    staticAgenticAdvancedFeaturesEnabled,
    staticTypeTabs,
    typeOptions,
    initialContentGeneratorType,
  } = e;
  const S = s._(e, [
    "className",
    "renderGeneratorFloatingPanel",
    "staticAgenticAdvancedFeaturesEnabled",
    "staticTypeTabs",
    "typeOptions",
    "initialContentGeneratorType",
  ]);
  const { contentGeneratorTypes } = S;
  const { variant, modeTabs } = S;
  const O =
    (i =
      (a = S.contentGeneratorType) != null ? a : initialContentGeneratorType) !=
    null
      ? i
      : m.h();
  const J =
    (contentGeneratorTypes == null
      ? undefined
      : contentGeneratorTypes.length) && !contentGeneratorTypes.includes(O)
      ? contentGeneratorTypes[0]
      : O;
  const P = r.useMemo(() => {
    var e;
    if ((e = typeOptions.find((e) => e.value === J)) != null) {
      return e;
    }
    return typeOptions[0];
  }, [typeOptions, J]);
  const I = (N = P == null ? undefined : P.value) != null ? N : J;
  const V = r.useMemo(
    () =>
      l.A(
        {},
        p.q,
        {
          insideContentGenerator: true,
        },
        S,
      ),
    [S],
  );
  const Q = M.G(V);
  const K = Q ? H.i : v.w;
  const value = r.useMemo(
    () => ({
      id: h.uR(),
    }),
    [],
  );
  const U = P == null ? undefined : P.label;
  const G = r.useMemo(
    () =>
      o.jsx(d.rIS, {
        style: {
          fontSize: 12,
        },
      }),
    [],
  );
  const q = r.useMemo(
    () => ({
      agentic: c.Ay.t("web_canva_agent_guide1", {}, "Describe your idea"),
      image: c.Ay.t(
        "web_web_t2i_draw_words_placeholder_text",
        {},
        "请输入图片生成的提示词，例如：做一张“情人节”海报",
      ),
      video: c.Ay.t(
        "web_home_tool_video_generator_placeholder_text",
        {},
        "输入文字，描述你想创作的画面内容、运动方式等。例如：一个3D形象的小男孩，在公园滑滑板。",
      ),
    }),
    [],
  );
  const renderGeneratorMainContent = r.useCallback(
    (e) =>
      o.jsx(
        b.d,
        t._(n._({}, e), {
          children: o.jsx(f.f, {
            placeholder: q[I],
          }),
        }),
      ),
    [I, q],
  );
  const renderGeneratorReferences = r.useCallback(
    (e) => o.jsx(Z, n._({}, e)),
    [],
  );
  const renderGeneratorSubmitButton = r.useCallback(
    (e) => o.jsx(B, n._({}, e)),
    [],
  );
  const ea = M.f(V.appearance);
  const adjustIcon = r.useMemo(() => {
    if (ea) {
      return o.jsx(d.Tyt, {});
    }
    return o.jsx(d.Da7, {});
  }, [ea]);
  const atIcon = r.useMemo(() => o.jsx(d.jHH, {}), []);
  const skillIcon = r.useMemo(() => {
    if (ea) {
      return o.jsx(d.VKR, {});
    }
    return o.jsx(d.ThK, {});
  }, [ea]);
  const creativeModeIcon = r.useMemo(() => o.jsx(d.fcI, {}), []);
  const es = r.useMemo(
    () => ({
      agentic: o.jsx(d.j$8, {}),
      image: o.jsx(d.iHo, {}),
      video: o.jsx(d._MP, {}),
    }),
    [],
  );
  const typeSelect = r.useMemo(() => {
    if (modeTabs || typeOptions.length <= 1) {
      return null;
    }
    return o.jsxs(X, {
      icon: es[I],
      children: [U, G],
    });
  }, [modeTabs, typeOptions.length, es, I, U, G]);
  const ec = r.useMemo(
    () =>
      o.jsx(d.xqN, {
        size: 16,
      }),
    [],
  );
  const ed =
    initialContentGeneratorType !== undefined
      ? c.Ay.t("web_new_video_settings_button_content", {}, "加载中")
      : c.Ay.t("web_image_model_name_46");
  const agentic = r.useCallback(
    (e) =>
      o.jsx(
        j,
        t._(n._({}, e), {
          adjustIcon,
          atIcon,
          creativeModeIcon,
          skillIcon,
          staticAgenticAdvancedFeaturesEnabled,
          typeSelect,
          variant,
        }),
      ),
    [
      typeSelect,
      atIcon,
      adjustIcon,
      skillIcon,
      creativeModeIcon,
      staticAgenticAdvancedFeaturesEnabled,
      variant,
    ],
  );
  const ep = r.useMemo(() => o.jsx(d.kTu, {}), []);
  const image = r.useCallback(
    (e) =>
      o.jsxs(
        w.U,
        t._(n._({}, e), {
          children: [
            typeSelect,
            o.jsxs(k.E, {
              icon: ec,
              children: [
                o.jsx("span", {
                  children: ed,
                }),
                modeTabs ? G : null,
              ],
            }),
            o.jsx(A, {}),
            o.jsx(k.E, {
              icon: ep,
            }),
          ],
        }),
      ),
    [typeSelect, ec, ep, ed, modeTabs, G],
  );
  const video = r.useCallback(
    (e) =>
      o.jsxs(
        w.U,
        t._(n._({}, e), {
          children: [
            typeSelect,
            o.jsxs(k.E, {
              icon: ec,
              children: [
                o.jsx("span", {
                  children: c.Ay.t(
                    "web_new_video_settings_button_content",
                    {},
                    "加载中",
                  ),
                }),
                modeTabs ? G : null,
              ],
            }),
            o.jsx(A, {}),
            o.jsx(k.E, {
              icon: ep,
            }),
          ],
        }),
      ),
    [typeSelect, ec, ep, modeTabs, G],
  );
  const ev = r.useMemo(
    () => ({
      agentic,
      image,
      video,
    }),
    [agentic, image, video],
  );
  const renderGeneratorToolbar = r.useMemo(() => ev[I], [I, ev]);
  const renderGeneratorTypeTabs = r.useCallback(
    (e) => {
      if (modeTabs) {
        if (Q) {
          return o.jsx(
            L.a,
            n._(
              {
                options: typeOptions,
                value: I,
              },
              e,
            ),
          );
        }
        return o.jsx(
          y.H,
          n._(
            {
              modeTabs,
              collapsed: S.collapsed,
              wide: false,
              showExpandToggle: S.modeTabsCollapsible,
              options: typeOptions,
              value: I,
              outlineEnabled: S.modeTabsAppearance === "browser",
            },
            e,
          ),
        );
      }
      if (staticTypeTabs != null) {
        return staticTypeTabs;
      }
      return null;
    },
    [
      Q,
      typeOptions,
      I,
      modeTabs,
      staticTypeTabs,
      S.collapsed,
      S.modeTabsCollapsible,
      S.modeTabsAppearance,
    ],
  );
  const renderGeneratorFloatingPanel_1 =
    I === "agentic" ? renderGeneratorFloatingPanel : undefined;
  const ef = r.useCallback(
    (e) =>
      o.jsx(
        x.l,
        t._(n._({}, e), {
          "data-interactive": "false",
        }),
      ),
    [],
  );
  const ew = r.useCallback(() => {
    if (variant === "canvas") {
      return o.jsx(g.L, {
        className,
        renderGeneratorSubmitButton,
        renderGeneratorMainContent,
        renderGeneratorReferences,
        renderGeneratorFloatingPanel: renderGeneratorFloatingPanel_1,
        renderGeneratorToolbar,
        children: ef,
      });
    }
    return o.jsx(K, {
      className,
      renderGeneratorFloatingPanel: renderGeneratorFloatingPanel_1,
      renderGeneratorMainContent,
      renderGeneratorReferences,
      renderGeneratorSubmitButton,
      renderGeneratorToolbar,
      renderGeneratorTypeTabs,
      children: ef,
    });
  }, [
    K,
    variant,
    className,
    ef,
    renderGeneratorMainContent,
    renderGeneratorReferences,
    renderGeneratorSubmitButton,
    renderGeneratorToolbar,
    renderGeneratorTypeTabs,
    renderGeneratorFloatingPanel_1,
  ]);
  return o.jsx(p.R.Provider, {
    value: V,
    children: o.jsx(u.b.Provider, {
      value,
      children: ew(),
    }),
  });
});
function V(e) {
  const typeOptions = I.w(e.contentGeneratorTypes, e.appearance);
  return o.jsx(
    P,
    t._(n._({}, e), {
      typeOptions,
    }),
  );
}
var Q = r.memo(function (e) {
  if (e.typeOptions) {
    return o.jsx(
      P,
      t._(n._({}, e), {
        typeOptions: e.typeOptions,
      }),
    );
  }
  return o.jsx(V, n._({}, e));
});
export { Q as T };
