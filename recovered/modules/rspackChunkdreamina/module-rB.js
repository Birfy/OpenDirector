import ee from "rCO";
import er from "./module-P6e.js";
let $;
function et(Z, Q, X) {
  let $;
  if (
    (Q =
      typeof ($ = ((Z, Q) => {
        if (typeof Z !== "object" || Z === null) {
          return Z;
        }
        const X = Z[Symbol.toPrimitive];
        if (X !== undefined) {
          const $ = X.call(Z, Q || "default");
          if (typeof $ !== "object") {
            return $;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (Q === "string" ? String : Number)(Z);
      })(Q, "string")) === "symbol"
        ? $
        : String($)) in Z
  ) {
    Object.defineProperty(Z, Q, {
      value: X,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    Z[Q] = X;
  }
  return Z;
}
const en = Symbol("lastResolve");
const ei = Symbol("lastReject");
const ea = Symbol("error");
const eo = Symbol("ended");
const es = Symbol("lastPromise");
const ef = Symbol("handlePromise");
const eu = Symbol("stream");
function ec(value, done) {
  return {
    value,
    done,
  };
}
function eh(Z) {
  const Q = Z[en];
  if (Q !== null) {
    const X = Z[eu].read();
    if (X !== null) {
      Z[es] = null;
      Z[en] = null;
      Z[ei] = null;
      Q(ec(X, false));
    }
  }
}
function el(Z) {
  ee.nextTick(eh, Z);
}
const ed = Object.getPrototypeOf(function () {});
const ep = Object.setPrototypeOf(
  (et(
    ($ = {
      get stream() {
        return this[eu];
      },
      next: function () {
        let Z;
        let Q;
        const X = this;
        const $ = this[ea];
        if ($ !== null) {
          return Promise.reject($);
        }
        if (this[eo]) {
          return Promise.resolve(ec(undefined, true));
        }
        if (this[eu].destroyed) {
          return new Promise((resolve, reject) => {
            ee.nextTick(function () {
              if (X[ea]) {
                reject(X[ea]);
              } else {
                resolve(ec(undefined, true));
              }
            });
          });
        }
        const et = this[es];
        if (et) {
          Q = new Promise(
            ((Z = this),
            (Q, X) => {
              et.then(() => {
                if (Z[eo]) {
                  Q(ec(undefined, true));
                } else {
                  Z[ef](Q, X);
                }
              }, X);
            }),
          );
        } else {
          const er = this[eu].read();
          if (er !== null) {
            return Promise.resolve(ec(er, false));
          }
          Q = new Promise(this[ef]);
        }
        this[es] = Q;
        return Q;
      },
    }),
    Symbol.asyncIterator,
    function () {
      return this;
    },
  ),
  et($, "return", function () {
    const Z = this;
    return new Promise((resolve, reject) => {
      Z[eu].destroy(null, function (Z) {
        if (Z) {
          reject(Z);
        } else {
          resolve(ec(undefined, true));
        }
      });
    });
  }),
  $),
  ed,
);
export default function (Z) {
  let Q;
  var X = Object.create(
    ep,
    (et((Q = {}), eu, {
      value: Z,
      writable: true,
    }),
    et(Q, en, {
      value: null,
      writable: true,
    }),
    et(Q, ei, {
      value: null,
      writable: true,
    }),
    et(Q, ea, {
      value: null,
      writable: true,
    }),
    et(Q, eo, {
      value: Z._readableState.endEmitted,
      writable: true,
    }),
    et(Q, ef, {
      value: function (Z, Q) {
        const $ = X[eu].read();
        if ($) {
          X[es] = null;
          X[en] = null;
          X[ei] = null;
          Z(ec($, false));
        } else {
          X[en] = Z;
          X[ei] = Q;
        }
      },
      writable: true,
    }),
    Q),
  );
  X[es] = null;
  er(Z, function (Z) {
    if (Z && Z.code !== "ERR_STREAM_PREMATURE_CLOSE") {
      const Q = X[ei];
      if (Q !== null) {
        X[es] = null;
        X[en] = null;
        X[ei] = null;
        Q(Z);
      }
      X[ea] = Z;
      return;
    }
    const $ = X[en];
    if ($ !== null) {
      X[es] = null;
      X[en] = null;
      X[ei] = null;
      $(ec(undefined, true));
    }
    X[eo] = true;
  });
  Z.on("readable", el.bind(null, X));
  return X;
}
