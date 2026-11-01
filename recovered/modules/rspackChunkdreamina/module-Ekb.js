export default inquire;
function inquire(moduleName) {
  try {
    const mod = eval("quire".replace(/^/, "re"))(moduleName);
    if (mod && (mod.length || Object.keys(mod).length)) {
      return mod;
    }
  } catch (e) {}
  return null;
}
