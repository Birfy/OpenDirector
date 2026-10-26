import i from "oa";
export function oU(e) {
  const { imageInfo, language, count = 8 } = e;
  return i._(
    {
      imageInfo,
      offset: 0,
      count,
      status: ["in_progress"],
    },
    language
      ? {
          language,
        }
      : {},
  );
}
Object.defineProperty(exports, "tv", {
  enumerable: true,
  get: () => 15,
});
Object.defineProperty(exports, "v4", {
  enumerable: true,
  get: () => 8,
});
