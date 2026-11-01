import i from "wcw";
export class Q {
  registerPlugin(e) {
    const t = e.getCommercialScene();
    if (this._pluginRegistry.has(t)) {
      i.Ve.error("Plugin for scene ".concat(t, " already exists"));
      return false;
    }
    this._pluginRegistry.set(t, e);
    return true;
  }
  getPlugin(e) {
    return this._pluginRegistry.get(e);
  }
  computeStrategyBenefit(e, t) {
    const r = this.getPlugin(e);
    if (r) {
      return r.computeStrategyBenefit(t);
    }
    i.Ve.warn("No plugin found for scene ".concat(e));
    return null;
  }
  getAllPluginConfigs(e) {
    const t = {};
    for (const [r, i] of this._pluginRegistry.entries()) {
      t[r] = i.getBaseConfig(e);
    }
    return t;
  }
  getPluginConfig(e, t) {
    const r = this.getPlugin(e);
    if (r) {
      return r.getBaseConfig(t);
    }
    i.Ve.warn("No plugin found for scene ".concat(e));
  }
  getPluginVipModalConfig(e, t) {
    const r = this.getPlugin(e);
    if (r) {
      return r.getVipModalConfig(t);
    }
    i.Ve.warn("No plugin found for scene ".concat(e));
  }
  getUIConfig(e, t) {
    const r = this.getPlugin(e);
    if (r) {
      return r.getCommercialWrapperUIConfig(t);
    }
    i.Ve.warn("No plugin found for scene ".concat(e));
  }
  getRegisteredScenes() {
    return Array.from(this._pluginRegistry.keys());
  }
  clearRegistry() {
    this._pluginRegistry.clear();
  }
  constructor() {
    this._pluginRegistry = new Map();
  }
}
