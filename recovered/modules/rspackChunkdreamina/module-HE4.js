export const A = (e) => {
  let t = {};
  e.map((e) => {
    for (let [a, o] of Object.entries(e)) {
      if (Array.isArray(o)) {
        if (a in t) {
          var r;
          if ((r = t[a]) != null) {
            r.push(...o);
          }
        } else {
          Object.assign(t, {
            [a]: o,
          });
        }
      }
    }
  });
  return t;
};
