import { getFullPath, normalizeId, resolveUrl } from "./module-BKK.js";
export default class extends Error {
  constructor(e, t, r, s) {
    super(s || `can't resolve reference ${r} from id ${t}`);
    this.missingRef = resolveUrl(e, t, r);
    this.missingSchema = normalizeId(getFullPath(e, this.missingRef));
  }
}
