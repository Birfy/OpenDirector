export function Zg() {
  return RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
}
let i =
  "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
export let p6 = RegExp(`^${i}$`);
function a(e) {
  let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  if (typeof e.precision === "number") {
    if (e.precision === -1) {
      return `${t}`;
    }
    if (e.precision === 0) {
      return `${t}:[0-5]\\d`;
    }
    return `${t}:[0-5]\\d\\.\\d{${e.precision}}`;
  }
  return `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
export function kB(e) {
  return RegExp(`^${a(e)}$`);
}
export function w$(e) {
  let t = a({
    precision: e.precision,
  });
  let n = ["Z"];
  if (e.local) {
    n.push("");
  }
  if (e.offset) {
    n.push("([+-]\\d{2}:\\d{2})");
  }
  let r = `${t}(?:${n.join("|")})`;
  return RegExp(`^${i}T(?:${r})$`);
}
export const AC = /^[^A-Z]*$/;
export const Ak = /^[a-zA-Z0-9_-]{21}$/;
export const Gl = /^[0-9a-z]+$/;
export const K3 =
  /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
export const OI = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
export const Os =
  /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
export const Rp =
  /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
export const Yj = (e) => {
  let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return RegExp(`^${t}$`);
};
export const Z0 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
export const Zv = /^[^a-z]*$/;
export const ai = /^-?\d+(?:\.\d+)?/i;
export const ch = /null/i;
export const fO = /^[A-Za-z0-9]{27}$/;
export const gF = /^[cC][^\s-]{8,}$/;
export const hQ = /^\+(?:[0-9]){6,14}[0-9]$/;
export const kM = /^[0-9a-vA-V]{20}$/;
export const l7 =
  /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
export const nd = /^\d+$/;
export const p0 =
  /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
export const r0 = /^[A-Za-z0-9_-]*$/;
export const uR = (e) => {
  if (e) {
    return RegExp(
      `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
    );
  }
  return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
};
export const uX =
  /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
export const ug =
  /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
export const zM = /true|false/i;
export const zr =
  /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
