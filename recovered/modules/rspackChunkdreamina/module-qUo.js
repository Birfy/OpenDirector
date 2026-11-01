import i from "oa";
import a from "bk";
import n from "Ut";
import o from "jp";
import s from "vN";
import m from "MX";
import l from "us4";
import p from "Hmo";
import u from "k9s";
import d from "c6h";
import { I as I_1 } from "./module-PHr.js";
import g from "Qq";
import { V } from "./module-xbS_2.js";
import I from "NaK";
import _ from "ay";
import y from "t6";
import { B } from "./module-aw.js";
import v from "ad";
import { K } from "./module-Mn3.js";
import f from "Kq";
import { O } from "./module-b1B.js";
import D from "TC6";
import P from "gl";
import G from "js";
import R from "y9l";
import { O as O_1 } from "./module-oEh_2.js";
class C {
  get abilityIndex() {
    return this._abilityIndex;
  }
  get controlNetItem() {
    return this._controlNetItem;
  }
  tryMarkAbilityIndex(e) {
    return this._abilityIndex === undefined && ((this._abilityIndex = e), true);
  }
  collect(e) {
    let t;
    let r;
    let i;
    let a;
    let n;
    const { ability } = e;
    let imageList = [];
    let m;
    switch (true) {
      case P.q(ability.controlNet):
        imageList = [
          ability.controlNet.depth.image,
          ability.controlNet.depth.originImage,
          ability.controlNet.depth.previewImage,
        ];
        n = 0;
        break;
      case G.S(ability.controlNet):
        imageList = [
          ability.controlNet.canny.image,
          ability.controlNet.canny.originImage,
          ability.controlNet.canny.previewImage,
        ];
        n = 0;
        break;
      case R.Y(ability.controlNet):
        imageList = [
          ability.controlNet.pose.image,
          ability.controlNet.pose.originImage,
          ability.controlNet.pose.previewImage,
        ];
        n = 0;
    }
    this._collectDAImageBlendAbility({
      controlNet: {
        ...ability.controlNet,
        imageIndex:
          n !== undefined
            ? n +
              ((t =
                (i = this._controlNetItem.imageUriList) == null
                  ? undefined
                  : i.length) != null
                ? t
                : 0)
            : undefined,
        maskIndex:
          m !== undefined
            ? m +
              ((r =
                (a = this._controlNetItem.imageUriList) == null
                  ? undefined
                  : a.length) != null
                ? r
                : 0)
            : undefined,
      },
      imageList,
      extra: D.A(ability.extra, "imageIndex", "fitMode", "name"),
    });
  }
  collectBgPaint(e) {
    this._collectDAImageBlendAbility({
      controlNet: {
        name: "bgpaint",
        imageIndex: 1,
        maskIndex: 0,
      },
      imageList: [e.mask, e.image, e.originMask, e.originImage],
      extra: D.A(e.extra, "moveX", "moveY", "scale", "rotate"),
    });
  }
  pack() {
    this._controlNetItem.extra = JSON.stringify(this._controlNetExtras);
  }
  _collectDAImageBlendAbility(e) {
    const { controlNet, imageList, extra } = e;
    this._controlNetItem.controlNetList.push(O_1(controlNet));
    this._controlNetItem.imageUriList.push(...imageList.map((e) => e.imageUri));
    this._controlNetItem.imageList.push(...imageList.map((e) => I.c(e)));
    this._controlNetExtras.push(extra);
  }
  constructor() {
    this._controlNetItem = new n.DAImageBlendAbilityItem();
    this._controlNetItem.name = n.DABlendAbilityName.ControlNet;
    this._controlNetItem.imageUriList = [];
    this._controlNetItem.imageList = [];
    this._controlNetExtras = [];
    this._controlNetItem.controlNetList = [];
  }
}
class M {
  convert() {
    let e;
    const t = new n.DAImageGenerateAbilities();
    const r = new n.DAGenCoreParam();
    const i = new n.DAImageBlendAbility();
    const a = new n.DAPostEditParam();
    const w = new n.DAImageGenerateOption();
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
    r.quality = this._params.quality;
    r.background = this._params.background;
    r.stylize = this._params.stylize;
    i.unifiedEditInput = v.TX(this._params.unifiedEditInput);
    i.coreParam = r;
    i.posteditParam = a;
    i.historyOption = K(this._params.historyOption);
    const { abilityList, promptPlaceholderInfoList } = ((e) => {
      const { abilityList } = e;
      const r = abilityList.some(s.U);
      const i = new C();
      let a = 0;
      const promptPlaceholderInfoList_1 = [];
      const A = abilityList.map((ability) => {
        var t = new n.DAImageBlendAbilityItem();
        switch (true) {
          case s.U(ability):
            t.name = n.DABlendAbilityName.StyleReference;
            t.styleReference = g.r(ability.styleReference);
            promptPlaceholderInfoList_1.push(
              V({
                abilityIndex: a++,
              }),
            );
            return t;
          case m.e(ability):
            t.name = n.DABlendAbilityName.IpKeep;
            t.imageUriList = [ability.source.imageUri];
            var A = I.c(ability.source);
            t.imageList = A ? [A] : [];
            t.ipKeepList = ability.ipData.map(_.d);
            promptPlaceholderInfoList_1.push(
              V({
                abilityIndex: a++,
              }),
            );
            return t;
          case l.R(ability):
            t.name = n.DABlendAbilityName.FaceGan;
            t.imageUriList = [ability.source.imageUri];
            var v = I.c(ability.source);
            t.imageList = v ? [v] : [];
            t.faceRecognizeList = [ability.faceData.map(y.E)];
            promptPlaceholderInfoList_1.push(
              V({
                abilityIndex: a++,
              }),
            );
            return t;
          case p.w(ability):
            t.name = n.DABlendAbilityName.ByteEdit;
            t.imageUriList = [ability.source.imageUri];
            var b = I.c(ability.source);
            t.imageList = b ? [b] : [];
            t.strength = ability.strength;
            t.extra = ability.extra ? JSON.stringify(ability.extra) : undefined;
            if (ability.mask) {
              var w = new n.DAImageByteEdit();
              w.mask = I.c(ability.mask);
              w.origin = b;
              t.byteEdit = w;
            }
            promptPlaceholderInfoList_1.push(
              V({
                abilityIndex: a++,
              }),
            );
            return t;
          case u.d(ability):
            if (r) {
              var D = i.abilityIndex === undefined;
              i.collectBgPaint(ability);
              if (!i.tryMarkAbilityIndex(a++)) {
                a--;
              }
              promptPlaceholderInfoList_1.push(
                V({
                  abilityIndex: i.abilityIndex,
                }),
              );
              if (D) {
                return i.controlNetItem;
              }
            } else {
              t.name = n.DABlendAbilityName.BgPaint;
              t.imageUriList = [
                ability.mask.imageUri,
                ability.image.imageUri,
                ability.originMask.imageUri,
                ability.originImage.imageUri,
              ];
              t.imageList = [
                I.c(ability.mask),
                I.c(ability.image),
                I.c(ability.originMask),
                I.c(ability.originImage),
              ].filter(Boolean);
              t.extra = JSON.stringify(ability.extra);
              promptPlaceholderInfoList_1.push(
                V({
                  abilityIndex: a++,
                }),
              );
            }
            return t;
          case d.q(ability):
            var P = i.abilityIndex === undefined;
            i.collect({
              ability,
            });
            if (!i.tryMarkAbilityIndex(a++)) {
              a--;
            }
            promptPlaceholderInfoList_1.push(
              V({
                abilityIndex: i.abilityIndex,
              }),
            );
            if (P) {
              return i.controlNetItem;
            }
            break;
          case I_1(ability):
            t.name = n.DABlendAbilityName.StyleCode;
            t.commonAsset = f.I({
              assetType: n.DACommonAssetType.Style,
              assetCode: ability.code,
            });
            promptPlaceholderInfoList_1.push(
              V({
                abilityIndex: a++,
              }),
            );
            return t;
        }
      });
      i.pack();
      return {
        abilityList: A.filter(Boolean),
        promptPlaceholderInfoList: promptPlaceholderInfoList_1,
      };
    })(this._params);
    i.abilityList = abilityList;
    i.promptPlaceholderInfoList = promptPlaceholderInfoList;
    w.generateAll = false;
    w.genCount = this._params.generateCount;
    w.isForceSingle = this._params.isForceSingleGeneration;
    t.blend = i;
    t.genOption = w;
    return t;
  }
  constructor(e) {
    this._params = e;
  }
}
export class Z extends O {
  getComponent(e) {
    let t;
    const r = new n.DAImageBaseComponent();
    r.generateType = n.DAImageGenerateType.blend;
    r.aigcMode = (t = e.mode) != null ? t : n.DAAIGCMode.workbench;
    r.abilities = new M(e).convert();
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
