export function B() {
  for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) {
    t[r] = arguments[r];
  }
  const i = [];
  for (const s of t) {
    const a = s == null ? undefined : s.sceneOptions;
    if (a) {
      try {
        const n = JSON.parse(a);
        if (Array.isArray(n)) {
          i.push(...n);
        } else if (typeof n === "object" && n !== null) {
          i.push(n);
        }
      } catch (e) {
        continue;
      }
    }
  }
  if (i.length !== 0) {
    return JSON.stringify(i);
  }
}
