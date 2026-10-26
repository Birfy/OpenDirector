const a = /^(?:\d+(?:\.\d+)?|\.\d+):(?:\d+(?:\.\d+)?|\.\d+)$/;
export function x(e) {
  if (typeof e === "string" && a.test(e)) {
    const [t, n] = e.split(":").map(Number);
    if (Number.isFinite(t) && Number.isFinite(n) && !(t <= 0) && !(n <= 0)) {
      return {
        width: t,
        height: n,
      };
    }
  }
}
