import r from "oa";
import a from "bk";
export function N(e) {
  let t;
  let i;
  const { oldSubject, newSubject } = e;
  if (
    ((t = newSubject.subjectControl) == null ? undefined : t.isFavorite) !==
    undefined
  ) {
    return newSubject;
  }
  const isFavorite =
    (i = oldSubject.subjectControl) == null ? undefined : i.isFavorite;
  if (isFavorite === undefined) {
    return newSubject;
  }
  return a._(r._({}, newSubject), {
    subjectControl: a._(r._({}, newSubject.subjectControl), {
      isFavorite,
    }),
  });
}
