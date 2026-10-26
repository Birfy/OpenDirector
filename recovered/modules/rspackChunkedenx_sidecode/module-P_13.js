const propertyIsEnumerable = {}.propertyIsEnumerable;
export const f =
  Object.getOwnPropertyDescriptor &&
  !propertyIsEnumerable.call(
    {
      1: 2,
    },
    1,
  )
    ? function (J) {
        const Z = Object.getOwnPropertyDescriptor(this, J);
        return !!Z && Z.enumerable;
      }
    : propertyIsEnumerable;
