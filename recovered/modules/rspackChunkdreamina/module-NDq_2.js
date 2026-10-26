import r from "jRY";
const n =
  parseFloat(r.A["navigation-width"]) +
  parseFloat(r.A["navigation-padding-left"]);
const a =
  parseFloat(r.A["home-container-left-padding-width"]) +
  parseFloat(r.A["home-container-right-padding-width"]) +
  parseFloat(r.A["home-container-scrollbar-width"]);
const o = parseFloat(r.A["home-breakpoint-xxl"]) - a - n;
const l = parseFloat(r.A["home-breakpoint-xl"]) - a - n;
const s = parseFloat(r.A["home-breakpoint-lg"]) - a - n;
const u = parseFloat(r.A["home-breakpoint-md"]) - a - n;
const d = parseFloat(r.A["home-breakpoint-sm"]) - a - n;
const c = Math.max(0, parseFloat(r.A["home-breakpoint-xs"]) - a - n);
const m = parseFloat(r.A["inspiration-gap"]);
const p = parseFloat(r.A["inspiration-cols-xxl"]);
const v = parseFloat(r.A["inspiration-cols-xl"]);
const f = parseFloat(r.A["inspiration-cols-lg"]);
const g = parseFloat(r.A["inspiration-cols-md"]);
const h = parseFloat(r.A["inspiration-cols-sm"]);
const y = parseFloat(r.A["inspiration-cols-xs"]);
const _ = parseFloat(r.A["short-video-gap"]);
const b = parseFloat(r.A["short-video-cols-xxl"]);
const I = parseFloat(r.A["short-video-cols-xl"]);
const T = parseFloat(r.A["short-video-cols-lg"]);
const A = parseFloat(r.A["short-video-cols-md"]);
const S = parseFloat(r.A["short-video-cols-sm"]);
const C = parseFloat(r.A["short-video-cols-xs"]);
parseFloat(r.A["activity-gap"]);
parseFloat(r.A["activity-cols-xxl"]);
parseFloat(r.A["activity-cols-xl"]);
parseFloat(r.A["activity-cols-lg"]);
parseFloat(r.A["activity-cols-md"]);
parseFloat(r.A["activity-cols-sm"]);
parseFloat(r.A["activity-cols-xs"]);
const P = parseFloat(r.A["main-frame-2026-inspiration-three-column-max-width"]);
const k = parseFloat(r.A["main-frame-2026-inspiration-four-column-max-width"]);
const x = parseFloat(r.A["main-frame-2026-inspiration-five-column-max-width"]);
export var rh = {
  default: {
    gap: m,
    breakpoints: {
      xxl: {
        minWidth: o,
        columnCount: p,
      },
      xl: {
        minWidth: l,
        columnCount: v,
      },
      lg: {
        minWidth: s,
        columnCount: f,
      },
      md: {
        minWidth: u,
        columnCount: g,
      },
      sm: {
        minWidth: d,
        columnCount: h,
      },
      xs: {
        minWidth: c,
        columnCount: y,
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
        minWidth: l,
        columnCount: v + 1,
      },
      lg: {
        minWidth: s,
        columnCount: f + 1,
      },
      md: {
        minWidth: u,
        columnCount: g + 1,
      },
      sm: {
        minWidth: d,
        columnCount: h + 1,
      },
      xs: {
        minWidth: c,
        columnCount: y + 1,
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
          r.A["main-frame-2026-inspiration-three-column-count"],
        ),
      },
      sm: {
        minWidth: P,
        columnCount: parseFloat(
          r.A["main-frame-2026-inspiration-four-column-count"],
        ),
      },
      md: {
        minWidth: k,
        columnCount: parseFloat(
          r.A["main-frame-2026-inspiration-five-column-count"],
        ),
      },
      lg: {
        minWidth: x,
        columnCount: parseFloat(
          r.A["main-frame-2026-inspiration-six-column-count"],
        ),
      },
    },
  },
};
export var B7 = {
  default: {
    gap: _,
    breakpoints: {
      xxl: {
        minWidth: o,
        columnCount: b,
      },
      xl: {
        minWidth: l,
        columnCount: I,
      },
      lg: {
        minWidth: s,
        columnCount: T,
      },
      md: {
        minWidth: u,
        columnCount: A,
      },
      sm: {
        minWidth: d,
        columnCount: S,
      },
      xs: {
        minWidth: c,
        columnCount: C,
      },
    },
  },
  search: {
    gap: _,
    breakpoints: {
      xxl: {
        minWidth: o,
        columnCount: b + 1,
      },
      xl: {
        minWidth: l,
        columnCount: I + 1,
      },
      lg: {
        minWidth: s,
        columnCount: T + 1,
      },
      md: {
        minWidth: u,
        columnCount: A + 1,
      },
      sm: {
        minWidth: d,
        columnCount: S + 1,
      },
      xs: {
        minWidth: c,
        columnCount: C + 1,
      },
    },
  },
};
