import n from "./module-X_10.js";
import o from "./module-w_10.js";
export default !n(function () {
  const t = Error("a");
  return (
    !("stack" in t) ||
    (Object.defineProperty(t, "stack", o(1, 7)), t.stack !== 7)
  );
});
