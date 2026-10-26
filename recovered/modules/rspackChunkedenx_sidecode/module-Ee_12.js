const itoc =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const ctoi = {};
for (let $ = 0; $ < 66; $++) {
  ctoi[itoc.charAt($)] = $;
}
export default {
  itoc,
  ctoi,
};
