import i from "Ut";
import s from "Rb";
import a from "tl5";
import n from "Nux";
import o from "L4";
export function l(e) {
  const { submitId, generateType, workspaceId } = e;
  return {
    uniqueKey: submitId,
    generateType,
    idModel: {
      submitId,
      workspaceId,
    },
    itemList: [],
    statusModel: {
      statusCode: o.A.Init,
      recordStatus: s.DMLGenRecordStatus.Loading,
      timeModel: {
        createdTime: a.Jv(),
        estimatedQueueCostTime: n.Nr,
      },
    },
    assetOption: {
      hasFavorited: false,
      favoriteItemIdList: [],
    },
    draftContent: "",
    createPlatform: i.DADraftCreatedPlatform.WEB,
  };
}
