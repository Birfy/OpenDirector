if (require.j == "wl4") {
  var a;
  var o = require("./module-fE_2.js");
}
if (require.j == "wl4") var i = require("./module-L8k.js");
if (require.j == "wl4") var n = require("./module-Ez_3.js");
if (require.j == "wl4") var c = require("./module-O2.js");
if (require.j == "wl4") var l = require("./module-l6x.js");
if (require.j == "wl4") var m = require("./module-tvS.js");
if (require.j == "wl4") var s = require("./module-Kt_2.js");
if (require.j == "wl4") var d = require("./module-UL.js");
if (require.j == "wl4") var u = require("./module-A7.js");
if (require.j == "wl4") var p = require("./module-tA_4.js");
if (require.j == "wl4") var C = require("./module-Vj_2.js");
if (require.j == "wl4") var v = require("./module-pnN.js");
if (require.j == "wl4") var _ = require("./module-SB.js");
class f extends Error {
  constructor(e) {
    var t;
    super("cyclic dependency between services");
    this.message =
      (t = e.findCycleSlow()) != null
        ? t
        : `UNABLE to detect cycle, dumping graph: 
${e.toString()}`;
  }
}
export function cQ(e, t) {
  return e.invokeFunction((e) => e.get(t));
}
(a || (a = {})).UnknownDependency = "UnknownDependency";
export class nP {
  get services() {
    return this._services;
  }
  get onError() {
    if (!this._emitter) {
      this._emitter = new u.v();
    }
    return this._emitter.event;
  }
  createChild(e) {
    return new nP(e, this, this._enableTracing);
  }
  invokeFunction(e, ...t) {
    let r = d.C.traceInvocation(this._enableTracing, e);
    let a = false;
    try {
      return e(
        {
          get: (e) => {
            if (a) {
              throw Error(
                "service accessor is only valid during the invocation of its target method",
              );
            }
            let t = this._getOrCreateServiceInstance(e, r);
            if (!t) {
              this._handleError({
                errorType: "UnknownDependency",
                issuer: "service-accessor",
                dependencyId: `${e}`,
                message: `[invokeFunction] unknown service '${e}'`,
              });
            }
            return t;
          },
        },
        ...t,
      );
    } finally {
      a = true;
      r.stop();
    }
  }
  createInstance(e, ...t) {
    let r;
    let a;
    if (e instanceof i.d) {
      r = d.C.traceCreation(this._enableTracing, e.ctor);
      a = this._createInstance(e.ctor, e.staticArguments.concat(t), r);
    } else {
      r = d.C.traceCreation(this._enableTracing, e);
      a = this._createInstance(e, t, r);
    }
    r.stop();
    return a;
  }
  dispose() {
    let e;
    let t;
    for (let e of this._childs) {
      e.dispose();
    }
    for (let [r, a] of ((e = this._parent) == null || e._childs.delete(this),
    this._services.entries)) {
      if (
        !(a instanceof i.d) &&
        a !== this &&
        a.__origin__ !== this &&
        C.Xm(a)
      ) {
        switch (
          (t = this._services.ownerships) == null ? undefined : t.get(r)
        ) {
          case _.t.Reference:
            break;
          case _.t.Owned:
          default:
            a.dispose();
        }
      }
    }
  }
  _createInstance(e, t = [], r) {
    let a = m.B$(e).sort((e, t) => e.index - t.index);
    let o = [];
    for (let t of a) {
      let a = this._getOrCreateServiceInstance(t.id, r);
      if (!a) {
        this._handleError({
          errorType: "UnknownDependency",
          issuer: `create-instance-${e.name}`,
          dependencyId: `${t.id}`,
          message: `[createInstance] ${e.name} depends on UNKNOWN service ${t.id}.`,
        });
      }
      o.push(a);
    }
    let i = a.length > 0 ? a[0].index : t.length;
    if (t.length !== i) {
      p.V.trace(
        `[createInstance] First service dependency of ${e.name} at position ${i + 1} conflicts with ${t.length} static arguments`,
      );
      let r = i - t.length;
      t = r > 0 ? t.concat(Array(r)) : t.slice(0, i);
    }
    return Reflect.construct(e, t.concat(o));
  }
  _setServiceInstance(e, t) {
    if (this._services.get(e) instanceof i.d) {
      this._services.set(e, t);
    } else if (this._parent) {
      this._parent._setServiceInstance(e, t);
    } else {
      throw Error("illegalState - setting UNKNOWN service instance");
    }
  }
  _getServiceInstanceOrDescriptor(e) {
    let t = this._services.get(e);
    if (!t && this._parent) {
      return this._parent._getServiceInstanceOrDescriptor(e);
    }
    return t;
  }
  _getOrCreateServiceInstance(e, t) {
    if (this._globalGraph && this._globalGraphImplicitDependency) {
      this._globalGraph.insertEdge(
        this._globalGraphImplicitDependency,
        String(e),
      );
    }
    let r = this._getServiceInstanceOrDescriptor(e);
    if (r instanceof i.d) {
      return this._safeCreateAndCacheServiceInstance(e, r, t.branch(e, true));
    }
    t.branch(e, false);
    return r;
  }
  _safeCreateAndCacheServiceInstance(e, t, r) {
    if (this._activeInstantiations.has(e)) {
      throw Error(`illegal state - RECURSIVELY instantiating service '${e}'`);
    }
    this._activeInstantiations.add(e);
    try {
      return this._createAndCacheServiceInstance(e, t, r);
    } finally {
      this._activeInstantiations.delete(e);
    }
  }
  _createAndCacheServiceInstance(id, desc, _trace) {
    let a = new n.T((e) => e.id.toString());
    let o = 0;
    let c = [
      {
        id,
        desc,
        _trace,
      },
    ];
    while (c.length) {
      let t = c.pop();
      a.lookupOrInsertNode(t);
      if (o++ > 1000) {
        throw new f(a);
      }
      for (let r of m.B$(t.desc.ctor)) {
        let l;
        let o = this._getServiceInstanceOrDescriptor(r.id);
        if (!o) {
          this._handleError({
            errorType: "UnknownDependency",
            issuer: `create-service-${id}`,
            dependencyId: `${r.id}`,
            message: `[createInstance] ${id} depends on ${r.id} which is NOT registered.`,
          });
        }
        if ((l = this._globalGraph) != null) {
          l.insertEdge(String(t.id), String(r.id));
        }
        if (o instanceof i.d) {
          let e = {
            id: r.id,
            desc: o,
            _trace: t._trace.branch(r.id, true),
          };
          a.insertEdge(t, e);
          c.push(e);
        }
      }
    }
    while (true) {
      let e = a.leafs();
      if (e.length === 0) {
        if (!a.isEmpty()) {
          throw new f(a);
        }
        break;
      }
      for (let { data } of e) {
        if (this._getServiceInstanceOrDescriptor(data.id) instanceof i.d) {
          let e = this._createServiceInstanceWithOwner(
            data.id,
            data.desc.ctor,
            data.desc.staticArguments,
            data.desc.supportsDelayedInstantiation,
            data._trace,
          );
          this._setServiceInstance(data.id, e);
        }
        a.removeNode(data);
      }
    }
    return this._getServiceInstanceOrDescriptor(id);
  }
  _createServiceInstanceWithOwner(e, t, r = [], a, o) {
    if (this._services.get(e) instanceof i.d) {
      return this._createServiceInstance(e, t, r, a, o);
    }
    if (this._parent) {
      return this._parent._createServiceInstanceWithOwner(e, t, r, a, o);
    }
    throw Error(`illegalState - creating UNKNOWN service instance ${t.name}`);
  }
  _createServiceInstance(e, t, r = [], a, i) {
    if (!a) {
      return this._createService(t, r, i);
    }
    let n = new o.k(() => this._createService(t, r, i));
    return l.P(n, t);
  }
  _createService(e, t = [], r) {
    let a = this._createInstance(e, t, r);
    if (C.Xm(a)) {
      v.V5(a, this);
    }
    return a;
  }
  _handleError(e) {
    let t = this;
    while (t._parent) {
      t = t._parent;
    }
    if (t._emitter) {
      t._emitter.fire(e);
    }
    throw Error(e.message);
  }
  constructor(e = new c.a(), t, r = false) {
    this._childs = new Set();
    this._activeInstantiations = new Set();
    this._emitter = null;
    this._services = e;
    this._services.set(s._, this);
    this._parent = t;
    if (this._parent) {
      this._parent._childs.add(this);
    }
    this._enableTracing = r;
    if (r) {
      var a;
      this._globalGraph =
        (a = t == null ? undefined : t._globalGraph) != null
          ? a
          : new n.T((e) => e);
    }
  }
}
export { a as m4 };
