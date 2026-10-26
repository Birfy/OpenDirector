import n from "./module-X_6.js";
import i from "./module-w_6.js";
export default !n(function () {
  const t = Error("a");
  return (
    !("stack" in t) ||
    (Object.defineProperty(t, "stack", i(1, 7)), t.stack !== 7)
  );
});
