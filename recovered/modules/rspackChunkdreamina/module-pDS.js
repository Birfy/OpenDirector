import a from "oa";
import o from "bk";
import i from "z8";
import r from "ED";
import l from "xm3";
import s from "wF";
import c from "PSJ";
import u from "V99";
import d from "bT";
import m from "v5";
import p from "Hvt";
import h from "qa";
import _ from "A3I";
import g from "vaY";
import v from "HWv";
import x from "G6S";
import b from "O7U";
import j from "ErZ";
import f from "Qey";
import M from "gC";
import k from "n3";
import C from "UW";
const y = r.PA(function (e) {
  const { imageResource, sortable = true } = e;
  const r = h._(e, ["imageResource", "sortable"]);
  const { referenceRenderProps } = r;
  const { id } = imageResource;
  const { imageGeneratorManager } = s.h(l.V);
  const {
    blendManager: {
      openEditReferenceImageModal,
      removeBlendImageModel,
      replaceBlendImageFromLocal,
    },
    data: { abilityList, blendModelByReferenceId, resourceAuditPolicy },
    metadata: { acceptedImageFileTypes, ModelIsSimpleImage },
    referenceAuditManager,
    unifiedEditManager,
  } = imageGeneratorManager;
  const P = blendModelByReferenceId[id];
  const { isAuditing, auditTooltipContent, auditIcon, auditLabel } = v.y({
    referenceAuditManager,
    resource: imageResource,
    resourceAuditPolicy,
  });
  const label = d.useMemo(() => {
    if (P) {
      return _.P(
        P,
        abilityList.map((e) => e.blendModel),
      );
    }
  }, [abilityList, P]);
  const onClick = d.useCallback(
    (e) => {
      if (!ModelIsSimpleImage) {
        e.preventDefault();
        openEditReferenceImageModal(id);
      }
    },
    [ModelIsSimpleImage, id, openEditReferenceImageModal],
  );
  const onInsertReferenceIntoPrompt = d.useCallback(() => {
    unifiedEditManager.insertAbilitiesAsMentions([
      {
        id,
      },
    ]);
  }, [id, unifiedEditManager]);
  const O = d.useMemo(
    () =>
      i.jsx(
        x.d,
        o._(
          a._(
            {
              imageResource,
              accept: acceptedImageFileTypes,
              loading: isAuditing,
              icon: auditIcon,
              label: auditLabel,
            },
            r,
          ),
          {
            onClick,
            onRemove: removeBlendImageModel,
            onDropFromLocal: replaceBlendImageFromLocal,
          },
        ),
      ),
    [
      imageResource,
      acceptedImageFileTypes,
      isAuditing,
      auditIcon,
      auditLabel,
      r,
      onClick,
      removeBlendImageModel,
      replaceBlendImageFromLocal,
    ],
  );
  const renderDragOverlay = d.useCallback(
    () =>
      d.cloneElement(O, {
        onRemove: undefined,
      }),
    [O],
  );
  const D = i.jsx(g.G, {
    reference: imageResource,
    insertIntoPromptLabelKey: "web_add_to_chat",
    insertIntoPromptDefaultText: "添加到输入框",
    onInsertReferenceIntoPrompt,
    children: i.jsx(b.t, {
      resource: imageResource,
      label,
      content: auditTooltipContent,
      referenceRenderProps,
      children: O,
    }),
  });
  if (sortable) {
    return i.jsx(j.g, {
      item: imageResource,
      renderDragOverlay,
      children: D,
    });
  }
  return D;
});
const A = r.PA(function (e) {
  const { referenceRenderProps = {}, blendImageModel } = e;
  const o = h._(e, ["referenceRenderProps", "blendImageModel"]);
  const { imageGeneratorManager } = s.h(l.V);
  const {
    blendManager: {
      importBlendImageFromLocal,
      importMultipleBlendImagesFromLocal,
    },
    reportManager: { reportClickUpload },
    metadata: {
      acceptedImageFileTypes,
      canUploadMultipleImages,
      referenceSlotState,
    },
  } = imageGeneratorManager;
  const g = i.jsx(M.I, {
    component: null,
    guardFileDrop: true,
    source: k.HH.Upload,
    children: canUploadMultipleImages
      ? i.jsx(
          C.L,
          a._(
            {
              multiple: true,
              accept: acceptedImageFileTypes,
              disabled: referenceSlotState.atLimit,
              referenceRenderProps,
              onChange: importMultipleBlendImagesFromLocal,
              onClick: reportClickUpload,
            },
            o,
          ),
        )
      : i.jsx(
          C.L,
          a._(
            {
              accept: acceptedImageFileTypes,
              disabled: referenceSlotState.atLimit,
              referenceRenderProps,
              onChange: importBlendImageFromLocal,
              onClick: reportClickUpload,
            },
            o,
          ),
        ),
  });
  if (referenceSlotState.atLimit) {
    return i.jsx(b.t, {
      content: f.Ay.t(
        "subject_panel_image_ref_limit_toast",
        {
          num: referenceSlotState.maxReferenceCount,
        },
        "最多使用 {num} 个参考图内容",
      ),
      referenceRenderProps,
      children: g,
    });
  }
  return g;
});
const T = r.PA(function (e) {
  const { imageGeneratorManager } = s.h(l.V);
  const {
    data: { references, blendModelByReferenceId, referenceUploadVisible },
    blendManager: { reorderBlendImageModels, removeBlendImageModel },
  } = imageGeneratorManager;
  const items = d.useMemo(
    () => references.filter((e) => blendModelByReferenceId[e.id]),
    [references, blendModelByReferenceId],
  );
  const g = d.useMemo(() => i.jsx(A, {}, "reference-upload"), []);
  const children = d.useMemo(
    () => [
      ...items.map((imageResource) =>
        i.jsx(
          y,
          {
            imageResource,
          },
          imageResource.id,
        ),
      ),
      ...(referenceUploadVisible ? [g] : []),
    ],
    [items, g, referenceUploadVisible],
  );
  return i.jsx(p.Q, {
    items,
    onMove: reorderBlendImageModels,
    onRemove: removeBlendImageModel,
    children: i.jsx(
      m.V,
      o._(a._({}, e), {
        children,
      }),
    ),
  });
});
export var P = r.PA(function (e) {
  const { imageGeneratorManager } = s.h(l.V);
  const {
    data: { references },
  } = imageGeneratorManager;
  return i.jsx(
    c.B,
    o._(a._({}, e), {
      children: i.jsx(u.n, {
        resources: references,
        children: i.jsx(T, {}),
      }),
    }),
  );
});
