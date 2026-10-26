import i from "auX";
const n = {
  BDT: 100,
  CLP: 1000,
  COP: 1000,
  CZK: 10,
  DKK: 10,
  EGP: 10,
  HKD: 10,
  HUF: 100,
  IDR: 10000,
  JPY: 100,
  KRW: 1000,
  KZT: 100,
  MXN: 10,
  NGN: 1000,
  NOK: 10,
  PHP: 10,
  PKR: 100,
  SEK: 10,
  THB: 10,
  TRY: 10,
  TWD: 10,
  TZS: 1000,
  VND: 10000,
  ZAR: 10,
};
export function A(e, t) {
  let r;
  const a = (r = n[e.currencyCode]) != null ? r : 1;
  return {
    price: "".concat(e.currencyTips).concat(a),
    number: (
      (t * e.subscribeCycle * 10 ** i.P(e.currencyCode) * a) /
      e.totalAmount
    ).toFixed(),
  };
}
