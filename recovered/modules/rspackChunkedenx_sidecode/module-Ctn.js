window.effectPWasm = {};
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
window.canvasEffectPerf = {};
