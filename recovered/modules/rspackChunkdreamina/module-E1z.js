import { H } from "./module-ztd.js";
import { $ } from "./module-qv2.js";
import { w as w_1 } from "./module-twp_2.js";
import { r as r_1 } from "./module-zN.js";
import { g as g_1 } from "./module-C66.js";
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
  const { x: x_1, y: y_1 } = w_1(width, height);
  const b = r_1(moveX, x_1);
  const f = r_1(moveY, y_1);
  const { width: width_2, height: height_2 } = H(
    currentSize,
    imageSize,
    imageScale,
  );
  const { width: width_3, height: height_3 } = $(
    imageRotate,
    width_2,
    height_2,
  );
  const { width: width_4, height: height_4 } = H(
    targetSize,
    imageSize,
    imageScale,
  );
  const { width: width_5, height: height_5 } = $(
    imageRotate,
    width_4,
    height_4,
  );
  let moveX_1 = g_1((moveX / width) * width_1, 2);
  if (!b && needHandleEdge) {
    if (moveX < 0) {
      const U = width_3 / 2 + moveX;
      moveX_1 = g_1(-width_5 / 2 + U, 2);
    } else {
      const k = width_3 / 2 - (moveX - width);
      moveX_1 = g_1(width_5 / 2 + width_1 - k, 2);
    }
  }
  let moveY_1 = g_1((moveY / height) * height_1, 2);
  if (!f && needHandleEdge) {
    if (moveY < 0) {
      const E = height_3 / 2 + moveY;
      moveY_1 = g_1(-height_5 / 2 + E, 2);
    } else {
      const S = height_3 / 2 - (moveY - height);
      moveY_1 = g_1(height_5 / 2 + height_1 - S, 2);
    }
  }
  return {
    moveX: moveX_1,
    moveY: moveY_1,
  };
}
