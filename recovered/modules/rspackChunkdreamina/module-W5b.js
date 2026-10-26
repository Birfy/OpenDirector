import er from "psp";
import en from "qP";
import { Buffer } from "./module-b58.js";
const $ =
  /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m;
const ee = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m;
const et =
  /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m;
export default function (Z, Q) {
  let X;
  const ea = Z.toString();
  const eo = ea.match($);
  if (eo) {
    const es = "aes" + eo[1];
    const ef = Buffer.from(eo[2], "hex");
    const eu = Buffer.from(eo[3].replace(/[\r\n]/g, ""), "base64");
    const ec = er(Q, ef.slice(0, 8), parseInt(eo[1], 10)).key;
    const eh = [];
    const el = en.createDecipheriv(es, ec, ef);
    eh.push(el.update(eu));
    eh.push(el.final());
    X = Buffer.concat(eh);
  } else {
    const ed = ea.match(et);
    X = Buffer.from(ed[2].replace(/[\r\n]/g, ""), "base64");
  }
  return {
    tag: ea.match(ee)[1],
    data: X,
  };
}
