import a from "NY";
import r from "QWK";
import s from "Kt";
import { V } from "./module-aF9.js";
export class Y {
  submitPdfAuditJob(t) {
    return a
      ._(function* () {
        let e;
        let i;
        let a;
        const r = new AbortController();
        const s = () => r.abort();
        if ((e = t.signal) == null ? undefined : e.aborted) {
          s();
        }
        if ((i = t.signal) != null) {
          i.addEventListener("abort", s, {
            once: true,
          });
        }
        const l = setTimeout(s, 60000);
        try {
          return yield this._repository.submitAuditJob(
            {
              scene: t.scene,
              resource: {
                uri: t.uri,
              },
            },
            {
              signal: r.signal,
            },
          );
        } finally {
          clearTimeout(l);
          if ((a = t.signal) != null) {
            a.removeEventListener("abort", s);
          }
        }
      })
      .call(this);
  }
  constructor(t) {
    this._containerService = t;
    this._repository = this._containerService.createInstance(V);
  }
}
Y = r.Cg(
  [
    r.Qj(0, s._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
  ],
  Y,
);
Object.defineProperty(exports, "Z", {
  enumerable: true,
  get: () => 60000,
});
