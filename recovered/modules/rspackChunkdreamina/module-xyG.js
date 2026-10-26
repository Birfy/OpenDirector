import i from "Ut";
import r from "Rb";
import a from "Dm";
import o from "H26";
import l from "L4";
import { Xd } from "./module-fRi.js";
import s from "OSE";
import d from "L6W";
import { Z } from "./module-KK1.js";
const m = 604800 * o.K;
const v = 3600 * o.K;
export function tc(e) {
  const { finishedTime } = e.statusModel.timeModel;
  if (finishedTime) {
    const n = new Date(finishedTime + m - v);
    n.setMinutes(0, 0, 0);
    return n.getTime();
  }
}
export function Sq(e) {
  const t = tc(e);
  return t !== undefined && Date.now() >= t;
}
export function IU(e) {
  let t;
  let n;
  if (
    (t =
      (n = e.generateFromDraftConfig) == null
        ? undefined
        : n.resolutionOptions.filter((e) => !e.disabled).map((e) => e.value)) !=
    null
  ) {
    return t;
  }
  return [];
}
export function bG(e) {
  let t;
  const n = IU(e);
  const i =
    (t = e.generateFromDraftConfig) == null ? undefined : t.defaultResolution;
  if (i && n.includes(i)) {
    return i;
  }
  return n[0];
}
export function lp(e) {
  return Xd(e);
}
export function M1(e, t) {
  let n;
  let o;
  let u;
  let d;
  let c;
  let m;
  const {
    modelConfig,
    resolution,
    itemId,
    isRegenerate = false,
    allowExpired = false,
  } = t;
  const b = (o = e.originalInput) == null ? undefined : o.videoGenInputs[0];
  a.X3(e.historyRecordId, "A draft source history is required");
  a.X3(e.draftContent, "A draft source content is required");
  a.X3(
    e.statusModel.statusCode === l.A.FinalSuccess ||
      (isRegenerate &&
        e.statusModel.recordStatus === r.DMLGenRecordStatus.Failed),
    "The source must be completed or a failed finalization",
  );
  a.X3(b, "The source video input is required");
  if (isRegenerate) {
    a.X3(
      e.lastProcessFlow === i.DAVideoProcessType.GenerateFromDraft,
      "The source must be a finalized draft result",
    );
    a.X3(
      ((c = e.refInfo) == null || (d = c.refRecordInfo) == null
        ? undefined
        : d.refHistoryId) && e.refInfo.refRecordInfo.refItemId,
      "The finalized draft source is required",
    );
  } else {
    a.X3(b.isDraftMode === true, "The source must be a draft generation");
    a.X3(s.X(e), "The source must be an original draft result");
    a.X3(
      (m = e.item) == null ? undefined : m.id,
      "A draft source item is required",
    );
    a.X3(
      !itemId || e.itemList.some((e) => e.id === itemId),
      "The draft source item does not belong to this history",
    );
  }
  a.X3(
    !Object.values((n = b.v2vOpt) != null ? n : {}).some(Boolean),
    "Post-edited videos cannot be finalized as drafts",
  );
  a.X3(
    ((u = e.originalInput) == null ? undefined : u.modelReqKey) ===
      modelConfig.key,
    "The draft model configuration does not match the source",
  );
  a.X3(
    IU(modelConfig).includes(resolution),
    "The final video resolution must be enabled in the model configuration",
  );
  if (!(isRegenerate || allowExpired)) {
    a.X3(!Sq(e), "The draft source has expired");
  }
}
export function ux(e, t) {
  M1(e, t);
  return Z(
    {
      input: e.originalInput,
      taskPayload: {
        taskExtra: e.taskExtra,
      },
      isRegenerate: t.isRegenerate,
      completedVideoDuration: e.videoDuration,
    },
    {
      resolution: t.resolution,
      batchNumber: 1,
      chargeInputVideoDuration: d.Ge(t.modelConfig.commercialConfig),
    },
  );
}
