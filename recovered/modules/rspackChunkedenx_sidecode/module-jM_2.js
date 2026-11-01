try {
  if (
    window.location &&
    window.location.pathname.includes("data-subject-request")
  ) {
    if (document && document.body) {
      document.body.setAttribute("lv-theme", "light");
    }
    if (document && document.body) {
      document.body.setAttribute("lv-theme-version", "");
    }
    if (document && document.body) {
      document.body.setAttribute("data-lv-theme-force", "light");
    }
  }
} catch (t) {}
