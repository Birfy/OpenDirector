import r from "oa";
import s from "wcw";
function n(t) {
  if (t instanceof Error) {
    return t.name;
  }
  return typeof t;
}
export { n };
function a(t, e) {
  s.Ve[t](
    "[SubscriptionCancelRetention]",
    r._(
      {
        product: "dreamina",
        platform: "web",
      },
      e,
    ),
  );
}
export { a };
