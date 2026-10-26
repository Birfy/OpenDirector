import n from "bT";
import a from "G4";
export function O(e) {
  const {
    enabled = true,
    getViewport,
    getTrack,
    getThumb,
    minThumbHeight = 24,
    trackStartInset = 0,
    trackEndInset = 0,
    observeMutations = false,
    onOverflowChange,
  } = e;
  const m = n.useCallback(() => {
    var e = getViewport();
    var t = getTrack();
    var n = getThumb();
    if (e && t && n) {
      var { clientHeight, scrollHeight, scrollTop } = e;
      var p = scrollHeight > clientHeight;
      if (onOverflowChange != null) {
        onOverflowChange(p);
      }
      if (p) {
        var h = Math.max(t.clientHeight - trackStartInset - trackEndInset, 0);
        var v = Math.min(
          h,
          Math.max((clientHeight / scrollHeight) * h, minThumbHeight),
        );
        var f = scrollHeight - clientHeight;
        n.style.height = "".concat(v, "px");
        n.style.transform = `translateY(${f > 0 ? (scrollTop / f) * (h - v) : 0}px)`;
      }
    }
  }, [
    getThumb,
    getTrack,
    getViewport,
    minThumbHeight,
    onOverflowChange,
    trackEndInset,
    trackStartInset,
  ]);
  a.E(() => {
    if (enabled) {
      var e;
      var n = getViewport();
      var a = getTrack();
      if (n && a) {
        var i = window.requestAnimationFrame(m);
        var c =
          observeMutations && typeof MutationObserver !== "undefined"
            ? new MutationObserver(m)
            : undefined;
        if (c != null) {
          c.observe(n, {
            childList: true,
            subtree: true,
            characterData: true,
          });
        }
        var s = () => m();
        if (typeof ResizeObserver === "undefined") {
          window.addEventListener("resize", s);
        } else {
          (e = new ResizeObserver(s)).observe(n);
          e.observe(a);
          if (n.firstElementChild instanceof HTMLElement) {
            e.observe(n.firstElementChild);
          }
        }
        return () => {
          window.cancelAnimationFrame(i);
          if (c != null) {
            c.disconnect();
          }
          if (e != null) {
            e.disconnect();
          }
          if (!e) {
            window.removeEventListener("resize", s);
          }
        };
      }
    }
  }, [enabled, getTrack, getViewport, observeMutations, m]);
  return m;
}
