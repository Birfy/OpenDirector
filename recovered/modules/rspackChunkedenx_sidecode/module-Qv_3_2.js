import { Buffer } from "./module-s6_2_2.js";
export default function (J, Z, Q) {
  if (Buffer.isBuffer(J)) {
    return J;
  }
  if (typeof J === "string") {
    return Buffer.from(J, Z);
  }
  if (ArrayBuffer.isView(J)) {
    return Buffer.from(J.buffer);
  }
  throw TypeError(
    Q + " must be a string, a Buffer, a typed array or a DataView",
  );
}
