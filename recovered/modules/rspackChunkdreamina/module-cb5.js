import i from "TC6";
import a from "Ut";
import n from "gl";
import o from "js";
import s from "y9l";
import m from "NaK";
import { O } from "./module-oEh_2.js";
export class j {
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
    let a;
    let m;
    let l;
    const { ability } = e;
    let imageList = [];
    let d;
    switch (true) {
      case n.q(ability.controlNet):
        imageList = [
          ability.controlNet.depth.image,
          ability.controlNet.depth.originImage,
          ability.controlNet.depth.previewImage,
        ];
        l = 0;
        break;
      case o.S(ability.controlNet):
        imageList = [
          ability.controlNet.canny.image,
          ability.controlNet.canny.originImage,
          ability.controlNet.canny.previewImage,
        ];
        l = 0;
        break;
      case s.Y(ability.controlNet):
        imageList = [
          ability.controlNet.pose.image,
          ability.controlNet.pose.originImage,
          ability.controlNet.pose.previewImage,
        ];
        l = 0;
    }
    this._collectDAImageBlendAbility({
      controlNet: {
        ...ability.controlNet,
        imageIndex:
          l !== undefined
            ? l +
              ((t =
                (a = this._controlNetItem.imageUriList) == null
                  ? undefined
                  : a.length) != null
                ? t
                : 0)
            : undefined,
        maskIndex:
          d !== undefined
            ? d +
              ((r =
                (m = this._controlNetItem.imageUriList) == null
                  ? undefined
                  : m.length) != null
                ? r
                : 0)
            : undefined,
      },
      imageList,
      extra: i.A(ability.extra, "imageIndex", "fitMode", "name"),
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
      extra: i.A(e.extra, "moveX", "moveY", "scale", "rotate"),
    });
  }
  pack() {
    this._controlNetItem.extra = JSON.stringify(this._controlNetExtras);
  }
  _collectDAImageBlendAbility(e) {
    const { controlNet, imageList, extra } = e;
    this._controlNetItem.controlNetList.push(O(controlNet));
    this._controlNetItem.imageUriList.push(...imageList.map((e) => e.imageUri));
    this._controlNetItem.imageList.push(...imageList.map((e) => m.c(e)));
    this._controlNetExtras.push(extra);
  }
  constructor() {
    this._controlNetItem = new a.DAImageBlendAbilityItem();
    this._controlNetItem.name = a.DABlendAbilityName.ControlNet;
    this._controlNetItem.imageUriList = [];
    this._controlNetItem.imageList = [];
    this._controlNetExtras = [];
    this._controlNetItem.controlNetList = [];
  }
}
