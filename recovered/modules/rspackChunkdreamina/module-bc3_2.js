import i from "NY";
import r from "oa";
import a from "K8";
import o from "i7";
import l from "Ag";
import * as u from "./module-EHr_2.js";
import { Mi } from "./module-xH6_2.js";
function d(e, t) {
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
  const m = width / height;
  if (maxRate && (m < 1 / maxRate || m > maxRate)) {
    return a.xz(Mi.Ratio, "image rate is not valid");
  }
  if (maxTotalPixels && width * height > maxTotalPixels) {
    return a.xz(Mi.TotalPixels, "total pixels are too large");
  }
  return a.nj();
}
export function m_(e, t) {
  return i._(function* () {
    const { acceptedFileTypes, maxFileSize } = t;
    if (acceptedFileTypes && !o.o(e, acceptedFileTypes)) {
      return a.xz(Mi.Type, "image type is not valid");
    }
    if (maxFileSize && e.size > maxFileSize) {
      return a.xz(Mi.Size, "image size is too large");
    }
    try {
      const r = yield l.T(e);
      if (!r) {
        return a.xz(Mi.Unknown, "image size is not valid");
      }
      return d(r, t);
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
    r._(
      {
        acceptedFileTypes: u.j,
        maxFileSize: u.ho,
        maxRate: u.an,
      },
      validateDimensions
        ? {
            maxWidth: u._0,
            maxHeight: u.rK,
            maxTotalPixels: u.kE,
          }
        : undefined,
    ),
  );
}
export function Gp(e) {
  return d(e, {
    maxRate: u.an,
    maxWidth: u._0,
    maxHeight: u.rK,
    maxTotalPixels: u.kE,
  });
}
