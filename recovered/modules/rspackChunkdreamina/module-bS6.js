import i from "NY";
import { Ve } from "./module-wcw.js";
const a = (e) => {
  if (typeof document !== "undefined") {
    var t;
    var r;
    var i = document.createElement("textarea");
    i.value =
      typeof e === "string"
        ? e
        : (t = (r = e["text/plain"]) != null ? r : Object.values(e)[0]) != null
          ? t
          : "";
    i.setAttribute("readonly", "");
    i.style.position = "fixed";
    i.style.top = "0";
    i.style.left = "0";
    i.style.opacity = "0";
    i.style.pointerEvents = "none";
    document.body.appendChild(i);
    i.focus();
    i.select();
    try {
      document.execCommand("copy");
    } finally {
      if (i.parentNode) {
        i.parentNode.removeChild(i);
      }
    }
  }
};
export function $(e) {
  return i._(function* () {
    if (typeof e !== "string") {
      return void (yield new Promise((resolve) => {
        if (typeof document === "undefined") {
          return void resolve();
        }
        var r = false;
        var i = () => {
          if (!r) {
            r = true;
            resolve();
          }
        };
        var o = () => {
          document.removeEventListener("copy", c);
        };
        var c = (t) => {
          try {
            if (!t.clipboardData) {
              o();
              a(e);
              i();
              return;
            }
            t.preventDefault();
            Object.keys(e).forEach((r) => {
              var i;
              if ((i = t.clipboardData) != null) {
                i.setData(r, e[r]);
              }
            });
            o();
            i();
          } catch (error) {
            o();
            Ve.warn(
              "format clipboard copy failed, fallback to plain text",
              error,
            );
            a(e);
            i();
          }
        };
        document.addEventListener("copy", c);
        try {
          if (!document.execCommand("copy")) {
            o();
            a(e);
            i();
            return;
          }
          setTimeout(() => {
            if (!r) {
              o();
              a(e);
              i();
            }
          }, 0);
        } catch (error) {
          o();
          Ve.warn("execCommand copy failed, fallback to plain text", error);
          a(e);
          i();
        }
      }));
    }
    const t =
      typeof navigator === "undefined" ? undefined : navigator.clipboard;
    if (t && typeof t.writeText === "function") {
      try {
        yield t.writeText(e);
        return;
      } catch (error) {
        Ve.warn("Clipboard API copy failed, fallback to execCommand", error);
      }
    }
    try {
      a(e);
    } catch (error) {
      Ve.warn("fallback clipboard copy failed", error);
    }
  })();
}
