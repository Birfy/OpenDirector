import a from "z8";
import "t0h";
import r from "U9";
import o from "bT";
import i from "gG";
import s from "JSz";
import l from "PZV";
import c from "RTG";
import d from "AjX";
const value = s.uR();
const p = [];
function m(option) {
  return {
    label: a.jsx(d.W, {
      option,
    }),
    value: option.value,
  };
}
export function F(e) {
  const {
    resourceOptions,
    query,
    isSubjectLoading,
    subjectResults,
    validateSubjectEligibility,
  } = e;
  if (
    !(
      isSubjectLoading ||
      resourceOptions.length > 0 ||
      subjectResults.length > 0
    ) &&
    query
  ) {
    return p;
  }
  const options = isSubjectLoading
    ? [
        {
          label: a.jsx(l.D, {}),
          disabled: true,
          value,
        },
      ]
    : subjectResults.map((subject) => {
        var t;
        var disabled;
        disabled =
          ((t =
            validateSubjectEligibility == null
              ? undefined
              : validateSubjectEligibility(subject)) == null
            ? undefined
            : t.ok) === false;
        return {
          label: a.jsx(c.s, {
            subject,
            disabled,
          }),
          value: i.K(subject),
          disabled,
          extra: {
            subject,
            tooltipProps:
              disabled && t.msg
                ? {
                    content: t.msg,
                    position: "right",
                  }
                : undefined,
          },
        };
      });
  const v = resourceOptions.length > 0 && subjectResults.length > 0;
  return [
    {
      key: "resource",
      options: resourceOptions,
    },
    {
      key: "subject",
      label: v
        ? a.jsx(r.A, {
            style: {
              margin: "2px 0 0 0",
              borderColor: "var(--stroke-secondary, rgba(204, 221, 255, 0.12))",
            },
          })
        : null,
      options,
    },
  ];
}
function useH(e) {
  const { filteredResourceOptions, isSubjectLoading, subjectResults, keyword } =
    e.metadata;
  return o.useMemo(
    () =>
      F({
        resourceOptions: filteredResourceOptions.map(m),
        query: keyword,
        isSubjectLoading,
        subjectResults,
        validateSubjectEligibility: (t) => e.validateSubjectEligibility(t),
      }),
    [filteredResourceOptions, isSubjectLoading, subjectResults, e, keyword],
  );
}
export { useH as a };
