import n from "z8";
import "Vx";
import t from "Ix";
import o from "zS";
import r from "bT";
import s from "xb";
import c from "Qey";
import d from "yw";
export function $(e) {
  const { scrollContainerRef } = e;
  const [showBackToTop, setShowBackToTop] = r.useState(false);
  const handleScroll = o.A((e) => {
    setShowBackToTop(e.currentTarget.scrollTop > 360);
  });
  return {
    showBackToTop,
    handleScroll,
    resetBackToTop: o.A(() => {
      setShowBackToTop(false);
    }),
    scrollToTop: o.A(() => {
      if (scrollContainerRef.current) {
        var e = scrollContainerRef.current.scrollTop;
        var a = Math.min(
          400,
          Math.max(
            150,
            (e / scrollContainerRef.current.clientHeight) * 100 + 150,
          ),
        );
        var n = performance.now();
        var t = (o) => {
          var r;
          var s = Math.min((o - n) / a, 1);
          var top = e * (1 - s) ** 3;
          if ((r = scrollContainerRef.current) != null) {
            r.scrollTo({
              top,
              behavior: "instant",
            });
          }
          if (s < 1) {
            window.requestAnimationFrame(t);
          }
        };
        window.requestAnimationFrame(t);
      }
    }),
  };
}
var p = r.memo(function (e) {
  const { className, visible, onClick } = e;
  if (!visible) {
    return null;
  }
  const content = c.Ay.t("web_feed_back_to_top", {}, "回到顶部");
  return n.jsx("div", {
    className: s("container-qMmKNA", className),
    children: n.jsx(t.A, {
      content,
      position: "tr",
      trigger: "hover",
      children: n.jsx("button", {
        type: "button",
        className: "button-tI6OQs",
        "aria-label": content,
        onClick,
        children: n.jsx(d.IuU, {
          size: 20,
          "aria-hidden": true,
        }),
      }),
    }),
  });
});
export { p as s };
