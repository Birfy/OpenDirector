import i from "oa";
import a from "bk";
import n from "Ut";
import o from "y3V";
import s from "e9";
import m from "GfJ";
import l from "Z6";
import p from "Hf";
import u from "d8m";
export class W extends p.O {
  getComponent(e) {
    let t;
    let r;
    let p;
    let d;
    let c;
    let g;
    let h;
    let I;
    let _;
    let y;
    let A;
    let v;
    let b;
    let f;
    let w;
    let D;
    const P = new n.DASubtitleEraseInput();
    P.sourceVideo = o.a(e.input.sourceVideo);
    P.param = e.input.param;
    const subtitleErase = new n.DASubtitleEraseAbility();
    subtitleErase.subtitleEraseInput = P;
    subtitleErase.videoRefParams = s.w(e);
    subtitleErase.videoTaskExtra = m.a(
      (h = e.taskPayload) == null ? undefined : h.taskExtra,
    );
    const R = new n.DASubtitleEraseDraftBuilder().createComponent(
      new n.DASubtitleEraseDraftReq({
        subtitleErase,
      }),
    );
    if (!(R instanceof n.DAVideoBaseComponent)) {
      throw Error("Subtitle erase requires a video component");
    }
    R.aigcMode = e.mode;
    R.genType = n.DAAIGCGenerateType.text2Video;
    const T =
      (y = u.wD(e.draftContent)) == null ||
      (_ = y.abilities) == null ||
      (I = _.genVideo) == null
        ? undefined
        : I.text2VideoParams;
    const { originalInput } = e;
    const M =
      originalInput == null ? undefined : originalInput.videoGenInputs[0];
    const x =
      M == null || (A = M.v2vOpt) == null ? undefined : A.superResolution;
    const U = new n.DAText2VideoParams();
    U.modelReqKey =
      (t = originalInput == null ? undefined : originalInput.modelReqKey) !=
      null
        ? t
        : T == null
          ? undefined
          : T.modelReqKey;
    U.videoAspectRatio =
      (r =
        originalInput == null ? undefined : originalInput.videoAspectRatio) !=
      null
        ? r
        : T == null
          ? undefined
          : T.videoAspectRatio;
    U.seed =
      (p = originalInput == null ? undefined : originalInput.seed) != null
        ? p
        : T == null
          ? undefined
          : T.seed;
    const k = l.k(
      a._(i._({}, M), {
        prompt:
          (d = M == null ? undefined : M.prompt) != null
            ? d
            : T == null || (b = T.videoGenInputs) == null || (v = b[0]) == null
              ? undefined
              : v.prompt,
        resolution:
          (c =
            (g = (x == null ? undefined : x.enable)
              ? x.resolution
              : undefined) != null
              ? g
              : M == null
                ? undefined
                : M.resolution) != null
            ? c
            : T == null || (w = T.videoGenInputs) == null || (f = w[0]) == null
              ? undefined
              : f.resolution,
      }),
    );
    k.vid = e.input.sourceVideo.videoId;
    k.durationMs =
      (D = P.sourceVideo) == null ? undefined : D.getDurationMilliSecond();
    U.videoGenInputs = [k];
    const O = new n.DAGenVideoAbility();
    O.text2VideoParams = U;
    O.videoTaskExtra = subtitleErase.videoTaskExtra;
    if (R.abilities) {
      R.abilities.genVideo = O;
    }
    return R;
  }
}
