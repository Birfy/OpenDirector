import n from "z8";
import t from "bT";
import o from "G4";
import r from "oa";
import s from "bk";
import "xj";
import l from "R8";
import c from "yw";
import d from "E6";
import m from "xb";
import u from "y3";
import h from "hZ";
const v = t.memo(function (e) {
  const { className } = e;
  return n.jsx(u.Q, {
    className: m(h.A.capsule, h.A.skeleton, className),
    "aria-hidden": "true",
  });
});
const x = "entry-IaavjB";
const g = "hidden-entry-pt9524";
const className = "capsule-RMZsUw";
const f = [136, 152, 168, 144];
const w = {
  "aria-hidden": true,
  inert: "",
};
const style = {
  "--recommendation-capsules-gap": `${8}px`,
};
const y = t.memo(function (e) {
  var {
    items,
    loading,
    trailingAction,
    visibleEntryCount = items.length + +!!loading,
    listRef,
    loadingEntryRef,
    trailingActionRef,
    onEntryRef,
  } = e;
  if (!loading && items.length === 0) {
    return null;
  }
  const y = items.length === 0 ? f : [undefined];
  return n.jsxs("div", {
    ref: listRef,
    className: "list-VL5IvZ",
    "aria-busy": loading || undefined,
    "data-recommendation-capsules-list": true,
    style,
    children: [
      items.map((e, i) => {
        var {
          id,
          icon,
          label,
          tag,
          preview,
          moreAction,
          onActivate,
          onPreviewIntent,
        } = e;
        var f = i >= visibleEntryCount;
        return n.jsx(
          "span",
          s._(
            r._(
              {
                ref: onEntryRef ? (e) => onEntryRef(id, e) : undefined,
                className: f ? g : x,
                "data-recommendation-capsule-measure": id,
              },
              f ? w : undefined,
            ),
            {
              children: n.jsx(d.t, {
                icon,
                label,
                tag,
                preview: f ? undefined : preview,
                moreAction: f ? undefined : moreAction,
                className,
                onClick: onActivate,
                onPreviewIntent: f ? undefined : onPreviewIntent,
              }),
            },
          ),
          id,
        );
      }),
      loading
        ? y.map((e, a) => {
            var t = items.length > 0 && items.length >= visibleEntryCount;
            return n.jsx(
              "span",
              s._(
                r._(
                  {
                    ref: a === 0 ? loadingEntryRef : undefined,
                    className: t ? g : e ? "loading-entry-NB_HJE" : x,
                    "data-recommendation-capsule-loading-measure": true,
                    style: e
                      ? {
                          "--recommendation-capsule-skeleton-width": "".concat(
                            e,
                            "px",
                          ),
                        }
                      : undefined,
                  },
                  t ? w : undefined,
                ),
                {
                  children: n.jsx(v, {
                    className,
                  }),
                },
              ),
              "recommendation-capsule-loading-".concat(a),
            );
          })
        : null,
      items.length > 0 && trailingAction
        ? n.jsx("span", {
            ref: trailingActionRef,
            className: "trailing-action-entry-VrL55e",
            "data-recommendation-capsules-trailing-measure": true,
            children: n.jsx(l.A, {
              htmlType: "button",
              type: "secondary",
              size: "default",
              shape: "round",
              className: "trailing-action-CExzxG",
              onClick: trailingAction.onActivate,
              children: n.jsxs("span", {
                className: "trailing-action-content-KJlsTu",
                children: [
                  n.jsx("span", {
                    className: "trailing-action-label-MDLNjL",
                    children: trailingAction.label,
                  }),
                  n.jsx(c.Vjx, {
                    size: 12,
                    "aria-hidden": "true",
                  }),
                ],
              }),
            }),
          })
        : null,
    ],
  });
});
var N = t.memo(function (e) {
  const { items, loading, trailingAction } = e;
  const sRef = t.useRef(null);
  const lRef = t.useRef(null);
  const cRef = t.useRef(null);
  const dRef = t.useRef(new Map());
  const [visibleEntryCount, setVisibleEntryCount] = t.useState(
    items.length + +!!loading,
  );
  const u = t.useMemo(() => items.map((e) => e.id), [items]);
  const h = u.length + +!!loading;
  const onEntryRef = t.useCallback((e, i) => {
    if (i) {
      dRef.current.set(e, i);
    } else {
      dRef.current.delete(e);
    }
  }, []);
  const x = t.useCallback(() => {
    var e;
    var i;
    var n;
    var sRef_current = sRef.current;
    if (sRef_current) {
      var o = sRef_current.getBoundingClientRect().width;
      if (o <= 0) {
        if (typeof ResizeObserver !== "function") {
          setVisibleEntryCount(h);
        }
        return;
      }
      var m = u.map((e) => {
        var i;
        var a;
        if (
          (i =
            (a = dRef.current.get(e)) == null
              ? undefined
              : a.getBoundingClientRect().width) != null
        ) {
          return i;
        }
        return 0;
      });
      if (loading) {
        m.push(
          (i =
            (n = cRef.current) == null
              ? undefined
              : n.getBoundingClientRect().width) != null
            ? i
            : 0,
        );
      }
      var v = ((e, i, a) => {
        let n = a != null ? a : 0;
        let t = a !== undefined;
        for (let o = 0; o < i.length; o += 1) {
          let r;
          const s = n + 8 * !!t + ((r = i[o]) != null ? r : 0);
          if (s > e + 0.5) {
            return o;
          }
          n = s;
          t = true;
        }
        return i.length;
      })(
        o,
        m,
        trailingAction
          ? (e = lRef.current) == null
            ? undefined
            : e.getBoundingClientRect().width
          : undefined,
      );
      setVisibleEntryCount((e) => {
        if (e === v) {
          return e;
        }
        return v;
      });
    }
  }, [h, u, loading, trailingAction]);
  o.E(() => {
    x();
    var sRef_current = sRef.current;
    if (sRef_current) {
      if (typeof ResizeObserver === "function") {
        var i = new ResizeObserver(x);
        i.observe(sRef_current);
        u.forEach((e) => {
          var a = dRef.current.get(e);
          if (a) {
            i.observe(a);
          }
        });
        if (cRef.current) {
          i.observe(cRef.current);
        }
        if (lRef.current) {
          i.observe(lRef.current);
        }
        return () => i.disconnect();
      }
      window.addEventListener("resize", x);
      return () => window.removeEventListener("resize", x);
    }
  }, [u, x]);
  return n.jsx(y, {
    items,
    loading,
    trailingAction,
    visibleEntryCount,
    listRef: sRef,
    loadingEntryRef: cRef,
    trailingActionRef: lRef,
    onEntryRef,
  });
});
export { N as w };
