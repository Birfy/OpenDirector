export class c {
  getWorker() {
    return this._worker;
  }
  dispose() {
    this._worker.terminate();
  }
  constructor(e) {
    let t = new URL(e, window.location.href).toString();
    let r = new Blob(
      [
        `	const urlString = ${JSON.stringify(t)}
	const originURL = new URL(urlString)
	const originalImportScripts = self.importScripts
	self.importScripts = (url) => originalImportScripts.call(self, new URL(url, originURL).toString())
	importScripts(urlString);
	`,
      ],
      {
        type: "application/javascript",
      },
    );
    let a = URL.createObjectURL(r);
    this._worker = new Worker(a);
    URL.revokeObjectURL(a);
  }
}
