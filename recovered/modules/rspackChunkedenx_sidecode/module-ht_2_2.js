import tr from "./module-YY_2_2.js";
import { createDecipheriv } from "./module-mL.js";
import { Buffer } from "./module-s6_2_2.js";
const $ =
  /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m;
const tt = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m;
const te =
  /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m;
export default function (J, Z) {
  let Q;
  const to = J.toString();
  const ta = to.match($);
  if (ta) {
    const ts = "aes" + ta[1];
    const tf = Buffer.from(ta[2], "hex");
    const tu = Buffer.from(ta[3].replace(/[\r\n]/g, ""), "base64");
    const tc = tr(Z, tf.slice(0, 8), parseInt(ta[1], 10)).key;
    const th = [];
    const td = createDecipheriv(ts, tc, tf);
    th.push(td.update(tu));
    th.push(td.final());
    Q = Buffer.concat(th);
  } else {
    const tl = to.match(te);
    Q = Buffer.from(tl[2].replace(/[\r\n]/g, ""), "base64");
  }
  return {
    tag: to.match(tt)[1],
    data: Q,
  };
}
