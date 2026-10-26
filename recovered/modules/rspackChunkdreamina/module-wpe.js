import o from "bT";
export const A = function (t) {
  const eRef = o.useRef();
  eRef.current = o.useMemo(
    function () {
      return t;
    },
    [t],
  );
  return o.useCallback(
    function () {
      const eRef_current = eRef.current;
      return eRef_current && eRef_current.apply(undefined, arguments);
    },
    [eRef],
  );
};
