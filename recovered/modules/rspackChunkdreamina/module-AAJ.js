import a from "Dm";
export function Y(t, e) {
  if (e <= 0) {
    return 0;
  }
  const i = Object.values(t).sort((t, e) => t.minWidth - e.minWidth);
  if (!i.length) {
    a.Iv("empty breakpoint config");
  }
  if (
    i.some((t) => {
      var { maxWidthExclusive } = t;
      return maxWidthExclusive !== undefined;
    })
  ) {
    const r = i
      .slice()
      .reverse()
      .find((t) => {
        var { minWidth, maxWidthExclusive } = t;
        return (
          minWidth <= e &&
          (maxWidthExclusive === undefined || e < maxWidthExclusive)
        );
      });
    if (r) {
      return r.columnCount;
    }
  }
  let n = -1;
  for (let o = 0; o < i.length; ++o) {
    if (i[o].minWidth < e) {
      n = o;
    } else {
      break;
    }
  }
  if (n === -1) {
    a.Iv("no matched breakpoint config for width ".concat(e));
  }
  return i[n].columnCount;
}
