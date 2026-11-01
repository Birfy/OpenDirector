export function Ve() {
  let e = [];
  return {
    tap: (n) => {
      e.push(n);
    },
    call: async (...n) => {
      let t;
      let r = false;
      let l = (e) => {
        r = true;
        t = e;
      };
      for (let t of e) {
        if (r) {
          break;
        }
        let e = await t(...n, l);
        if (e !== undefined) {
          n[0] = e;
        }
      }
      if (r) {
        return t;
      }
      return n[0] || [];
    },
  };
}
export function Lt() {
  let e = [];
  return {
    tap: (n) => {
      e.push(n);
    },
    call: (...n) => {
      for (let t of e) {
        let e = t(...n);
        if (e !== undefined) {
          n[0] = e;
        }
      }
      return n[0];
    },
  };
}
export function po() {
  let e = [];
  return {
    tap: (n) => {
      e.push(n);
    },
    call: (...n) => {
      let t = [];
      for (let r of e) {
        let e = r(...n);
        if (e !== undefined) {
          t.push(e);
        }
      }
      return t;
    },
  };
}
