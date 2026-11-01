import t from "O28";
import n from "K8";
const i = new WeakMap();
export function c(e) {
  const { isTeamMode, workspaceService } = e;
  const { selectedWorkspaceId } = workspaceService.data;
  const o = selectedWorkspaceId !== undefined && selectedWorkspaceId !== t.A;
  if (!isTeamMode || o) {
    return Promise.resolve(n.nj());
  }
  const l = i.get(workspaceService);
  if (l) {
    return l;
  }
  const s = workspaceService
    .createWorkspace()
    .then((e) => {
      if (e.ok) {
        return n.nj();
      }
      return e;
    })
    .finally(() => {
      i.delete(workspaceService);
    });
  i.set(workspaceService, s);
  return s;
}
