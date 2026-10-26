import { Buffer } from "./module-s6_2_2.js";
import tr from "./module-qU.js";
import tn from "./module-CO.js";
import ti from "./module-WM.js";
import to from "./module-Qv_3_2.js";
let $;
let tt;
const ta = global.crypto && global.crypto.subtle;
const ts = {
  sha: "SHA-1",
  "sha-1": "SHA-1",
  sha1: "SHA-1",
  sha256: "SHA-256",
  "sha-256": "SHA-256",
  sha384: "SHA-384",
  "sha-384": "SHA-384",
  "sha-512": "SHA-512",
  sha512: "SHA-512",
};
const tf = [];
function tu() {
  return (
    tt ||
    (tt =
      global.process && global.process.nextTick
        ? global.process.nextTick
        : global.queueMicrotask
          ? global.queueMicrotask
          : global.setImmediate
            ? global.setImmediate
            : global.setTimeout)
  );
}
function tc(J, salt, iterations, $, name) {
  return ta
    .importKey(
      "raw",
      J,
      {
        name: "PBKDF2",
      },
      false,
      ["deriveBits"],
    )
    .then((J) =>
      ta.deriveBits(
        {
          name: "PBKDF2",
          salt,
          iterations,
          hash: {
            name,
          },
        },
        J,
        $ << 3,
      ),
    )
    .then((J) => Buffer.from(J));
}
export default function (J, Z, tt, th, td, tl) {
  if (typeof td === "function") {
    tl = td;
    td = undefined;
  }
  let tp;
  let tb;
  const tv = ts[(td = td || "sha1").toLowerCase()];
  if (!tv || typeof global.Promise !== "function") {
    return void tu()(function () {
      let Q;
      try {
        Q = ti(J, Z, tt, th, td);
      } catch (error) {
        return tl(error);
      }
      tl(null, Q);
    });
  }
  tr(tt, th);
  J = to(J, tn, "Password");
  Z = to(Z, tn, "Salt");
  if (typeof tl !== "function") {
    throw Error("No callback provided to pbkdf2");
  }
  tp = ((J) => {
    if (
      (global.process && !global.process.browser) ||
      !ta ||
      !ta.importKey ||
      !ta.deriveBits
    ) {
      return Promise.resolve(false);
    }
    if (tf[J] !== undefined) {
      return tf[J];
    }
    const Z = tc(($ = $ || Buffer.alloc(8)), $, 10, 128, J)
      .then(() => true)
      .catch(() => false);
    tf[J] = Z;
    return Z;
  })(tv).then((Q) => {
    if (Q) {
      return tc(J, Z, tt, th, tv);
    }
    return ti(J, Z, tt, th, td);
  });
  tb = tl;
  tp.then(
    (J) => {
      tu()(function () {
        tb(null, J);
      });
    },
    (J) => {
      tu()(function () {
        tb(J);
      });
    },
  );
}
