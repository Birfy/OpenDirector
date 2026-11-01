export function A0(e) {
  let t;
  let r;
  const { delay = 300, onCloseStart, onFinalize } = e;
  let o = "open";
  const closed = new Promise((resolve) => {
    r = resolve;
  });
  const finish = () => {
    if (o !== "closed") {
      o = "closed";
      if (t !== undefined) {
        clearTimeout(t);
        t = undefined;
      }
      onFinalize();
      r();
    }
  };
  return {
    get isClosing() {
      return o !== "open";
    },
    closed,
    close() {
      if (o === "open") {
        o = "closing";
        onCloseStart();
        t = setTimeout(finish, delay);
      }
    },
    finish,
  };
}
