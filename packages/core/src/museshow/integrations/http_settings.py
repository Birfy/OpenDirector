"""Connect directly to configured self-hosted origins; retain API/CDN proxies."""
from ipaddress import ip_address
from urllib.parse import urlsplit


def trust_environment(url, *, config=None):
    target = urlsplit(url)
    if config and config.get('connectionType') == 'self_hosted':
        base = urlsplit(config.get('url', ''))
        def origin(parts):
            return (parts.scheme, parts.hostname,
                    parts.port or {'http': 80, 'https': 443}.get(parts.scheme))
        if origin(target) == origin(base):
            return False
    host = (target.hostname or '').rstrip('.').lower()
    if host == 'localhost':
        return False
    try:
        address = ip_address(host)
    except ValueError:
        return True
    mapped = getattr(address, 'ipv4_mapped', None)
    return not (address.is_loopback or mapped is not None and mapped.is_loopback)


def auth_headers(config):
    """Bearer authentication unless the model has no key or is configured without auth."""
    return {'Authorization': f"Bearer {config['apiKey']}"} if config.get('apiKey') and config.get('authMode') != 'none' else {}
