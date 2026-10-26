import n from "NY";
import r from "bT";
import a from "eNj";
import o from "Ib";
import s from "e3";
import l from "wF";
import c from "Kt";
import u from "zI";
import d from "Lx";
import M from "Jiy";
import g from "sGf";
export function j() {
  const e = l.h(c._);
  const t = l.h(d.C);
  const i = r.useCallback(
    function (action) {
      const tab =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : "image";
      M.v7(e, {
        action,
        tab,
        source: "subject_list",
      });
    },
    [e],
  );
  return {
    handleLocalUpload: r.useCallback(
      (e) =>
        n._(function* () {
          if (e.length !== 0) {
            const i = yield t.getInstance();
            i.subjectOperationManager.reportUploadFromLocal();
            let n = e;
            if (e.length > 0 && e.every((e) => e.type.startsWith("audio/"))) {
              const { trimAudioFileIfNeeded } =
                i.subjectOperationManager.audioUploadManager;
              if (trimAudioFileIfNeeded) {
                const s = yield trimAudioFileIfNeeded(e[0], a.US);
                if (!s) {
                  return;
                }
                n = [s, ...e.slice(1)];
              }
            }
            i.showSubjectCreateModal({
              enterFrom: o.B.SubjectListCreate,
            });
            yield i.subjectOperationManager.uploadMediaFromLocal(n, {
              position: "subject_list",
            });
          }
        })(),
      [t],
    ),
    handleAssetAdd: r.useCallback(() => {
      u.V(
        e,
        {
          assetType: "image",
          supportBothTypes: true,
        },
        (e) =>
          n._(function* () {
            const n = yield t.getInstance();
            if (e.type === "video") {
              const r = e.selectedAssets;
              if (r.length > 0) {
                const a = g.o(r);
                n.subjectOperationManager.uploadVideoFromAsset(a, {
                  position: "subject_list",
                });
                n.subjectOperationManager.reportUploadFromAsset();
              }
            } else {
              const l = e.selectedAssets
                .filter((e) => s.A(e.data))
                .map((e) => ({
                  data: e.data,
                  itemIndex: e.index,
                }));
              n.subjectOperationManager.uploadMainImageFromAsset(l, {
                position: "subject_list",
              });
              n.subjectOperationManager.reportUploadFromAsset();
            }
            n.showSubjectCreateModal({
              enterFrom: o.B.SubjectListCreate,
            });
            i("confirm", e.type === "video" ? "video" : "image");
          })(),
      );
      i("show");
    }, [e, i, t]),
  };
}
