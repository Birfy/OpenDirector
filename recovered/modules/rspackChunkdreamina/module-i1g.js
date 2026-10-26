export function V(t, e) {
  let i;
  let a;
  t.setParams({
    templateCategory: "",
    templateCategoryId:
      (i = (a = e.commonAttr.tagIdList) == null ? undefined : a.join(",")) !=
      null
        ? i
        : "",
  });
}
