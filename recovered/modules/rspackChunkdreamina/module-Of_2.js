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
} from "./module-KMB.js";
import ee from "./module-Dj.js";
import et from "./module-W5b.js";
import er from "qP";
import { pbkdf2Sync } from "./module-l9L.js";
import { Buffer } from "./module-b58.js";
function ea(Z) {
  if (!(typeof Z !== "object" || Buffer.isBuffer(Z))) {
    ep = Z.passphrase;
    Z = Z.key;
  }
  if (typeof Z === "string") {
    Z = Buffer.from(Z);
  }
  let Q;
  let X;
  let ea;
  let eo;
  let es;
  let ef;
  let eu;
  let ec;
  let eh;
  let el;
  let ed;
  var ep;
  let eb;
  let eg;
  const ey = et(Z, ep);
  const ey_tag = ey.tag;
  let ey_data = ey.data;
  switch (ey_tag) {
    case "CERTIFICATE":
      eg = certificate.decode(ey_data, "der").tbsCertificate
        .subjectPublicKeyInfo;
    case "PUBLIC KEY":
      if (!eg) {
        eg = PublicKey.decode(ey_data, "der");
      }
      switch ((eb = eg.algorithm.algorithm.join("."))) {
        case "1.2.840.113549.1.1.1":
          return RSAPublicKey.decode(eg.subjectPublicKey.data, "der");
        case "1.2.840.10045.2.1":
          eg.subjectPrivateKey = eg.subjectPublicKey;
          return {
            type: "ec",
            data: eg,
          };
        case "1.2.840.10040.4.1":
          eg.algorithm.params.pub_key = DSAparam.decode(
            eg.subjectPublicKey.data,
            "der",
          );
          return {
            type: "dsa",
            data: eg.algorithm.params,
          };
        default:
          throw Error("unknown key id " + eb);
      }
    case "ENCRYPTED PRIVATE KEY":
      Q = ey_data = EncryptedPrivateKey.decode(ey_data, "der");
      X = ep;
      ea = Q.algorithm.decrypt.kde.kdeparams.salt;
      eo = parseInt(Q.algorithm.decrypt.kde.kdeparams.iters.toString(), 10);
      es = ee[Q.algorithm.decrypt.cipher.algo.join(".")];
      ef = Q.algorithm.decrypt.cipher.iv;
      eu = Q.subjectPrivateKey;
      ec = parseInt(es.split("-")[1], 10) / 8;
      eh = pbkdf2Sync(X, ea, eo, ec, "sha1");
      el = er.createDecipheriv(es, eh, ef);
      (ed = []).push(el.update(eu));
      ed.push(el.final());
      ey_data = Buffer.concat(ed);
    case "PRIVATE KEY":
      switch (
        (eb = (eg = PrivateKey.decode(ey_data, "der")).algorithm.algorithm.join(
          ".",
        ))
      ) {
        case "1.2.840.113549.1.1.1":
          return RSAPrivateKey.decode(eg.subjectPrivateKey, "der");
        case "1.2.840.10045.2.1":
          return {
            curve: eg.algorithm.curve,
            privateKey: ECPrivateKey.decode(eg.subjectPrivateKey, "der")
              .privateKey,
          };
        case "1.2.840.10040.4.1":
          eg.algorithm.params.priv_key = DSAparam.decode(
            eg.subjectPrivateKey,
            "der",
          );
          return {
            type: "dsa",
            params: eg.algorithm.params,
          };
        default:
          throw Error("unknown key id " + eb);
      }
    case "RSA PUBLIC KEY":
      return RSAPublicKey.decode(ey_data, "der");
    case "RSA PRIVATE KEY":
      return RSAPrivateKey.decode(ey_data, "der");
    case "DSA PRIVATE KEY":
      return {
        type: "dsa",
        params: DSAPrivateKey.decode(ey_data, "der"),
      };
    case "EC PRIVATE KEY":
      return {
        curve: (ey_data = ECPrivateKey.decode(ey_data, "der")).parameters.value,
        privateKey: ey_data.privateKey,
      };
    default:
      throw Error("unknown key type " + ey_tag);
  }
}
ea.signature = signature;
export default ea;
