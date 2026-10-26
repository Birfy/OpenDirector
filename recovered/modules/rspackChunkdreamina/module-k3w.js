import a from "rL";
export function J(e) {
  const { hasLogin, authReqPortalStatus, authReqPortalABVisible = false } = e;
  return (
    hasLogin &&
    (authReqPortalStatus === a.zt.RELEASED ||
      authReqPortalStatus === a.zt.BETA_AVAILABLE ||
      authReqPortalABVisible)
  );
}
