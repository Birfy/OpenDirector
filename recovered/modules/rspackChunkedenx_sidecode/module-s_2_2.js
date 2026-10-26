import { a as a_1 } from "./module-l_2_5.js";
let n;
let o;
let i;
let a;
let s;
let c;
o = ((n = a_1.DOCUMENT.cdnPreConnectLink) == null ? undefined : n[0])
  ? a_1.DOCUMENT.cdnPreConnectLink[0].replace("https:", "")
  : "";
window.uetq = window.uetq || [];
i = function () {
  const t = {
    ti: "97154806",
    enableAutoSpaTracking: true,
    disableContainer: true,
  };
  t.q = window.uetq;
  window.uetq = new window.UET(t);
  window.uetq.push("pageLoad");
};
a = document.createElement("script");
a.src = "".concat(o, "/obj/image-lvweb-buz/common/scripts/bat-with-cors.js");
a.async = true;
s = function () {
  const a_readyState = a.readyState;
  if (
    !(a_readyState && a_readyState !== "loaded" && a_readyState !== "complete")
  ) {
    i();
    a.onload = null;
    a.onreadystatechange = null;
  }
};
a.onload = s;
a.onreadystatechange = s;
(c = document.getElementsByTagName("script")[0]).parentNode.insertBefore(a, c);
