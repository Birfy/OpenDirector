import prng from "./module-qs_2_2.js";
import Hash from "./module-eUY.js";
import Hmac from "./module-jL_2_2.js";
import * as tt from "./module-Nf_2_2.js";
import * as te from "./module-XFk.js";
import * as tr from "./module-WE1.js";
import tn from "./module-Dk.js";
import * as ti from "./module-jz.js";
import * as to from "./module-Xf_2_2.js";
export { prng };
export { prng as pseudoRandomBytes };
export { prng as rng };
export { prng as randomBytes };
export { Hash };
export { Hash as createHash };
export { Hmac };
export { Hmac as createHmac };
const $ = [
  "sha1",
  "sha224",
  "sha256",
  "sha384",
  "sha512",
  "md5",
  "rmd160",
].concat(Object.keys(require("./module-V2.js")));
export const getHashes = function () {
  return $;
};
export const pbkdf2 = tt.pbkdf2;
export const pbkdf2Sync = tt.pbkdf2Sync;
export const Cipher = te.Cipher;
export const createCipher = te.createCipher;
export const Cipheriv = te.Cipheriv;
export const createCipheriv = te.createCipheriv;
export const Decipher = te.Decipher;
export const createDecipher = te.createDecipher;
export const Decipheriv = te.Decipheriv;
export const createDecipheriv = te.createDecipheriv;
export const getCiphers = te.getCiphers;
export const listCiphers = te.listCiphers;
export const DiffieHellmanGroup = tr.DiffieHellmanGroup;
export const createDiffieHellmanGroup = tr.createDiffieHellmanGroup;
export const getDiffieHellman = tr.getDiffieHellman;
export const createDiffieHellman = tr.createDiffieHellman;
export const DiffieHellman = tr.DiffieHellman;
export const createSign = tn.createSign;
export const Sign = tn.Sign;
export const createVerify = tn.createVerify;
export const Verify = tn.Verify;
export const createECDH = require("./module-SI_2_2.js");
export const publicEncrypt = ti.publicEncrypt;
export const privateEncrypt = ti.privateEncrypt;
export const publicDecrypt = ti.publicDecrypt;
export const privateDecrypt = ti.privateDecrypt;
export const randomFill = to.randomFill;
export const randomFillSync = to.randomFillSync;
export const createCredentials = function () {
  throw Error(
    "sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/browserify/crypto-browserify",
  );
};
export const constants = {
  DH_CHECK_P_NOT_SAFE_PRIME: 2,
  DH_CHECK_P_NOT_PRIME: 1,
  DH_UNABLE_TO_CHECK_GENERATOR: 4,
  DH_NOT_SUITABLE_GENERATOR: 8,
  NPN_ENABLED: 1,
  ALPN_ENABLED: 1,
  RSA_PKCS1_PADDING: 1,
  RSA_SSLV23_PADDING: 2,
  RSA_NO_PADDING: 3,
  RSA_PKCS1_OAEP_PADDING: 4,
  RSA_X931_PADDING: 5,
  RSA_PKCS1_PSS_PADDING: 6,
  POINT_CONVERSION_COMPRESSED: 2,
  POINT_CONVERSION_UNCOMPRESSED: 4,
  POINT_CONVERSION_HYBRID: 6,
};
