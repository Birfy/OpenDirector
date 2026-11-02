"""Send a project directory to the operating system recycle bin.

A directory is only promised to be recoverable when the platform can actually
recycle it; callers fall back to a permanent removal and must say so.
"""

import ctypes
import platform
import shutil
from pathlib import Path

FO_DELETE = 0x0003
FOF_SILENT = 0x0004
FOF_NOCONFIRMATION = 0x0010
FOF_ALLOWUNDO = 0x0040
FOF_NOERRORUI = 0x0400

# SHFileOperationW resolves paths through the ANSI-MAX_PATH limit on some
# configurations, so longer roots are not promised to be recoverable.
_MAX_RECYCLABLE_PATH = 240


class _SHFileOperation(ctypes.Structure):
    _fields_ = [
        ("hwnd", ctypes.c_void_p),
        ("wFunc", ctypes.c_uint),
        ("pFrom", ctypes.c_wchar_p),
        ("pTo", ctypes.c_wchar_p),
        ("fFlags", ctypes.c_ushort),
        ("fAnyOperationsAborted", ctypes.c_int),
        ("hNameMappings", ctypes.c_void_p),
        ("lpszProgressTitle", ctypes.c_wchar_p),
    ]


def recyclable(path: Path) -> bool:
    """Whether removing this directory would put it in the recycle bin."""
    if platform.system() != "Windows":
        return False
    try:
        resolved = str(path.resolve())
    except OSError:
        return False
    # A UNC share has no recycle bin, and the shell API rejects long paths.
    return not resolved.startswith("\\\\") and len(resolved) <= _MAX_RECYCLABLE_PATH


def remove(path: Path, *, recoverable: bool) -> None:
    """Delete a project directory, recycling it when the prompt promised that.

    `recoverable` mirrors the mode the user confirmed. A recoverable removal
    raises instead of falling back to an unrecoverable one, so a failed move
    leaves the project on disk rather than silently losing it.
    """
    if not recoverable:
        shutil.rmtree(path)
        return
    if not recyclable(path):
        raise OSError("工程路径过长或位于网络位置，无法移入回收站；工程文件已保留。")
    source = ctypes.c_wchar_p(str(path.resolve()) + "\0")
    operation = _SHFileOperation(
        hwnd=None,
        wFunc=FO_DELETE,
        pFrom=source,
        pTo=None,
        fFlags=FOF_ALLOWUNDO | FOF_NOCONFIRMATION | FOF_SILENT | FOF_NOERRORUI,
        fAnyOperationsAborted=0,
        hNameMappings=None,
        lpszProgressTitle=None,
    )
    result = ctypes.windll.shell32.SHFileOperationW(ctypes.byref(operation))
    if result != 0 or operation.fAnyOperationsAborted or path.exists():
        # A failed or aborted shell move keeps the project in place.
        raise OSError(f"项目未能移入回收站（Shell 返回 {result}），工程文件已保留。")
