import s from "fg";
import n from "fm";
import r from "K8";
export function l(t) {
  if (t.ret !== "0") {
    return r.xz(Number(t.ret), t.errmsg || "request failed");
  }
  return r.TZ(s.o(t.data, n.Cb));
}
