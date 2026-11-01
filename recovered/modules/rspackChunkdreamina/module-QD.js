import prng from "Wt";
import Hash from "io";
import Hmac from "G6";
import s from "l9L";
import a from "VG";
import n from "XZ";
import c from "xk";
import o from "vJ";
import f from "tiP";
export { prng };
export { prng as pseudoRandomBytes };
export { prng as rng };
export { prng as randomBytes };
export { Hash };
export { Hash as createHash };
export { Hmac };
export { Hmac as createHmac };
const i = [
  "sha1",
  "sha224",
  "sha256",
  "sha384",
  "sha512",
  "md5",
  "rmd160",
].concat(Object.keys(require("BK")));
export const getHashes = function () {
  return i;
};
export const pbkdf2 = s.pbkdf2;
export const pbkdf2Sync = s.pbkdf2Sync;
export const Cipher = a.Cipher;
export const createCipher = a.createCipher;
export const Cipheriv = a.Cipheriv;
export const createCipheriv = a.createCipheriv;
export const Decipher = a.Decipher;
export const createDecipher = a.createDecipher;
export const Decipheriv = a.Decipheriv;
export const createDecipheriv = a.createDecipheriv;
export const getCiphers = a.getCiphers;
export const listCiphers = a.listCiphers;
export const DiffieHellmanGroup = n.DiffieHellmanGroup;
export const createDiffieHellmanGroup = n.createDiffieHellmanGroup;
export const getDiffieHellman = n.getDiffieHellman;
export const createDiffieHellman = n.createDiffieHellman;
export const DiffieHellman = n.DiffieHellman;
export const createSign = c.createSign;
export const Sign = c.Sign;
export const createVerify = c.createVerify;
export const Verify = c.Verify;
export const createECDH = require("Sf");
export const publicEncrypt = o.publicEncrypt;
export const privateEncrypt = o.privateEncrypt;
export const publicDecrypt = o.publicDecrypt;
export const privateDecrypt = o.privateDecrypt;
export const randomFill = f.randomFill;
export const randomFillSync = f.randomFillSync;
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
