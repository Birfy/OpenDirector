import n from "./module-EXH.js";
import i from "./module-B9J.js";
import o from "./module-c0X.js";
import s from "./module-osk.js";
import a from "./module-uCb.js";
import l from "./module-P62.js";
import u from "./module-Taa.js";
import f from "./module-Va0.js";
import c from "./module-j3x.js";
import p from "./module-Bi.js";
import { mapKey } from "./module-kxL.js";
import h from "./module-Vva.js";
export default _;
_.filename = null;
_.defaults = {
  keepCase: false,
};
var m = /^[1-9][0-9]*$/;
var y = /^-?[1-9][0-9]*$/;
var v = /^0[x][0-9a-fA-F]+$/;
var g = /^-?0[x][0-9a-fA-F]+$/;
var b = /^0[0-7]+$/;
var w = /^-?0[0-7]+$/;
var k = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
var x = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
var O = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
function _(e, root, r) {
  if (!(root instanceof i)) {
    r = root;
    root = new i();
  }
  if (!r) {
    r = _.defaults;
  }
  let E;
  let j;
  let imports;
  let weakImports;
  const T = r.preferTrailingComment || false;
  const M = n(e, r.alternateCommentMode || false);
  const M_next = M.next;
  const M_push = M.push;
  const M_peek = M.peek;
  const M_skip = M.skip;
  const M_cmnt = M.cmnt;
  let B = true;
  let $ = "proto2";
  let D = root;
  const L = [];
  const F = {};
  const z = r.keepCase ? (e) => e : h.camelCase;
  function V(e, t, r) {
    const __filename = _.filename;
    if (!r) {
      _.filename = null;
    }
    return Error(
      "illegal " +
        (t || "token") +
        " '" +
        e +
        "' (" +
        (__filename ? __filename + ", " : "") +
        "line " +
        M.line +
        ")",
    );
  }
  function J() {
    let e;
    const t = [];
    do {
      if ((e = M_next()) !== '"' && e !== "'") {
        throw V(e);
      }
      t.push(M_next());
      M_skip(e);
      e = M_peek();
    } while (e === '"' || e === "'");
    return t.join("");
  }
  function U(e) {
    const t = M_next();
    switch (t) {
      case "'":
      case '"':
        M_push(t);
        return J();
      case "true":
      case "TRUE":
        return true;
      case "false":
      case "FALSE":
        return false;
    }
    try {
      let r = t;
      const n = true;
      let i = 1;
      if (r.charAt(0) === "-") {
        i = -1;
        r = r.substring(1);
      }
      switch (r) {
        case "inf":
        case "INF":
        case "Inf":
          return Infinity * i;
        case "nan":
        case "NAN":
        case "Nan":
        case "NaN":
          return 0 / 0;
        case "0":
          return 0;
      }
      if (m.test(r)) {
        return i * parseInt(r, 10);
      }
      if (v.test(r)) {
        return i * parseInt(r, 16);
      }
      if (b.test(r)) {
        return i * parseInt(r, 8);
      }
      if (k.test(r)) {
        return i * parseFloat(r);
      }
      throw V(r, "number", n);
    } catch (r) {
      if (e && O.test(t)) {
        return t;
      }
      throw V(t, "value");
    }
  }
  function q(e, t) {
    do {
      if (t && ((r = M_peek()) === '"' || r === "'")) {
        var r;
        var n;
        const i = J();
        e.push(i);
        if ($ >= 2023) {
          throw V(i, "id");
        }
      } else {
        try {
          e.push([(n = H(M_next())), M_skip("to", true) ? H(M_next()) : n]);
        } catch (error) {
          if (t && O.test(r) && $ >= 2023) {
            e.push(r);
          } else {
            throw error;
          }
        }
      }
    } while (M_skip(",", true));
    const o = {
      options: undefined,
    };
    o.setOption = function (e, t) {
      if (this.options === undefined) {
        this.options = {};
      }
      this.options[e] = t;
    };
    K(
      o,
      (e) => {
        if (e === "option") {
          G(o, e);
          M_skip(";");
        } else {
          throw V(e);
        }
      },
      function () {
        ee(o);
      },
    );
  }
  function H(e, t) {
    switch (e) {
      case "max":
      case "MAX":
      case "Max":
        return 536870911;
      case "0":
        return 0;
    }
    if (!t && e.charAt(0) === "-") {
      throw V(e, "id");
    }
    if (y.test(e)) {
      return parseInt(e, 10);
    }
    if (g.test(e)) {
      return parseInt(e, 16);
    }
    if (w.test(e)) {
      return parseInt(e, 8);
    }
    throw V(e, "id");
  }
  function W(e, t) {
    switch (t) {
      case "option":
        G(e, t);
        M_skip(";");
        return true;
      case "message":
        X(e, t);
        return true;
      case "enum":
        Q(e, t);
        return true;
      case "service":
        ((e, t) => {
          if (!x.test((t = M_next()))) {
            throw V(t, "service name");
          }
          const r = new f(t);
          K(r, (e) => {
            if (!W(r, e)) {
              if (e === "rpc") {
                ((e, t) => {
                  const r = M_cmnt();
                  const n = t;
                  if (!x.test((t = M_next()))) {
                    throw V(t, "name");
                  }
                  let i;
                  let o;
                  let s;
                  let a;
                  const l = t;
                  M_skip("(");
                  if (M_skip("stream", true)) {
                    o = true;
                  }
                  if (
                    !O.test((t = M_next())) ||
                    ((i = t),
                    M_skip(")"),
                    M_skip("returns"),
                    M_skip("("),
                    M_skip("stream", true) && (a = true),
                    !O.test((t = M_next())))
                  ) {
                    throw V(t);
                  }
                  s = t;
                  M_skip(")");
                  const u = new c(l, n, i, s, o, a);
                  u.comment = r;
                  K(u, (e) => {
                    if (e === "option") {
                      G(u, e);
                      M_skip(";");
                    } else {
                      throw V(e);
                    }
                  });
                  e.add(u);
                })(r, e);
              } else {
                throw V(e);
              }
            }
          });
          e.add(r);
          if (e === D) {
            L.push(r);
          }
        })(e, t);
        return true;
      case "extend":
        ((e, t) => {
          if (!O.test((t = M_next()))) {
            throw V(t, "reference");
          }
          const r = t;
          K(null, (t) => {
            switch (t) {
              case "required":
              case "repeated":
                Z(e, t, r);
                break;
              case "optional":
                if ($ === "proto3") {
                  Z(e, "proto3_optional", r);
                } else {
                  Z(e, "optional", r);
                }
                break;
              default:
                if ($ === "proto2" || !O.test(t)) {
                  throw V(t);
                }
                M_push(t);
                Z(e, "optional", r);
            }
          });
        })(e, t);
        return true;
    }
    return false;
  }
  function K(e, t, r) {
    let n;
    const M_line = M.line;
    if (e) {
      if (typeof e.comment !== "string") {
        e.comment = M_cmnt();
      }
      e.filename = _.filename;
    }
    if (M_skip("{", true)) {
      while ((n = M_next()) !== "}") {
        t(n);
      }
      M_skip(";", true);
    } else {
      if (r) {
        r();
      }
      M_skip(";");
      if (e && (typeof e.comment !== "string" || T)) {
        e.comment = M_cmnt(M_line) || e.comment;
      }
    }
  }
  function X(e, t) {
    if (!x.test((t = M_next()))) {
      throw V(t, "type name");
    }
    const r = new o(t);
    K(r, (e) => {
      if (!W(r, e)) {
        switch (e) {
          case "map":
            const t = r;
            M_skip("<");
            const n = M_next();
            if (mapKey[n] === undefined) {
              throw V(n, "type");
            }
            M_skip(",");
            const i = M_next();
            if (!O.test(i)) {
              throw V(i, "type");
            }
            M_skip(">");
            const o = M_next();
            if (!x.test(o)) {
              throw V(o, "name");
            }
            M_skip("=");
            var s = new a(z(o), H(M_next()), n, i);
            K(
              s,
              (e) => {
                if (e === "option") {
                  G(s, e);
                  M_skip(";");
                } else {
                  throw V(e);
                }
              },
              function () {
                ee(s);
              },
            );
            t.add(s);
            break;
          case "required":
            if ($ !== "proto2") {
              throw V(e);
            }
          case "repeated":
            Z(r, e);
            break;
          case "optional":
            if ($ === "proto3") {
              Z(r, "proto3_optional");
            } else if ($ !== "proto2") {
              throw V(e);
            } else {
              Z(r, "optional");
            }
            break;
          case "oneof":
            const u = r;
            let f = e;
            if (!x.test((f = M_next()))) {
              throw V(f, "name");
            }
            var c = new l(z(f));
            K(c, (e) => {
              if (e === "option") {
                G(c, e);
                M_skip(";");
              } else {
                M_push(e);
                Z(c, "optional");
              }
            });
            u.add(c);
            break;
          case "extensions":
            q(r.extensions || (r.extensions = []));
            break;
          case "reserved":
            q(r.reserved || (r.reserved = []), true);
            break;
          default:
            if ($ === "proto2" || !O.test(e)) {
              throw V(e);
            }
            M_push(e);
            Z(r, "optional");
        }
      }
    });
    e.add(r);
    if (e === D) {
      L.push(r);
    }
  }
  function Z(e, t, r) {
    let n = M_next();
    if (n === "group") {
      return void ((e, t) => {
        if ($ >= 2023) {
          throw V("group");
        }
        let r = M_next();
        if (!x.test(r)) {
          throw V(r, "name");
        }
        const n = h.lcFirst(r);
        if (r === n) {
          r = h.ucFirst(r);
        }
        M_skip("=");
        const i = H(M_next());
        const a = new o(r);
        a.group = true;
        const l = new s(n, i, r, t);
        l.filename = _.filename;
        K(a, (e) => {
          switch (e) {
            case "option":
              G(a, e);
              M_skip(";");
              break;
            case "required":
            case "repeated":
              Z(a, e);
              break;
            case "optional":
              if ($ === "proto3") {
                Z(a, "proto3_optional");
              } else {
                Z(a, "optional");
              }
              break;
            case "message":
              X(a, e);
              break;
            case "enum":
              Q(a, e);
              break;
            case "reserved":
              q(a.reserved || (a.reserved = []), true);
              break;
            default:
              throw V(e);
          }
        });
        e.add(a).add(l);
      })(e, t);
    }
    while (n.endsWith(".") || M_peek().startsWith(".")) {
      n += M_next();
    }
    if (!O.test(n)) {
      throw V(n, "type");
    }
    let i = M_next();
    if (!x.test(i)) {
      throw V(i, "name");
    }
    i = z(i);
    M_skip("=");
    const a = new s(i, H(M_next()), n, t, r);
    K(
      a,
      (e) => {
        if (e === "option") {
          G(a, e);
          M_skip(";");
        } else {
          throw V(e);
        }
      },
      function () {
        ee(a);
      },
    );
    if (t === "proto3_optional") {
      const u = new l("_" + i);
      a.setOption("proto3_optional", true);
      u.add(a);
      e.add(u);
    } else {
      e.add(a);
    }
    if (e === D) {
      L.push(a);
    }
  }
  function Q(e, t) {
    if (!x.test((t = M_next()))) {
      throw V(t, "name");
    }
    const r = new u(t);
    K(r, (e) => {
      switch (e) {
        case "option":
          G(r, e);
          M_skip(";");
          break;
        case "reserved":
          q(r.reserved || (r.reserved = []), true);
          if (r.reserved === undefined) {
            r.reserved = [];
          }
          break;
        default:
          const t = r;
          const n = e;
          if (!x.test(n)) {
            throw V(n, "name");
          }
          M_skip("=");
          const i = H(M_next(), true);
          var o = {
            options: undefined,
          };
          o.getOption = function (e) {
            return this.options[e];
          };
          o.setOption = function (e, t) {
            p.prototype.setOption.call(o, e, t);
          };
          o.setParsedOption = function () {};
          K(
            o,
            (e) => {
              if (e === "option") {
                G(o, e);
                M_skip(";");
              } else {
                throw V(e);
              }
            },
            function () {
              ee(o);
            },
          );
          t.add(n, i, o.comment, o.parsedOptions || o.options);
      }
    });
    e.add(r);
    if (e === D) {
      L.push(r);
    }
  }
  function G(e, t) {
    let r;
    let n;
    let i;
    let o;
    let s;
    let a;
    let l = true;
    for (t === "option" && (t = M_next()); t !== "=";) {
      if (t === "(") {
        const u = M_next();
        M_skip(")");
        t = "(" + u + ")";
      }
      if (l) {
        l = false;
        if (t.includes(".") && !t.includes("(")) {
          const f = t.split(".");
          s = f[0] + ".";
          t = f[1];
          continue;
        }
        s = t;
      } else {
        a = a ? (a += t) : t;
      }
      t = M_next();
    }
    const c = (function e(t, r) {
      if (M_skip("{", true)) {
        const n = {};
        while (!M_skip("}", true)) {
          if (!x.test((E = M_next()))) {
            throw V(E, "name");
          }
          if (E === null) {
            throw V(E, "end of input");
          }
          let i;
          let o;
          const s = E;
          M_skip(":", true);
          if (M_peek() === "{") {
            i = e(t, r + "." + E);
          } else if (M_peek() === "[") {
            i = [];
            if (M_skip("[", true)) {
              do {
                o = U(true);
                i.push(o);
              } while (M_skip(",", true));
              M_skip("]");
              if (o !== undefined) {
                Y(t, r + "." + E, o);
              }
            }
          } else {
            i = U(true);
            Y(t, r + "." + E, i);
          }
          const a = n[s];
          if (a) {
            i = [].concat(a).concat(i);
          }
          n[s] = i;
          M_skip(",", true);
          M_skip(";", true);
        }
        return n;
      }
      const l = U(true);
      Y(t, r, l);
      return l;
    })(e, a ? s.concat(a) : s);
    a = a && a[0] === "." ? a.slice(1) : a;
    r = e;
    n = s = s && s[s.length - 1] === "." ? s.slice(0, -1) : s;
    i = c;
    o = a;
    if (r.setParsedOption) {
      r.setParsedOption(n, i, o);
    }
  }
  function Y(e, t, r) {
    if (D === e && /^features\./.test(t)) {
      F[t] = r;
      return;
    }
    if (e.setOption) {
      e.setOption(t, r);
    }
  }
  function ee(e) {
    if (M_skip("[", true)) {
      do {
        G(e, "option");
      } while (M_skip(",", true));
      M_skip("]");
    }
    return e;
  }
  while ((E = M_next()) !== null) {
    switch (E) {
      case "package":
        if (!B) {
          throw V(E);
        }
        if (j !== undefined) {
          throw V("package");
        }
        j = M_next();
        if (!O.test(j)) {
          throw V(j, "name");
        }
        D = D.define(j);
        M_skip(";");
        break;
      case "import":
        if (!B) {
          throw V(E);
        }
        (() => {
          let e;
          let t = M_peek();
          switch (t) {
            case "weak":
              e = weakImports || (weakImports = []);
              M_next();
              break;
            case "public":
              M_next();
            default:
              e = imports || (imports = []);
          }
          t = J();
          M_skip(";");
          e.push(t);
        })();
        break;
      case "syntax":
        if (!B) {
          throw V(E);
        }
        M_skip("=");
        if (($ = J()) < 2023) {
          throw V($, "syntax");
        }
        M_skip(";");
        break;
      case "edition":
        if (!B) {
          throw V(E);
        }
        M_skip("=");
        if (!["2023"].includes(($ = J()))) {
          throw V($, "edition");
        }
        M_skip(";");
        break;
      case "option":
        G(D, E);
        M_skip(";", true);
        break;
      default:
        if (W(D, E)) {
          B = false;
          continue;
        }
        throw V(E);
    }
  }
  L.forEach((e) => {
    e._edition = $;
    Object.keys(F).forEach((t) => {
      if (e.getOption(t) === undefined) {
        e.setOption(t, F[t], true);
      }
    });
  });
  _.filename = null;
  return {
    package: j,
    imports,
    weakImports,
    root,
  };
}
