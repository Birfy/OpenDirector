import { c as getCrowdTestModelReqKey } from "./module-OIT.js";
import { B as setAiRoleParams } from "./module-dpB.js";
import { J as setBlendImageParams } from "./module-cFd.js";
import { n as setCommercialParams } from "./module-zU.js";
import { j as setImageModelParams } from "./module-RXB.js";
import { L as setImageProHDParams } from "./module-Mze.js";
import { C as setImagePromptParams } from "./module-x4.js";
import { Z as setImageRatioParams } from "./module-yGz.js";
import { x as setImageReferenceSubjectParams } from "./module-oYY.js";
import m from "yMd";
export var X = {
  getCrowdTestModelReqKey,
  setAiRoleParams,
  setBlendImageParams,
  setCommercialParams,
  setImageModelParams,
  setImagePromptParams,
  setImageRatioParams,
  setIsDescribeParams: function (e, t, i) {
    let r;
    let n;
    const a = {};
    const o = i ? t.itemList.find((e) => e.id === i) : undefined;
    if (!o) {
      a.isDescribe = 0;
      e.setParams(a);
      return;
    }
    const { aigcImageParams } = o;
    const { generateType } = t;
    if (!aigcImageParams) {
      a.isDescribe = 0;
      e.setParams(a);
      return;
    }
    if (generateType === m.ce.SuperResolution) {
      a.isDescribe = +(
        (r = aigcImageParams.superResolutionParams) != null &&
        !!r.isDescribePrompt
      );
    } else if ([m.ce.Text2Image, m.ce.Blend].includes(generateType)) {
      a.isDescribe = +(
        (n = aigcImageParams.text2imageParams) != null && !!n.isDescribePrompt
      );
    } else {
      a.isDescribe = 0;
    }
    e.setParams(a);
  },
  setImageProHDParams,
  setImageReferenceSubjectParams,
};
