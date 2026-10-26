import { Buffer } from "./module-b58.js";
export default function (Z, Q, X) {
  if (Buffer.isBuffer(Z)) {
    return Z;
  }
  if (typeof Z === "string") {
    return Buffer.from(Z, Q);
  }
  if (ArrayBuffer.isView(Z)) {
    return Buffer.from(Z.buffer);
  }
  throw TypeError(
    X + " must be a string, a Buffer, a typed array or a DataView",
  );
}
