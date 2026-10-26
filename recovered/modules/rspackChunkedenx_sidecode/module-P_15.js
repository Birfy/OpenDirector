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
        const r = Object.getOwnPropertyDescriptor(this, t);
        return !!r && r.enumerable;
      }
    : propertyIsEnumerable;
