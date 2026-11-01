import i from "xH6";
export function C(e) {
  switch (e) {
    case i.Gj.Success:
      return "success";
    case i.Gj.Failed:
      return "fail";
    case i.Gj.Cancelled:
      return "cancel";
    default:
      return "fail";
  }
}
