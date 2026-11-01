const propertyIsEnumerable = {}.propertyIsEnumerable;
export const f =
  Object.getOwnPropertyDescriptor &&
  !propertyIsEnumerable.call(
    {
      1: 2,
    },
    1,
  )
    ? function (e) {
        const t = Object.getOwnPropertyDescriptor(this, e);
        return !!t && t.enumerable;
      }
    : propertyIsEnumerable;
