import a from "oa";
import r from "bk";
import n from "Qey";
import o from "K8";
import l from "fg";
import { xc, ys } from "./module-Rcl.js";
import { Ir, RA, fc } from "./module-f3_2.js";
import { j } from "./module-zks.js";
import { q } from "./module-Ckn.js";
function h(t) {
  let e;
  return xc(((e = t.tag) != null ? e : "").split(","));
}
function m(t) {
  const contentId = t == null ? undefined : t.trim();
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
export function DA(t) {
  let e;
  let i;
  let r;
  let n;
  let o;
  let l;
  let s;
  return a._(
    {
      id: t.skillId,
      name: t.skillName,
      description: (e = t.description) != null ? e : "",
      introduction: t.introduction,
      createTime: t.createTime,
      updateTime: t.updateTime,
      source: fc.Market,
      instruction: (i = t.instruction) != null ? i : "",
      status: (r = t.status) != null ? r : Ir.Active,
      categoryIds: h(t),
      isContentAccessible: !t.isPrivate,
      author: (n = t.effectiveUser) != null ? n : {},
      likeCount: (o = t.likeCount) != null ? o : 0,
      isLiked: (l = t.isLike) != null && l,
      addedCount: (s = t.addedCount) != null ? s : 0,
      usageCount: t.usageCount,
      isAdded: t.isAdded,
      addedSkillId: t.addedSkillId,
      showcaseMedia: j(t.showcaseMedia),
      originalSkillId: t.originalSkillId,
    },
    m(t.contentId),
  );
}
export function T0(t) {
  let e;
  let i;
  let n;
  let o;
  let l;
  const s = a._(
    {
      id: t.skillId,
      name: t.skillName,
      description: (e = t.description) != null ? e : "",
      introduction: t.introduction,
      createTime: t.createTime,
      updateTime: t.updateTime,
    },
    m(t.contentId),
  );
  switch (t.source) {
    case fc.User:
      return r._(a._({}, s), {
        source: fc.User,
        instruction: (i = t.instruction) != null ? i : "",
        status: (n = t.status) != null ? n : Ir.Disabled,
        categoryIds: h(t),
        isContentAccessible: !t.isPrivate,
        markdownUrl: t.markdownUrl,
        originalSkillId: t.originalSkillId,
        author: t.effectiveUser,
        showcaseMedia: j(t.showcaseMedia),
        extraInfo: q(t.extraInfo),
      });
    case fc.Market:
      return DA(t);
    case fc.Platform:
    default:
      return r._(a._({}, s), {
        source: fc.Platform,
        instruction: (o = t.instruction) != null ? o : "",
        status: (l = t.status) != null ? l : Ir.Active,
        showcaseMedia: j(t.showcaseMedia),
      });
  }
}
export function Q3(t) {
  let e;
  return {
    id: t.id,
    introduction: t.introductionStarlingKey
      ? n.Ay.t(
          t.introductionStarlingKey,
          {},
          (e = t.introduction) != null ? e : "",
        )
      : t.introduction,
    name: t.titleStarlingKey
      ? n.Ay.t(t.titleStarlingKey, {}, t.defaultTitle)
      : t.defaultTitle,
    description: t.descStarlingKey
      ? n.Ay.t(t.descStarlingKey, {}, t.defaultDesc)
      : t.defaultDesc,
    instruction: t.guideTextStarlingKey
      ? n.Ay.t(t.guideTextStarlingKey, {}, t.defaultGuideText)
      : t.defaultGuideText,
    showcaseMedia: j(t.showcaseMedia),
    status: Ir.Active,
    source: fc.Platform,
  };
}
export function y2(t) {
  const e = l.o(t.data);
  return o.TZ({
    skill: T0(e.skillInfo),
  });
}
export function p5(t) {
  const e = l.o(t.data);
  return o.TZ({
    skill: T0(e.skill),
  });
}
export function a5(t) {
  let e;
  let i;
  const a = l.o(t.data);
  return o.TZ({
    skills: ((e = a.skills) != null ? e : []).map((t) => T0(t)),
    totalCount: a.totalCount,
    hasMore: a.hasMore,
    nextOffset: a.nextOffset,
    officialSkills: ((i = a.officialSkills) != null ? i : []).map((t) => Q3(t)),
  });
}
export function $N(t) {
  let e;
  const i = l.o(t.data);
  return o.TZ({
    categories: ((e = i.categories) != null ? e : [])
      .filter((t) => t.status !== Ir.Disabled)
      .map((t) => {
        var e;
        var i;
        var a;
        return {
          id: t.tag,
          title: t.starlingKey
            ? n.Ay.t(t.starlingKey, {}, (e = t.defaultText) != null ? e : t.tag)
            : (i = t.defaultText) != null
              ? i
              : t.tag,
          operationOnly: (a = t.operationOnly) != null && a,
        };
      }),
    maxSelectableCategoryCount: ys(i.maxSelectCount),
  });
}
export function WK(t, e) {
  let i;
  let n;
  const c = l.o(t.data);
  const categoryId = xc([e])[0];
  const h = ((i = c.officialSkills) != null ? i : []).flatMap((t) => {
    var e;
    var categoryIds = xc((e = t.marketTagList) != null ? e : []);
    if (categoryId && categoryIds.includes(categoryId)) {
      return [
        {
          categoryId,
          skill: r._(a._({}, Q3(t)), {
            categoryIds,
          }),
        },
      ];
    }
    return [];
  });
  return o.TZ({
    skills: [
      ...h,
      ...((n = c.skills) != null ? n : []).flatMap((t) => {
        if (t.source !== fc.Market) {
          return [];
        }
        var skill = DA(t);
        return [
          {
            categoryId: categoryId || skill.categoryIds.at(0) || "",
            skill,
          },
        ];
      }),
    ],
    totalCount: c.totalCount,
    hasMore: c.hasMore,
    nextOffset: c.nextOffset,
  });
}
export function WB(t) {
  let e;
  let i;
  let a;
  let r;
  const n = l.o(t.data);
  const s = (e = n.skills) != null ? e : [];
  return o.TZ({
    skills: s.map((t) => DA(t)),
    totalCount: (i = n.totalCount) != null ? i : s.length,
    hasMore: (a = n.hasMore) != null && a,
    nextOffset: n.nextOffset,
    logId: (r = t.log_id) != null ? r : t.logid,
  });
}
export function yp(t) {
  let e;
  let i;
  let a;
  const r = l.o(t.data);
  const n = (e = r.skills) != null ? e : [];
  return o.TZ({
    skills: n.flatMap((t) => {
      if (t.source !== fc.Market) {
        return [];
      }
      return DA(t);
    }),
    totalCount: (i = r.totalCount) != null ? i : n.length,
    hasMore: (a = r.hasMore) != null && a,
    nextOffset: r.nextOffset,
  });
}
export function X_(t) {
  let e;
  let i;
  const a = l.o(
    (e = t.data) != null
      ? e
      : {
          skills: [],
        },
  );
  return o.TZ({
    skills: ((i = a.skills) != null ? i : []).flatMap((t) => {
      if (t.source !== fc.Market) {
        return [];
      }
      return DA(t);
    }),
  });
}
export function zm(t) {
  let e;
  let i;
  const a = l.o(
    (e = t.data) != null
      ? e
      : {
          skills: [],
        },
  );
  return o.TZ({
    skills: ((i = a.skills) != null ? i : []).map((t) => T0(t)),
  });
}
export function g7(t) {
  const e = l.o(t.data);
  return o.TZ({
    skill: T0(e.skill),
  });
}
export function w6(t) {
  const e = l.o(t.data);
  return o.TZ({
    likeCount: e.likeCount,
    isLiked: e.isLike,
  });
}
export function go(t) {
  let e;
  let i;
  let a;
  const r = l.o(t.data);
  const n = (e = r.skills) != null ? e : [];
  return o.TZ({
    publications: n.flatMap((t) => {
      var e = ((t) => {
        let e;
        let i;
        let a;
        let r;
        let n;
        const { skill } = t;
        const { skillId } = skill;
        if (!skillId) {
          return null;
        }
        const status = (e = t.auditStatus) != null ? e : RA.Init;
        const d = status === RA.Published ? skill : undefined;
        return {
          id: (i = t.auditRecordId) != null ? i : skillId,
          auditRecordId: t.auditRecordId,
          skillId,
          name: (a = skill.skillName) != null ? a : "",
          description: (r = skill.description) != null ? r : "",
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
      })(t);
      if (e) {
        return [e];
      }
      return [];
    }),
    totalCount: (i = r.totalCount) != null ? i : n.length,
    hasMore: (a = r.hasMore) != null && a,
    nextOffset: r.nextOffset,
  });
}
