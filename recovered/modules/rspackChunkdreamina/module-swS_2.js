export var z = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return Math.ceil(e / t) * t;
};
export var Q = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return Math.floor(e / t) * t;
};
