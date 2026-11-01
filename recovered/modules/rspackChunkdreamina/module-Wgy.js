import o from "Ut";
import {
  TMAIGCEffectItem,
  TMAIGCGenerateType,
  TMAIGCImageMetaData,
  TMAIGCStyleType,
  TMImageRatioType,
} from "./module-Uw.js";
import a from "./module-Rd.js";
export class ADTODA_ImageTransformer {
  constructor(e, t) {
    this.draft = new o.DADraft();
    this.imageMetaData = new TMAIGCImageMetaData(e);
    if (t != undefined) {
      this.effectItem = new TMAIGCEffectItem(t);
    }
  }
  convertToDraft() {
    let e = this.calculateGenerateTaskList();
    e.reverse();
    e.forEach((e) => {
      if (e === TMAIGCGenerateType.Text2Image) {
        return this.processText2ImageToDraft();
      }
      if (e === TMAIGCGenerateType.NormalHd) {
        return this.processNormalHD();
      }
      if (e === TMAIGCGenerateType.SuperResolution) {
        return this.processSuperResolution();
      }
      if (e === TMAIGCGenerateType.InPainting) {
        return this.processInPainting();
      }
      if (e === TMAIGCGenerateType.InPaintingRemove) {
        return this.processInPaintingRemove();
      } else if (e === TMAIGCGenerateType.OutPainting) {
        return this.processOutPainting();
      } else if (e === TMAIGCGenerateType.Blend) {
        return this.processBlend();
      } else if (e === TMAIGCGenerateType.InPaintAndOutPaint) {
        return this.processInPaintingAndOutPainting();
      } else if (e === TMAIGCGenerateType.ByteEditPainting) {
        return this.processByteEditingPainting();
      }
    });
    return this.draft;
  }
  calculateGenerateTaskList() {
    let e = [];
    let generate_type = this.imageMetaData.generate_type;
    let i = false;
    let o = false;
    while (generate_type != undefined) {
      let r = generate_type;
      e.push(r);
      if (i) {
        if (o) {
          generate_type = undefined;
        } else {
          generate_type = this.imageMetaData.first_generate_type;
          o = true;
        }
      } else {
        generate_type = this.imageMetaData.last_generate;
        i = true;
        if (!(r !== generate_type || o)) {
          generate_type = this.imageMetaData.first_generate_type;
          o = true;
        }
      }
      if (r === generate_type) {
        break;
      }
    }
    return e;
  }
  getAigcMode() {
    let aigc_mode = this.imageMetaData.aigc_mode;
    if (aigc_mode != undefined) {
      if (aigc_mode === "workbench");
      else if (aigc_mode === "canvas") {
        return o.DAAIGCMode.canvas;
      } else if (aigc_mode === "story") {
        return o.DAAIGCMode.story;
      } else if (aigc_mode === "character") {
        return o.DAAIGCMode.character;
      } else if (aigc_mode === "aigc_draft") {
        return o.DAAIGCMode.aigcDraft;
      }
    }
    return o.DAAIGCMode.workbench;
  }
  processText2ImageToDraft() {
    let text2image_params = this.imageMetaData.text2image_params;
    if (text2image_params != undefined) {
      let t;
      let i;
      let a;
      let n;
      let s;
      let d;
      let l;
      let p;
      let u;
      let c;
      let m;
      let v;
      let g;
      let f;
      let y;
      let h = new o.DAImageBaseComponent();
      h.genType = o.DAAIGCGenerateType.text2image;
      h.generateType = o.DAImageGenerateType.generate;
      h.aigcMode = this.getAigcMode();
      v = new o.DAImageGenerateAbilities();
      g = new o.DAImageGenerateAbility();
      f = new o.DAGenCoreParam();
      f.model =
        (t = text2image_params.model_config) == null
          ? undefined
          : t.model_req_key;
      y = text2image_params.prompt;
      if (this.imageMetaData.generate_type === TMAIGCGenerateType.InPainting) {
        y =
          (a =
            (i = this.imageMetaData.in_painting_params) == null
              ? undefined
              : i.origin_prompt) != null
            ? a
            : text2image_params.prompt;
      } else if (
        this.imageMetaData.generate_type === TMAIGCGenerateType.InPaintingRemove
      ) {
        y =
          (s =
            (n = this.imageMetaData.in_painting_remove_params) == null
              ? undefined
              : n.origin_prompt) != null
            ? s
            : text2image_params.prompt;
      } else if (
        this.imageMetaData.generate_type === TMAIGCGenerateType.OutPainting
      ) {
        y =
          (l =
            (d = this.imageMetaData.out_painting_params) == null
              ? undefined
              : d.origin_prompt) != null
            ? l
            : text2image_params.prompt;
      } else if (
        this.imageMetaData.generate_type ===
        TMAIGCGenerateType.InPaintAndOutPaint
      ) {
        y =
          (u =
            (p = this.imageMetaData.in_painting_params) == null
              ? undefined
              : p.origin_prompt) != null
            ? u
            : text2image_params.prompt;
      } else if (
        this.imageMetaData.generate_type === TMAIGCGenerateType.ByteEditPainting
      ) {
        y =
          (m =
            (c = this.imageMetaData.byte_edit_params) == null
              ? undefined
              : c.origin_prompt) != null
            ? m
            : text2image_params.prompt;
      }
      f.prompt = y;
      f.sampleSteps = text2image_params.sample_steps;
      f.seed = text2image_params.seed;
      f.imageRatio = this.convertToDAImageRatioType(
        text2image_params.image_ratio,
      );
      f.sampleStrength = text2image_params.sample_strength;
      f.strength = text2image_params.sample_strength;
      g.coreParam = f;
      v.generate = g;
      h.abilities = v;
      this.draft.setMainComponent(h);
    }
  }
  processNormalHD() {
    let e;
    let t;
    let i;
    let a = new o.DAImageBaseComponent();
    a.genType = o.DAAIGCGenerateType.normalHD;
    a.generateType = o.DAImageGenerateType.normalHD;
    a.aigcMode = this.getAigcMode();
    e = new o.DAImageGenerateAbilities();
    t = new o.DAImageNormalHDAbility();
    i = new o.DAPostEditParam();
    i.generateType = o.DAAIGCGenerateType.normalHD;
    i.itemId = (() => {
      var e;
      var t;
      var i;
      var o;
      var a;
      var n;
      if (this.imageMetaData.generate_type === TMAIGCGenerateType.InPainting) {
        if ((e = this.imageMetaData.in_painting_params) == null) {
          return undefined;
        }
        return e.origin_item_id;
      }
      if (
        this.imageMetaData.generate_type === TMAIGCGenerateType.InPaintingRemove
      ) {
        if ((t = this.imageMetaData.in_painting_remove_params) == null) {
          return undefined;
        }
        return t.origin_item_id;
      }
      if (this.imageMetaData.generate_type === TMAIGCGenerateType.OutPainting) {
        if ((i = this.imageMetaData.out_painting_params) == null) {
          return undefined;
        }
        return i.origin_item_id;
      }
      if (
        this.imageMetaData.generate_type ===
        TMAIGCGenerateType.InPaintAndOutPaint
      ) {
        if ((o = this.imageMetaData.in_painting_params) == null) {
          return undefined;
        }
        return o.origin_item_id;
      }
      if (
        this.imageMetaData.generate_type === TMAIGCGenerateType.ByteEditPainting
      ) {
        if ((a = this.imageMetaData.byte_edit_params) == null) {
          return undefined;
        }
        return a.origin_item_id;
      }
      if ((n = this.imageMetaData.normal_hd_params) == null) {
        return undefined;
      }
      return n.origin_item_id;
    })();
    t.posteditParam = i;
    e.normalHD = t;
    a.abilities = e;
    this.draft.setMainComponent(a);
  }
  processSuperResolution() {
    let super_resolution_params = this.imageMetaData.super_resolution_params;
    if (super_resolution_params != undefined) {
      let t;
      let i;
      let r;
      let a = new o.DAImageBaseComponent();
      a.genType = o.DAAIGCGenerateType.superResolution;
      a.generateType = o.DAImageGenerateType.superResolution;
      a.aigcMode = o.DAAIGCMode.workbench;
      t = new o.DAImageGenerateAbilities();
      i = new o.DAImageSuperResolutionAbility();
      r = new o.DAPostEditParam();
      r.generateType = o.DAAIGCGenerateType.superResolution;
      r.itemId = super_resolution_params.origin_item_id;
      i.posteditParam = r;
      t.superResolution = i;
      a.abilities = t;
      this.draft.setMainComponent(a);
    }
  }
  processInPainting() {
    let in_painting_params = this.imageMetaData.in_painting_params;
    if (in_painting_params != undefined) {
      let t;
      let i;
      let r;
      let a;
      let n;
      let s;
      let d;
      let l = new o.DAImageBaseComponent();
      l.genType = o.DAAIGCGenerateType.inPainting;
      l.generateType = o.DAImageGenerateType.painting;
      l.aigcMode = this.getAigcMode();
      a = new o.DAImageGenerateAbilities();
      n = new o.DAImagePaintingAbility();
      s = new o.DAGenCoreParam();
      s.prompt =
        (i =
          (t = this.imageMetaData.text2image_params) == null
            ? undefined
            : t.prompt) != null
          ? i
          : in_painting_params.origin_prompt;
      s.largeImageInfo = this.convertToDaReqImageInfo(
        (r = this.imageMetaData.text2image_params) == null
          ? undefined
          : r.large_image_info,
      );
      n.coreParam = s;
      d = new o.DAPostEditParam();
      d.generateType = o.DAAIGCGenerateType.inPainting;
      d.itemId = in_painting_params.origin_item_id;
      n.posteditParam = d;
      n.maskUri = in_painting_params.mask_uri;
      a.painting = n;
      l.abilities = a;
      this.draft.setMainComponent(l);
    }
  }
  processInPaintingRemove() {
    let in_painting_remove_params =
      this.imageMetaData.in_painting_remove_params;
    if (in_painting_remove_params != undefined) {
      let t;
      let i;
      let r;
      let a;
      let n;
      let s;
      let d;
      let l = new o.DAImageBaseComponent();
      l.genType = o.DAAIGCGenerateType.inPaintingRemove;
      l.generateType = o.DAImageGenerateType.painting;
      l.aigcMode = this.getAigcMode();
      a = new o.DAImageGenerateAbilities();
      n = new o.DAImagePaintingAbility();
      s = new o.DAGenCoreParam();
      s.prompt =
        (i =
          (t = this.imageMetaData.text2image_params) == null
            ? undefined
            : t.prompt) != null
          ? i
          : in_painting_remove_params.origin_prompt;
      s.largeImageInfo = this.convertToDaReqImageInfo(
        (r = this.imageMetaData.text2image_params) == null
          ? undefined
          : r.large_image_info,
      );
      n.coreParam = s;
      d = new o.DAPostEditParam();
      d.generateType = o.DAAIGCGenerateType.inPaintingRemove;
      d.itemId = in_painting_remove_params.origin_item_id;
      n.posteditParam = d;
      n.maskUri = in_painting_remove_params.mask_uri;
      a.painting = n;
      l.abilities = a;
      this.draft.setMainComponent(l);
    }
  }
  processOutPainting() {
    let out_painting_params = this.imageMetaData.out_painting_params;
    if (out_painting_params != undefined) {
      let t;
      let i;
      let r;
      let a;
      let n;
      let s;
      let d;
      let l;
      let p;
      let u;
      let c;
      let m;
      let v;
      let g;
      let f = new o.DAImageBaseComponent();
      f.genType = o.DAAIGCGenerateType.outPainting;
      f.generateType = o.DAImageGenerateType.painting;
      f.aigcMode = this.getAigcMode();
      u = new o.DAImageGenerateAbilities();
      c = new o.DAImagePaintingAbility();
      m = new o.DAGenCoreParam();
      m.prompt =
        (i =
          (t = this.imageMetaData.text2image_params) == null
            ? undefined
            : t.prompt) != null
          ? i
          : out_painting_params.origin_prompt;
      m.largeImageInfo = this.convertToDaReqImageInfo(
        (r = this.imageMetaData.text2image_params) == null
          ? undefined
          : r.large_image_info,
      );
      c.coreParam = m;
      v = new o.DAPostEditParam();
      v.generateType = o.DAAIGCGenerateType.outPainting;
      v.itemId = out_painting_params.origin_item_id;
      c.posteditParam = v;
      g = new o.DAImageReqOutPaintingUpScale();
      g.top = (a = out_painting_params.up_scale) == null ? undefined : a.top;
      g.bottom =
        (n = out_painting_params.up_scale) == null ? undefined : n.bottom;
      g.left = (s = out_painting_params.up_scale) == null ? undefined : s.left;
      g.right =
        (d = out_painting_params.up_scale) == null ? undefined : d.right;
      g.maxSize =
        (l = out_painting_params.up_scale) == null ? undefined : l.max_size;
      g.imageRatio = this.convertToDAImageRatioType(
        (p = out_painting_params.up_scale) == null ? undefined : p.image_ratio,
      );
      c.upScale = g;
      u.painting = c;
      f.abilities = u;
      this.draft.setMainComponent(f);
    }
  }
  processInPaintingAndOutPainting() {
    let in_painting_params = this.imageMetaData.in_painting_params;
    let out_painting_params = this.imageMetaData.out_painting_params;
    if (in_painting_params != undefined) {
      let i;
      let r;
      let a;
      let n;
      let s;
      let d;
      let l;
      let p;
      let u;
      let c;
      let m;
      let v;
      let g;
      let f;
      let y = new o.DAImageBaseComponent();
      y.genType = o.DAAIGCGenerateType.inPaintingAndOutPainting;
      y.generateType = o.DAImageGenerateType.painting;
      y.aigcMode = this.getAigcMode();
      c = new o.DAImageGenerateAbilities();
      m = new o.DAImagePaintingAbility();
      v = new o.DAGenCoreParam();
      v.prompt =
        (r =
          (i = this.imageMetaData.text2image_params) == null
            ? undefined
            : i.prompt) != null
          ? r
          : in_painting_params.origin_prompt;
      v.largeImageInfo = this.convertToDaReqImageInfo(
        (a = this.imageMetaData.text2image_params) == null
          ? undefined
          : a.large_image_info,
      );
      m.coreParam = v;
      g = new o.DAPostEditParam();
      g.generateType = o.DAAIGCGenerateType.inPaintingAndOutPainting;
      g.itemId = in_painting_params.origin_item_id;
      m.posteditParam = g;
      m.maskUri = in_painting_params.mask_uri;
      c.painting = m;
      if (out_painting_params != undefined) {
        f = new o.DAImageReqOutPaintingUpScale();
        f.top = (n = out_painting_params.up_scale) == null ? undefined : n.top;
        f.bottom =
          (s = out_painting_params.up_scale) == null ? undefined : s.bottom;
        f.left =
          (d = out_painting_params.up_scale) == null ? undefined : d.left;
        f.right =
          (l = out_painting_params.up_scale) == null ? undefined : l.right;
        f.maxSize =
          (p = out_painting_params.up_scale) == null ? undefined : p.max_size;
        f.imageRatio = this.convertToDAImageRatioType(
          (u = out_painting_params.up_scale) == null
            ? undefined
            : u.image_ratio,
        );
        m.upScale = f;
      }
      y.abilities = c;
      this.draft.setMainComponent(y);
    }
  }
  processByteEditingPainting() {
    let byte_edit_params = this.imageMetaData.byte_edit_params;
    if (byte_edit_params != undefined) {
      let t;
      let i;
      let r;
      let n;
      let s;
      let d;
      let l;
      let p = new o.DAImageBaseComponent();
      p.genType = o.DAAIGCGenerateType.byteEditPainting;
      p.generateType = o.DAImageGenerateType.painting;
      p.aigcMode = this.getAigcMode();
      n = new o.DAImageGenerateAbilities();
      s = new o.DAImagePaintingAbility();
      d = new o.DAGenCoreParam();
      d.prompt =
        (i =
          (t = this.imageMetaData.text2image_params) == null
            ? undefined
            : t.prompt) != null
          ? i
          : byte_edit_params.origin_prompt;
      if (byte_edit_params.strength != undefined) {
        d.strength = a.Int.toFloat64(byte_edit_params.strength);
      }
      d.largeImageInfo = this.convertToDaReqImageInfo(
        (r = this.imageMetaData.text2image_params) == null
          ? undefined
          : r.large_image_info,
      );
      s.coreParam = d;
      l = new o.DAPostEditParam();
      l.generateType = o.DAAIGCGenerateType.byteEditPainting;
      l.itemId = byte_edit_params.origin_item_id;
      s.posteditParam = l;
      s.originUri = byte_edit_params.uri;
      n.painting = s;
      p.abilities = n;
      this.draft.setMainComponent(p);
    }
  }
  processBlend() {
    let blend_params = this.imageMetaData.blend_params;
    let text2image_params = this.imageMetaData.text2image_params;
    if (blend_params != undefined && text2image_params != undefined) {
      let i;
      let a;
      let n;
      let s;
      let d;
      let l = new o.DAImageBaseComponent();
      l.genType = o.DAAIGCGenerateType.blend;
      l.generateType = o.DAImageGenerateType.blend;
      l.aigcMode = this.getAigcMode();
      n = new o.DAImageGenerateAbilities();
      s = new o.DAImageBlendAbility();
      d = new o.DAGenCoreParam();
      d.model = blend_params.model;
      d.prompt = text2image_params.prompt;
      d.sampleSteps = blend_params.sample_steps;
      d.sampleStrength = blend_params.sample_strength;
      d.imageRatio = this.calculateImageRatio();
      d.largeImageInfo = this.convertToDaReqImageInfo(
        text2image_params.large_image_info,
      );
      s.coreParam = d;
      s.abilityList =
        (i = blend_params.ability_list) == null
          ? undefined
          : i.map((e, t, i) => {
              var a;
              var n;
              var s;
              let d = new o.DAImageBlendAbilityItem();
              d.name = this.convertToDABlendAbilityName(e.name);
              let l = (a = e.large_image_list) != null ? a : e.cover_image_list;
              let p = [];
              if (l != undefined) {
                l.forEach((e) => {
                  let e_image_uri = e.image_uri;
                  if (e_image_uri != undefined) {
                    p.push(e_image_uri);
                  }
                });
              }
              d.imageUriList = p;
              let u = [];
              if (l != undefined) {
                l.forEach((e) => {
                  let t = this.convertToDAImageResource(e);
                  if (t != undefined) {
                    u.push(t);
                  }
                });
              }
              d.imageList = u;
              d.faceRecognizeList = undefined;
              d.controlNetList =
                (n = e.control_net_list) == null
                  ? undefined
                  : n.map((e, t, i) => {
                      let r = new o.DAImageControlNet();
                      r.name = e.name;
                      r.strength = e.strength;
                      r.imageIndex = e.image_index;
                      r.maskIndex = e.mask_index;
                      return r;
                    });
              d.extra = e.extra;
              d.strength = e.strength;
              d.ipKeepList =
                (s = e.ip_keep_list) == null
                  ? undefined
                  : s.map((e, t, i) => {
                      let r = new o.DAImageIpKeep();
                      r.paramDescription = e.param_description;
                      r.refIpWeight = e.ref_ip_weight;
                      r.refIdWeight = e.ref_id_weight;
                      r.characterId = e.character_id;
                      r.characterName = e.character_name;
                      return r;
                    });
              d.mixIpKeepByteEdit = e.mix_ip_keep_byte_edit;
              d.styleReference = (() => {
                let t;
                let e_style_reference = e.style_reference;
                if (e_style_reference === undefined) {
                  return;
                }
                let a = new o.DAImageStyleReference();
                a.image = this.convertToDAImageResource(
                  e_style_reference.image,
                );
                a.styleWeight = e_style_reference.style_weight;
                a.styleItemId = e_style_reference.style_item_id;
                a.styleTitle = e_style_reference.style_title;
                a.styleTitleStarlingKey =
                  e_style_reference.style_title_starling_key;
                a.styleType =
                  (t = e_style_reference.style_type) === undefined
                    ? o.DAImageStyleStyleType.Default
                    : t === TMAIGCStyleType.Customize
                      ? o.DAImageStyleStyleType.Customize
                      : o.DAImageStyleStyleType.Default;
                return a;
              })();
              return d;
            });
      s.promptPlaceholderInfoList =
        (a = blend_params.prompt_placeholder_info_list) == null
          ? undefined
          : a.map((e, t, i) => {
              let r = new o.DABlendPromptPlaceHolderInfo();
              r.abilityIndex = e.ability_index;
              return r;
            });
      n.blend = s;
      l.abilities = n;
      this.draft.setMainComponent(l);
    }
  }
  convertToDAImageRatioType(e) {
    if (e !== undefined) {
      switch (e) {
        case TMImageRatioType.ImageRatioType_11:
          return o.DAImageRatioType.ImageRatioType_11;
        case TMImageRatioType.ImageRatioType_34:
          return o.DAImageRatioType.ImageRatioType_34;
        case TMImageRatioType.ImageRatioType_169:
          return o.DAImageRatioType.ImageRatioType_169;
        case TMImageRatioType.ImageRatioType_43:
          return o.DAImageRatioType.ImageRatioType_43;
        case TMImageRatioType.ImageRatioType_916:
          return o.DAImageRatioType.ImageRatioType_916;
        case TMImageRatioType.ImageRatioType_23:
          return o.DAImageRatioType.ImageRatioType_23;
        case TMImageRatioType.ImageRatioType_32:
          return o.DAImageRatioType.ImageRatioType_32;
        case TMImageRatioType.ImageRatioType_219:
          return o.DAImageRatioType.ImageRatioType_219;
      }
    }
  }
  convertToDaReqImageInfo(e) {
    let t;
    let i = new o.DAReqImageInfo();
    i.height = e == null ? undefined : e.height;
    i.width = e == null ? undefined : e.width;
    i.format = e == null ? undefined : e.format;
    i.imageSceneList =
      (t = e == null ? undefined : e.image_scene_list) == null
        ? undefined
        : t.map((e, t, i) => {
            let r = new o.DAImageScene();
            r.scene = e.scene;
            r.height = e.height;
            r.width = e.width;
            r.format = e.format;
            r.uniqKey = e.uniq_key;
            return r;
          });
    return i;
  }
  convertToDABlendAbilityName(e) {
    if (e === undefined) {
      return o.DABlendAbilityName.Unknown;
    }
    switch (e) {
      case "text2image":
        return o.DABlendAbilityName.T2I;
      case "face_gan":
        return o.DABlendAbilityName.FaceGan;
      case "bg_paint":
        return o.DABlendAbilityName.BgPaint;
      case "image2image":
        return o.DABlendAbilityName.I2I;
      case "control_net":
        return o.DABlendAbilityName.ControlNet;
      case "ip_keep":
        return o.DABlendAbilityName.IpKeep;
      case "style_reference":
        return o.DABlendAbilityName.StyleReference;
      case "byte_edit":
        return o.DABlendAbilityName.ByteEdit;
      default:
        return o.DABlendAbilityName.Unknown;
    }
  }
  convertToDAImageResource(e) {
    let t;
    let i;
    let r;
    if (e === undefined) {
      return;
    }
    let a = new o.DAImageResource();
    a.sourceFrom = o.DAResourceSourceFrom.upload;
    a.uri = e.image_uri;
    a.width = (t = e.width) != null ? t : 0;
    a.height = (i = e.height) != null ? i : 0;
    a.format = (r = e.format) != null ? r : "";
    return a;
  }
  calculateImageRatio() {
    let e;
    let t;
    let i;
    let r;
    let s;
    let d;
    let l;
    let p = this.convertToDAImageRatioType(
      (e = this.imageMetaData.text2image_params) == null
        ? undefined
        : e.image_ratio,
    );
    let u = 0;
    let c =
      (i = (t = this.effectItem) == null ? undefined : t.image) == null
        ? undefined
        : i.large_images;
    if (c === undefined) {
      return p;
    }
    if (c.length > 0) {
      let e = c[0];
      let t = e.height;
      let i = e.width;
      if (t === undefined || i === undefined || t <= 0) {
        return p;
      }
      u = a.Int.toFloat64(i) / a.Int.toFloat64(t);
    } else {
      let e =
        (s = (r = this.effectItem) == null ? undefined : r.common_attr) == null
          ? undefined
          : s.aspect_ratio;
      if (e === undefined) {
        return p;
      }
      u = a.Int.toFloat64(e);
    }
    let m = [
      new TMRatioData(o.DAImageRatioType.ImageRatioType_11, 1),
      new TMRatioData(o.DAImageRatioType.ImageRatioType_34, 0.75),
      new TMRatioData(o.DAImageRatioType.ImageRatioType_169, 16 / 9),
      new TMRatioData(o.DAImageRatioType.ImageRatioType_43, 4 / 3),
      new TMRatioData(o.DAImageRatioType.ImageRatioType_916, 9 / 16),
      new TMRatioData(o.DAImageRatioType.ImageRatioType_23, 2 / 3),
      new TMRatioData(o.DAImageRatioType.ImageRatioType_32, 1.5),
      new TMRatioData(o.DAImageRatioType.ImageRatioType_219, 21 / 9),
    ];
    for (let e = 0; e < m.length; e++) {
      let t = m[e];
      let i = Math.abs(t.da_ratio_value - u);
      if (d === undefined) {
        d = i;
        l = t.da_ratio_type;
      } else if (i < d) {
        d = i;
        l = t.da_ratio_type;
      }
    }
    return l;
  }
}
export class TMRatioData {
  constructor(e, t) {
    this.da_ratio_type = e;
    this.da_ratio_value = t;
  }
}
