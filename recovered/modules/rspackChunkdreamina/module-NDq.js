import { A as A_1 } from "./module-jRY.js";
const n =
  parseFloat(A_1["navigation-width"]) +
  parseFloat(A_1["navigation-padding-left"]);
const a =
  parseFloat(A_1["home-container-left-padding-width"]) +
  parseFloat(A_1["home-container-right-padding-width"]) +
  parseFloat(A_1["home-container-scrollbar-width"]);
const o = parseFloat(A_1["home-breakpoint-xxl"]) - a - n;
const s = parseFloat(A_1["home-breakpoint-xl"]) - a - n;
const l = parseFloat(A_1["home-breakpoint-lg"]) - a - n;
const c = parseFloat(A_1["home-breakpoint-md"]) - a - n;
const d = parseFloat(A_1["home-breakpoint-sm"]) - a - n;
const u = Math.max(0, parseFloat(A_1["home-breakpoint-xs"]) - a - n);
const m = parseFloat(A_1["inspiration-gap"]);
const p = parseFloat(A_1["inspiration-cols-xxl"]);
const h = parseFloat(A_1["inspiration-cols-xl"]);
const v = parseFloat(A_1["inspiration-cols-lg"]);
const g = parseFloat(A_1["inspiration-cols-md"]);
const f = parseFloat(A_1["inspiration-cols-sm"]);
const b = parseFloat(A_1["inspiration-cols-xs"]);
const y = parseFloat(A_1["short-video-gap"]);
const _ = parseFloat(A_1["short-video-cols-xxl"]);
const x = parseFloat(A_1["short-video-cols-xl"]);
const w = parseFloat(A_1["short-video-cols-lg"]);
const T = parseFloat(A_1["short-video-cols-md"]);
const k = parseFloat(A_1["short-video-cols-sm"]);
const R = parseFloat(A_1["short-video-cols-xs"]);
parseFloat(A_1["activity-gap"]);
parseFloat(A_1["activity-cols-xxl"]);
parseFloat(A_1["activity-cols-xl"]);
parseFloat(A_1["activity-cols-lg"]);
parseFloat(A_1["activity-cols-md"]);
parseFloat(A_1["activity-cols-sm"]);
parseFloat(A_1["activity-cols-xs"]);
const N = parseFloat(A_1["main-frame-2026-inspiration-three-column-max-width"]);
const A = parseFloat(A_1["main-frame-2026-inspiration-four-column-max-width"]);
const S = parseFloat(A_1["main-frame-2026-inspiration-five-column-max-width"]);
export var rh = {
  default: {
    gap: m,
    breakpoints: {
      xxl: {
        minWidth: o,
        columnCount: p,
      },
      xl: {
        minWidth: s,
        columnCount: h,
      },
      lg: {
        minWidth: l,
        columnCount: v,
      },
      md: {
        minWidth: c,
        columnCount: g,
      },
      sm: {
        minWidth: d,
        columnCount: f,
      },
      xs: {
        minWidth: u,
        columnCount: b,
      },
    },
  },
  search: {
    gap: m,
    breakpoints: {
      xxl: {
        minWidth: o,
        columnCount: p + 1,
      },
      xl: {
        minWidth: s,
        columnCount: h + 1,
      },
      lg: {
        minWidth: l,
        columnCount: v + 1,
      },
      md: {
        minWidth: c,
        columnCount: g + 1,
      },
      sm: {
        minWidth: d,
        columnCount: f + 1,
      },
      xs: {
        minWidth: u,
        columnCount: b + 1,
      },
    },
  },
};
export var Gw = {
  default: {
    gap: m,
    breakpoints: {
      xs: {
        minWidth: 0,
        columnCount: parseFloat(
          A_1["main-frame-2026-inspiration-three-column-count"],
        ),
      },
      sm: {
        minWidth: N,
        columnCount: parseFloat(
          A_1["main-frame-2026-inspiration-four-column-count"],
        ),
      },
      md: {
        minWidth: A,
        columnCount: parseFloat(
          A_1["main-frame-2026-inspiration-five-column-count"],
        ),
      },
      lg: {
        minWidth: S,
        columnCount: parseFloat(
          A_1["main-frame-2026-inspiration-six-column-count"],
        ),
      },
    },
  },
};
export var B7 = {
  default: {
    gap: y,
    breakpoints: {
      xxl: {
        minWidth: o,
        columnCount: _,
      },
      xl: {
        minWidth: s,
        columnCount: x,
      },
      lg: {
        minWidth: l,
        columnCount: w,
      },
      md: {
        minWidth: c,
        columnCount: T,
      },
      sm: {
        minWidth: d,
        columnCount: k,
      },
      xs: {
        minWidth: u,
        columnCount: R,
      },
    },
  },
  search: {
    gap: y,
    breakpoints: {
      xxl: {
        minWidth: o,
        columnCount: _ + 1,
      },
      xl: {
        minWidth: s,
        columnCount: x + 1,
      },
      lg: {
        minWidth: l,
        columnCount: w + 1,
      },
      md: {
        minWidth: c,
        columnCount: T + 1,
      },
      sm: {
        minWidth: d,
        columnCount: k + 1,
      },
      xs: {
        minWidth: u,
        columnCount: R + 1,
      },
    },
  },
};
