import i from "SI";
const a = ["max_1", "max_2", "max_3"];
export var w = (e) => {
  var t;
  if (e) {
    if (
      (t = ((e) => {
        var t;
        var r =
          e == null
            ? undefined
            : e
                .trim()
                .toLowerCase()
                .replace(/[\s-]+/g, "_");
        if (r) {
          if (a.includes(r)) {
            return r;
          }
          var i =
            (t = r.match(/(?:\u52a0\u91cf\u5305|max|boost)_?(1|2|3)$/)) == null
              ? undefined
              : t[1];
          if (i) {
            return a[Number(i) - 1];
          }
          return undefined;
        }
      })(e.levelTips)) != null
    ) {
      return t;
    }
    return i.PR[e.level];
  }
};
export var G = (e, t) => {
  if (e === "YEAR") {
    return "pay_annually";
  }
  switch (t) {
    case 12:
      return "pay_annually";
    case 3:
      return "pay_quarterly";
    case 1:
      return "pay_monthly";
  }
  if (e === "MONTH") {
    return "pay_monthly";
  }
};
