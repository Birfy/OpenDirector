import a from "Hp";
import { g as g_1 } from "./module-Sjz.js";
function r(e, t) {
  if (isNaN(e)) {
    return t;
  }
  return e;
}
function i(e, imageSize, imageScale) {
  const { width, height } = e;
  const { width: width_1, height: height_1 } = imageSize;
  const { width: width_2, height: height_2 } = ((e) => {
    const { paintWidth, paintHeight, imageWidth, imageHeight, fitMode } = e;
    if (fitMode === a.j.CenterCrop) {
      return {
        scale: 1,
        width: Math.round(paintWidth),
        height: Math.round(paintHeight),
      };
    }
    const s = paintWidth / paintHeight;
    const c = imageWidth / imageHeight;
    if (c === s) {
      return {
        scale: paintWidth / imageWidth,
        width: Math.round(paintWidth),
        height: Math.round(paintHeight),
      };
    }
    if (c > s) {
      return {
        scale: paintWidth / imageWidth,
        width: Math.round(paintWidth),
        height: Math.round(paintWidth / c),
      };
    }
    return {
      scale: r(paintHeight / imageHeight, 1),
      width: Math.round(r(paintHeight * c, 0)),
      height: Math.round(r(paintHeight, 0)),
    };
  })({
    paintWidth: width,
    paintHeight: height,
    imageWidth: width_1,
    imageHeight: height_1,
  });
  return {
    width: width_2 * imageScale,
    height: height_2 * imageScale,
  };
}
function o(imageRotate, width, height) {
  const a =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  const r = (imageRotate / 180) * Math.PI;
  const i = width / Math.abs(a);
  const o = height / Math.abs(a);
  return {
    width: Math.abs(i * Math.cos(-r)) + Math.abs(o * Math.sin(-r)),
    height: Math.abs(i * Math.sin(-r)) + Math.abs(o * Math.cos(-r)),
  };
}
function l(e, t) {
  return e >= t.min && e <= t.max;
}
export function e(e) {
  const {
    currentMove,
    currentSize,
    targetSize,
    imageSize,
    imageScale,
    imageRotate,
    needHandleEdge = false,
  } = e;
  const { moveX, moveY } = currentMove;
  const { width, height } = currentSize;
  const { width: width_1, height: height_1 } = targetSize;
  const { x: x_1, y: y_1 } = {
    x: {
      min: 0,
      max: width,
    },
    y: {
      min: 0,
      max: height,
    },
  };
  const y = l(moveX, x_1);
  const x = l(moveY, y_1);
  const { width: width_2, height: height_2 } = i(
    currentSize,
    imageSize,
    imageScale,
  );
  const { width: width_3, height: height_3 } = o(
    imageRotate,
    width_2,
    height_2,
  );
  const { width: width_4, height: height_4 } = i(
    targetSize,
    imageSize,
    imageScale,
  );
  const { width: width_5, height: height_5 } = o(
    imageRotate,
    width_4,
    height_4,
  );
  let moveX_1 = g_1((moveX / width) * width_1, 2);
  if (!y && needHandleEdge) {
    if (moveX < 0) {
      const S = width_3 / 2 + moveX;
      moveX_1 = g_1(-width_5 / 2 + S, 2);
    } else {
      const F = width_3 / 2 - (moveX - width);
      moveX_1 = g_1(width_5 / 2 + width_1 - F, 2);
    }
  }
  let moveY_1 = g_1((moveY / height) * height_1, 2);
  if (!x && needHandleEdge) {
    if (moveY < 0) {
      const E = height_3 / 2 + moveY;
      moveY_1 = g_1(-height_5 / 2 + E, 2);
    } else {
      const I = height_3 / 2 - (moveY - height);
      moveY_1 = g_1(height_5 / 2 + height_1 - I, 2);
    }
  }
  return {
    moveX: moveX_1,
    moveY: moveY_1,
  };
}
