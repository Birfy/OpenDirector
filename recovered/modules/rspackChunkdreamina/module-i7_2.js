import { Q } from "./module-iOe_2.js";
import { Y } from "./module-yZo_2.js";
export function o(e, t) {
  if (e.type && Object.keys(t).some((t) => Y(e.type, t))) {
    return true;
  }
  const i = Q(e.name);
  return (
    !!i &&
    Object.values(t).some((e) =>
      e.some((e) => e.toLowerCase() === ".".concat(i)),
    )
  );
}
