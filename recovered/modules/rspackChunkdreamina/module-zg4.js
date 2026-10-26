import n from "NY";
export function E(e) {
  return n._(function* () {
    const { octoCapabilityService, octoPrepareService } = e;
    if (octoCapabilityService.canOpenProject()) {
      if (octoCapabilityService.shouldOpenProjectOnClick()) {
        return void (yield octoPrepareService.openOctoProject());
      }
      const { showOctoApplyModal } = yield require
        .e("s3n")
        .then(require.bind(require, "Kj4"));
      showOctoApplyModal();
    }
  })();
}
