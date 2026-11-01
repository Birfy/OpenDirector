import n from "zS";
import a from "cO";
import o from "bT";
import i from "BO";
export function W(e) {
  const { hideClassName, delay, onStartPlay, enabled } = e;
  const lRef = o.useRef(null);
  const uRef = o.useRef(null);
  const dRef = o.useRef(false);
  const mRef = o.useRef(true);
  const pRef = o.useRef(null);
  const { isHovered, handleMouseEnter, handleMouseLeave } = i.D({
    delay,
  });
  const handleVideoEnded = n.A(() => {
    var e;
    dRef.current = true;
    if ((e = uRef.current) != null) {
      e.play();
    }
  });
  const b = n.A(() => {
    var e;
    var r;
    if ((e = uRef.current) != null) {
      e.play();
    }
    if ((r = lRef.current) != null) {
      r.classList.add(hideClassName);
    }
    if (onStartPlay != null) {
      onStartPlay();
    }
  });
  o.useEffect(() => {
    if (enabled === false) {
      if (pRef.current) {
        clearTimeout(pRef.current);
        pRef.current = null;
      }
      mRef.current = false;
      if (uRef.current) {
        uRef.current.oncanplay = null;
      }
      return;
    }
    if (pRef.current) {
      clearTimeout(pRef.current);
    }
    if (!isHovered) {
      var e;
      mRef.current = false;
      dRef.current = false;
      if ((e = lRef.current) != null) {
        e.classList.remove(hideClassName);
      }
      pRef.current = setTimeout(() => {
        if (uRef.current) {
          uRef.current.pause();
          var e = uRef.current.src;
          uRef.current.src = "";
          uRef.current.load();
          uRef.current.src = a.m(e, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%1-%mlNalIyW$$jNWRtRXp%WFpr$0%1c1R*Z*9kb$J0$m5sT$dFSnpX$mhyZFdSS$Rta*pi$1F4WTNjO$BRPT0",
          });
          uRef.current.currentTime = 0;
        }
      }, delay);
      return;
    }
    if (uRef.current) {
      var { readyState } = uRef.current;
      mRef.current = true;
      switch (readyState) {
        case HTMLMediaElement.HAVE_NOTHING:
          uRef.current.load();
          uRef.current.oncanplay = () => {
            if (mRef.current && !dRef.current) {
              b();
            }
          };
          break;
        case HTMLMediaElement.HAVE_ENOUGH_DATA:
          b();
      }
    }
  }, [isHovered, hideClassName, delay, b, enabled]);
  o.useEffect(() => {
    if (enabled !== undefined) {
      return () => {
        if (pRef.current) {
          clearTimeout(pRef.current);
        }
        mRef.current = false;
        if (uRef.current) {
          uRef.current.oncanplay = null;
        }
      };
    }
  }, [enabled]);
  return {
    coverRef: lRef,
    videoRef: uRef,
    handleMouseEnter,
    handleMouseLeave,
    handleVideoEnded,
  };
}
