import i from "zP";
import n from "wF";
export var S = () => {
  var e;
  var region = (
    ((e = window.__locationInfo) == null ? undefined : e.code) || ""
  ).toLowerCase();
  var r = n.h(i.n);
  return {
    region,
    lang: r == null ? undefined : r.currentLocale,
  };
};
