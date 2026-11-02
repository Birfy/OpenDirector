import re
from uuid import UUID


class ProjectError(Exception):
    def __init__(self, message: str, status: int = 400, *, code: str | None = None):
        super().__init__(message)
        self.status = status
        self.code = code or {400: 'invalid_input', 404: 'not_found', 413: 'invalid_input', 422: 'invalid_input'}.get(status, 'operation_rejected')


def project_name(value: str) -> str:
    if not isinstance(value, str):
        raise ProjectError("项目名称必须是文本。")
    value = value.strip()
    if not value or len(value) > 100:
        raise ProjectError("项目名称应为 1–100 个字符。")
    if value in {".", ".."} or re.search(r'[<>:"/\\|?*\x00-\x1f]', value) or value.endswith((".", " ")):
        raise ProjectError("项目名称不能包含路径分隔符、控制字符或系统不支持的字符，也不能以句点结尾。")
    stem = value.split(".")[0].upper()
    if stem in {"CON", "PRN", "AUX", "NUL", *(f"COM{i}" for i in range(1, 10)), *(f"LPT{i}" for i in range(1, 10))} or value.startswith(".opendirector-"):
        raise ProjectError("该名称由系统保留，请使用其他项目名称。")
    return value


def identifier(value: str) -> str:
    try:
        if str(UUID(value)) != value:
            raise ValueError()
    except (ValueError, AttributeError):
        raise ProjectError("无效的项目或素材标识。") from None
    return value
