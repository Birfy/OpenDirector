import n from "Ut";
export function $() {
  const abilities = new n.DAVideoGenerateAbilities();
  const ability = new n.DAGenVideoAbility();
  abilities.genVideo = ability;
  const textToVideoParams = new n.DAText2VideoParams();
  ability.text2VideoParams = textToVideoParams;
  const videoGenInput = new n.DAVideoGenInput();
  textToVideoParams.videoGenInputs = [videoGenInput];
  const v2vOpt = new n.DAVideoGenV2V();
  videoGenInput.v2vOpt = v2vOpt;
  return {
    abilities,
    ability,
    textToVideoParams,
    videoGenInput,
    v2vOpt,
  };
}
