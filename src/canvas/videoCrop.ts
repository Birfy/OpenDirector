import type { Translate } from "../i18n/I18nProvider.tsx";
import { defaultTranslate } from "./assistantTranslate.ts";

export interface VideoCrop {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Recording accepts exact source pixels; invalid rectangles must not be silently encoded. */
export function validateVideoCrop(
  crop: VideoCrop,
  width: number,
  height: number,
  t: Translate = defaultTranslate,
): VideoCrop {
  if (
    ![width, height].every((value) => Number.isInteger(value) && value > 0) ||
    ![crop.x, crop.y, crop.width, crop.height].every(Number.isInteger) ||
    crop.x < 0 ||
    crop.y < 0 ||
    crop.width < 1 ||
    crop.height < 1 ||
    crop.x + crop.width > width ||
    crop.y + crop.height > height
  )
    throw new Error(t("editors.videoCrop.error.rect"));
  return { x: crop.x, y: crop.y, width: crop.width, height: crop.height };
}

/** UI gestures snap to source pixels and remain inside the decoded video. */
export function fitVideoCrop(
  crop: VideoCrop,
  width: number,
  height: number,
): VideoCrop {
  const w = Math.max(1, Math.min(width, Math.round(crop.width)));
  const h = Math.max(1, Math.min(height, Math.round(crop.height)));
  return {
    x: Math.max(0, Math.min(width - w, Math.round(crop.x))),
    y: Math.max(0, Math.min(height - h, Math.round(crop.y))),
    width: w,
    height: h,
  };
}

export function centeredVideoCrop(
  width: number,
  height: number,
  ratio: number,
  t: Translate = defaultTranslate,
): VideoCrop {
  validateVideoCrop({ x: 0, y: 0, width, height }, width, height, t);
  if (!Number.isFinite(ratio) || ratio <= 0)
    throw new Error(t("editors.videoCrop.error.ratio"));
  const cropWidth = Math.min(width, height * ratio);
  const cropHeight = cropWidth / ratio;
  return fitVideoCrop(
    {
      x: (width - cropWidth) / 2,
      y: (height - cropHeight) / 2,
      width: cropWidth,
      height: cropHeight,
    },
    width,
    height,
  );
}
