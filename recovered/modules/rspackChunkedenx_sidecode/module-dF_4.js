import n from "./module-X_4.js";
import i from "./module-w_4.js";
export default !n(function () {
  const t = Error("a");
  return (
    !("stack" in t) ||
    (Object.defineProperty(t, "stack", i(1, 7)), t.stack !== 7)
  );
});
