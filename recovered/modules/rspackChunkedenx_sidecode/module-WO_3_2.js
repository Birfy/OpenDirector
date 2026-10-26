import {
  DSAPrivateKey,
  DSAparam,
  ECPrivateKey,
  EncryptedPrivateKey,
  PrivateKey,
  PublicKey,
  RSAPrivateKey,
  RSAPublicKey,
  certificate,
  signature,
} from "./module-LO.js";
import tt from "./module-Dj.js";
import te from "./module-ht_2_2.js";
import { createDecipheriv } from "./module-mL.js";
import { pbkdf2Sync } from "./module-Nf_2_2.js";
import { Buffer } from "./module-s6_2_2.js";
function to(J) {
  if (!(typeof J !== "object" || Buffer.isBuffer(J))) {
    tp = J.passphrase;
    J = J.key;
  }
  if (typeof J === "string") {
    J = Buffer.from(J);
  }
  let Z;
  let Q;
  let to;
  let ta;
  let ts;
  let tf;
  let tu;
  let tc;
  let th;
  let td;
  let tl;
  var tp;
  let tb;
  let tv;
  const tg = te(J, tp);
  const tg_tag = tg.tag;
  let tg_data = tg.data;
  switch (tg_tag) {
    case "CERTIFICATE":
      tv = certificate.decode(tg_data, "der").tbsCertificate
        .subjectPublicKeyInfo;
    case "PUBLIC KEY":
      if (!tv) {
        tv = PublicKey.decode(tg_data, "der");
      }
      switch ((tb = tv.algorithm.algorithm.join("."))) {
        case "1.2.840.113549.1.1.1":
          return RSAPublicKey.decode(tv.subjectPublicKey.data, "der");
        case "1.2.840.10045.2.1":
          tv.subjectPrivateKey = tv.subjectPublicKey;
          return {
            type: "ec",
            data: tv,
          };
        case "1.2.840.10040.4.1":
          tv.algorithm.params.pub_key = DSAparam.decode(
            tv.subjectPublicKey.data,
            "der",
          );
          return {
            type: "dsa",
            data: tv.algorithm.params,
          };
        default:
          throw Error("unknown key id " + tb);
      }
    case "ENCRYPTED PRIVATE KEY":
      Z = tg_data = EncryptedPrivateKey.decode(tg_data, "der");
      Q = tp;
      to = Z.algorithm.decrypt.kde.kdeparams.salt;
      ta = parseInt(Z.algorithm.decrypt.kde.kdeparams.iters.toString(), 10);
      ts = tt[Z.algorithm.decrypt.cipher.algo.join(".")];
      tf = Z.algorithm.decrypt.cipher.iv;
      tu = Z.subjectPrivateKey;
      tc = parseInt(ts.split("-")[1], 10) / 8;
      th = pbkdf2Sync(Q, to, ta, tc, "sha1");
      td = createDecipheriv(ts, th, tf);
      (tl = []).push(td.update(tu));
      tl.push(td.final());
      tg_data = Buffer.concat(tl);
    case "PRIVATE KEY":
      switch (
        (tb = (tv = PrivateKey.decode(tg_data, "der")).algorithm.algorithm.join(
          ".",
        ))
      ) {
        case "1.2.840.113549.1.1.1":
          return RSAPrivateKey.decode(tv.subjectPrivateKey, "der");
        case "1.2.840.10045.2.1":
          return {
            curve: tv.algorithm.curve,
            privateKey: ECPrivateKey.decode(tv.subjectPrivateKey, "der")
              .privateKey,
          };
        case "1.2.840.10040.4.1":
          tv.algorithm.params.priv_key = DSAparam.decode(
            tv.subjectPrivateKey,
            "der",
          );
          return {
            type: "dsa",
            params: tv.algorithm.params,
          };
        default:
          throw Error("unknown key id " + tb);
      }
    case "RSA PUBLIC KEY":
      return RSAPublicKey.decode(tg_data, "der");
    case "RSA PRIVATE KEY":
      return RSAPrivateKey.decode(tg_data, "der");
    case "DSA PRIVATE KEY":
      return {
        type: "dsa",
        params: DSAPrivateKey.decode(tg_data, "der"),
      };
    case "EC PRIVATE KEY":
      return {
        curve: (tg_data = ECPrivateKey.decode(tg_data, "der")).parameters.value,
        privateKey: tg_data.privateKey,
      };
    default:
      throw Error("unknown key type " + tg_tag);
  }
}
to.signature = signature;
export default to;
