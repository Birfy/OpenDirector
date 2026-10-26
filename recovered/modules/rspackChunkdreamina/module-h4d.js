import i from "bT";
import n from "wF";
import a from "hag";
function o() {}
function useC() {
  const e = n.h(a.F);
  const t = i.useMemo(() => {
    var t;
    t = e.getSnapshot();
    return {
      getSnapshot: () => t,
      subscribe: (r) => {
        var i;
        var n;
        var a = () => {
          var i;
          var n;
          var a;
          var o = e.getSnapshot();
          n = (i = t).userProfile;
          a = o.userProfile;
          if (
            i.hasLogin !== o.hasLogin ||
            i.userId !== o.userId ||
            i.uniqueId !== o.uniqueId ||
            !!n != !!a ||
            (n == null ? undefined : n.uid) !==
              (a == null ? undefined : a.uid) ||
            (n == null ? undefined : n.name) !==
              (a == null ? undefined : a.name) ||
            (n == null ? undefined : n.avatar) !==
              (a == null ? undefined : a.avatar) ||
            (n == null ? undefined : n.webId) !==
              (a == null ? undefined : a.webId) ||
            (n == null ? undefined : n.region) !==
              (a == null ? undefined : a.region) ||
            (n == null ? undefined : n.createTime) !==
              (a == null ? undefined : a.createTime)
          ) {
            t = o;
            r();
          }
        };
        var c =
          (i = (n = e.subscribe) == null ? undefined : n.call(e, a)) != null
            ? i
            : o;
        a();
        return c;
      },
    };
  }, [e]);
  return i.useSyncExternalStore(t.subscribe, t.getSnapshot, t.getSnapshot);
}
export { useC as o };
