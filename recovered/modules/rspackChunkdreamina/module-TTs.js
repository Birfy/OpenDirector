import i from "M8X";
import s from "nss";
export function q(e, t) {
  let r;
  if (t) {
    if ((r = i.cQ(e, s.Y).getInstanceSync()) == null) {
      return undefined;
    }
    return r.getAudioModelConfig(t);
  }
}
