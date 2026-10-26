import $ from "./module-X_13.js";
import tt from "./module-lN_12.js";
import te from "./module-r9_12.js";
import tr from "./module-N_12.js";
const tn = tt("iterator");
export default !$(function () {
  const J = new URL("b?a=1&b=2&c=3", "http://a");
  const J_searchParams = J.searchParams;
  const Q = new URLSearchParams("a=1&a=2&b=3");
  let $ = "";
  J.pathname = "c%20d";
  J_searchParams.forEach((J, Q) => {
    J_searchParams.delete("b");
    $ += Q + J;
  });
  Q.delete("a", 2);
  Q.delete("b", undefined);
  return (
    (tr &&
      (!J.toJSON ||
        !Q.has("a", 1) ||
        Q.has("a", 2) ||
        !Q.has("a", undefined) ||
        Q.has("b"))) ||
    (!J_searchParams.size && (tr || !te)) ||
    !J_searchParams.sort ||
    J.href !== "http://a/c%20d?a=1&c=3" ||
    J_searchParams.get("c") !== "3" ||
    String(new URLSearchParams("?a=1")) !== "a=1" ||
    !J_searchParams[tn] ||
    new URL("https://a@b").username !== "a" ||
    new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" ||
    new URL("http://тест").host !== "xn--e1aybc" ||
    new URL("http://a#б").hash !== "#%D0%B1" ||
    $ !== "a1c3" ||
    new URL("http://x", undefined).host !== "x"
  );
});
