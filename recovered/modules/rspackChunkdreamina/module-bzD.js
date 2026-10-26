import r from "xi";
export var b = {
  getItem(e) {
    return localStorage.getItem(this.generateKey(e));
  },
  setItem(e, t) {
    return localStorage.setItem(this.generateKey(e), t);
  },
  getJson(e) {
    if (!(typeof window === "undefined") && navigator.cookieEnabled) {
      let t;
      const a = typeof localStorage !== "undefined" && this.getItem(e);
      if (a) {
        try {
          t = JSON.parse(a);
        } catch (error) {
          r.V.error("getJson", error);
        }
        return t;
      }
    }
  },
  setJson(e, t) {
    if (typeof window !== "undefined" && navigator.cookieEnabled) {
      try {
        this.setItem(e, JSON.stringify(t));
      } catch (error) {
        r.V.error("setJson", error);
      }
    }
  },
  generateKey: (e) => `dreamina__`.concat(e),
};
