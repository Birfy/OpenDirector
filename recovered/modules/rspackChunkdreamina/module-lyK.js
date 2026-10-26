import r from "oa";
export function v(e, t) {
  const i =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : t.hasLogin;
  if (i) {
    e.setConfig({
      userId: t.userProfile.uid,
      hasLogin: true,
      userType: 12,
    });
  } else {
    e.setConfig(
      r._(
        {
          userId: "",
          hasLogin: false,
          userType: 14,
        },
        {},
      ),
    );
  }
}
