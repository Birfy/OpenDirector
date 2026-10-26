export var t = {
  1: "1:1",
  2: "3:4",
  3: "16:9",
  4: "4:3",
  5: "9:16",
  6: "2:3",
  7: "3:2",
  8: "21:9",
  9: "4:5",
  10: "5:4",
  11: "1:2",
  12: "2:1",
  13: "9:21",
  14: "1:3",
  15: "3:1",
};
const r = ["1:1", "3:4", "16:9", "4:3", "9:16", "2:3", "3:2", "21:9"]
  .map((text) => {
    var [t, n] = text.split(":").map(Number);
    return {
      text,
      value: t / n,
    };
  })
  .sort((e, t) => t.value - e.value);
function i(e, t) {
  if (Number.isFinite(e) && Number.isFinite(t) && !(e <= 0) && !(t <= 0)) {
    let n;
    const a = e / t;
    const i =
      (n = r.find((e) => Math.abs(a - e.value) < 0.02)) == null
        ? undefined
        : n.text;
    return {
      text: i != null ? i : "".concat(e, ":").concat(t),
      value: a,
    };
  }
}
export { i };
