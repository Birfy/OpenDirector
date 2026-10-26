import a from "uoE";
export var h = (e, t) => {
  var r = a.f(e, t);
  var i = r.filter((e) => e.type === "audio");
  if (i.length > 0) {
    return i;
  }
  return r;
};
