import s from "./module-Bwy.js";
import a from "./module-osk.js";
import l from "./module-Taa.js";
import u from "./module-P62.js";
import f from "./module-Vva.js";
export default c;
let n;
let i;
let o;
((c.prototype = Object.create(s.prototype)).constructor = c).className = "Root";
function c(e) {
  s.call(this, "", e);
  this.deferred = [];
  this.files = [];
  this._edition = "proto2";
  this._fullyQualifiedObjects = {};
}
function p() {}
c.fromJSON = function (e, t) {
  if (!t) {
    t = new c();
  }
  if (e.options) {
    t.setOptions(e.options);
  }
  return t.addJSON(e.nested).resolveAll();
};
c.prototype.resolvePath = f.path.resolve;
c.prototype.fetch = f.fetch;
c.prototype.load = function e(t, r, n) {
  if (typeof r === "function") {
    n = r;
    r = undefined;
  }
  const s = this;
  if (!n) {
    return f.asPromise(e, s, t, r);
  }
  const a = n === p;
  function l(e, t) {
    if (n) {
      if (a) {
        throw e;
      }
      if (t) {
        t.resolveAll();
      }
      const r = n;
      n = null;
      r(e, t);
    }
  }
  function u(e) {
    const t = e.lastIndexOf("google/protobuf/");
    if (t > -1) {
      const r = e.substring(t);
      if (r in o) {
        return r;
      }
    }
    return null;
  }
  function c(e, t) {
    try {
      if (f.isString(t) && t.charAt(0) === "{") {
        t = JSON.parse(t);
      }
      if (f.isString(t)) {
        i.filename = e;
        let n;
        const o = i(t, s, r);
        let c = 0;
        if (o.imports) {
          for (; c < o.imports.length; ++c) {
            if ((n = u(o.imports[c]) || s.resolvePath(e, o.imports[c]))) {
              d(n);
            }
          }
        }
        if (o.weakImports) {
          for (c = 0; c < o.weakImports.length; ++c) {
            if (
              (n = u(o.weakImports[c]) || s.resolvePath(e, o.weakImports[c]))
            ) {
              d(n, true);
            }
          }
        }
      } else {
        s.setOptions(t.options).addJSON(t.nested);
      }
    } catch (error) {
      l(error);
    }
    if (!(a || h)) {
      l(null, s);
    }
  }
  function d(e, t) {
    e = u(e) || e;
    if (!(s.files.indexOf(e) > -1)) {
      s.files.push(e);
      if (e in o) {
        return void (a
          ? c(e, o[e])
          : (++h,
            setTimeout(() => {
              --h;
              c(e, o[e]);
            })));
      }
      if (a) {
        let r;
        try {
          r = f.fs.readFileSync(e).toString("utf8");
        } catch (error) {
          if (!t) {
            l(error);
          }
          return;
        }
        c(e, r);
      } else {
        ++h;
        s.fetch(e, function (r, i) {
          --h;
          if (n) {
            if (r) {
              return void (t ? h || l(null, s) : l(r));
            }
            c(e, i);
          }
        });
      }
    }
  }
  var h = 0;
  if (f.isString(t)) {
    t = [t];
  }
  let m;
  for (let y = 0; y < t.length; ++y) {
    if ((m = s.resolvePath("", t[y]))) {
      d(m);
    }
  }
  if (a) {
    s.resolveAll();
  } else if (!h) {
    l(null, s);
  }
  return s;
};
c.prototype.loadSync = function (e, t) {
  if (!f.isNode) {
    throw Error("not supported");
  }
  return this.load(e, t, p);
};
c.prototype.resolveAll = function () {
  if (!this._needsRecursiveResolve) {
    return this;
  }
  if (this.deferred.length) {
    throw Error(
      "unresolvable extensions: " +
        this.deferred
          .map((e) => "'extend " + e.extend + "' in " + e.parent.fullName)
          .join(", "),
    );
  }
  return s.prototype.resolveAll.call(this);
};
const d = /^[A-Z]/;
function h(e, t) {
  const r = t.parent.lookup(t.extend);
  if (r) {
    const n = new a(t.fullName, t.id, t.type, t.rule, undefined, t.options);
    return (
      !!r.get(n.name) ||
      ((n.declaringField = t), (t.extensionField = n), r.add(n), true)
    );
  }
  return false;
}
c.prototype._handleAdd = function (e) {
  if (e instanceof a) {
    if (!(e.extend === undefined || e.extensionField || h(this, e))) {
      this.deferred.push(e);
    }
  } else if (e instanceof l) {
    if (d.test(e.name)) {
      e.parent[e.name] = e.values;
    }
  } else if (!(e instanceof u)) {
    if (e instanceof n) {
      for (let t = 0; t < this.deferred.length;) {
        if (h(this, this.deferred[t])) {
          this.deferred.splice(t, 1);
        } else {
          ++t;
        }
      }
    }
    for (let r = 0; r < e.nestedArray.length; ++r) {
      this._handleAdd(e._nestedArray[r]);
    }
    if (d.test(e.name)) {
      e.parent[e.name] = e;
    }
  }
  if (e instanceof n || e instanceof l || e instanceof a) {
    this._fullyQualifiedObjects[e.fullName] = e;
  }
};
c.prototype._handleRemove = function (e) {
  if (e instanceof a) {
    if (e.extend !== undefined) {
      if (e.extensionField) {
        e.extensionField.parent.remove(e.extensionField);
        e.extensionField = null;
      } else {
        const t = this.deferred.indexOf(e);
        if (t > -1) {
          this.deferred.splice(t, 1);
        }
      }
    }
  } else if (e instanceof l) {
    if (d.test(e.name)) {
      delete e.parent[e.name];
    }
  } else if (e instanceof s) {
    for (let r = 0; r < e.nestedArray.length; ++r) {
      this._handleRemove(e._nestedArray[r]);
    }
    if (d.test(e.name)) {
      delete e.parent[e.name];
    }
  }
  delete this._fullyQualifiedObjects[e.fullName];
};
c._configure = function (e, t, r) {
  n = e;
  i = t;
  o = r;
};
