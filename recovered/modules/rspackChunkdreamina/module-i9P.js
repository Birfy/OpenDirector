import a from "z8";
import r from "cO";
import s from "Qey";
import l from "xLi";
const n = {
  key: "skill_package_toast_upload_failed",
  fallback: "Couldn't upload skill. See the {refdoc} for help, then try again.",
};
const o = "skill_package_link_upload_requirements";
const d = "Skill Upload Guide";
const c = {
  [l.$.UploadUnsupportedFormat]: {
    key: "skill_package_toast_upload_unsupported_format",
    fallback:
      "Upload a ZIP, RAR, 7Z, or SKILL file. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadFileTooLarge]: {
    key: "skill_package_toast_upload_file_too_large",
    fallback:
      "Package size can't exceed 30 MB. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadUncompressedTooLarge]: {
    key: "skill_package_toast_upload_uncompressed_too_large",
    fallback:
      "Decompressed package size can't exceed 200 MB. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadSingleFileTooLarge]: {
    key: "skill_package_toast_upload_single_file_too_large",
    fallback:
      "Each file size can't exceed 100 MB after extraction. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadEmptyFile]: {
    key: "skill_package_toast_upload_empty_file",
    fallback:
      "Can't upload an empty package. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadFileCountLimit]: {
    key: "skill_package_toast_upload_count_limit",
    fallback:
      "A package can contain up to 200 files. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadInnerFileUnsupportedFormat]: {
    key: "skill_package_toast_upload_inner_file_unsupported_format",
    fallback:
      "Some files in this package use unsupported formats. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadScriptFileTooLarge]: {
    key: "skill_package_toast_upload_script_file_too_large",
    fallback:
      "Each script in the package can't exceed 200 KB. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadSkillMdTooLarge]: {
    key: "skill_package_toast_upload_skill_md_too_large",
    fallback:
      "SKILL.md can't exceed 10 MB. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadNameExists]: {
    key: "skill_package_toast_upload_name_exists",
    fallback:
      "A skill with this name already exists. Edit the existing skill or choose a different name.",
  },
  [l.$.UploadMissingSkillMd]: {
    key: "skill_package_toast_upload_missing_skill_md",
    fallback:
      "The package must include a SKILL.md file in its root folder. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadInvalidFrontmatter]: {
    key: "skill_package_toast_upload_invalid_frontmatter",
    fallback:
      "The frontmatter in SKILL.md is invalid. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadMissingRequiredFields]: {
    key: "skill_package_toast_upload_missing_required_fields",
    fallback:
      "Skill name, description, and instructions are required. See the {refdoc} for help, then try again.",
  },
  [l.$.UploadTooManyLevels]: {
    key: "skill_package_toast_upload_too_many_levels",
    fallback:
      "The package can't contain more than 5 folder levels. See the {refdoc} for help, then try again.",
  },
  [l.$.InvalidName]: {
    key: "skill_package_toast_save_invalid_name",
    fallback:
      "Skill name can't exceed 30 characters and can only contain English letters (A-Z), numbers and hyphens (-). See the {refdoc} for help, then try again.",
  },
  [l.$.DescriptionTooLong]: {
    key: "skill_package_toast_save_description_too_long",
    fallback:
      "Skill description can't exceed 500 characters. See the {refdoc} for help, then try again.",
  },
  [l.$.ReviewReject]: {
    key: "skill_package_toast_upload_sensitive_content",
    fallback:
      "The skill may contain inappropriate content. Edit and try again.",
  },
};
function u(className, e) {
  const i = s.Ay.t(o, {}, d);
  return a.jsx("a", {
    className,
    href: r.m(
      "https://bytedance.larkoffice.com/wiki/JExCwgHPdiA0e0kLRLTcLG3Qnkj",
      null,
      {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: true,
        bid: "cc_dreamina",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: false,
        escapeRule: "escape-report",
        reportUrl:
          "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
        htmlparserOptions: "{}",
        scmBranch: "-",
        scmName: "-",
        scmVersion: "-",
        webpackPluginVersion: "3.6.0",
        filename:
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-$ZsW$RteE1NMD%1$1hrNW$tRkhSbmxh$jF*MFdXN$dlb%Z-Tld4ak0wMTJZekow-0dKS*QzWmtXRkp3WWtoTmRtTXlkSEJp%jNkMFp*aENjMkl5%m10T$Z6RnNZek5P-%Zve$Z-$mtTRTQw$1ZoS2Jt%ll%$DA9",
      },
    ),
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": e ? "".concat(e, " ").concat(i) : undefined,
    children: e != null ? e : i,
  });
}
export function b(t) {
  return s.Ay.t(
    "skill_package_tooltip_view_upload_requirements",
    {
      refdoc: u(t),
    },
    "View {refdoc} for help",
  );
}
function h(t) {
  let e;
  const i = (e = c[t]) != null ? e : n;
  const children = s.Ay.t(
    i.key,
    {
      refdoc: s.Ay.t(o, {}, d),
    },
    i.fallback,
  );
  if (!i.fallback.includes("{refdoc}")) {
    return children;
  }
  const l = s.Ay.t("skill_package_toast_action_view", {}, "View");
  return a.jsxs("span", {
    className: "upload-error-message-CRUx3t",
    children: [
      a.jsx("span", {
        children,
      }),
      u(
        "upload-requirements-link-vl8zDJ",
        l && l !== "skill_package_toast_action_view" && l !== "[none]"
          ? l
          : "View",
      ),
    ],
  });
}
export { h as o };
