import { DAAIGCGenerateType } from "./module-AB.js";
import { DAAIGCMode } from "./module-J4.js";
import { DAImageResource } from "./module-HS.js";
import { DAPostEditParam } from "./module-Eh.js";
import { DAVideoRefParam } from "./module-q2.js";
import { DADraft } from "./module-j8A.js";
import { DAUtils } from "./module-pz.js";
import { DADraftVerifyResult } from "./module-LH.js";
import f from "Rd";
export var DAGenSource;
let r;
f.getOrCreateInterface("builder_draft_builder", "DADraftBuildReq");
r = DAGenSource || (DAGenSource = {});
r[(r.CUT_SAME = 0)] = "CUT_SAME";
r[(r.RE_GEN = 1)] = "RE_GEN";
r[(r.RE_EDIT = 2)] = "RE_EDIT";
r[(r.NEW_GEN = 3)] = "NEW_GEN";
r[(r.POST_EDIT = 4)] = "POST_EDIT";
r[(r.NEXT_STEP = 5)] = "NEXT_STEP";
export class IDADraftBuilder {
  buildDraft(e, t, i) {
    let r;
    let s;
    let u;
    let f;
    let v;
    let m;
    let h;
    let g;
    let y;
    let b;
    let I = this.createComponent(t);
    I.genType = t.aigcGenType;
    I.metaData = t.metaData;
    I.aigcMode = (r = t.aigcMode) != null ? r : DAAIGCMode.workbench;
    I.localMockData = t.localMockData;
    let D = DAUtils.findChildNodes((e) => e instanceof DAPostEditParam, I);
    if (D != undefined) {
      D.itemId = (s = t.refInfo) == null ? undefined : s.refItemId;
      D.generateType =
        (f = (u = t.refInfo) == null ? undefined : u.aigcGenType) != null
          ? f
          : DAAIGCGenerateType.none;
      D.originHistoryId =
        (v = t.refInfo) == null ? undefined : v.originHistoryId;
    }
    let A = DAUtils.findChildNodes((e) => e instanceof DAVideoRefParam, I);
    if (A != undefined) {
      A.itemId = (m = t.refInfo) == null ? undefined : m.refItemId;
      A.generateType =
        (g = (h = t.refInfo) == null ? undefined : h.aigcGenType) != null
          ? g
          : DAAIGCGenerateType.none;
      A.originHistoryId =
        (y = t.refInfo) == null ? undefined : y.originHistoryId;
      A.generateId = (b = t.refInfo) == null ? undefined : b.generateId;
    }
    let _ = DADraft.createDraftForGenerateTask(i);
    if (e === DAGenSource.RE_GEN || e === DAGenSource.RE_EDIT) {
      _.replaceMainComponent(I);
    } else {
      _.setMainComponent(I);
    }
    return _;
  }
  verify(e) {
    let t = new DADraftVerifyResult();
    let i = e.findMainComponent();
    if (i === undefined) {
      t.appendError("主组件不能为空");
    }
    if ((i == null ? undefined : i.genType) === undefined) {
      t.appendError("主组件 gen_type 不能为空");
    }
    if ((i == null ? undefined : i.metaData) === undefined) {
      t.appendError("主组件 meta_data 不能为空");
    }
    e.childNodes().forEach((e) => {
      if (
        e instanceof DAImageResource &&
        !f.ForcedCast.toClass(e, DAImageResource).isValid()
      ) {
        t.appendError(
          `ImageResource \u{4E2D}\u{7684} uri \u{4E0D}\u{80FD}\u{4E3A}\u{7A7A}, id=${e.id}`,
        );
      }
    });
    this.verifySelf(e, t);
    return t;
  }
  verifySelf(e, t) {
    return t;
  }
}
