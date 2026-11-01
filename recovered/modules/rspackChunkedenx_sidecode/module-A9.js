let t;
let r;
t = (t) => {
  var t_nodeName = t.nodeName;
  if (t.nodeType === 1) {
    return t_nodeName.toLowerCase();
  }
  return t_nodeName.toUpperCase().replace(/^#/, "");
};
if ((r = document.getElementById("root"))) {
  r.addEventListener("click", function (r) {
    if (window.__ssr_click_count) {
      ++window.__ssr_click_count;
    } else {
      window.__ssr_click_count = 1;
    }
    const e = ((t) => {
      if (window.location.pathname.includes("work-detail")) {
        return "detail";
      }
      if (!t) {
        return "unknown";
      }
      if (t.includes("cards")) {
        return "generation";
      }
      if (t.includes("content")) {
        return "feeds-card";
      }
      if (t.includes("dreamina-side-menu-container-ssr")) {
        return "side-menu";
      } else if (t.includes("mweb-titlebar-logo-container")) {
        return "title-bar";
      } else {
        return "unknown";
      }
    })(
      ((r) => {
        var e = "";
        try {
          while (r && r.nodeType !== 9) {
            var n = r;
            var i = n.id
              ? "#".concat(n.id)
              : t(n) +
                (n.classList &&
                n.classList.value &&
                n.classList.value.trim() &&
                n.classList.value.trim().length
                  ? ".".concat(n.classList.value.trim().replace(/\s+/g, "."))
                  : "");
            if (e.length + i.length > 999) {
              return e || i;
            }
            e = e ? "".concat(i, ">").concat(e) : i;
            if (n.id) {
              break;
            }
            r = n.parentNode;
          }
        } catch (t) {}
        return e;
      })(r.target),
    );
    if (window.__ssr_click_area) {
      window.__ssr_click_area[e] = true;
    } else {
      window.__ssr_click_area = {
        [e]: true,
      };
    }
  });
}
