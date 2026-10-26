import r from "z8";
import n from "bT";
import i from "xb";
export var A = n.memo(function (e) {
  const { id, message, className } = e;
  return r.jsx("div", {
    className: i("slot-ifJuTq", className, {
      "visible-_EJ9jP": !!message,
    }),
    "aria-live": "polite",
    children: r.jsx("div", {
      className: "clip-utmnzB",
      children: r.jsx("div", {
        id,
        className: "message-qTW2uj",
        children: message,
      }),
    }),
  });
});
