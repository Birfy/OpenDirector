import a from "yMd";
export function I(t) {
  let e;
  return (
    t.status === a.YG.Online &&
    ((e = t.reviewInfo) == null ? undefined : e.reviewStatus) === a.jz.Reviewing
  );
}
