import n from "NY";
import r from "cO";
import a from "Ev";
const o = 1 / 24;
export var $ = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { promise, resolve } = Promise.withResolvers();
  const c = typeof e === "string" ? e : URL.createObjectURL(e);
  const l = document.createElement("video");
  const d =
    "OffscreenCanvas" in window
      ? new OffscreenCanvas(1, 1)
      : document.createElement("canvas");
  const u = d.getContext("2d");
  if (!u) {
    resolve(null);
    return promise;
  }
  const { crossOrigin, time = a.un ? o : 0, timeoutMs, type, quality } = t;
  const h = () => {
    l.currentTime = time;
  };
  const g = () =>
    n._(function* () {
      resolve(
        yield n._(function* () {
          const { videoWidth, videoHeight } = l;
          d.width = videoWidth;
          d.height = videoHeight;
          u.drawImage(l, 0, 0);
          try {
            if (d instanceof HTMLCanvasElement) {
              return new Promise((resolvePromise) =>
                d.toBlob(resolvePromise, type, quality),
              );
            }
            return yield d.convertToBlob({
              type,
              quality,
            });
          } catch (e) {
            return null;
          }
        })(),
      );
    })();
  const f = () => {
    resolve(null);
  };
  l.addEventListener("loadedmetadata", h);
  l.addEventListener("seeked", g);
  l.addEventListener("error", f);
  if (crossOrigin) {
    l.crossOrigin = crossOrigin;
  }
  l.crossOrigin = "anonymous";
  l.src = r.m(c, null, {
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
      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-$ZsW$RteE1NMD%1$1hrNWFtSXlNWFJpTWpSMlp*aFNjR0pJ$Fhaa2JXeHJXb*M0Z*xre$JuZ*tTRlo1$2xNeE1tRlh$bXhpZ$R*dFkyM%dkRnB%TlRCak1rWj$Xak5XZWc9PQ",
  });
  l.preload = "metadata";
  l.muted = true;
  const I =
    timeoutMs && timeoutMs > 0
      ? window.setTimeout(() => {
          resolve(null);
        }, timeoutMs)
      : undefined;
  promise.finally(() => {
    if (I !== undefined) {
      window.clearTimeout(I);
    }
    l.removeEventListener("loadedmetadata", h);
    l.removeEventListener("seeked", g);
    l.removeEventListener("error", f);
    if (typeof e !== "string") {
      URL.revokeObjectURL(c);
    }
    l.pause();
    l.src = "";
  });
  return promise;
};
