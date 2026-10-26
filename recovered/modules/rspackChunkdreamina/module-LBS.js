import i from "Qey";
import r from "xI";
export function q(e) {
  return Object.fromEntries(
    Object.values(Object.groupBy(e, (e) => e.type)).flatMap((e) =>
      e.map((e, t) => [
        e.id,
        i.Ay.t(
          "video_unified_edit_".concat(e.type, "_index"),
          {
            string: t + 1,
          },
          "".concat(r.e[e.type], " ").concat(t + 1),
        ),
      ]),
    ),
  );
}
export function v(e) {
  const t = q(e);
  return Object.fromEntries(
    e.map((e) => {
      if (e.name) {
        return [e.id, e.name];
      }
      return [e.id, t[e.id]];
    }),
  );
}
