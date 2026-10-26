export var Z = function () {
  let e;
  let t;
  const a =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : typeof window === "undefined"
        ? ""
        : (e = (t = window.navigator) == null ? undefined : t.userAgent) != null
          ? e
          : "";
  return a.includes("CAPCUT_PC") || a.includes("JIANYING_PC");
};
export var e = () => Z();
