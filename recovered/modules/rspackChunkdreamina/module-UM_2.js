import r from "bT";
import { E } from "./module-G4_2.js";
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
  const p = r.useCallback(() => {
    var e = getViewport();
    var t = getTrack();
    var r = getThumb();
    if (e && t && r) {
      var { clientHeight, scrollHeight, scrollTop } = e;
      var m = scrollHeight > clientHeight;
      if (onOverflowChange != null) {
        onOverflowChange(m);
      }
      if (m) {
        var h = Math.max(t.clientHeight - trackStartInset - trackEndInset, 0);
        var v = Math.min(
          h,
          Math.max((clientHeight / scrollHeight) * h, minThumbHeight),
        );
        var g = scrollHeight - clientHeight;
        r.style.height = "".concat(v, "px");
        r.style.transform = `translateY(${g > 0 ? (scrollTop / g) * (h - v) : 0}px)`;
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
  E(() => {
    if (enabled) {
      var e;
      var r = getViewport();
      var n = getTrack();
      if (r && n) {
        var o = window.requestAnimationFrame(p);
        var s =
          observeMutations && typeof MutationObserver !== "undefined"
            ? new MutationObserver(p)
            : undefined;
        if (s != null) {
          s.observe(r, {
            childList: true,
            subtree: true,
            characterData: true,
          });
        }
        var c = () => p();
        if (typeof ResizeObserver === "undefined") {
          window.addEventListener("resize", c);
        } else {
          (e = new ResizeObserver(c)).observe(r);
          e.observe(n);
          if (r.firstElementChild instanceof HTMLElement) {
            e.observe(r.firstElementChild);
          }
        }
        return () => {
          window.cancelAnimationFrame(o);
          if (s != null) {
            s.disconnect();
          }
          if (e != null) {
            e.disconnect();
          }
          if (!e) {
            window.removeEventListener("resize", c);
          }
        };
      }
    }
  }, [enabled, getTrack, getViewport, observeMutations, p]);
  return p;
}
