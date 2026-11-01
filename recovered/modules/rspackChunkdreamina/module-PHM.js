import r from "Ut";
export function B(e, t) {
  const { processFlows } = t;
  if (processFlows.length !== 0) {
    let n = 0;
    let a = 0;
    let o = 0;
    processFlows.forEach((e) => {
      e.curProcessFlows.forEach((e) => {
        switch (e) {
          case r.DAVideoProcessType.Extend:
            o += 1;
            break;
          case r.DAVideoProcessType.SR:
            a += 1;
            break;
          case r.DAVideoProcessType.InsertFrame:
            n += 1;
        }
      });
    });
    const l = {};
    l.frameInterpolationCnt = n;
    l.upscaleCnt = a;
    l.addMoreCnt = o;
    e.setParams(l);
  }
}
