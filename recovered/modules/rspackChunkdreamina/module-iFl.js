import a from "NY";
import i from "oa";
import n from "QWK";
import o from "Qey";
import s from "o7";
import l from "aEB";
import c from "ONA";
import d from "aX";
import u from "e3";
import h from "Xbz";
import g from "vcU";
import m from "WUK";
import { j } from "./module-f0K.js";
import { t as t_1 } from "./module-FHo.js";
import { D } from "./module-CZp.js";
import f from "nF";
import { C } from "./module-pDK.js";
class y extends s.jG {
  applyPrompt(e, t) {
    const { contentGeneratorManager } = this._contentGeneratorService;
    this._setGeneratorTypeByParamsOrRecord(e);
    this._setModelByParams(e);
    const {
      data: { contentGeneratorType },
      activateContentGenerator,
    } = contentGeneratorManager;
    if (!j(contentGeneratorType)) {
      return void this._notificationService.warning(
        o.Ay.t("web_text_prompt_not_supported", {}, "当前生成器不支持提示词"),
      );
    }
    const n = t_1(e);
    if (n) {
      const { reportManager, dataAdapter } =
        this._contentGeneratorService.getSpecificGeneratorManager(
          contentGeneratorType,
        );
      reportManager.resetReferenceTemplateParams();
      reportManager.setResourceReportParams(
        t == null ? undefined : t.reportParams,
      );
      dataAdapter.applyPrompt(n);
      activateContentGenerator();
    }
  }
  applyRichPrompt(e, t) {
    return a
      ._(function* () {
        const { contentGeneratorManager } = this._contentGeneratorService;
        const {
          data: { contentGeneratorType },
          activateContentGenerator,
        } = contentGeneratorManager;
        const { dataAdapter, reportManager } =
          this._contentGeneratorService.getSpecificGeneratorManager(
            contentGeneratorType,
          );
        reportManager.setResourceReportParams(
          t == null ? undefined : t.reportParams,
        );
        const s = yield dataAdapter.applyRichPrompt(e);
        if (s.ok) {
          activateContentGenerator();
        }
        return s;
      })
      .call(this);
  }
  reeditGenerationData(e, t) {
    if (D(e)) {
      return Promise.resolve(this._reeditGenerationDataInWorkDetail(e, t));
    }
    if (c.l(e) || d.e(e)) {
      return this._reeditGenerationDataInRecord(e, t);
    }
    return Promise.resolve(m.P());
  }
  importReferencesInRecord(e, t, r) {
    return a
      ._(function* () {
        const a = f.T(e);
        if (!a) {
          return m.P();
        }
        const { contentGeneratorManager } = this._contentGeneratorService;
        const { activateContentGenerator, setContentGeneratorType } =
          contentGeneratorManager;
        const { reportManager, dataAdapter } =
          this._contentGeneratorService.getSpecificGeneratorManager(a);
        setContentGeneratorType(a);
        reportManager.resetReferenceTemplateParams();
        reportManager.setResourceReportParams(
          r == null ? undefined : r.reportParams,
        );
        const c = yield dataAdapter.importReferencesInRecord(e, t);
        if (c.ok) {
          activateContentGenerator();
        }
        return c;
      })
      .call(this);
  }
  importRecordAsReference(e, t, r, i) {
    return a
      ._(function* () {
        const { contentGeneratorManager } = this._contentGeneratorService;
        const {
          data: { contentGeneratorType },
          activateContentGenerator,
        } = contentGeneratorManager;
        const { reportManager, dataAdapter } =
          this._contentGeneratorService.getSpecificGeneratorManager(
            contentGeneratorType,
          );
        reportManager.setResourceReportParams(
          i == null ? undefined : i.reportParams,
        );
        if (u.A(e)) {
          reportManager.setReferenceImageFromRecord(e, t);
        }
        const c = yield dataAdapter.importRecordAsReference(e, t, r);
        if (c.ok) {
          activateContentGenerator();
        }
        return c;
      })
      .call(this);
  }
  importWorkDetailAsReference(e, t) {
    const { contentGeneratorManager } = this._contentGeneratorService;
    const {
      data: { contentGeneratorType },
      activateContentGenerator,
    } = contentGeneratorManager;
    const { reportManager, dataAdapter } =
      this._contentGeneratorService.getSpecificGeneratorManager(
        contentGeneratorType,
      );
    reportManager.setResourceReportParams(
      t == null ? undefined : t.reportParams,
    );
    reportManager.setReferenceTemplateFromWorkDetail(e);
    reportManager.setReferenceImageFromWorkDetail(e);
    const s = dataAdapter.importWorkDetailAsReference(e);
    if (s.ok) {
      activateContentGenerator();
    }
    return s;
  }
  importImageAsReferenceInWorkDetailVideo(e, t) {
    const { contentGeneratorManager } = this._contentGeneratorService;
    const {
      data: { contentGeneratorType },
      activateContentGenerator,
    } = contentGeneratorManager;
    const { reportManager, dataAdapter } =
      this._contentGeneratorService.getSpecificGeneratorManager(
        contentGeneratorType,
      );
    reportManager.setResourceReportParams(
      t == null ? undefined : t.reportParams,
    );
    reportManager.setReferenceTemplateFromWorkDetail(e);
    reportManager.setReferenceImageFromWorkDetail(e);
    const s = dataAdapter.importImageAsReferenceInWorkDetailVideo(e);
    if (s.ok) {
      activateContentGenerator();
    }
    return s;
  }
  importReferenceResources(e, t, r) {
    return a
      ._(function* () {
        const { contentGeneratorManager } = this._contentGeneratorService;
        const {
          data: { contentGeneratorType },
          activateContentGenerator,
        } = contentGeneratorManager;
        const { dataAdapter, reportManager } =
          this._contentGeneratorService.getSpecificGeneratorManager(
            contentGeneratorType,
          );
        reportManager.setResourceReportParams(
          r == null ? undefined : r.reportParams,
        );
        const l = yield dataAdapter.importReferenceResources(e, t);
        if (l.ok) {
          activateContentGenerator();
        }
        return l;
      })
      .call(this);
  }
  insertSubject(e, t) {
    const { contentGeneratorManager } = this._contentGeneratorService;
    const {
      data: { contentGeneratorType },
      activateContentGenerator,
    } = contentGeneratorManager;
    const n =
      this._contentGeneratorService.getSpecificGeneratorManager(
        contentGeneratorType,
      );
    activateContentGenerator();
    const o = n.insertSubject(e, t);
    if (o.ok) {
      activateContentGenerator();
    }
    return o;
  }
  _reeditGenerationDataInRecord(e, t) {
    return a
      ._(function* () {
        const { contentGeneratorManager } = this._contentGeneratorService;
        const { activateContentGenerator, setContentGeneratorType } =
          contentGeneratorManager;
        const o = f.T(e);
        if (!o) {
          return m.P();
        }
        setContentGeneratorType(o);
        const { dataAdapter, reportManager } =
          this._contentGeneratorService.getSpecificGeneratorManager(o);
        reportManager.resetReferenceTemplateParams();
        reportManager.setResourceReportParams(
          i._({}, h.T(e), t == null ? undefined : t.reportParams),
        );
        const c = yield dataAdapter.reeditGenerationDataInRecord(e);
        if (c.ok) {
          activateContentGenerator();
        }
        return c;
      })
      .call(this);
  }
  _reeditGenerationDataInWorkDetail(e, t) {
    const { contentGeneratorManager } = this._contentGeneratorService;
    const { activateContentGenerator, setContentGeneratorType } =
      contentGeneratorManager;
    const o = C(e);
    if (!o) {
      return m.P();
    }
    setContentGeneratorType(o);
    const { dataAdapter, reportManager } =
      this._contentGeneratorService.getSpecificGeneratorManager(o);
    reportManager.resetReferenceTemplateParams();
    reportManager.setResourceReportParams(
      i._({}, t == null ? undefined : t.reportParams, g.J(e)),
    );
    const c = dataAdapter.reeditGenerationDataInWorkDetail(e);
    if (c.ok) {
      activateContentGenerator();
    }
    return c;
  }
  _setGeneratorTypeByParamsOrRecord(e) {
    const { contentGeneratorManager } = this._contentGeneratorService;
    if ("generateType" in e && c.l(e)) {
      const r = f.T(e);
      if (!r) {
        return;
      }
      contentGeneratorManager.setContentGeneratorType(r);
      return;
    }
    if (e.contentGeneratorType) {
      contentGeneratorManager.setContentGeneratorType(e.contentGeneratorType);
    }
  }
  _setModelByParams(e) {
    if (
      !(
        "generateType" in e ||
        e.contentGeneratorType !== "image" ||
        !e.modelReqKey
      )
    ) {
      this._contentGeneratorService.imageGeneratorManager.setModelByKey(
        e.modelReqKey,
      );
    }
  }
  constructor(e, t) {
    super();
    this._contentGeneratorService = e;
    this._notificationService = t;
  }
}
export { y as c };
y = n.Cg(
  [
    n.Qj(1, l.Ot),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof Omit === "undefined" ? Object : Omit,
      l.Ot === undefined ? Object : l.Ot,
    ]),
  ],
  y,
);
