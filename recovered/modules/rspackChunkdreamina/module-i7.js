import { Q } from "./module-iOe.js";
import { Y } from "./module-yZo.js";
function o(e, t) {
  if (e.type && Object.keys(t).some((t) => Y(e.type, t))) {
    return true;
  }
  const n = Q(e.name);
  return (
    !!n &&
    Object.values(t).some((e) =>
      e.some((e) => e.toLowerCase() === ".".concat(n)),
    )
  );
}
export { o };
