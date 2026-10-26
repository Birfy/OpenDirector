export function t(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "layerId" in e &&
    "projectId" in e &&
    "version" in e &&
    "customInfo" in e
  );
}
