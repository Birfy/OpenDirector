export function M(e) {
  let t;
  let n;
  const a =
    (t = e == null ? undefined : e.customDeployEnv) != null ? t : "prod";
  if (a) {
    return a !== "prod";
  }
  return !((n = e == null ? undefined : e.buildGitTag) != null
    ? n
    : "dreamina@1.1250.0");
}
