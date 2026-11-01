let r = (e) =>
  JSON.stringify({
    code: e.code,
    ctrl: !!e.ctrl,
    shift: !!e.shift,
    alt: !!e.alt,
    meta: !!e.meta,
  });
export function A(e) {
  let t = {};
  e.forEach((e, code) => {
    t[
      r(
        (code =
          typeof code === "number"
            ? {
                code,
              }
            : code),
      )
    ] = e;
  });
  return (e) => {
    let n =
      t[
        r({
          code: e.keyCode || e.which,
          ctrl: !!e.ctrlKey,
          shift: !!e.shiftKey,
          alt: !!e.altKey,
          meta: !!e.metaKey,
        })
      ];
    if (n) {
      e.stopPropagation();
      if (n(e) === false) {
        e.preventDefault();
      }
    }
  };
}
