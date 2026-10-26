if (require.j == "wl4") {
  var a;
  var o;
  var i = require("./module-cL_3.js");
}
a = o || (o = {});
a[(a.KvError = 110000)] = "KvError";
a[(a.KvSetError = 110001)] = "KvSetError";
a[(a.KvSetOverSize = 110002)] = "KvSetOverSize";
a[(a.KvDeleteError = 110003)] = "KvDeleteError";
a[(a.KvQueryError = 110004)] = "KvQueryError";
a[(a.KvClearError = 110005)] = "KvClearError";
a[(a.KvKeyNotFound = 110006)] = "KvKeyNotFound";
a[(a.DbDatabaseNotFound = 111001)] = "DbDatabaseNotFound";
a[(a.DbTableNotFound = 111002)] = "DbTableNotFound";
a[(a.DbConnectError = 111003)] = "DbConnectError";
a[(a.DbQuotaExceeded = 111004)] = "DbQuotaExceeded";
a[(a.DbSetError = 111005)] = "DbSetError";
a[(a.DbDeleteError = 111006)] = "DbDeleteError";
a[(a.DbQueryError = 111007)] = "DbQueryError";
a[(a.DbClearError = 111008)] = "DbClearError";
a[(a.DbCleanupError = 111009)] = "DbCleanupError";
a[(a.DbTransactionError = 111010)] = "DbTransactionError";
export let Um =
  require.j == "wl4" ? i.I(110000, "key value storage fail.") : null;
export let sZ =
  require.j == "wl4" ? i.I(110001, "set key value storage fail.") : null;
export let TG =
  require.j == "wl4" ? i.I(110003, "delete key value storage fail.") : null;
export let oP =
  require.j == "wl4" ? i.I(110004, "query key value storage fail.") : null;
export let nu =
  require.j == "wl4" ? i.I(110005, "clear key value storage fail.") : null;
export let Hs = require.j == "wl4" ? i.I(111003, "connect db fail.") : null;
export let pw = require.j == "wl4" ? i.I(111005, "set database fail.") : null;
export let se =
  require.j == "wl4" ? i.I(111006, "delete database fail.") : null;
export let rt = require.j == "wl4" ? i.I(111007, "query database fail.") : null;
export let qd = require.j == "wl4" ? i.I(111008, "clear database fail.") : null;
export let Dz =
  require.j == "wl4" ? i.I(111009, "cleanup database fail.") : null;
export let dT =
  require.j == "wl4" ? i.I(111010, "invoke transaction fail.") : null;
