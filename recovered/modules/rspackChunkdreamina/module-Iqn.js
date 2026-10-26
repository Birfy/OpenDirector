import { A } from "./module-JK7.js";
function o(e) {
  const t = new Map();
  for (const i of e != null ? e : []) {
    if (typeof i.maxTotalCount === "number") {
      let r;
      let o;
      const n = [...((r = i.materialTypes) != null ? r : [])].sort().join(",");
      const a = t.get(n);
      t.set(n, {
        materialTypes:
          (o = a == null ? undefined : a.materialTypes) != null
            ? o
            : i.materialTypes,
        maxTotalCount: a
          ? Math.min(a.maxTotalCount, i.maxTotalCount)
          : i.maxTotalCount,
      });
    }
  }
  return [...t.values()];
}
function n(e, acceptedTypes) {
  let i;
  return (
    !(e.maxTotalCount <= 0) &&
    ((i = e.materialTypes) == null ||
      !i.length ||
      !acceptedTypes ||
      e.materialTypes.every((e) => acceptedTypes.includes(e)))
  );
}
export function N(e) {
  let t;
  const i =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { acceptedTypes } = i;
  if ((acceptedTypes == null ? undefined : acceptedTypes.length) !== 0) {
    const s = (
      (t = e == null ? undefined : e.anyOfCombinations) != null ? t : []
    )
      .map((e) => ({
        conditions: o(e.conditions).filter((e) => n(e, acceptedTypes)),
      }))
      .filter((e) => e.conditions.length > 0);
    if (s.length > 0) {
      return A(s);
    }
    const conditions = ((e) => {
      const t = e.filter((e) => {
        var t;
        return ((t = e.materialTypes) == null ? undefined : t.length) === 1;
      });
      const i = e.filter((e) => {
        var t;
        return (
          !((t = e.materialTypes) == null ? undefined : t.length) ||
          e.materialTypes.length > 1
        );
      });
      if (t.length === 0) {
        return i;
      }
      if (t.length === 1) {
        return t;
      }
      const r = t.reduce((acc, item) => acc + item.maxTotalCount, 0);
      const o = i
        .filter((e) => e.maxTotalCount < r)
        .sort((e, t) => {
          var i;
          var r;
          var o;
          var n;
          return (
            ((i = (o = t.materialTypes) == null ? undefined : o.length) != null
              ? i
              : 0) -
            ((r = (n = e.materialTypes) == null ? undefined : n.length) != null
              ? r
              : 0)
          );
        })
        .at(0);
      if (o) {
        return [o];
      }
      return t;
    })(
      o(e == null ? undefined : e.allOfConditions).filter((e) =>
        n(e, acceptedTypes),
      ),
    );
    if (conditions.length !== 0) {
      return A([
        {
          conditions,
        },
      ]);
    }
  }
}
