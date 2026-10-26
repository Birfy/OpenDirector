import r from "oa";
import n from "puv";
export function T(e) {
  const teamId = n.y();
  return r._(
    {},
    e,
    teamId
      ? {
          teamId,
        }
      : {},
  );
}
