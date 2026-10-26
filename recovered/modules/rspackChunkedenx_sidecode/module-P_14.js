const propertyIsEnumerable = {}.propertyIsEnumerable;
export const f =
  Object.getOwnPropertyDescriptor &&
  !propertyIsEnumerable.call(
    {
      1: 2,
    },
    1,
  )
    ? function (r) {
        const t = Object.getOwnPropertyDescriptor(this, r);
        return !!t && t.enumerable;
      }
    : propertyIsEnumerable;
