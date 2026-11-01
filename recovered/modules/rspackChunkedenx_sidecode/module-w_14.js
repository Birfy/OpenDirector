export default function (r, value) {
  return {
    enumerable: !(1 & r),
    configurable: !(2 & r),
    writable: !(4 & r),
    value,
  };
}
