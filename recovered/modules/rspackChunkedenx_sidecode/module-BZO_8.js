import n from "./module-X_9.js";
import i from "./module-lN_8.js";
import o from "./module-r9_8.js";
import s from "./module-N_8.js";
const a = i("iterator");
export default !n(function () {
  const t = new URL("b?a=1&b=2&c=3", "http://a");
  const t_searchParams = t.searchParams;
  const e = new URLSearchParams("a=1&a=2&b=3");
  let n = "";
  t.pathname = "c%20d";
  t_searchParams.forEach((t, e) => {
    t_searchParams.delete("b");
    n += e + t;
  });
  e.delete("a", 2);
  e.delete("b", undefined);
  return (
    (s &&
      (!t.toJSON ||
        !e.has("a", 1) ||
        e.has("a", 2) ||
        !e.has("a", undefined) ||
        e.has("b"))) ||
    (!t_searchParams.size && (s || !o)) ||
    !t_searchParams.sort ||
    t.href !== "http://a/c%20d?a=1&c=3" ||
    t_searchParams.get("c") !== "3" ||
    String(new URLSearchParams("?a=1")) !== "a=1" ||
    !t_searchParams[a] ||
    new URL("https://a@b").username !== "a" ||
    new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" ||
    new URL("http://тест").host !== "xn--e1aybc" ||
    new URL("http://a#б").hash !== "#%D0%B1" ||
    n !== "a1c3" ||
    new URL("http://x", undefined).host !== "x"
  );
});
