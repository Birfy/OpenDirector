export function L() {
  const feature =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "lossy";
  const t = new Image();
  const n = new Promise((resolve) => {
    t.onload = function () {
      resolve({
        feature,
        result: t.width > 0 && t.height > 0,
      });
    };
    t.onerror = function () {
      resolve({
        feature,
        result: false,
      });
    };
  });
  t.src = "data:image/webp;base64,".concat(
    {
      lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
      lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
      alpha:
        "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
      animation:
        "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
    }[feature],
  );
  return n;
}
