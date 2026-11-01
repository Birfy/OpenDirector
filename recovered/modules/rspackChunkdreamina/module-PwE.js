import r from "NY";
import n from "bE";
import a from "M8X";
import o from "c5";
function s(e, t) {
  return r._(function* () {
    const i = a.cQ(t, n.c);
    const { isModelListLoading } = e.metadata;
    if (isModelListLoading !== false && isModelListLoading !== undefined) {
      for (
        const o = Date.now();
        e.metadata.isModelListLoading && Date.now() - o < 5000;
      ) {
        yield new Promise((resolve) => setTimeout(resolve, 100));
      }
      if (!i.hasLogin && e.metadata.isModelListLoading) {
        return new Promise((resolve) => {
          var r = i.onDidLogin(() => {
            r.dispose();
            var i = Date.now();
            var n = () => {
              if (!e.metadata.isModelListLoading || Date.now() - i >= 5000) {
                resolve();
              } else {
                setTimeout(n, 100);
              }
            };
            setTimeout(n, 100);
          });
          setTimeout(() => {
            r.dispose();
            resolve();
          }, 5000);
        });
      }
    }
  })();
}
export function P(e, t, i, c) {
  return r._(function* () {
    const l = new URLSearchParams(t);
    const contentGeneratorType = (S = l.get("type")) != null ? S : undefined;
    const prompt = (C = l.get("prompt")) != null ? C : undefined;
    const h = (A = l.get("model")) != null ? A : undefined;
    const p = (j = l.get("resolution")) != null ? j : undefined;
    const v = (P = l.get("scale")) != null ? P : undefined;
    const m = (e) => {
      if (
        e &&
        ["21:9", "16:9", "3:2", "4:3", "1:1", "3:4", "2:3", "9:16"].includes(e)
      ) {
        return e;
      }
    };
    if (
      (c == null || !c.aborted) &&
      (contentGeneratorType === "image" ||
        contentGeneratorType === "video" ||
        contentGeneratorType === "music" ||
        (contentGeneratorType === "agentic" &&
          (i == null ? undefined : i.includes("agentic")))) &&
      (!i || i.includes(contentGeneratorType))
    ) {
      const g = a.cQ(e, o.O);
      const f = yield g.getInstance();
      if (c == null || !c.aborted) {
        f.contentGeneratorManager.setContentGeneratorType(contentGeneratorType);
        if (contentGeneratorType === "agentic") {
          if (prompt) {
            f.contentGeneratorDataAdapter.applyPrompt({
              prompt,
              contentGeneratorType,
            });
          }
          return;
        }
        if (contentGeneratorType === "image") {
          const y = f.imageGeneratorManager;
          if (prompt) {
            y.setPrompt(prompt);
          }
          if (h) {
            yield s(y, e);
            if (c == null ? undefined : c.aborted) {
              return;
            }
            y.switchModel(h);
          }
          const _ = ((e) => {
            if (e) {
              if (["1k", "1.5k", "2k", "4k"].includes(e)) {
                return e;
              }
              return undefined;
            }
          })(p);
          if (_) {
            y.changeResolution(_);
          }
          const b = m(v);
          if (b) {
            y.changeAspectRatio(b);
          } else if (v === "auto") {
            y.changeAspectRatio(undefined);
          }
          return;
        }
        if (contentGeneratorType === "music") {
          const w = f.musicGeneratorManager;
          if (prompt) {
            w.setPrompt(prompt);
          }
          if (h) {
            yield r._(function* () {
              const t = a.cQ(e, n.c);
              const i = () => w.metadata.modelList.length > 0;
              if (!i()) {
                for (const r = Date.now(); !i() && Date.now() - r < 5000;) {
                  yield new Promise((resolve) => setTimeout(resolve, 100));
                }
                if (!t.hasLogin && !i()) {
                  return new Promise((resolve) => {
                    var r = t.onDidLogin(() => {
                      r.dispose();
                      var t = Date.now();
                      var n = () => {
                        if (i() || Date.now() - t >= 5000) {
                          resolve();
                        } else {
                          setTimeout(n, 100);
                        }
                      };
                      setTimeout(n, 100);
                    });
                    setTimeout(() => {
                      r.dispose();
                      resolve();
                    }, 5000);
                  });
                }
              }
            })();
            if (c == null ? undefined : c.aborted) {
              return;
            }
            var S;
            var C;
            var A;
            var j;
            var P;
            let I;
            const k = w.metadata.modelList.find((e) => e.key === h);
            const E = w.metadata.currentModel;
            const R =
              (I = k == null ? undefined : k.key) != null
                ? I
                : E == null
                  ? undefined
                  : E.key;
            if (R) {
              w.switchModel(R);
            }
          }
          return;
        }
        const T = f.videoGeneratorManager;
        if (h) {
          yield s(T, e);
          if (c == null ? undefined : c.aborted) {
            return;
          }
          T.switchModel(h);
        }
        if (prompt) {
          f.contentGeneratorDataAdapter.applyPrompt({
            prompt,
            contentGeneratorType,
          });
        }
        const x = m(v);
        if (x) {
          T.changeAspectRatio(x);
        }
      }
    }
  })();
}
