import i from "Ut";
import a from "Dm";
import n from "GfJ";
import o from "Rs";
import s from "e9";
import m from "d8m";
import l from "Hf";
class p extends l.O {
  getComponent(e) {
    a.X3(
      e.originHistoryId && e.originItemId,
      "A draft source result is required",
    );
    a.X3(
      e.resolution && e.availableResolutions.includes(e.resolution),
      "The final video resolution must be enabled in the model configuration",
    );
    let t;
    let r;
    let l;
    let p;
    let u;
    let d;
    let c;
    const g = m.wD(e.draftContent);
    const h =
      g == null ||
      (u = g.abilities) == null ||
      (p = u.genVideo) == null ||
      (l = p.text2VideoParams) == null ||
      (r = l.videoGenInputs) == null
        ? undefined
        : r[0];
    a.X3(h, "The source video input is required");
    if (e.isRegenerate) {
      const I = m.RL(e.draftContent);
      a.X3(
        (I == null ? undefined : I.processType) ===
          i.DAVideoProcessType.GenerateFromDraft,
        "The source must be a finalized draft result",
      );
    } else {
      a.X3(h.isDraft === true, "The source must be a draft generation");
    }
    a.X3(
      !((d = h.v2vOpt) == null ? undefined : d.childNodes().length),
      "Post-edited videos cannot be finalized as drafts",
    );
    const { abilities, ability, videoGenInput, v2vOpt } = o.$();
    videoGenInput.originHistoryId = e.originHistoryId;
    videoGenInput.originAgenticHistoryId = e.originAgenticHistoryId;
    videoGenInput.resolution = e.resolution;
    const b = new i.DAVideoGenV2VGenerateFromDraft();
    b.enable = true;
    v2vOpt.generateFromDraft = b;
    ability.videoTaskExtra = n.a(
      (c = e.taskPayload) == null ? undefined : c.taskExtra,
    );
    ability.videoRefParams = s.w(e);
    const f = new i.DAVideoBaseComponent();
    f.generateType = i.DAVideoGenerateType.genVideo;
    f.aigcMode = (t = e.mode) != null ? t : i.DAAIGCMode.workbench;
    f.processType = i.DAVideoProcessType.GenerateFromDraft;
    f.abilities = abilities;
    return f;
  }
}
export { p as i };
