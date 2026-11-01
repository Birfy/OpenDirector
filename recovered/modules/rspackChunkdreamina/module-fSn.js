import a from "NY";
export function y(e) {
  let t;
  if (
    (t = ((e) => {
      let t;
      const { accept } = e;
      if (accept && Object.keys(accept).length !== 0) {
        const r = Reflect.get(window, "showOpenFilePicker");
        if (typeof r === "function") {
          const o = ((e, accept_1, multiple) => {
            try {
              return e.call(window, {
                excludeAcceptAllOption: true,
                multiple,
                types: [
                  {
                    accept: accept_1,
                  },
                ],
              });
            } catch (e) {
              return;
            }
          })(r, accept, (t = e.multiple) != null && t);
          if (o) {
            const l = new AbortController();
            (function (e, t, n) {
              a._(function* (e, t, n) {
                const { accept, onFilesSelected, onCancel } = n;
                try {
                  const i = yield e;
                  const c = yield Promise.all(
                    i.map((e) =>
                      a._(function* () {
                        return ((e, t) => {
                          if (
                            !t ||
                            (e.type && e.type !== "application/octet-stream")
                          ) {
                            return e;
                          }
                          let n;
                          const a = e.name.lastIndexOf(".");
                          if (a < 0) {
                            return e;
                          }
                          const r = e.name.slice(a).toLowerCase();
                          const o =
                            (n = Object.entries(t).find((e) => {
                              var [t, n] = e;
                              return (
                                !t.includes("*") &&
                                n.some((e) => e.toLowerCase() === r)
                              );
                            })) == null
                              ? undefined
                              : n[0];
                          if (o) {
                            return new File([e], e.name, {
                              type: o,
                              lastModified: e.lastModified,
                            });
                          }
                          return e;
                        })(yield e.getFile(), accept);
                      })(),
                    ),
                  );
                  if (t.aborted) {
                    return;
                  }
                  if (c.length > 0) {
                    return void onFilesSelected(c);
                  }
                  if (onCancel != null) {
                    onCancel();
                  }
                } catch (e) {
                  if (!(t.aborted || onCancel == null)) {
                    onCancel();
                  }
                }
              }).apply(this, arguments);
            })(o, l.signal, e);
            return {
              dispose() {
                l.abort();
              },
            };
          }
        }
      }
    })(e)) != null
  ) {
    return t;
  }
  return ((e) => {
    const { accept, multiple = false, onFilesSelected, onCancel } = e;
    const o = document.createElement("input");
    o.type = "file";
    o.accept = accept
      ? Object.entries(accept)
          .flatMap((e) => {
            var [t, n] = e;
            return [t, ...n];
          })
          .join(",")
      : "";
    o.multiple = multiple;
    o.style.display = "none";
    const l = new AbortController();
    const { signal } = l;
    function dispose() {
      if (!signal.aborted) {
        l.abort();
        o.remove();
      }
    }
    function s() {
      if (!signal.aborted) {
        dispose();
        if (onCancel != null) {
          onCancel();
        }
      }
    }
    o.addEventListener(
      "change",
      function () {
        if (!signal.aborted) {
          let e;
          const t = Array.from((e = o.files) != null ? e : []);
          if (t.length === 0) {
            return void s();
          }
          dispose();
          onFilesSelected(t);
        }
      },
      {
        once: true,
        signal,
      },
    );
    o.addEventListener("cancel", s, {
      once: true,
      signal,
    });
    document.body.appendChild(o);
    if (typeof o.showPicker === "function") {
      try {
        o.showPicker();
      } catch (e) {
        o.click();
      }
    } else {
      o.click();
    }
    document.addEventListener("click", s, {
      capture: true,
      once: true,
      signal,
    });
    return {
      dispose,
    };
  })(e);
}
