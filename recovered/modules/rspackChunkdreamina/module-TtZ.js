import i from "z8";
import n from "MK";
const a = /(\d+(?:\.\d+)?\u6298|\d+(?:\.\d+)?(?:\u5143)?\/\u79d2)/g;
const o = /^(\d+(?:\.\d+)?\u6298|\d+(?:\.\d+)?(?:\u5143)?\/\u79d2)$/;
function s(e) {
  if (e) {
    const t = n.Ay.t(e, {}, e);
    if (typeof t !== "string") {
      return t;
    }
    const r = t.split(a).filter((e) => e !== "");
    if (r.some((e) => o.test(e))) {
      return r.map((children, r) => {
        if (o.test(children)) {
          return i.jsx(
            "span",
            {
              style: {
                fontWeight: 600,
              },
              children,
            },
            "".concat(t, "-").concat(r),
          );
        }
        return i.jsx(
          "span",
          {
            children,
          },
          "".concat(t, "-").concat(r),
        );
      });
    }
    return t;
  }
}
function c(e, t) {
  let r;
  let a;
  let o;
  let c;
  let l;
  let d = "";
  if (e.bgType === "bg_color") {
    d = (c = e.bgColor) != null ? c : "";
  } else if (e.bgType === "bg_gradient_color") {
    d = (l = e.bgGradientColor) != null ? l : "";
  }
  const u = !!d;
  const cardStyle = {
    background: d || undefined,
    outline: u ? "none" : undefined,
    border: u ? "none" : undefined,
    padding: u ? "0 1px 1px" : undefined,
    "--commerce-benefit-tag-background-color": e.bgBenefitTagColor,
    "--commerce-price-card-content-background-color": e.bgPriceColor,
    "--commerce-product-text-tag-color": e.signColor,
    "--commerce-product-text-tag-background-color": e.signBgColor,
    "--commerce-product-text-tag-border-color": e.signBgColor
      ? "transparent"
      : undefined,
    "--commerce-product-text-tag-box-shadow": e.signShadow,
    "--commerce-product-text-priority-tag-color": e.prioritySignColor,
    "--commerce-product-text-priority-tag-background-color":
      e.prioritySignBgColor,
  };
  const contentStyle =
    u || e.bgPriceColor
      ? {
          background: e.bgPriceColor
            ? "var(--commerce-price-card-content-background-color)"
            : undefined,
          borderRadius: u ? 23 : undefined,
          outline: u ? "none" : undefined,
        }
      : undefined;
  const style = {
    color: e.titleFontColor,
  };
  const banner =
    e.enable && e.title
      ? i.jsx("span", {
          style,
          children: e.title,
        })
      : undefined;
  const highlightTitle = e.highlightTitle
    ? n.Ay.t(e.highlightTitle, {}, e.highlightTitle)
    : undefined;
  return {
    banner,
    signText: e.signText,
    prioritySignText: (a = e.prioritySignText) == null ? undefined : a.trim(),
    creditBadgeText: (o = e.creditBadgeText) == null ? undefined : o.trim(),
    creditBadgeAmount:
      typeof (r = e.creditBadgeAmount) === "number"
        ? Number.isFinite(r)
          ? String(r)
          : undefined
        : (typeof r === "string" && r.trim()) || undefined,
    highlightTitle,
    cardStyle,
    contentStyle,
    bannerStyle: {
      background: d || undefined,
      color: e.titleFontColor,
    },
    buttonStyle: {
      backgroundColor: e.btnBgColor,
      color: e.btnFontColor,
    },
    highlightBenefits: ((e, t) => {
      const t_highlightBlockTitle = t.highlightBlockTitle;
      const t_highlightBlockDesc = t.highlightBlockDesc;
      const t_highlightBlockDesc2 = t.highlightBlockDesc2;
      let o;
      const t_highlightBlockTag = t.highlightBlockTag;
      const t_highlightBlockTooltip = t.highlightBlockTooltip;
      if (
        t_highlightBlockTitle ||
        t_highlightBlockDesc ||
        t_highlightBlockDesc2 ||
        (o == null ? undefined : o.length) ||
        t_highlightBlockTag
      ) {
        return [
          {
            key: "".concat(e, "-highlight-benefit"),
            title: t_highlightBlockTitle
              ? n.Ay.t(t_highlightBlockTitle, {}, t_highlightBlockTitle)
              : undefined,
            descriptions: (o == null ? undefined : o.length) ? o : undefined,
            description: s(t_highlightBlockDesc),
            descriptionSecondary: s(t_highlightBlockDesc2),
            tag: t_highlightBlockTag
              ? n.Ay.t(t_highlightBlockTag, {}, t_highlightBlockTag)
              : undefined,
            tooltip: t_highlightBlockTooltip
              ? n.Ay.t(t_highlightBlockTooltip, {}, t_highlightBlockTooltip)
              : undefined,
            itemStyle: {
              background: t.highlightBlockBg,
            },
            titleStyle: {
              color: t.highlightBlockTitleColor,
            },
            descriptionStyle: {
              color: t.highlightBlockDescColor,
            },
            tagStyle: {
              color: t.highlightBlockTagColor,
              backgroundColor: t.highlightBlockTagBg,
            },
          },
        ];
      }
    })(t, e),
  };
}
export { c };
