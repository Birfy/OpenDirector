import { Buffer } from "./module-b58.js";
import er from "./module-qi_5.js";
import en from "./module-qf.js";
import ei from "./module-jm.js";
import ea from "./module-DI.js";
let $;
let ee;
const eo = global.crypto && global.crypto.subtle;
const es = {
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
const ef = [];
function eu() {
  return (
    ee ||
    (ee =
      global.process && global.process.nextTick
        ? global.process.nextTick
        : global.queueMicrotask
          ? global.queueMicrotask
          : global.setImmediate
            ? global.setImmediate
            : global.setTimeout)
  );
}
function ec(Z, salt, iterations, $, name) {
  return eo
    .importKey(
      "raw",
      Z,
      {
        name: "PBKDF2",
      },
      false,
      ["deriveBits"],
    )
    .then((Z) =>
      eo.deriveBits(
        {
          name: "PBKDF2",
          salt,
          iterations,
          hash: {
            name,
          },
        },
        Z,
        $ << 3,
      ),
    )
    .then((Z) => Buffer.from(Z));
}
export default function (Z, Q, ee, eh, el, ed) {
  if (typeof el === "function") {
    ed = el;
    el = undefined;
  }
  let ep;
  let eb;
  const eg = es[(el = el || "sha1").toLowerCase()];
  if (!eg || typeof global.Promise !== "function") {
    return void eu()(function () {
      let X;
      try {
        X = ei(Z, Q, ee, eh, el);
      } catch (error) {
        return ed(error);
      }
      ed(null, X);
    });
  }
  er(ee, eh);
  Z = ea(Z, en, "Password");
  Q = ea(Q, en, "Salt");
  if (typeof ed !== "function") {
    throw Error("No callback provided to pbkdf2");
  }
  ep = ((Z) => {
    if (
      (global.process && !global.process.browser) ||
      !eo ||
      !eo.importKey ||
      !eo.deriveBits
    ) {
      return Promise.resolve(false);
    }
    if (ef[Z] !== undefined) {
      return ef[Z];
    }
    const Q = ec(($ = $ || Buffer.alloc(8)), $, 10, 128, Z)
      .then(() => true)
      .catch(() => false);
    ef[Z] = Q;
    return Q;
  })(eg).then((X) => {
    if (X) {
      return ec(Z, Q, ee, eh, eg);
    }
    return ei(Z, Q, ee, eh, el);
  });
  eb = ed;
  ep.then(
    (Z) => {
      eu()(function () {
        eb(null, Z);
      });
    },
    (Z) => {
      eu()(function () {
        eb(Z);
      });
    },
  );
}
