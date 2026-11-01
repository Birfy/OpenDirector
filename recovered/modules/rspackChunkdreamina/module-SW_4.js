import r from "oa";
import a from "bk";
import n from "Qey";
import s from "K8";
import o from "fg";
import { xc, ys } from "./module-Rcl_2.js";
import { Ir, RA, fc } from "./module-f3_3.js";
import { j } from "./module-zks_2.js";
import { q } from "./module-Ckn_2.js";
function h(e) {
  let t;
  return xc(((t = e.tag) != null ? t : "").split(","));
}
function p(e) {
  const contentId = e == null ? undefined : e.trim();
  if (contentId) {
    return {
      contentId,
      isSkillPackage: true,
    };
  }
  return {
    isSkillPackage: false,
  };
}
export function DA(e) {
  let t;
  let i;
  let a;
  let n;
  let s;
  let o;
  let l;
  return r._(
    {
      id: e.skillId,
      name: e.skillName,
      description: (t = e.description) != null ? t : "",
      introduction: e.introduction,
      createTime: e.createTime,
      updateTime: e.updateTime,
      source: fc.Market,
      instruction: (i = e.instruction) != null ? i : "",
      status: (a = e.status) != null ? a : Ir.Active,
      categoryIds: h(e),
      isContentAccessible: !e.isPrivate,
      author: (n = e.effectiveUser) != null ? n : {},
      likeCount: (s = e.likeCount) != null ? s : 0,
      isLiked: (o = e.isLike) != null && o,
      addedCount: (l = e.addedCount) != null ? l : 0,
      usageCount: e.usageCount,
      isAdded: e.isAdded,
      addedSkillId: e.addedSkillId,
      showcaseMedia: j(e.showcaseMedia),
      originalSkillId: e.originalSkillId,
    },
    p(e.contentId),
  );
}
export function T0(e) {
  let t;
  let i;
  let n;
  let s;
  let o;
  const l = r._(
    {
      id: e.skillId,
      name: e.skillName,
      description: (t = e.description) != null ? t : "",
      introduction: e.introduction,
      createTime: e.createTime,
      updateTime: e.updateTime,
    },
    p(e.contentId),
  );
  switch (e.source) {
    case fc.User:
      return a._(r._({}, l), {
        source: fc.User,
        instruction: (i = e.instruction) != null ? i : "",
        status: (n = e.status) != null ? n : Ir.Disabled,
        categoryIds: h(e),
        isContentAccessible: !e.isPrivate,
        markdownUrl: e.markdownUrl,
        originalSkillId: e.originalSkillId,
        author: e.effectiveUser,
        showcaseMedia: j(e.showcaseMedia),
        extraInfo: q(e.extraInfo),
      });
    case fc.Market:
      return DA(e);
    case fc.Platform:
    default:
      return a._(r._({}, l), {
        source: fc.Platform,
        instruction: (s = e.instruction) != null ? s : "",
        status: (o = e.status) != null ? o : Ir.Active,
        showcaseMedia: j(e.showcaseMedia),
      });
  }
}
export function Q3(e) {
  let t;
  return {
    id: e.id,
    introduction: e.introductionStarlingKey
      ? n.Ay.t(
          e.introductionStarlingKey,
          {},
          (t = e.introduction) != null ? t : "",
        )
      : e.introduction,
    name: e.titleStarlingKey
      ? n.Ay.t(e.titleStarlingKey, {}, e.defaultTitle)
      : e.defaultTitle,
    description: e.descStarlingKey
      ? n.Ay.t(e.descStarlingKey, {}, e.defaultDesc)
      : e.defaultDesc,
    instruction: e.guideTextStarlingKey
      ? n.Ay.t(e.guideTextStarlingKey, {}, e.defaultGuideText)
      : e.defaultGuideText,
    showcaseMedia: j(e.showcaseMedia),
    status: Ir.Active,
    source: fc.Platform,
  };
}
export function y2(e) {
  const t = o.o(e.data);
  return s.TZ({
    skill: T0(t.skillInfo),
  });
}
export function p5(e) {
  const t = o.o(e.data);
  return s.TZ({
    skill: T0(t.skill),
  });
}
export function a5(e) {
  let t;
  let i;
  const r = o.o(e.data);
  return s.TZ({
    skills: ((t = r.skills) != null ? t : []).map((e) => T0(e)),
    totalCount: r.totalCount,
    hasMore: r.hasMore,
    nextOffset: r.nextOffset,
    officialSkills: ((i = r.officialSkills) != null ? i : []).map((e) => Q3(e)),
  });
}
export function $N(e) {
  let t;
  const i = o.o(e.data);
  return s.TZ({
    categories: ((t = i.categories) != null ? t : [])
      .filter((e) => e.status !== Ir.Disabled)
      .map((e) => {
        var t;
        var i;
        var r;
        return {
          id: e.tag,
          title: e.starlingKey
            ? n.Ay.t(e.starlingKey, {}, (t = e.defaultText) != null ? t : e.tag)
            : (i = e.defaultText) != null
              ? i
              : e.tag,
          operationOnly: (r = e.operationOnly) != null && r,
        };
      }),
    maxSelectableCategoryCount: ys(i.maxSelectCount),
  });
}
export function WK(e, t) {
  let i;
  let n;
  const u = o.o(e.data);
  const categoryId = xc([t])[0];
  const h = ((i = u.officialSkills) != null ? i : []).flatMap((e) => {
    var t;
    var categoryIds = xc((t = e.marketTagList) != null ? t : []);
    if (categoryId && categoryIds.includes(categoryId)) {
      return [
        {
          categoryId,
          skill: a._(r._({}, Q3(e)), {
            categoryIds,
          }),
        },
      ];
    }
    return [];
  });
  return s.TZ({
    skills: [
      ...h,
      ...((n = u.skills) != null ? n : []).flatMap((e) => {
        if (e.source !== fc.Market) {
          return [];
        }
        var skill = DA(e);
        return [
          {
            categoryId: categoryId || skill.categoryIds.at(0) || "",
            skill,
          },
        ];
      }),
    ],
    totalCount: u.totalCount,
    hasMore: u.hasMore,
    nextOffset: u.nextOffset,
  });
}
export function WB(e) {
  let t;
  let i;
  let r;
  let a;
  const n = o.o(e.data);
  const l = (t = n.skills) != null ? t : [];
  return s.TZ({
    skills: l.map((e) => DA(e)),
    totalCount: (i = n.totalCount) != null ? i : l.length,
    hasMore: (r = n.hasMore) != null && r,
    nextOffset: n.nextOffset,
    logId: (a = e.log_id) != null ? a : e.logid,
  });
}
export function yp(e) {
  let t;
  let i;
  let r;
  const a = o.o(e.data);
  const n = (t = a.skills) != null ? t : [];
  return s.TZ({
    skills: n.flatMap((e) => {
      if (e.source !== fc.Market) {
        return [];
      }
      return DA(e);
    }),
    totalCount: (i = a.totalCount) != null ? i : n.length,
    hasMore: (r = a.hasMore) != null && r,
    nextOffset: a.nextOffset,
  });
}
export function X_(e) {
  let t;
  let i;
  const r = o.o(
    (t = e.data) != null
      ? t
      : {
          skills: [],
        },
  );
  return s.TZ({
    skills: ((i = r.skills) != null ? i : []).flatMap((e) => {
      if (e.source !== fc.Market) {
        return [];
      }
      return DA(e);
    }),
  });
}
export function zm(e) {
  let t;
  let i;
  const r = o.o(
    (t = e.data) != null
      ? t
      : {
          skills: [],
        },
  );
  return s.TZ({
    skills: ((i = r.skills) != null ? i : []).map((e) => T0(e)),
  });
}
export function g7(e) {
  const t = o.o(e.data);
  return s.TZ({
    skill: T0(t.skill),
  });
}
export function w6(e) {
  const t = o.o(e.data);
  return s.TZ({
    likeCount: t.likeCount,
    isLiked: t.isLike,
  });
}
export function go(e) {
  let t;
  let i;
  let r;
  const a = o.o(e.data);
  const n = (t = a.skills) != null ? t : [];
  return s.TZ({
    publications: n.flatMap((e) => {
      var t = ((e) => {
        let t;
        let i;
        let r;
        let a;
        let n;
        const { skill } = e;
        const { skillId } = skill;
        if (!skillId) {
          return null;
        }
        const status = (t = e.auditStatus) != null ? t : RA.Init;
        const d = status === RA.Published ? skill : undefined;
        return {
          id: (i = e.auditRecordId) != null ? i : skillId,
          auditRecordId: e.auditRecordId,
          skillId,
          name: (r = skill.skillName) != null ? r : "",
          description: (a = skill.description) != null ? a : "",
          introduction: skill.introduction,
          instruction: (n = skill.instruction) != null ? n : "",
          categoryIds: h(skill),
          isContentAccessible: !skill.isPrivate,
          author: skill.effectiveUser,
          showcaseMedia: j(skill.showcaseMedia),
          status,
          createTime: skill.createTime,
          updateTime: skill.updateTime,
          marketSkill: d ? DA(d) : undefined,
        };
      })(e);
      if (t) {
        return [t];
      }
      return [];
    }),
    totalCount: (i = a.totalCount) != null ? i : n.length,
    hasMore: (r = a.hasMore) != null && r,
    nextOffset: a.nextOffset,
  });
}
