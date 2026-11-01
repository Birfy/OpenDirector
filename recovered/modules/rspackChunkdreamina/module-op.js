import a from "oa";
import i from "bk";
import n from "K8";
import o from "JSz";
import s from "i7";
import l from "kV9";
import c from "A0";
import d from "f3";
export var Ah = 10;
function h(e) {
  return n.xz(-1, e);
}
export function dF() {
  return "skill-publish-media-".concat(o.uR());
}
export function dx(e) {
  if (s.o(e, l.R)) {
    return "image";
  }
  if (s.o(e, c.P)) {
    return "video";
  }
}
export function ru(e) {
  const { skill } = e;
  if (!skill || skill.source !== d.fc.User) {
    return h("unsupported");
  }
  const r = skill.name.trim();
  const description = skill.description.trim();
  const instruction = skill.instruction.trim();
  if (r && description && instruction) {
    if (e.isIntroductionValid) {
      if (e.categoryIds.length) {
        if (e.categoryIds.length > e.maxSelectableCategoryCount) {
          return h("categoryLimitExceeded");
        }
        if (e.mediaItems.length) {
          if (e.hasUploadingMedia || e.hasUploadingCover) {
            return h("mediaUploading");
          }
          if (e.hasMediaUploadError) {
            return h("mediaError");
          }
          if (e.hasUnavailableVideoCover) {
            return h("videoCoverRequired");
          }
          return n.TZ(
            i._(
              a._(
                {
                  name: r,
                  description,
                },
                e.isIntroductionEnabled
                  ? {
                      introduction: e.introduction.trim(),
                    }
                  : {},
              ),
              {
                instruction,
                categoryIds: e.categoryIds,
                originalSkillId: skill.id,
                isTest: e.isTest,
                isPrivate: !e.isContentPublic,
                showcaseMedia: e.mediaItems.flatMap((e) => {
                  var t;
                  var r;
                  if (e.uploadStatus !== "uploaded") {
                    return [];
                  }
                  if (e.type === "image") {
                    return [
                      {
                        type: e.type,
                        showcaseUri: e.resourceId,
                      },
                    ];
                  }
                  return [
                    {
                      type: e.type,
                      showcaseUri: e.resourceId,
                      coverUri:
                        (t =
                          (r = e.customCover) == null
                            ? undefined
                            : r.resourceId) != null
                          ? t
                          : e.defaultCoverUri,
                    },
                  ];
                }),
              },
            ),
          );
        }
        return h("mediaRequired");
      }
      return h("categoryRequired");
    }
    return h("invalidIntroduction");
  }
  return h("incomplete");
}
