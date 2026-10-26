export let bz = (() => {
  let e;
  if (typeof crypto === "object" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID.bind(crypto);
  }
  e =
    typeof crypto === "object" && typeof crypto.getRandomValues === "function"
      ? crypto.getRandomValues.bind(crypto)
      : function (e) {
          for (let t = 0; t < e.length; t++) {
            e[t] = Math.floor(256 * Math.random());
          }
          return e;
        };
  let t = new Uint8Array(16);
  let r = [];
  for (let e = 0; e < 256; e++) {
    r.push(e.toString(16).padStart(2, "0"));
  }
  return () => {
    e(t);
    t[6] = (15 & t[6]) | 64;
    t[8] = (63 & t[8]) | 128;
    let a = 0;
    let o = "";
    o += r[t[a++]];
    o += r[t[a++]];
    o += r[t[a++]];
    o += r[t[a++]];
    o += "-";
    o += r[t[a++]];
    o += r[t[a++]];
    o += "-";
    o += r[t[a++]];
    o += r[t[a++]];
    o += "-";
    o += r[t[a++]];
    o += r[t[a++]];
    o += "-";
    o += r[t[a++]];
    o += r[t[a++]];
    o += r[t[a++]];
    o += r[t[a++]];
    o += r[t[a++]];
    return (o += r[t[a++]]);
  };
})();
export let uR = require.j == "wl4" ? bz : null;
