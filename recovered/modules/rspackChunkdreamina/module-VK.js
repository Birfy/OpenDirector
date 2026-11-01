import r from "NY";
import s from "K8";
import n from "vrE";
export function t(e) {
  return r._(function* () {
    if (!e.available) {
      yield new Promise((resolve, reject) => {
        var r = false;
        var o;
        var a = setTimeout(() => {
          if (!r) {
            r = true;
            if (o != null) {
              o.dispose();
            }
            reject(s.xz(-1, "resolve workspace timed out"));
          }
        }, 10000);
        o = n.J(e.onDidWorkspaceChange)(() => {
          if (!r) {
            r = true;
            clearTimeout(a);
            resolve();
          }
        });
      });
    }
    let t;
    const i = (t = e.workspaceList[0]) == null ? undefined : t.workspace_id;
    if (!i) {
      throw s.xz(-1, "workspace id is unavailable");
    }
    return i;
  })();
}
