import r from "oa";
import a from "qa";
import n from "fg";
import o from "GzU";
import s from "GS";
function d(e) {
  if (!e) {
    return e;
  }
  if (!o.m(e, "babiParam")) {
    return n.w(e);
  }
  const { babiParam } = e;
  const i = a._(e, ["babiParam"]);
  if (babiParam == null) {
    return n.w(i);
  }
  return n.w(
    r._(
      {
        babiParam: s.Wu(babiParam),
      },
      i,
    ),
  );
}
export { d };
