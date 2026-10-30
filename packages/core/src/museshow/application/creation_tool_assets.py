"""Keep tool recipes on the C04 asset boundary in unified projects.

Recipes have their own durable ledger, rather than pretending to be a
GenerationSpec job. Their bytes are registered as material assets with source
references; execution identity, models and parameters remain in that ledger.
"""
from uuid import UUID, uuid5

from museshow.application.creation_assets import CreationAssets
from museshow.domain.creation.assets import AssetProvenance, AssetRef
from museshow.domain.creation.commands import parse_command
from museshow.domain.projects import ProjectError
from museshow.infrastructure.creation_uploads import upload_asset_id


class CreationToolAssets:
    def __init__(self, projects):
        self.projects = projects
        self.assets = CreationAssets(projects)

    @staticmethod
    def record(asset):
        return dict(id=str(asset.id), kind=asset.kind, name=asset.name, type=asset.metadata.mimeType,
                    fingerprint=asset.fingerprint, width=asset.metadata.width, height=asset.metadata.height,
                    durationMs=round(asset.metadata.durationSeconds * 1000) if asset.metadata.durationSeconds else None)

    def _records(self, directory, project_id):
        return {str(asset.id): self.record(asset) for asset in self.assets.list(project_id)}

    def read_bytes(self, project_id, asset_id):
        stream, _ = self.assets.open_media(project_id, asset_id)
        with stream:
            return stream.read()

    def import_output(self, task, asset_id, name, data):
        sources = tuple(AssetRef(assetId=asset.id, revision=asset.revision, fingerprint=asset.fingerprint, kind=asset.kind)
                        for asset in self.assets.list(task['projectId']) if str(asset.id) in task['sourceAssetIds'])
        return self.import_file(task['projectId'], asset_id, name, data, None, sources=sources)

    def import_file(self, project_id, asset_id, name, data, session, *, source='generated', sources=()):
        project_id, asset_id = UUID(str(project_id)), UUID(str(asset_id))
        handle = uuid5(asset_id, 'tool-output')
        registered_id = upload_asset_id(project_id, handle)
        existing = next((asset for asset in self.assets.list(project_id) if asset.id == registered_id), None)
        if existing:
            return self.record(existing)
        writer = self.assets.uploads.begin(project_id, handle, None, name, trusted=True)
        try:
            writer.write(data)
            info = writer.finish()
        finally:
            writer.abort()
        command = parse_command(dict(commandId=uuid5(asset_id, 'register-tool-output'), projectId=project_id,
            type='asset.import', payload=dict(uploadHandle=handle, name=name, expectedKind=info.kind)))
        receipt = self.assets.execute(command, source='background', provenance=AssetProvenance(source='manual', sources=sources))
        if receipt.status != 'applied':
            raise ProjectError('工具结果登记失败，已有文件已保留。', 409)
        return self.record(self.assets.get(project_id, registered_id))
