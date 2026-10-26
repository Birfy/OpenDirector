import { b } from "./module-SWj.js";
function r(t, e, i) {
  let split;
  const { columnWidth, gapWidth } = e;
  const col = ((t) => {
    let e = Infinity;
    let i = -1;
    for (let a = 0; a < t.length; a++) {
      if (t[a] < e) {
        e = t[a];
        i = a;
      }
    }
    return i;
  })(i);
  if (col === -1) {
    throw Error("columnHeightList is empty");
  }
  const s = i[col];
  const u = Math.floor(columnWidth * (t.shape.height / t.shape.width));
  const x = col * (columnWidth + gapWidth);
  const d = s + (s === 0 ? 0 : gapWidth);
  const h = t.shape.suffix || 0;
  i[col] = Number.parseFloat((d + u + h).toFixed(0));
  if (t.shape.split) {
    split = b(columnWidth, u, t.shape.split);
  }
  return {
    w: columnWidth,
    h: u,
    x,
    y: d,
    s: h,
    col,
    split,
  };
}
function n(t, e) {
  const endIndex =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (e.columnCount && e.columnWidth) {
    const { columnCount } = e;
    const n = Array(columnCount).fill(0);
    let startIndex = ((t, e, i) => {
      if ((r = t[0]) == null || (a = r.shape) == null || !a.float) {
        return 0;
      }
      var a;
      var r;
      const n = ((t, e, i) => {
        const { columnWidth, gapWidth } = e;
        const n = i[0];
        const w = Math.floor(
          columnWidth * t.shape.colSpan + gapWidth * (t.shape.colSpan - 1),
        );
        const l = Math.floor(w * (t.shape.height / t.shape.width));
        const s = n + (n === 0 ? 0 : gapWidth);
        const u = t.shape.suffix || 0;
        for (let c = 0; c < t.shape.colSpan; ++c) {
          i[0 + c] = Number.parseFloat((s + l + u).toFixed(0));
        }
        return {
          w,
          h: l,
          x: 0 * (columnWidth + gapWidth),
          y: s,
          s: u,
          col: 0,
          float: true,
        };
      })(
        {
          shape: t[0].shape,
        },
        e,
        i,
      );
      if (t[0].layout) {
        Object.assign(t[0].layout, n, {
          index: 0,
        });
      } else {
        t[0].layout = Object.assign(n, {
          index: 0,
        });
      }
      return 1;
    })(t, e, n);
    if (endIndex > 0) {
      ((t, e, i, a) => {
        const { startIndex = 0, endIndex = 0 } = a;
        if (endIndex !== 0) {
          const { columnCount } = e;
          const l = Array(columnCount).fill(false);
          let s = 0;
          for (let u = endIndex - 1; u >= startIndex; u--) {
            const c = t[u];
            if (s === columnCount) {
              break;
            }
            if (c.layout) {
              const { col } = c.layout;
              if (!l[col]) {
                const h = Number.parseFloat(
                  (c.layout.y + c.layout.h + c.layout.s).toFixed(0),
                );
                if (h > i[col]) {
                  i[col] = h;
                } else if (h < i[col]) {
                  l[col] = true;
                  ++s;
                }
              }
            }
          }
        }
      })(t, e, n, {
        startIndex,
        endIndex,
      });
      startIndex = endIndex;
    }
    for (let index = startIndex; index < t.length; ++index) {
      if (t[index].layout) {
        Object.assign(t[index].layout, r(t[index], e, n), {
          index,
        });
      } else {
        t[index].layout = Object.assign(r(t[index], e, n), {
          index,
        });
      }
    }
  }
}
export { n as r };
