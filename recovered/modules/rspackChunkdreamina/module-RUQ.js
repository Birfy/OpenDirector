import a from "NY";
import r from "oa";
import o from "bk";
import i from "bT";
import s from "Du8";
import l from "xm3";
import c from "c6";
import d from "wF";
import u from "xi";
import p from "eVT";
import m from "c5";
import v from "XKQ";
import h from "Ds2";
import f from "n3";
import x from "rr";
import _ from "O28";
import g from "O9I";
import b from "GzQ";
export var D = (e) => {
  var { workspaceStrategy, onSubmit, submitExternally, variant } = i.useContext(
    s.R,
  );
  var k = d.h(l.V);
  var workspaceService = d.h(x.D);
  var A = d.h(c.f);
  var C = d.h(m.O);
  var w = b.o();
  var N = p.L({
    source: f.HH.ClickGenerate,
  });
  return i.useCallback(
    () =>
      a._(function* () {
        if (w === "video") {
          u.V.warn(
            "[ContentGeneratorTaskSubmissionHandler] video submit invoked",
          );
        }
        if (N()) {
          return false;
        }
        const i = () =>
          a._(function* () {
            if (workspaceStrategy === "isolated") {
              workspaceService.enterNewConversation();
              yield v.M(C);
            } else if (workspaceStrategy === "resume") {
              yield workspaceService.restoreWorkspaceOrEnterNewConversation();
              yield v.M(C);
            } else if (!submitExternally && variant !== "canvas") {
              var a;
              const i = yield g.c({
                isTeamMode: A.isTeamMode,
                workspaceService,
              });
              if (!i.ok) {
                if (onSubmit != null) {
                  onSubmit(i);
                }
                return false;
              }
            }
            const s = {
              workspaceId:
                (a = workspaceService.data.selectedWorkspaceId) != null
                  ? a
                  : _.A,
            };
            const agentSubjectMaterialConfirmed =
              w === "agentic" ? h.Uh(s) : undefined;
            k.contentGeneratorReportManager.setCommonParams({
              agentSubjectMaterialConfirmed,
            });
            try {
              const c = yield e({
                environment: {
                  variant,
                  submitExternally,
                  workspaceStrategy,
                },
              });
              if (c.ok && w === "agentic") {
                h.eX(
                  o._(r._({}, s), {
                    source: "implicit_submit",
                  }),
                );
              }
              if (onSubmit != null) {
                onSubmit(c);
              }
              return c.ok;
            } finally {
              k.contentGeneratorReportManager.setCommonParams({
                agentSubjectMaterialConfirmed: undefined,
              });
            }
          })();
        if (
          w === "video" &&
          (workspaceStrategy === "isolated" || workspaceStrategy === "resume")
        ) {
          const s = k.videoGeneratorManager.promptEnhancementManager;
          return yield s.runWithPromptStateWorkspaceMigration(i);
        }
        return yield i();
      })(),
    [
      N,
      e,
      onSubmit,
      workspaceStrategy,
      w,
      k,
      C,
      workspaceService,
      A,
      variant,
      submitExternally,
    ],
  );
};
