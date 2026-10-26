import n from "./module-VV_4.js";
import o from "./module-Nt_3.js";
import i from "./module-F.js";
import a from "./module-K.js";
const s = o("iterator");
export default !n(function () {
  const e = new URL("b?a=1&b=2&c=3", "http://a");
  const e_searchParams = e.searchParams;
  const r = new URLSearchParams("a=1&a=2&b=3");
  let n = "";
  e.pathname = "c%20d";
  e_searchParams.forEach((e, r) => {
    e_searchParams.delete("b");
    n += r + e;
  });
  r.delete("a", 2);
  r.delete("b", undefined);
  return (
    (a &&
      (!e.toJSON ||
        !r.has("a", 1) ||
        r.has("a", 2) ||
        !r.has("a", undefined) ||
        r.has("b"))) ||
    (!e_searchParams.size && (a || !i)) ||
    !e_searchParams.sort ||
    e.href !== "http://a/c%20d?a=1&c=3" ||
    e_searchParams.get("c") !== "3" ||
    String(new URLSearchParams("?a=1")) !== "a=1" ||
    !e_searchParams[s] ||
    new URL("https://a@b").username !== "a" ||
    new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" ||
    new URL("http://тест").host !== "xn--e1aybc" ||
    new URL("http://a#б").hash !== "#%D0%B1" ||
    n !== "a1c3" ||
    new URL("http://x", undefined).host !== "x"
  );
});
