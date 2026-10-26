import a from "yMd";
function r(t) {
  let e;
  return (
    t.status === a.YG.Reviewing ||
    ((e = t.reviewInfo) == null ? undefined : e.reviewStatus) === a.jz.Reviewing
  );
}
export { r };
