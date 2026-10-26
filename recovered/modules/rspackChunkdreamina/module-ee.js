import n from "./module-VV_4.js";
import o from "./module-M.js";
export default !n(function () {
  const e = Error("a");
  return (
    !("stack" in e) ||
    (Object.defineProperty(e, "stack", o(1, 7)), e.stack !== 7)
  );
});
