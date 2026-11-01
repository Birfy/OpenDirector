import r from "oa";
import a from "bk";
import n from "fg";
import { xc } from "./module-Rcl_2.js";
import { fc } from "./module-f3_3.js";
export function C1(e) {
  return n.w({
    skillName: e.name,
    description: e.description,
    instruction: e.instruction,
    status: e.status,
    source: e.source,
    bizUniqId: e.bizUniqId,
    originalSkillId: e.originalSkillId,
    extraInfo: e.extraInfo,
  });
}
export function Pw(e) {
  return n.w({
    offset: e.offset,
    limit: e.limit,
    keyword: e.keyword,
    status: e.status,
    source: e.source,
  });
}
export function rd(e) {
  const t = xc([e.categoryId])[0];
  return n.w({
    source: fc.Market,
    tagList: t ? [t] : [],
    isActive: true,
    isTest: e.isTest,
    offset: e.offset,
    limit: e.limit,
    imageInfo: e.imageInfo,
  });
}
export function Tr(e) {
  const t = xc(e.categoryIds);
  return n.w({
    skillInfo: a._(
      r._(
        {
          skillName: e.name,
          description: e.description,
        },
        e.introduction === undefined
          ? {}
          : {
              introduction: e.introduction,
            },
      ),
      {
        instruction: e.instruction,
        tag: t.join(","),
        originalSkillId: e.originalSkillId,
        isTest: e.isTest,
        isPrivate: e.isPrivate,
        showcaseMedia: e.showcaseMedia,
        extraInfo: e.extraInfo,
      },
    ),
  });
}
export function $L(e) {
  if ("originalSkillId" in e) {
    return n.w({
      skillId: e.id,
      originalSkillId: e.originalSkillId,
      status: e.status,
    });
  }
  return n.w({
    skillId: e.id,
    skillName: e.name,
    description: e.description,
    instruction: e.instruction,
    status: e.status,
    extraInfo: e.extraInfo,
  });
}
export function ln(e) {
  return n.w({
    skillId: e.id,
  });
}
export function Fl(e) {
  return n.w({
    auditRecordId: e.auditRecordId,
  });
}
export function pJ(e) {
  return n.w({
    skillId: e.id,
    like: e.isLiked,
  });
}
export function ry(e) {
  return n.w({
    keyword: e.keyword,
    isTest: e.isTest,
    offset: e.offset,
    limit: e.limit,
  });
}
export function FJ(e) {
  return n.w({
    uid: e.uid,
    offset: e.offset,
    limit: e.limit,
  });
}
export function AG(e) {
  return n.w(
    r._(
      {
        skillIds: e.skillIds,
      },
      e.queryScope === undefined
        ? {}
        : {
            queryScope: e.queryScope,
          },
    ),
  );
}
export function Xe(e) {
  return n.w({
    secUid: e.secUid,
    offset: e.offset,
    limit: e.limit,
  });
}
