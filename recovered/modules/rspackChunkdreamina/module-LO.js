let a;
let o;
export function L({ list, filter = (e) => e }) {
  return list
    .sort((e, t) => {
      let r = {
        high: 2,
        default: 1,
        low: 0,
      };
      let { orderLevel = "default", order = 0 } = e;
      let { orderLevel: orderLevel_1 = "default", order: order_1 = 0 } = t;
      if (orderLevel !== orderLevel_1) {
        return r[orderLevel_1] - r[orderLevel];
      }
      return order_1 - order;
    })
    .map(filter);
}
o = a || (a = {});
o.high = "high";
o.default = "default";
o.low = "low";
