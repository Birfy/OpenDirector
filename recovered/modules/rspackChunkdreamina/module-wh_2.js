import r from "NY";
import o from "oa";
import n from "bk";
import a from "QWK";
import s from "o7";
import c from "K8";
import l from "aEB";
import u from "Kt";
import d from "iNQ";
import h from "bhi";
import v from "DsS";
import { a as a_1 } from "./module-U8C.js";
import { d as d_1 } from "./module-Oot.js";
import m from "KZT";
import { u as u_1 } from "./module-Tou.js";
const f = {
  toolbar: "click_at",
  placeholder: "preset_click",
  editor: "input_at",
};
export class Z extends s.jG {
  get metadata() {
    return this._metadataStore;
  }
  _reportSubjectListShow(subjectListShowFrom, modal) {
    const i = this._containerService.createInstance(h.o);
    i.setParams({
      action: v.r.SubjectListShow,
      subjectListShowFrom,
      modal,
    });
    i.report();
  }
  initSubjectSearch(e) {
    this._metadataStore.setSubjectSearchManager(e);
    e.searchByKeyword("");
  }
  validateSubjectEligibility(e) {
    let t;
    let i;
    let r;
    if (
      (t =
        (i = (r = this._options).validateSubjectEligibility) == null
          ? undefined
          : i.call(r, e)) != null
    ) {
      return t;
    }
    return c.nj();
  }
  constructor(e, t, i, a) {
    var s;
    var l;
    super();
    s = this;
    l = this;
    this._options = e;
    this._subjectFeatureContainerService = t;
    this._containerService = i;
    this._notificationService = a;
    this.openPanel = (e) => {
      var { entry } = e;
      return r._(function* () {
        const e = f[entry];
        const i = a_1(d_1(l._containerService));
        const { subjectOperationManager, subjectSearchManager } =
          yield l._subjectFeatureContainerService.getInstance();
        subjectOperationManager.setSubjectListShowFrom(e);
        if (i) {
          subjectOperationManager.setSubjectActionModal(i);
        }
        if (entry !== "editor") {
          yield subjectSearchManager.searchByKeyword("");
        }
        l._reportSubjectListShow(e, i);
      })();
    };
    this.validateInsertion = function () {
      let e;
      for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) {
        i[r] = arguments[r];
      }
      const [, o, n] = i;
      if ((n == null ? undefined : n.key) !== "subject") {
        return c.nj();
      }
      const a = (e = o.extra) == null ? undefined : e.subject;
      if (!a) {
        return c.nj();
      }
      const l = s.validateSubjectEligibility(a);
      if (l.ok) {
        return s._options.validateSubjectAddition(a);
      }
      return l;
    };
    this.allowInsert = (e, t, i) => {
      if (t.disabled) {
        return false;
      }
      var r = this.validateInsertion(e, t, i);
      return !!r.ok || (this._notificationService.warning(r.msg), false);
    };
    this.insertOption = (e, t) => {
      var i;
      var r;
      var a;
      var s;
      var c;
      var l;
      var { entry } = t;
      var [, d, h] = e.selection;
      if (
        m._(
          n._(o._({}, e), {
            allowInsert: this.allowInsert,
          }),
        )
      ) {
        var v =
          (h == null ? undefined : h.key) === "subject"
            ? (i = d.extra) == null
              ? undefined
              : i.subject
            : undefined;
        if (v) {
          if ((r = (a = this._options).onSubjectInserted) != null) {
            r.call(a, v);
          }
        }
        if (v == null ? undefined : v.subjectId) {
          if ((s = this._options.reportManager) != null) {
            s.reportAddSubject(entry, v.subjectId);
          }
        } else if (
          !(
            (l = this._options.reportManager) == null ||
            (c = l.reportAddTempSubject) == null
          )
        ) {
          c.call(l, entry);
        }
      }
    };
    this._metadataStore = new u_1(e);
  }
}
Z = a.Cg(
  [
    a.Qj(1, d.I),
    a.Qj(2, u._),
    a.Qj(3, l.Ot),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof ContentGeneratorReferenceMentionManagerOptions === "undefined"
        ? Object
        : ContentGeneratorReferenceMentionManagerOptions,
      d.I === undefined ? Object : d.I,
      u._ === undefined ? Object : u._,
      l.Ot === undefined ? Object : l.Ot,
    ]),
  ],
  Z,
);
