const itoc =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const ctoi = {};
for (let n = 0; n < 66; n++) {
  ctoi[itoc.charAt(n)] = n;
}
export default {
  itoc,
  ctoi,
};
