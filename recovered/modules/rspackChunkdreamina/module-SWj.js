import a from "SZS";
export function b(w, h, i) {
  switch (Math.min(i, a.Qy)) {
    case 1:
      return [
        {
          w,
          h,
          index: 0,
        },
      ];
    case 2:
      return [
        {
          w: w / 2,
          h,
          index: 0,
        },
        {
          w: w / 2,
          h,
          index: 1,
        },
      ];
    case 3:
      return [
        {
          w,
          h: (4 * h) / 7,
          index: 0,
        },
        {
          w: w / 2,
          h: (3 * h) / 7,
          index: 1,
        },
        {
          w: w / 2,
          h: (3 * h) / 7,
          index: 2,
        },
      ];
    case 4:
      return [
        {
          w,
          h: (2 * h) / 3,
          index: 0,
        },
        {
          w: w / 3,
          h: h / 3,
          index: 1,
        },
        {
          w: w / 3,
          h: h / 3,
          index: 2,
        },
        {
          w: w / 3,
          h: h / 3,
          index: 3,
        },
      ];
    case 5:
      return [
        {
          w,
          h: (2 * h) / 4,
          index: 0,
        },
        {
          w: w / 2,
          h: h / 4,
          index: 1,
        },
        {
          w: w / 2,
          h: h / 4,
          index: 2,
        },
        {
          w: w / 2,
          h: h / 4,
          index: 3,
        },
        {
          w: w / 2,
          h: h / 4,
          index: 4,
        },
      ];
    case 6:
      return [
        {
          w: (2 * w) / 3,
          h: (2 * h) / 3,
          index: 0,
        },
        {
          w: w / 3,
          h: h / 3,
          index: 1,
        },
        {
          w: w / 3,
          h: h / 3,
          index: 2,
        },
        {
          w: w / 3,
          h: h / 3,
          index: 3,
        },
        {
          w: w / 3,
          h: h / 3,
          index: 4,
        },
        {
          w: w / 3,
          h: h / 3,
          index: 5,
        },
      ];
    case 7:
      return [
        {
          w,
          h: (2 * h) / 4,
          index: 0,
        },
        {
          w: w / 3,
          h: h / 4,
          index: 1,
        },
        {
          w: w / 3,
          h: h / 4,
          index: 2,
        },
        {
          w: w / 3,
          h: h / 4,
          index: 3,
        },
        {
          w: w / 3,
          h: h / 4,
          index: 4,
        },
        {
          w: w / 3,
          h: h / 4,
          index: 5,
        },
        {
          w: w / 3,
          h: h / 4,
          index: 6,
        },
      ];
    default:
      return;
  }
}
