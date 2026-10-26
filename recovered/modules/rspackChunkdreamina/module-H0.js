import n from "Ut";
export function I(e) {
  let t;
  let i;
  let a;
  let o;
  let r;
  let l;
  let d;
  let u;
  let m;
  let s;
  let g;
  let p;
  const c =
    e == null ||
    (a = e.abilities) == null ||
    (i = a.proHD) == null ||
    (t = i.posteditParam) == null
      ? undefined
      : t.originImage;
  return (
    c ||
    (e == null ||
    (p = e.abilities) == null ||
    (g = p.unifiedGenerate) == null ||
    (s = g.unifiedAbilityList) == null ||
    (m = s[0]) == null ||
    (u = m.abilityParam) == null ||
    (d = u.resource_list) == null ||
    (l = d.find(
      (e) =>
        (e == null ? undefined : e.purpose) ===
        n.ResourcePurpose.ORIGINAL_IMAGE,
    )) == null ||
    (r = l.content) == null ||
    (o = r.image) == null
      ? undefined
      : o.image_content)
  );
}
