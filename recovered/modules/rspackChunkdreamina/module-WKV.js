import { k_ } from "./module-Zr.js";
const r = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'",
};
const i = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"',
};
const o = typeof navigator !== "undefined" && /Mac/.test(navigator.platform);
const s =
  typeof navigator !== "undefined" &&
  /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var l = 0; l < 10; l++) {
  r[48 + l] = r[96 + l] = String(l);
}
for (var l = 1; l <= 24; l++) {
  r[l + 111] = "F" + l;
}
for (var l = 65; l <= 90; l++) {
  r[l] = String.fromCharCode(l + 32);
  i[l] = String.fromCharCode(l);
}
for (const a in r) {
  if (!i.hasOwnProperty(a)) {
    i[a] = r[a];
  }
}
let c =
  typeof navigator !== "undefined" &&
  /Mac|iP(hone|[oa]d)/.test(navigator.platform);
function d(e, t, n = true) {
  if (t.altKey) {
    e = "Alt-" + e;
  }
  if (t.ctrlKey) {
    e = "Ctrl-" + e;
  }
  if (t.metaKey) {
    e = "Meta-" + e;
  }
  if (n && t.shiftKey) {
    e = "Shift-" + e;
  }
  return e;
}
export function w(e) {
  return new k_({
    props: {
      handleKeyDown: K(e),
    },
  });
}
export function K(e) {
  let t = ((e) => {
    let t = Object.create(null);
    for (let n in e) {
      t[
        ((e) => {
          let t;
          let n;
          let r;
          let i;
          let o = e.split(/-(?!$)/);
          let s = o[o.length - 1];
          if (s == "Space") {
            s = " ";
          }
          for (let e = 0; e < o.length - 1; e++) {
            let s = o[e];
            if (/^(cmd|meta|m)$/i.test(s)) {
              i = true;
            } else if (/^a(lt)?$/i.test(s)) {
              t = true;
            } else if (/^(c|ctrl|control)$/i.test(s)) {
              n = true;
            } else if (/^s(hift)?$/i.test(s)) {
              r = true;
            } else if (/^mod$/i.test(s)) {
              if (c) {
                i = true;
              } else {
                n = true;
              }
            } else {
              throw Error("Unrecognized modifier name: " + s);
            }
          }
          if (t) {
            s = "Alt-" + s;
          }
          if (n) {
            s = "Ctrl-" + s;
          }
          if (i) {
            s = "Meta-" + s;
          }
          if (r) {
            s = "Shift-" + s;
          }
          return s;
        })(n)
      ] = e[n];
    }
    return t;
  })(e);
  return function (e, n) {
    let l;
    if (
      (l =
        (!(
          (o && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey) ||
          (s && n.shiftKey && n.key && n.key.length == 1) ||
          n.key == "Unidentified"
        ) &&
          n.key) ||
        (n.shiftKey ? i : r)[n.keyCode] ||
        n.key ||
        "Unidentified") == "Esc"
    ) {
      l = "Escape";
    }
    if (l == "Del") {
      l = "Delete";
    }
    if (l == "Left") {
      l = "ArrowLeft";
    }
    if (l == "Up") {
      l = "ArrowUp";
    }
    if (l == "Right") {
      l = "ArrowRight";
    }
    if (l == "Down") {
      l = "ArrowDown";
    }
    let a = l;
    let h;
    let c = t[d(a, n)];
    if (c && c(e.state, e.dispatch, e)) {
      return true;
    }
    if (a.length == 1 && a != " ") {
      if (n.shiftKey) {
        let r = t[d(a, n, false)];
        if (r && r(e.state, e.dispatch, e)) {
          return true;
        }
      }
      if (
        (n.shiftKey || n.altKey || n.metaKey || a.charCodeAt(0) > 127) &&
        (h = r[n.keyCode]) &&
        h != a
      ) {
        let r = t[d(h, n)];
        if (r && r(e.state, e.dispatch, e)) {
          return true;
        }
      }
    }
    return false;
  };
}
