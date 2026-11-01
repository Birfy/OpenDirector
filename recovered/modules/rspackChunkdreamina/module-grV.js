import i from "oa";
import a from "bk";
import n from "Ut";
import o from "jp";
import s from "Hmo";
import m from "NaK";
import { V } from "./module-xbS_2.js";
import { B } from "./module-aw.js";
import { K } from "./module-Mn3.js";
import { j } from "./module-cb5.js";
import { O } from "./module-b1B.js";
class g {
  convert() {
    let e;
    const t = new n.DAImageGenerateAbilities();
    const r = new n.DAGenCoreParam();
    const i = new n.DAImageBlendAbility();
    const a = new n.DAPostEditParam();
    const c = new n.DAImageGenerateOption();
    r.prompt = ""
      .concat(Array(this._params.abilityList.length).fill("##").join(""))
      .concat(this._params.prompt);
    r.model = this._params.model;
    r.imageRatio =
      (e = o.B(this._params.largeImageInfo)) != null
        ? e
        : n.DAImageRatioType.ImageRatioType_11;
    r.largeImageInfo = B(this._params.largeImageInfo);
    r.sampleStrength = this._params.sampleStrength;
    r.intelligentRatio = this._params.isIntelligentAspectRatio;
    r.generateType = n.DAAIGCGenerateType.guiEditText;
    i.coreParam = r;
    i.posteditParam = a;
    i.historyOption = K(this._params.historyOption);
    const { abilityList, promptPlaceholderInfoList } = ((e) => {
      const { abilityList } = e;
      const r = new j();
      let i = 0;
      const promptPlaceholderInfoList_1 = [];
      const o = abilityList.map((e) => {
        if (s.w(e)) {
          var t = new n.DAImageBlendAbilityItem();
          t.name = n.DABlendAbilityName.ByteEdit;
          t.imageUriList = [e.source.imageUri];
          var r = m.c(e.source);
          t.imageList = r ? [r] : [];
          t.strength = e.strength;
          t.extra = e.extra ? JSON.stringify(e.extra) : undefined;
          if (e.mask) {
            var o = new n.DAImageByteEdit();
            o.mask = m.c(e.mask);
            o.origin = r;
            t.byteEdit = o;
          }
          promptPlaceholderInfoList_1.push(
            V({
              abilityIndex: i++,
            }),
          );
          return t;
        }
      });
      r.pack();
      return {
        abilityList: o.filter(Boolean),
        promptPlaceholderInfoList: promptPlaceholderInfoList_1,
      };
    })(this._params);
    i.abilityList = abilityList;
    i.promptPlaceholderInfoList = promptPlaceholderInfoList;
    c.generateAll = this._params.mode === n.DAAIGCMode.canvas;
    c.genCount = this._params.generateCount;
    c.isForceSingle = this._params.isForceSingleGeneration;
    t.blend = i;
    t.genOption = c;
    return t;
  }
  constructor(e) {
    this._params = e;
  }
}
class h extends O {
  getComponent(e) {
    let t;
    const r = new n.DAImageBaseComponent();
    r.generateType = n.DAImageGenerateType.blend;
    r.aigcMode = (t = e.mode) != null ? t : n.DAAIGCMode.workbench;
    r.abilities = new g(e).convert();
    return r;
  }
  _getExtends(e) {
    const t = super._getExtends(e);
    return a._(i._({}, t), {
      turnId: this._params.turnId,
      conversationId: this._params.conversationId,
    });
  }
  constructor(e) {
    super(e);
    this._params = e;
  }
}
export { h };
