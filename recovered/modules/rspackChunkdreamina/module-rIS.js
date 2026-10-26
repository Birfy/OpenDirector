import r from "NY";
import o from "QWK";
import n from "o7";
import a from "K8";
import s from "Kt";
import c from "Pet";
import l from "WiH";
import u from "ZX";
import d from "Bf";
import h from "Uu7";
import v from "Xik";
import _ from "at";
import p from "K4";
import m from "rGr";
import g from "dw4";
class f {
  setAuditing(e, t, i) {
    this._ensureAuditRecord(e, t).auditing = i;
  }
  setAuditResult(e, t, i) {
    this._ensureAuditRecord(e, t).result = i;
  }
  setSubjectAuditing(e, t, i) {
    this._ensureSubjectAuditRecord(e, t).auditing = i;
  }
  setSubjectAuditResult(e, t, i) {
    this._ensureSubjectAuditRecord(e, t).result = i;
  }
  _ensureAuditRecord(e, t) {
    let i;
    let r;
    if ((i = this.resourceAuditRecords)[e] == null) {
      i[e] = {};
    }
    if ((r = this.resourceAuditRecords[e])[t] == null) {
      r[t] = {
        auditing: false,
      };
    }
    return this.resourceAuditRecords[e][t];
  }
  _ensureSubjectAuditRecord(e, t) {
    let i;
    let r;
    if ((i = this.subjectAuditRecords)[e] == null) {
      i[e] = {};
    }
    if ((r = this.subjectAuditRecords[e])[t] == null) {
      r[t] = {
        auditing: false,
      };
    }
    return this.subjectAuditRecords[e][t];
  }
  constructor() {
    this.resourceAuditRecords = {};
    this.subjectAuditRecords = {};
    g.l_(this);
  }
}
function y(e) {
  return (
    (e == null ? undefined : e.longReasonDetail) ||
    (e == null ? undefined : e.reasonDetail)
  );
}
export class K extends n.jG {
  get data() {
    return this._dataStore;
  }
  auditResources(e, t) {
    return r
      ._(function* () {
        if (!v.Y) {
          return {
            status: "skipped",
          };
        }
        let i;
        const o = this.getAuditableResources(e);
        const { scene, modelKey } = t;
        const c = (i = this._getPreAuditPolicy(t)) != null ? i : "";
        const l = o.filter((e) => {
          if (typeof e.uri !== "string") {
            return true;
          }
          var t;
          var i =
            (t = this._dataStore.resourceAuditRecords[c]) == null
              ? undefined
              : t[e.uri];
          return (
            !(i == null ? undefined : i.result) &&
            !(i == null ? undefined : i.auditing)
          );
        });
        if (!l.length) {
          return this._resolveResourcesOutcome(o, c);
        }
        yield this._dreaminaAuditInteractionService.ensureAuditAcknowledged();
        yield Promise.all(
          l.map((e) =>
            r
              ._(function* () {
                let t;
                const i = (t = e.uri) != null ? t : yield e.resolveUri();
                if (i) {
                  this._dataStore.setAuditing(c, i, true);
                }
              })
              .call(this),
          ),
        );
        const d = l.flatMap(this._transformResourceToAuditMaterials);
        const h = yield this._dreaminaAuditService.executeAudit({
          scene,
          modelKey,
          materialList: d,
        });
        this._reportContentAuditStatus(d, h);
        l.forEach((e) => {
          if (e.uri) {
            this._dataStore.setAuditing(c, e.uri, false);
          }
        });
        if (h.ok) {
          if (this._hasAuditRejection(h.value) && t.notifyRejection !== false) {
            this._dreaminaAuditInteractionService.notifyAuditRejection();
          }
          d.forEach((e, t) => {
            var i;
            var r;
            var o = h.value[t];
            this._dataStore.setAuditResult(
              c,
              e.uri,
              o.auditDecision === u.Mw.Pass
                ? a.TZ(o)
                : a.xz(
                    (i = o.errorCode) != null ? i : -1,
                    (r = y(o)) != null ? r : "",
                  ),
            );
          });
        } else {
          this._dreaminaAuditInteractionService.notifyAuditRequestFailure();
        }
        return this._resolveResourcesOutcome(o, c);
      })
      .call(this);
  }
  auditResourcesWithOutcome(e, t) {
    return this.auditResources(e, t);
  }
  auditSubjects(e, t) {
    return r
      ._(function* () {
        if (v.Y) {
          let i;
          const { scene, modelKey } = t;
          const n = (i = this._getSubjectPreAuditPolicy(t)) != null ? i : "";
          const s = Array.from(
            new Map(
              e.map((e) => [this._getSubjectContentDataId(e), e]),
            ).values(),
          ).filter((e) => {
            var t;
            var i =
              (t = this._dataStore.subjectAuditRecords[n]) == null
                ? undefined
                : t[this._getSubjectContentDataId(e)];
            return (
              !(i == null ? undefined : i.result) &&
              !(i == null ? undefined : i.auditing)
            );
          });
          if (s.length) {
            s.forEach((e) => {
              this._dataStore.setSubjectAuditing(
                n,
                this._getSubjectContentDataId(e),
                true,
              );
            });
            const c = s.map(this._transformSubjectContentToAuditMaterial);
            const l = yield this._dreaminaAuditService.executeAudit({
              scene,
              modelKey,
              materialList: c,
            });
            this._reportSubjectAuditStatus(c, l);
            s.forEach((e) => {
              this._dataStore.setSubjectAuditing(
                n,
                this._getSubjectContentDataId(e),
                false,
              );
            });
            if (!l.ok) {
              return void this._dreaminaAuditInteractionService.notifyAuditRequestFailure();
            }
            if (
              this._hasAuditRejection(l.value) &&
              t.notifyRejection !== false
            ) {
              this._dreaminaAuditInteractionService.notifyAuditRejection();
            }
            c.forEach((e, t) => {
              var i;
              var r;
              var o = l.value[t];
              this._dataStore.setSubjectAuditResult(
                n,
                e.subjectDataId,
                o.auditDecision === u.Mw.Pass
                  ? a.TZ(o)
                  : a.xz(
                      (i = o.errorCode) != null ? i : -1,
                      (r = y(o)) != null ? r : "",
                    ),
              );
            });
          }
        }
      })
      .call(this);
  }
  getAuditableResources(e) {
    return e.filter(
      (e) => e instanceof _.Vl || e instanceof p.p || e instanceof m.e,
    );
  }
  createResourceAuditSnapshot(e, t) {
    if (v.Y) {
      let i;
      const preAuditPolicy = (i = this._getPreAuditPolicy(t)) != null ? i : "";
      const records = this.getAuditableResources(e).flatMap((e) => {
        var t;
        var i;
        var o = this._transformResourceToAuditMaterials(e);
        if (o.length === 0) {
          return [];
        }
        var [n] = o;
        var a =
          (i = this._dataStore.resourceAuditRecords[preAuditPolicy]) == null ||
          (t = i[n.uri]) == null
            ? undefined
            : t.result;
        if (a) {
          return [
            {
              resourceId: e.id,
              material: n,
              auditData: a.ok
                ? a.value
                : {
                    auditDecision: u.Mw.Reject,
                    errorCode: a.code,
                    reasonDetail: a.msg,
                  },
            },
          ];
        }
        return [];
      });
      return {
        scene: t.scene,
        modelKey: t.modelKey,
        preAuditPolicy,
        records,
      };
    }
  }
  restoreResourceAuditSnapshot(e, t, i) {
    if (
      v.Y &&
      e &&
      e.scene === i.scene &&
      e.modelKey === i.modelKey &&
      e.preAuditPolicy === ((r = this._getPreAuditPolicy(i)) != null ? r : "")
    ) {
      var r;
      const o = new Map(this.getAuditableResources(t).map((e) => [e.id, e]));
      e.records.forEach((t) => {
        var i;
        var r;
        var n = o.get(t.resourceId);
        var s = n ? this._transformResourceToAuditMaterials(n)[0] : undefined;
        if (
          s &&
          s.materialType === t.material.materialType &&
          s.uri === t.material.uri &&
          (t.auditData.auditDecision === u.Mw.Pass ||
            t.auditData.auditDecision === u.Mw.Reject)
        ) {
          this._dataStore.setAuditing(e.preAuditPolicy, s.uri, false);
          this._dataStore.setAuditResult(
            e.preAuditPolicy,
            s.uri,
            t.auditData.auditDecision === u.Mw.Pass
              ? a.TZ(t.auditData)
              : a.xz(
                  (i = t.auditData.errorCode) != null ? i : -1,
                  (r = y(t.auditData)) != null ? r : "",
                ),
          );
        }
      });
    }
  }
  hasRejectedAudit(e) {
    if (!v.Y) {
      return false;
    }
    const {
      resources,
      preAuditPolicy = "",
      subjectContents,
      subjectPreAuditPolicy,
    } = e;
    return (
      !!this.getAuditableResources(resources).some((e) => {
        if (typeof e.uri !== "string") {
          return false;
        }
        var t;
        var r;
        var o =
          (r = this._dataStore.resourceAuditRecords[preAuditPolicy]) == null ||
          (t = r[e.uri]) == null
            ? undefined
            : t.result;
        return o !== undefined && !o.ok;
      }) ||
      (!!subjectContents &&
        subjectPreAuditPolicy !== undefined &&
        subjectContents.some((e) => {
          var t;
          var i;
          var r =
            (i = this._dataStore.subjectAuditRecords[subjectPreAuditPolicy]) ==
              null || (t = i[this._getSubjectContentDataId(e)]) == null
              ? undefined
              : t.result;
          return r !== undefined && !r.ok;
        }))
    );
  }
  _resolveResourcesOutcome(e, t) {
    if (!e.length) {
      return {
        status: "skipped",
      };
    }
    const i = e.map((e) => {
      var i;
      var r;
      if (typeof e.uri === "string") {
        if (
          (r = this._dataStore.resourceAuditRecords[t]) == null ||
          (i = r[e.uri]) == null
        ) {
          return undefined;
        }
        return i.result;
      }
    });
    const r = i.find((e) => e && !e.ok);
    if (r && !r.ok) {
      return {
        status: "rejected",
        reasonDetail: r.msg,
      };
    }
    if (
      i.every((e) => {
        if (e == null) {
          return undefined;
        }
        return e.ok;
      })
    ) {
      return {
        status: "passed",
      };
    }
    return {
      status: "failed",
    };
  }
  _getPreAuditPolicy(e) {
    let t;
    let i;
    const { modelKey, scene } = e;
    if (modelKey) {
      if (scene === u.EZ.ImageGenerate) {
        if (
          (t =
            this._dreaminaModelConfigFeatureService.getImageModelConfig(
              modelKey,
            )) == null
        ) {
          return undefined;
        }
        return t.preAuditPolicy;
      }
      if (scene === u.EZ.VideoGenerate) {
        if (
          (i =
            this._dreaminaModelConfigFeatureService.getVideoModelConfig(
              modelKey,
            )) == null
        ) {
          return undefined;
        }
        return i.preAuditPolicy;
      }
    }
  }
  _hasAuditRejection(e) {
    return e.some((e) => e.auditDecision === u.Mw.Reject);
  }
  _getSubjectContentDataId(e) {
    return e.subject.dataId;
  }
  _reportContentAuditStatus(e, t) {
    const i = {
      [u.Xx.Image]: "image",
      [u.Xx.Video]: "video",
      [u.Xx.Audio]: "audio",
    };
    e.forEach((e, r) => {
      var o = this._containerService.createInstance(l.g);
      var n = t.ok ? t.value[r] : undefined;
      var a = t.ok ? y(n) : t.msg;
      o.setParams({
        status:
          (n == null ? undefined : n.auditDecision) === u.Mw.Pass
            ? "success"
            : "fail",
        failReason: a,
        reviewType: i[e.materialType],
      });
      o.report();
    });
  }
  _reportSubjectAuditStatus(e, t) {
    e.forEach((e, i) => {
      var r = this._containerService.createInstance(l.g);
      var o = t.ok ? t.value[i] : undefined;
      var n = t.ok ? y(o) : t.msg;
      r.setParams({
        status:
          (o == null ? undefined : o.auditDecision) === u.Mw.Pass
            ? "success"
            : "fail",
        failReason: n,
        reviewType: "subject",
      });
      r.report();
    });
  }
  _getSubjectPreAuditPolicy(e) {
    let t;
    let i;
    const { modelKey, scene } = e;
    if (modelKey) {
      if (scene === u.EZ.ImageGenerate) {
        if (
          (t =
            this._dreaminaModelConfigFeatureService.getImageModelConfig(
              modelKey,
            )) == null
        ) {
          return undefined;
        }
        return t.subjectPreAuditPolicy;
      }
      if (scene === u.EZ.VideoGenerate) {
        if (
          (i =
            this._dreaminaModelConfigFeatureService.getVideoModelConfig(
              modelKey,
            )) == null
        ) {
          return undefined;
        }
        return i.subjectPreAuditPolicy;
      }
    }
  }
  constructor(e, t, i, r) {
    super();
    this._dreaminaAuditService = e;
    this._dreaminaAuditInteractionService = t;
    this._dreaminaModelConfigFeatureService = i;
    this._containerService = r;
    this._dataStore = new f();
    this._transformResourceToAuditMaterials = (e) => {
      var t;
      var i = {
        image: u.Xx.Image,
        video: u.Xx.Video,
        audio: u.Xx.Audio,
      };
      var { uri } = e;
      if (uri) {
        return [
          {
            materialType: i[e.type],
            uri,
            itemId: (t = e.remoteExtraInfo) == null ? undefined : t.aigcItemId,
          },
        ];
      }
      return [];
    };
    this._transformSubjectContentToAuditMaterial = (e) => ({
      materialType: u.Xx.Subject,
      subjectDataId: this._getSubjectContentDataId(e),
    });
  }
}
K = o.Cg(
  [
    o.Qj(0, d.n),
    o.Qj(1, h.R),
    o.Qj(2, c.J),
    o.Qj(3, s._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      d.n === undefined ? Object : d.n,
      h.R === undefined ? Object : h.R,
      c.J === undefined ? Object : c.J,
      s._ === undefined ? Object : s._,
    ]),
  ],
  K,
);
