export var Y = (e, t) => {
  if (e === "slot") {
    return 0;
  }
  if (e instanceof Function) {
    return e(t);
  }
  let { children, ...rest } = t != null ? t : {};
  if (e === "svg") {
    throw Error(
      "SVG elements are not supported in the JSX syntax, use the array syntax instead",
    );
  }
  return [e, rest, children];
};
