import a from "Ut";
export function B(e, t) {
  const { processFlows } = t;
  if (processFlows.length !== 0) {
    let n = 0;
    let r = 0;
    let o = 0;
    processFlows.forEach((e) => {
      e.curProcessFlows.forEach((e) => {
        switch (e) {
          case a.DAVideoProcessType.Extend:
            o += 1;
            break;
          case a.DAVideoProcessType.SR:
            r += 1;
            break;
          case a.DAVideoProcessType.InsertFrame:
            n += 1;
        }
      });
    });
    const l = {};
    l.frameInterpolationCnt = n;
    l.upscaleCnt = r;
    l.addMoreCnt = o;
    e.setParams(l);
  }
}
