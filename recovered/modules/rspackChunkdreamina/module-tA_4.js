export let V =
  require.j == "wl4"
    ? {
        error(...e) {
          if (typeof console.error === "function") {
            console.error(...e);
          }
        },
        info(...e) {
          if (typeof console.info === "function") {
            console.info(...e);
          }
        },
        log(...e) {
          if (typeof console.log === "function") {
            console.log(...e);
          }
        },
        time(e) {
          if (typeof console.time === "function") {
            console.time(e);
          }
        },
        timeEnd(e) {
          if (typeof console.timeEnd === "function") {
            console.timeEnd(e);
          }
        },
        timeLog(e, ...t) {
          if (typeof console.timeLog === "function") {
            console.timeLog(e, ...t);
          }
        },
        timeStamp(e) {
          if (typeof console.timeStamp === "function") {
            console.timeStamp(e);
          }
        },
        trace(...e) {
          if (typeof console.trace === "function") {
            console.trace(...e);
          }
        },
        warn(...e) {
          if (typeof console.warn === "function") {
            console.warn(...e);
          }
        },
        profile(e) {
          if (typeof console.profile === "function") {
            console.profile(e);
          }
        },
        profileEnd(e) {
          if (typeof console.profileEnd === "function") {
            console.profileEnd(e);
          }
        },
      }
    : null;
