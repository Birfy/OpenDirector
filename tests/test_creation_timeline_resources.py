"""The retained timeline check agrees with the editor on an unknown source duration.

A canvas archive carries each clip's own ``resource.durationSeconds``, which may be absent; the
service re-probes the registered asset with ffprobe and can end up with no duration either way.
The client and ``TimelineClip.source_interval`` both let such a clip through, so the retained
check must not reject the same document (see the canvas export/import round trip in #256).
"""
from uuid import UUID

import pytest

from opendirector.application.creation_timeline import validate_timeline_resources
from opendirector.domain.creation.assets import AssetRef
from opendirector.domain.creation.editors import TimelineData
from opendirector.domain.creation.validation import ContractError

ASSET = str(UUID(int=87102))


class _Asset:
    def __init__(self, kind, duration):
        self.id = ASSET
        self.kind = kind
        self.metadata = type('Metadata', (), {'durationSeconds': duration})()


class _Assets:
    """A CreationAssets stand-in that answers only the one asset this document uses."""

    def __init__(self, kind='video', duration=None):
        self._asset = _Asset(kind, duration)

    def _reference(self, snapshot, ref):
        return self._asset

    def reference_available(self, project_id, asset_id, *, snapshot):
        return None


def _document(kind='video', out_point=10, clip_duration=None):
    return TimelineData.model_validate(dict(
        fps=30, width=1920, height=1080,
        tracks=[dict(id='visual', kind='visual', title='', clips=[dict(
            id='clip', inPoint=0, outPoint=out_point, speed=1, volume=1, muted=False,
            resource=dict(asset=dict(assetId=ASSET, revision=1, kind=kind, fingerprint='sha256:' + 'f' * 64),
                          title='clip', durationSeconds=clip_duration))])]))


class _Snapshot:
    project = type('Project', (), {'id': str(UUID(int=87103))})()


def _check(document, kind='video', duration=None):
    validate_timeline_resources(document, _Snapshot(), _Assets(kind, duration))


def test_a_clip_at_the_probed_duration_is_accepted():
    _check(_document(out_point=10), duration=10)


def test_a_clip_past_the_probed_duration_is_still_rejected():
    with pytest.raises(ContractError) as rejected:
        _check(_document(out_point=10.5), duration=10)
    assert rejected.value.issue.code == 'invalid_input'


def test_an_unknown_probed_duration_is_not_a_violation():
    """The document the editor accepted (no clip duration) must not fail import."""
    _check(_document(out_point=10, clip_duration=None), duration=None)


def test_an_image_is_not_bounded_by_a_probed_duration():
    _check(_document(kind='image', out_point=999), kind='image', duration=None)
