import n from "Ut";
export function j(e) {
  if (e) {
    const t = new n.DAEverPhoto();
    t.workspaceId = e.workspaceId;
    t.assetId = e.assetId;
    return t;
  }
}
export function W(e) {
  if (e) {
    return {
      workspaceId: e.workspaceId,
      assetId: e.assetId,
    };
  }
}
