"""Application-wide preferences shared by manual and background generation."""

from typing import Literal

from pydantic import BaseModel, ConfigDict, StrictBool


class GeneralSettings(BaseModel):
    model_config = ConfigDict(extra='forbid')
    removeWatermark: StrictBool = True


class GeneralSettingsPatch(BaseModel):
    model_config = ConfigDict(extra='forbid')
    removeWatermark: StrictBool


class SettingsRecord(GeneralSettings):
    version: Literal[1] = 1
