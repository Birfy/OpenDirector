import o from "bT";
export const A = function (t) {
  o.useEffect(function () {
    t();
  }, []);
};
