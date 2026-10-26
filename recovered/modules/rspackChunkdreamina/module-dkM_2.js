import a from "oa";
import n from "puv";
export function T(e) {
  const teamId = n.y();
  return a._(
    {},
    e,
    teamId
      ? {
          teamId,
        }
      : {},
  );
}
