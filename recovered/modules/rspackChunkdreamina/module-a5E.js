import i from "SR";
export function l(e) {
  switch (e.taskStatus) {
    case i.NuroTaskStatus.finished:
      return "success";
    case i.NuroTaskStatus.failed:
      return "fail";
    case i.NuroTaskStatus.cancelled:
      return "pending";
    case i.NuroTaskStatus.running:
      return "streaming";
  }
}
