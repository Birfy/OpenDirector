export var zE = {
  None: "",
  Standard: "standard",
  Artisan: "artisan",
  Maestro: "maestro",
  Ultra: "ultra",
};
const n = {
  [zE.None]: 0,
  [zE.Standard]: 1,
  [zE.Artisan]: 2,
  [zE.Maestro]: 3,
  [zE.Ultra]: 4,
};
zE.None;
zE.Standard;
zE.Artisan;
zE.Maestro;
zE.Ultra;
const s = new Set(Object.values(zE));
export function Y9(e) {
  const t = e != null ? e : zE.None;
  if (s.has(t)) {
    return t;
  }
  return zE.None;
}
export function ny(e) {
  let t;
  if ((t = n[Y9(e)]) != null) {
    return t;
  }
  return 0;
}
Object.values(n);
