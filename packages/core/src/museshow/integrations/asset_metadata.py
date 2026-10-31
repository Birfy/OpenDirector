"""Inspect imported text and media without rewriting their original bytes."""

from io import BytesIO
from pathlib import PurePath

from PIL import Image, UnidentifiedImageError

from museshow.domain.assets import MAX_TEXT_BYTES
from museshow.domain.projects import ProjectError
from museshow.media.probe import probe


def legacy_kind(name: str, media_type: str):
    suffix = PurePath(name).suffix.lower()
    if suffix in {".txt", ".md"} or media_type.startswith("text/"):
        return "text"
    for kind in ("image", "video", "audio"):
        if media_type.startswith(kind + "/"):
            return kind
    return {".png": "image", ".jpg": "image", ".jpeg": "image", ".gif": "image", ".webp": "image",
            ".mp4": "video", ".mov": "video", ".webm": "video", ".wav": "audio", ".mp3": "audio"}.get(suffix, "other")


_IMAGE_SIGNATURES = (
    (b"\x89PNG\r\n\x1a\n", "PNG"),
    (b"\xff\xd8\xff", "JPEG"),
    (b"GIF87a", "GIF"),
    (b"GIF89a", "GIF"),
)


def _guess_image(data: bytes):
    """Return a PIL format name when the bytes start with a known header."""
    for signature, name in _IMAGE_SIGNATURES:
        if data.startswith(signature):
            return name
    # RIFF....WEBP
    if len(data) >= 12 and data[:4] == b"RIFF" and data[8:12] == b"WEBP":
        return "WEBP"
    return None


def inspect_asset(name: str, data: bytes) -> dict:
    suffix = PurePath(name).suffix.lower()
    if suffix in {".txt", ".md"}:
        if len(data) > MAX_TEXT_BYTES:
            raise ProjectError("文本资产应不超过 1 MB。", 413)
        try:
            text = data.decode("utf-8-sig")
        except UnicodeDecodeError:
            raise ProjectError("文本资产需使用 UTF-8 编码。") from None
        if any(ord(char) < 32 and char not in "\t\r\n" for char in text):
            raise ProjectError("文件包含非文本内容，请导入 UTF-8 文本。")
        return {"kind": "text", "type": "text/markdown" if suffix == ".md" else "text/plain", "format": "markdown" if suffix == ".md" else "plain", "encoding": "utf-8"}
    media_types = {".mp4": "video/mp4", ".mov": "video/quicktime", ".webm": "video/webm", ".mp3": "audio/mpeg", ".wav": "audio/wav", ".m4a": "audio/mp4", ".ogg": "audio/ogg", ".flac": "audio/flac"}
    if suffix in media_types:
        media_type = media_types[suffix]
        return {"type": media_type, **probe(data, suffix, media_type.split("/")[0])}
    if suffix not in {".png", ".jpg", ".jpeg", ".gif", ".webp"}:
        # Canvas node titles ("图片 1") reach us without an extension. When the
        # bytes are recognisably an image, accept them rather than rejecting a
        # valid file purely because its name has no suffix.
        sniffed = _guess_image(data)
        if sniffed is None:
            raise ProjectError("文件格式不受支持，请选择文本、图片、MP4／WebM／MOV 视频或常用音频文件。")
        try:
            with BytesIO(data) as source, Image.open(source, formats=[sniffed]) as image:
                if image.width * image.height > 25_000_000:
                    raise ProjectError("图片像素总数应不超过 2500 万。", 413)
                media_type = Image.MIME[image.format]
                width, height = image.size
                image.load()
            return {"kind": "image", "type": media_type, "width": width, "height": height}
        except (UnidentifiedImageError, OSError, ValueError, Image.DecompressionBombError):
            raise ProjectError("文件格式不受支持，请选择文本、图片、MP4／WebM／MOV 视频或常用音频文件。") from None
    try:
        with Image.open(BytesIO(data), formats=["PNG", "JPEG", "GIF", "WEBP"]) as image:
            if image.width * image.height > 25_000_000:
                raise ProjectError("图片像素总数应不超过 2500 万。", 413)
            media_type = Image.MIME[image.format]
            width, height = image.size
            image.load()  # Decode instead of trusting a header or browser MIME type.
        return {"kind": "image", "type": media_type, "width": width, "height": height}
    except (UnidentifiedImageError, OSError, ValueError, Image.DecompressionBombError):
        raise ProjectError("无法读取图片，请检查文件是否完整，且格式为 PNG、JPEG、GIF 或 WebP。") from None
