let a;
(a || (a = {})).TRACE_NAME_AND_START_TIME = "traceNameAndStartTime";
export const V = {
  name: "trace",
  key: "traceId",
  index: [
    {
      name: "startTime",
      unique: false,
    },
    {
      name: "traceName",
      unique: false,
    },
    {
      name: "traceNameAndStartTime",
      keyPath: ["traceName", "startTime"],
      unique: false,
    },
  ],
};
