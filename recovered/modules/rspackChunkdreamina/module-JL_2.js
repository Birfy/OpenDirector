export function fU() {
  return {
    list: [],
    nextCursor: "",
    hasMore: false,
  };
}
export function xC(e, t) {
  let r = e == null ? undefined : e.memberCnt;
  let a = e == null ? undefined : e.memberLimit;
  let o = typeof r === "number" && typeof a === "number";
  let i = {
    isFull: t.isSeatFull,
  };
  if (typeof r === "number") {
    i.memberCount = r;
  }
  if (typeof a === "number") {
    i.memberLimit = a;
  }
  if (o) {
    i.remaining = Math.max(a - r, 0);
  }
  return i;
}
export function OY(e, t, r, a) {
  let o;
  let i;
  let n;
  if (!r) {
    let e = {
      list: t.list,
      nextCursor: (o = t.nextCursor) != null ? o : "",
      hasMore: t.hasMore,
    };
    if (typeof t.total === "number") {
      e.total = t.total;
    }
    return e;
  }
  let c = new Set(e.list.map(a).filter(Boolean));
  let l = t.list.filter((e) => {
    let t = a(e);
    return !t || !c.has(t);
  });
  n = typeof t.total === "number" ? t.total : e.total;
  let m = {
    list: [...e.list, ...l],
    nextCursor: (i = t.nextCursor) != null ? i : "",
    hasMore: t.hasMore,
  };
  if (typeof n === "number") {
    m.total = n;
  }
  return m;
}
