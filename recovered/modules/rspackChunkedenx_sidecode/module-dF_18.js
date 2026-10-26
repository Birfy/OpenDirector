import n from "./module-X_18.js";
import o from "./module-w_18.js";
export default !n(function () {
  const r = Error("a");
  return (
    !("stack" in r) ||
    (Object.defineProperty(r, "stack", o(1, 7)), r.stack !== 7)
  );
});
