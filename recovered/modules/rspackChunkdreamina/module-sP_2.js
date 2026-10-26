export var C = {
  type: require("yMd").pH.MultiFrames,
  frameTransitionDurationMsConfig: {
    defaultValue: 5000,
    min: 1000,
    max: 6000,
    step: 1000,
  },
  leadingSegmentGenerationEnabled: false,
  trailingSegmentGenerationEnabled: false,
  minGenerationDurationMs: 2000,
  maxFrameCount: 10,
  imageConfig: {},
  videoConfig: undefined,
  disabled: true,
};
