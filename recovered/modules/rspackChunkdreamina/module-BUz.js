import n from "oa";
import a from "bk";
import o from "qa";
import r from "Ut";
import l from "Dm";
import { A as A_1 } from "./module-sC.js";
import { o as o_1 } from "./module-YB_2.js";
import { o as o_2 } from "./module-R9c.js";
import { m as m_1 } from "./module-vI1.js";
import g from "LLl";
export function m(e) {
  l.X3(g.r(e.commonAttr.effectType), "data is not effect item image");
  l.X3(e.image, "image is not exist");
  let t;
  let i;
  let p;
  let unifiedEditInput;
  const v = ((t = e.aigcDraft) == null ? undefined : t.content)
    ? new r.DADraft(e.aigcDraft.content)
    : undefined;
  const f = new o_1(v, e.aigcDraftResources);
  const I = f.blendImageInfo(e);
  const y = f.textToImageParams(
    (i = e.aigcImageParams) == null ? undefined : i.text2imageParams,
  );
  const { modelConfig } = y;
  const text2imageParams = o._(y, ["modelConfig"]);
  const proHDParams = f.proHDParams();
  const usedPostEditTypes = f.getUsedPostEditTypes();
  const blendImageInfo = ((e, t) => {
    if (!(e == null ? undefined : e.length)) {
      return e;
    }
    const i = e.filter((e) => e.abilityName === r.DABlendAbilityName.StyleCode);
    const n =
      t == null
        ? undefined
        : t.find((e) => e.assetType === r.DACommonAssetType.Style);
    if (!n) {
      return [
        ...i,
        ...e.filter((e) => e.abilityName !== r.DABlendAbilityName.StyleCode),
      ];
    }
    const { assetCode, referImageList } = n;
    const l = {
      code: assetCode,
      abilityName: r.DABlendAbilityName.StyleCode,
      referImageList,
    };
    const d = e.filter(
      (e) =>
        e.abilityName !== r.DABlendAbilityName.StyleCode &&
        e.abilityName !== r.DABlendAbilityName.StyleReference,
    );
    return [l, ...i, ...d];
  })(I, (p = e.aigcImageParams) == null ? undefined : p.publishAssetList);
  const referencePrompt = ((e) => {
    const { aigcImageParams } = e;
    if (aigcImageParams && aigcImageParams.imageType === o_2.Group_Image) {
      return aigcImageParams.referencePrompt;
    }
  })(e);
  if (v) {
    unifiedEditInput = A_1(v, e.aigcDraftResources);
  }
  return a._(n._({}, m_1(e)), {
    referencePrompt,
    proHDParams,
    blendImageInfo,
    usedPostEditTypes,
    text2imageParams,
    modelInfo: f.hasModel() ? modelConfig : undefined,
    image: e.image,
    unifiedEditInput,
  });
}
