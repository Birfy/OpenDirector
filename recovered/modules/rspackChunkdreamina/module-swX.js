const n = [
  "agentic",
  "image",
  "video",
  "music",
  "audio",
  "digitalHuman",
  "actionCopy",
];
const t = [
  "agentic",
  "video",
  "image",
  "music",
  "audio",
  "digitalHuman",
  "actionCopy",
];
export function TN(e) {
  if (e === "v4") {
    return t;
  }
  return n;
}
export function WW(e, i) {
  return !e || i === "agentic";
}
export var e = ["agentic", "image", "video"];
export function X8(e) {
  if (e === "v0" || e === "v1" || e === "v2" || e === "v3" || e === "v4") {
    return e;
  }
}
export function rQ(variant, i, a, n) {
  let t;
  const types = TN(variant).filter((e) => i.includes(e));
  const s = a === "image" || a === "video" ? a : undefined;
  const l = types.find((e) => e === n);
  const c =
    (t = s != null ? s : l) != null
      ? t
      : {
          v0: "agentic",
          v1: "agentic",
          v2: "image",
          v3: "image",
          v4: "video",
        }[variant];
  const initialType = types.includes(c) ? c : types[0];
  if (initialType) {
    return {
      variant,
      modeTabs: variant !== "v0",
      types,
      initialType,
    };
  }
}
Object.defineProperty(exports, "sc", {
  enumerable: true,
  get: () => "dreamina_home_input_mode_tabs",
});
