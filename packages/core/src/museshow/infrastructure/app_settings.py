"""Locked, atomic storage for application preferences; invalid files are retained."""

from pathlib import Path

from filelock import FileLock

from museshow.domain.projects import ProjectError
from museshow.domain.settings import GeneralSettingsPatch, SettingsRecord
from museshow.infrastructure.local_projects import child, read_json, write_json


class AppSettings:
    def __init__(self, repository: Path):
        directory = repository.resolve() / '.museshow'
        if directory.is_symlink():
            raise ProjectError('应用设置目录不能是符号链接。', 409)
        directory.mkdir(parents=True, exist_ok=True)
        self.path = child(directory, 'settings.json')
        self.lock = FileLock(directory / 'settings.lock', timeout=15)

    def _read(self):
        if not self.path.exists() and not self.path.is_symlink():
            return SettingsRecord()
        try:
            value = read_json(self.path)
            if not isinstance(value, dict) or set(value) != {'version', 'removeWatermark'} or value.get('version') != 1:
                raise ValueError()
            return SettingsRecord.model_validate(value)
        except (ValueError, TypeError, ProjectError):
            raise ProjectError('应用设置文件无法读取，请检查 .museshow/settings.json；原文件未覆盖。', 409) from None

    def get(self):
        with self.lock:
            return self._read().model_dump(exclude={'version'})

    def update(self, value):
        patch = GeneralSettingsPatch.model_validate(value)
        with self.lock:
            record = self._read().model_copy(update=patch.model_dump())
            write_json(self.path, record.model_dump())
            return record.model_dump(exclude={'version'})
