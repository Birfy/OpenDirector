if (typeof window !== "undefined" && window.__userInfoStringify) {
  try {
    const t = JSON.parse(window.__userInfoStringify);
    if (t.errmsg === "success") {
      window.__userInfo = t.data;
    } else {
      window.__userInfo = null;
    }
  } catch (error) {
    console.error(error);
    window.__userInfo = null;
  }
}
