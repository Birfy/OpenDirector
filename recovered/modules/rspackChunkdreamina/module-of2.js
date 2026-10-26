import { B, Xx, j6, n8, qW, xs } from "./module-Yx.js";
let n;
export var sJ = {
  MANIFEST: "manifest",
  NETWORK: "network",
  NETWORK_TIMEOUT: "network_timeout",
  NETWORK_FORBIDDEN: "network_forbidden",
  NETWORK_NOTFOUND: "network_notfound",
  NETWROK_RANGE_NOT_SATISFIABLE: "network_range_not_satisfiable",
  DEMUX: "demux",
  REMUX: "remux",
  MEDIA: "media",
  DRM: "drm",
  OTHER: "other",
  RUNTIME: "runtime",
  SUB_TYPES: {
    FLV: "FLV",
    HLS: "HLS",
    MP4: "MP4",
    FMP4: "FMP4",
    MSE_ADD_SB: "MSE_ADD_SB",
    MSE_APPEND_BUFFER: "MSE_APPEND_BUFFER",
    MSE_OTHER: "MSE_OTHER",
    MSE_FULL: "MSE_FULL",
    MSE_CHANGE_TYPE: "MSE_CHANGE_TYPE",
    OPTION: "OPTION",
    DASH: "DASH",
    LICENSE: "LICENSE",
    CUSTOM_LICENSE: "CUSTOM_LICENSE",
    MSE_HIJACK: "MSE_HIJACK",
    EME_HIJACK: "EME_HIJACK",
    SIDX: "SIDX",
    NO_CANPLAY_ERROR: "NO_CANPLAY_ERROR",
    BUFFERBREAK_ERROR: "BUFFERBREAK_ERROR",
    WAITING_TIMEOUT_ERROR: "WAITING_TIMEOUT_ERROR",
    MEDIA_ERR_ABORTED: "MEDIA_ERR_ABORTED",
    MEDIA_ERR_NETWORK: "MEDIA_ERR_NETWORK",
    MEDIA_ERR_DECODE: "MEDIA_ERR_DECODE",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "MEDIA_ERR_SRC_NOT_SUPPORTED",
    MEDIA_ERR_CODEC_NOT_SUPPORTED: "MEDIA_ERR_CODEC_NOT_SUPPORTED",
    MEDIA_ERR_URL_EMPTY: "MEDIA_ERR_URL_EMPTY",
  },
};
n = {};
n8(
  n8(
    n8(
      n8(
        n8(
          n8(
            n8(
              n8(
                n8(
                  n8(n, sJ.MANIFEST, {
                    HLS: 1100,
                    DASH: 1200,
                  }),
                  sJ.NETWORK,
                  2100,
                ),
                sJ.NETWORK_TIMEOUT,
                2101,
              ),
              sJ.NETWORK_FORBIDDEN,
              2103,
            ),
            sJ.NETWORK_NOTFOUND,
            2104,
          ),
          sJ.NETWROK_RANGE_NOT_SATISFIABLE,
          2116,
        ),
        sJ.DEMUX,
        {
          FLV: 3100,
          HLS: 3200,
          MP4: 3300,
          FMP4: 3400,
          SIDX: 3410,
        },
      ),
      sJ.REMUX,
      {
        FMP4: 4100,
        MP4: 4200,
      },
    ),
    sJ.MEDIA,
    {
      MEDIA_ERR_ABORTED: 5101,
      MEDIA_ERR_NETWORK: 5102,
      MEDIA_ERR_DECODE: 5103,
      MEDIA_ERR_SRC_NOT_SUPPORTED: 5104,
      MEDIA_ERR_CODEC_NOT_SUPPORTED: 5105,
      MEDIA_ERR_URL_EMPTY: 5106,
      MSE_ADD_SB: 5200,
      MSE_APPEND_BUFFER: 5201,
      MSE_OTHER: 5202,
      MSE_FULL: 5203,
      MSE_HIJACK: 5204,
      MSE_CHANGE_TYPE: 5205,
      EME_HIJACK: 5301,
    },
  ),
  sJ.DRM,
  {
    LICENSE: 7100,
    CUSTOM_LICENSE: 7200,
  },
);
export var sn = n8(n8(n, sJ.OTHER, 8000), sJ.RUNTIME, {
  NO_CANPLAY_ERROR: 9001,
  BUFFERBREAK_ERROR: 9002,
  WAITING_TIMEOUT_ERROR: 9003,
});
export var TA = ((e) => {
  function t(e, r, n, o, u) {
    let l;
    xs(this, t);
    l = qW(this, t, [u || (n == null ? undefined : n.message)]);
    l.errorType = e === sJ.NETWORK_TIMEOUT ? sJ.NETWORK : e;
    l.originError = n;
    l.ext = o;
    l.errorCode = sn[e][r] || sn[e];
    l.errorMessage = l.message;
    if (!l.errorCode) {
      l.errorType = sJ.OTHER;
      l.errorCode = sn[l.errorType];
    }
    return l;
  }
  B(t, e);
  return j6(t, null, [
    {
      key: "create",
      value: function (e, r, n, i, s) {
        if (e instanceof t) {
          return e;
        }
        if (e instanceof Error) {
          n = e;
          e = "";
        }
        if (!e) {
          e = sJ.OTHER;
        }
        return new t(e, r, n, i, s);
      },
    },
    {
      key: "network",
      value: function (e) {
        let r;
        return new t(
          e != null && e.isTimeout ? sJ.NETWORK_TIMEOUT : sJ.NETWORK,
          null,
          e instanceof Error ? e : null,
          {
            url: e == null ? undefined : e.url,
            response: e == null ? undefined : e.response,
            httpCode:
              e == null || (r = e.response) == null ? undefined : r.status,
          },
        );
      },
    },
  ]);
})(Xx(Error));
