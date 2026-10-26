class i {
  static updateUserId() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    i._userId = e;
  }
  static generateKey(e) {
    return `mweb_`.concat(i._userId, "_").concat(e);
  }
  static getItem(e) {
    return localStorage.getItem(i.generateKey(e));
  }
  static setItem(e, t) {
    return localStorage.setItem(i.generateKey(e), t);
  }
  static getJson(e) {
    if (!(typeof window === "undefined") && navigator.cookieEnabled) {
      let t;
      const r = typeof localStorage !== "undefined" && i.getItem(e);
      if (r) {
        try {
          t = JSON.parse(r);
        } catch (e) {}
        return t;
      }
    }
  }
  static setJson(e, t) {
    if (typeof window !== "undefined" && navigator.cookieEnabled) {
      try {
        i.setItem(e, JSON.stringify(t));
      } catch (e) {}
    }
  }
}
export { i as r };
i._userId = "";
