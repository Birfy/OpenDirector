const r = [
  "agentic",
  "image",
  "video",
  "music",
  "audio",
  "digitalHuman",
  "actionCopy",
];
const n = [
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
    return n;
  }
  return r;
}
export function WW(e, t) {
  return !e || t === "agentic";
}
export var e = ["agentic", "image", "video"];
export function X8(e) {
  if (e === "v0" || e === "v1" || e === "v2" || e === "v3" || e === "v4") {
    return e;
  }
}
export function rQ(variant, t, i, r) {
  let n;
  const types = TN(variant).filter((e) => t.includes(e));
  const s = i === "image" || i === "video" ? i : undefined;
  const c = types.find((e) => e === r);
  const l =
    (n = s != null ? s : c) != null
      ? n
      : {
          v0: "agentic",
          v1: "agentic",
          v2: "image",
          v3: "image",
          v4: "video",
        }[variant];
  const initialType = types.includes(l) ? l : types[0];
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
