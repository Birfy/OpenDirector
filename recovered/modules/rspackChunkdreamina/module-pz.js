import o from "Rd";
export const DAUtils = class e {
  static randomUUIDString() {
    return "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
      let t = (16 * Math.random()) | 0;
      return (e === "x" ? t : (3 & t) | 8).toString(16);
    });
  }
  static compareSemVersion(e, t) {
    let i = e.split(".");
    let r = t.split(".");
    for (let e = 0; e < Math.max(i.length, r.length); e++) {
      let t = o.Int.parse(i[e]);
      let a = o.Int.parse(r[e]);
      if (t != undefined && a != undefined && t > a) {
        return 1;
      }
      if (t != undefined && a != undefined && t < a) {
        return -1;
      }
    }
    return 0;
  }
  static findChildNodes(t, i) {
    if (i === undefined) {
      return;
    }
    let o = i.childNodes();
    for (let i = 0; i < o.length; i++) {
      let r = o[i];
      if (t(r) === true) {
        return r;
      }
      let a = e.findChildNodes(t, r);
      if (a != undefined) {
        return a;
      }
    }
  }
};
