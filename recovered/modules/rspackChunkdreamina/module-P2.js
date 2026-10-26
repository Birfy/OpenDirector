import r from "bT";
export var A = function (value) {
  let [t, setT] = r.useState({
    value,
    resolve: (e) => {},
  });
  r.useEffect(() => {
    t.resolve(t.value);
  }, [t]);
  return [
    t.value,
    (e) =>
      new Promise((resolve) => {
        setT((n) => {
          let r = e;
          if (typeof e === "function") {
            r = e(n.value);
          }
          return {
            value: r,
            resolve,
          };
        });
      }),
  ];
};
