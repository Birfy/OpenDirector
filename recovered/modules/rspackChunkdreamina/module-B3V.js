export function x(e) {
  if (!e.trim()) {
    throw Error("AssetId must be a non-empty string");
  }
  return e;
}
