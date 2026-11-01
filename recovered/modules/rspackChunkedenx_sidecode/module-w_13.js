export default function (J, value) {
  return {
    enumerable: !(1 & J),
    configurable: !(2 & J),
    writable: !(4 & J),
    value,
  };
}
