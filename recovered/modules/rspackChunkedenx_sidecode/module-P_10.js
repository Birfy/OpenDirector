const propertyIsEnumerable = {}.propertyIsEnumerable;
export const f =
  Object.getOwnPropertyDescriptor &&
  !propertyIsEnumerable.call(
    {
      1: 2,
    },
    1,
  )
    ? function (t) {
        const e = Object.getOwnPropertyDescriptor(this, t);
        return !!e && e.enumerable;
      }
    : propertyIsEnumerable;
