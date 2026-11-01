import i from "fg";
import s from "fm";
export function P(e) {
  if (typeof e === "object" && e !== null) {
    return i.o(e, s.Cb);
  }
}
