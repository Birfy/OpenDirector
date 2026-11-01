import tt from "./module-H8.js";
import tr from "./module-qm.js";
let $;
function te(J, Z, Q) {
  let $;
  if (
    (Z =
      typeof ($ = ((J, Z) => {
        if (typeof J !== "object" || J === null) {
          return J;
        }
        const Q = J[Symbol.toPrimitive];
        if (Q !== undefined) {
          const $ = Q.call(J, Z || "default");
          if (typeof $ !== "object") {
            return $;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (Z === "string" ? String : Number)(J);
      })(Z, "string")) === "symbol"
        ? $
        : String($)) in J
  ) {
    Object.defineProperty(J, Z, {
      value: Q,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    J[Z] = Q;
  }
  return J;
}
const tn = Symbol("lastResolve");
const ti = Symbol("lastReject");
const to = Symbol("error");
const ta = Symbol("ended");
const ts = Symbol("lastPromise");
const tf = Symbol("handlePromise");
const tu = Symbol("stream");
function tc(value, done) {
  return {
    value,
    done,
  };
}
function th(J) {
  const Z = J[tn];
  if (Z !== null) {
    const Q = J[tu].read();
    if (Q !== null) {
      J[ts] = null;
      J[tn] = null;
      J[ti] = null;
      Z(tc(Q, false));
    }
  }
}
function td(J) {
  tt.nextTick(th, J);
}
const tl = Object.getPrototypeOf(function () {});
const tp = Object.setPrototypeOf(
  (te(
    ($ = {
      get stream() {
        return this[tu];
      },
      next: function () {
        let J;
        let Z;
        const Q = this;
        const $ = this[to];
        if ($ !== null) {
          return Promise.reject($);
        }
        if (this[ta]) {
          return Promise.resolve(tc(undefined, true));
        }
        if (this[tu].destroyed) {
          return new Promise((resolve, reject) => {
            tt.nextTick(function () {
              if (Q[to]) {
                reject(Q[to]);
              } else {
                resolve(tc(undefined, true));
              }
            });
          });
        }
        const te = this[ts];
        if (te) {
          Z = new Promise(
            ((J = this),
            (Z, Q) => {
              te.then(() => {
                if (J[ta]) {
                  Z(tc(undefined, true));
                } else {
                  J[tf](Z, Q);
                }
              }, Q);
            }),
          );
        } else {
          const tr = this[tu].read();
          if (tr !== null) {
            return Promise.resolve(tc(tr, false));
          }
          Z = new Promise(this[tf]);
        }
        this[ts] = Z;
        return Z;
      },
    }),
    Symbol.asyncIterator,
    function () {
      return this;
    },
  ),
  te($, "return", function () {
    const J = this;
    return new Promise((resolve, reject) => {
      J[tu].destroy(null, function (J) {
        if (J) {
          reject(J);
        } else {
          resolve(tc(undefined, true));
        }
      });
    });
  }),
  $),
  tl,
);
export default function (J) {
  let Z;
  var Q = Object.create(
    tp,
    (te((Z = {}), tu, {
      value: J,
      writable: true,
    }),
    te(Z, tn, {
      value: null,
      writable: true,
    }),
    te(Z, ti, {
      value: null,
      writable: true,
    }),
    te(Z, to, {
      value: null,
      writable: true,
    }),
    te(Z, ta, {
      value: J._readableState.endEmitted,
      writable: true,
    }),
    te(Z, tf, {
      value: function (J, Z) {
        const $ = Q[tu].read();
        if ($) {
          Q[ts] = null;
          Q[tn] = null;
          Q[ti] = null;
          J(tc($, false));
        } else {
          Q[tn] = J;
          Q[ti] = Z;
        }
      },
      writable: true,
    }),
    Z),
  );
  Q[ts] = null;
  tr(J, function (J) {
    if (J && J.code !== "ERR_STREAM_PREMATURE_CLOSE") {
      const Z = Q[ti];
      if (Z !== null) {
        Q[ts] = null;
        Q[tn] = null;
        Q[ti] = null;
        Z(J);
      }
      Q[to] = J;
      return;
    }
    const $ = Q[tn];
    if ($ !== null) {
      Q[ts] = null;
      Q[tn] = null;
      Q[ti] = null;
      $(tc(undefined, true));
    }
    Q[ta] = true;
  });
  J.on("readable", td.bind(null, Q));
  return Q;
}
