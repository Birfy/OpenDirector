import i from "oa";
import s from "bk";
import a from "Ut";
import n from "JBM";
import { B } from "./module-pk.js";
export function P(e) {
  let t;
  let r;
  let d;
  let c;
  let u;
  let l;
  let _;
  const {
    isRegenerate,
    targetAIGCData,
    submitId,
    taskPayload,
    isPostEdit,
    isDraftMode,
  } = e;
  const enterFrom =
    (t =
      (r =
        taskPayload == null || (l = taskPayload.taskExtra) == null
          ? undefined
          : l.enterFrom) != null
        ? r
        : targetAIGCData == null
          ? undefined
          : targetAIGCData.taskExtra.enterFrom) != null
      ? t
      : "click";
  const sceneOptions = B(
    targetAIGCData == null ? undefined : targetAIGCData.taskExtra,
    taskPayload == null ? undefined : taskPayload.taskExtra,
  );
  const originSubmitId =
    (d =
      (c =
        targetAIGCData == null
          ? undefined
          : targetAIGCData.taskExtra.originSubmitId) != null
        ? c
        : targetAIGCData == null
          ? undefined
          : targetAIGCData.idModel.submitId) != null
      ? d
      : submitId;
  const videoStage = ((e) => {
    let t;
    let r;
    const {
      isDraftMode,
      isPostEdit,
      isRegenerate,
      targetAIGCData,
      taskPayload,
    } = e;
    if (
      (taskPayload == null || (t = taskPayload.taskExtra) == null
        ? undefined
        : t.videoProcessType) === a.DAVideoProcessType.GenerateFromDraft
    ) {
      return "final";
    }
    if ((isPostEdit || isRegenerate) && targetAIGCData) {
      return n.l.getAIGCVideoStage(targetAIGCData);
    }
    if (isPostEdit) {
      if (taskPayload == null || (r = taskPayload.taskExtra) == null) {
        return undefined;
      }
      return r.videoStage;
    }
    if (isDraftMode) {
      return "draft";
    }
  })({
    isDraftMode,
    isPostEdit,
    isRegenerate,
    targetAIGCData,
    taskPayload,
  });
  return {
    taskPayload: {
      taskExtra: s._(
        i._(
          s._(
            i._(
              {
                promptSource: "custom",
                isDefaultSeed: 1,
                originSubmitId,
              },
              targetAIGCData == null ? undefined : targetAIGCData.taskExtra,
              targetAIGCData && isPostEdit
                ? {
                    originId:
                      (u = targetAIGCData.taskExtra.originId) != null
                        ? u
                        : (_ = targetAIGCData.itemList[0]) == null
                          ? undefined
                          : _.id,
                    previewSubmitId: targetAIGCData.idModel.submitId,
                  }
                : {
                    originId: undefined,
                    previewSubmitId: undefined,
                  },
            ),
            {
              isRegenerate,
            },
          ),
          taskPayload == null ? undefined : taskPayload.taskExtra,
        ),
        {
          enterFrom,
          sceneOptions,
          videoStage,
        },
      ),
    },
  };
}
