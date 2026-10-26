import n from "./module-X_16.js";
import o from "./module-lN_15.js";
import i from "./module-r9_15.js";
import a from "./module-N_15.js";
const s = o("iterator");
export default !n(function () {
  const r = new URL("b?a=1&b=2&c=3", "http://a");
  const r_searchParams = r.searchParams;
  const e = new URLSearchParams("a=1&a=2&b=3");
  let n = "";
  r.pathname = "c%20d";
  r_searchParams.forEach((r, e) => {
    r_searchParams.delete("b");
    n += e + r;
  });
  e.delete("a", 2);
  e.delete("b", undefined);
  return (
    (a &&
      (!r.toJSON ||
        !e.has("a", 1) ||
        e.has("a", 2) ||
        !e.has("a", undefined) ||
        e.has("b"))) ||
    (!r_searchParams.size && (a || !i)) ||
    !r_searchParams.sort ||
    r.href !== "http://a/c%20d?a=1&c=3" ||
    r_searchParams.get("c") !== "3" ||
    String(new URLSearchParams("?a=1")) !== "a=1" ||
    !r_searchParams[s] ||
    new URL("https://a@b").username !== "a" ||
    new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" ||
    new URL("http://тест").host !== "xn--e1aybc" ||
    new URL("http://a#б").hash !== "#%D0%B1" ||
    n !== "a1c3" ||
    new URL("http://x", undefined).host !== "x"
  );
});
