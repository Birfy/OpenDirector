let a;
let o;
o = a || (a = {});
o[(o.None = 0)] = "None";
o[(o.Creation = 1)] = "Creation";
o[(o.Invocation = 2)] = "Invocation";
o[(o.Branch = 3)] = "Branch";
export class C {
  static traceInvocation(e, t) {
    if (e) {
      return new C(
        2,
        t.name || Error().stack.split("\n").slice(3, 4).join("\n"),
      );
    }
    return C._None;
  }
  static traceCreation(e, t) {
    if (e) {
      return new C(1, t.name);
    }
    return C._None;
  }
  branch(e, t) {
    let r = new C(3, e.toString());
    this._dep.push([e, t, r]);
    return r;
  }
  stop() {
    let e = Date.now() - this._start;
    C._totals += e;
    let t = false;
    let r = [
      `${this._type === 1 ? "CREATE" : "CALL"} ${this._name}`,
      `${(function e(r, a) {
        let o = [];
        let i = Array(r + 1).join("	");
        for (let [n, c, l] of a._dep) {
          if (c && l) {
            t = true;
            o.push(`${i}CREATES -> ${n}`);
            let a = e(r + 1, l);
            if (a) {
              o.push(a);
            }
          } else {
            o.push(`${i}uses -> ${n}`);
          }
        }
        return o.join("\n");
      })(1, this)}`,
      `DONE, took ${e.toFixed(2)}ms (grand total ${C._totals.toFixed(2)}ms)`,
    ];
    if (e > 2 || t) {
      C.all.add(r.join("\n"));
    }
  }
  constructor(e, t) {
    this._start = Date.now();
    this._dep = [];
    this._type = e;
    this._name = t;
  }
}
C.all = new Set();
C._None = new (class extends C {
  stop() {}
  branch() {
    return this;
  }
  constructor() {
    super(0, null);
  }
})();
C._totals = 0;
