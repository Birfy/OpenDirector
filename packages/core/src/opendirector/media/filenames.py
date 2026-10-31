"""Names for newly produced media; existing asset records remain unchanged."""


def with_extension(name: str, suffix: str) -> str:
    extension = '.' + suffix.lstrip('.')
    while name.lower().endswith(extension.lower()):
        name = name[:-len(extension)]
    return (name or '素材') + extension
