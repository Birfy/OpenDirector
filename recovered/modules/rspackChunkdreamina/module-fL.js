import n from "bfR";
export var Q = (e) =>
  n(e).value.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });
export var O = (e) => {
  var { amount, number } = e;
  if (
    Number.isFinite(amount) &&
    typeof number === "number" &&
    Number.isFinite(number) &&
    number > 0 &&
    amount > 0 &&
    amount < 10 * number
  ) {
    return number / 10;
  }
};
