import r from "NY";
import n from "oa";
import a from "K8";
import { o } from "./module-i7_2.js";
import { T } from "./module-Ag.js";
import * as l from "./module-EHr.js";
import { Mi } from "./module-xH6.js";
function c(e, t) {
  const { width, height } = e;
  const { maxRate, maxWidth, minWidth, maxHeight, minHeight, maxTotalPixels } =
    t;
  if (maxWidth && width > maxWidth) {
    return a.xz(Mi.Width, "width is too large");
  }
  if (minWidth && width < minWidth) {
    return a.xz(Mi.Width, "width is too small");
  }
  if (maxHeight && height > maxHeight) {
    return a.xz(Mi.Height, "height is too large");
  }
  if (minHeight && height < minHeight) {
    return a.xz(Mi.Height, "height is too small");
  }
  const h = width / height;
  if (maxRate && (h < 1 / maxRate || h > maxRate)) {
    return a.xz(Mi.Ratio, "image rate is not valid");
  }
  if (maxTotalPixels && width * height > maxTotalPixels) {
    return a.xz(Mi.TotalPixels, "total pixels are too large");
  }
  return a.nj();
}
export function m_(e, t) {
  return r._(function* () {
    const { acceptedFileTypes, maxFileSize } = t;
    if (acceptedFileTypes && !o(e, acceptedFileTypes)) {
      return a.xz(Mi.Type, "image type is not valid");
    }
    if (maxFileSize && e.size > maxFileSize) {
      return a.xz(Mi.Size, "image size is too large");
    }
    try {
      const n = yield T(e);
      if (!n) {
        return a.xz(Mi.Unknown, "image size is not valid");
      }
      return c(n, t);
    } catch (error) {
      return a.xz(Mi.Unknown, "image size is not valid", error);
    }
  })();
}
export function Z$(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { validateDimensions = true } = t;
  return m_(
    e,
    n._(
      {
        acceptedFileTypes: l.j,
        maxFileSize: l.ho,
        maxRate: l.an,
      },
      validateDimensions
        ? {
            maxWidth: l._0,
            maxHeight: l.rK,
            maxTotalPixels: l.kE,
          }
        : undefined,
    ),
  );
}
export function Gp(e) {
  return c(e, {
    maxRate: l.an,
    maxWidth: l._0,
    maxHeight: l.rK,
    maxTotalPixels: l.kE,
  });
}
