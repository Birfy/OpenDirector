const n = "fdg3693b";
window.wasmExec = () => {
  var jsUrl = ""
    .concat(
      location.origin,
      "/static-resource/ies/ccweb/scm_storage/sdk/dreamina-canvas/wasm/effect_c_",
    )
    .concat(n, ".js");
  var wasmUrl = ""
    .concat(
      location.origin,
      "/static-resource/ies/ccweb/scm_storage/sdk/dreamina-canvas/wasm/effect_c_",
    )
    .concat(n, ".wasm");
  var workerUrl = ""
    .concat(
      location.origin,
      "/static-resource/ies/ccweb/scm_storage/sdk/dreamina-canvas/wasm/effect_c_",
    )
    .concat(n, ".worker.js");
  var i = new Worker(
    require.tu(
      new URL(
        "/static-resource/ies/dreamina/web/jimeng/" + require.u(7),
        require.b,
      ),
    ),
  );
  i.postMessage({
    type: "init",
    data: {
      jsUrl,
      wasmUrl,
      workerUrl,
    },
  });
  window.effectPWasm = {};
  window.effectPWasm.worker = i;
  if (!window.effectPWasm.pWasmResult) {
    window.effectPWasm.pWasmResult = {
      pJs: new Promise((resolve, reject) => {
        window.effectPWasm.pJsResolve = resolve;
        window.effectPWasm.pJsReject = reject;
      }),
      pWorker: new Promise((resolve, reject) => {
        window.effectPWasm.pWorkerResolve = resolve;
        window.effectPWasm.pWorkerReject = reject;
      }),
      pWasmModule: new Promise((resolve, reject) => {
        window.effectPWasm.pWasmModuleResolve = resolve;
        window.effectPWasm.pWasmModuleReject = reject;
      }),
    };
  }
  window.canvasEffectPerf = {};
  var a = () =>
    new Promise((resolve) => {
      caches.open("wasm-cache").then((e) => {
        e.delete(wasmUrl).then(() => {
          resolve(true);
        });
      });
    });
  i.onmessage = function (r) {
    let t;
    let e;
    let n;
    let o;
    let s;
    let u;
    let c;
    let f;
    const { type, data, duration } = r.data;
    switch (type) {
      case "jsUrl":
        window.effectPWasm.pJsResolve(data);
        break;
      case "workerUrl":
        window.effectPWasm.pWorkerResolve(data);
        break;
      case "wasmModule":
        window.effectPWasm.pWasmModuleResolve(data);
        window.canvasEffectPerf.compileDuration = duration;
        if (!((e = window.performance) == null || (t = e.mark) == null)) {
          t.call(e, "EFFECT_COMPLIE_START", {
            startTime: 0,
          });
        }
        if (!((o = window.performance) == null || (n = o.mark) == null)) {
          n.call(o, "EFFECT_COMPLIE_END", {
            startTime: duration,
          });
        }
        break;
      case "error":
        window.effectPWasm.pJsReject("wasm_js_fetch_error");
        window.effectPWasm.pWorkerReject("wasm_worker_fetch_error");
        window.effectPWasm.pWasmModuleReject("wasm_wasm_fetch_error");
        window.canvasEffectPerf.wasmFetchError = 1;
        break;
      case "wasmLoadError":
        if (window.effectPWasm.retryTimes < 5) {
          a().then(() => {
            var r;
            if ((r = window) != null) {
              r.wasmExec();
            }
          });
          window.effectPWasm.retryTimes = window.effectPWasm.retryTimes + 1;
        } else {
          a();
          i.terminate();
          window.effectPWasm.pWasmModuleReject("wasm_wasm_fetch_error");
          window.canvasEffectPerf.wasmLoadError = 1;
        }
        break;
      case "download":
        window.canvasEffectPerf.downloadDuration = duration;
        if (!((u = window.performance) == null || (s = u.mark) == null)) {
          s.call(u, "EFFECT_DOWNLOAD_START", {
            startTime: 0,
          });
        }
        if (!((f = window.performance) == null || (c = f.mark) == null)) {
          c.call(f, "EFFECT_DOWNLOAD_END", {
            startTime: duration,
          });
        }
    }
  };
  i.onerror = function () {
    window.effectPWasm.pJsReject("wasm_js_fetch_error");
    window.effectPWasm.pWorkerReject("wasm_worker_fetch_error");
    window.effectPWasm.pWasmModuleReject("wasm_wasm_fetch_error");
  };
};
