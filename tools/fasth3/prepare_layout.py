"""Register pinned native VAE components in HF's offline snapshot layout, without copying weights."""
import argparse
import json
import os
from pathlib import Path

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--base',type=Path,default=Path('/root/autodl-tmp/fasth3'))
args=parser.parse_args()
manifest=json.loads(Path(__file__).with_name('model-manifest.json').read_text(encoding='utf-8-sig'))
native=next(item for item in manifest if item['repo']=='MiniMaxAI/MiniMax-H3')
hub=Path(os.environ.get('HF_HUB_CACHE',str(args.base/'cache/huggingface/hub')))
snapshot=hub/'models--MiniMaxAI--MiniMax-H3'/'snapshots'/native['sha']
snapshot.mkdir(parents=True,exist_ok=True)
source=(args.base/'models/MiniMax-H3/Ref2VA').resolve()
if not (source/'video_vae/config.json').is_file() or not (source/'audio_vae/config.json').is_file():
    raise RuntimeError('Native VAE component download is incomplete')
target=snapshot/'Ref2VA'
if target.exists() or target.is_symlink():
    if target.resolve()!=source:raise RuntimeError('A different native component snapshot already exists')
else:
    target.symlink_to(source,target_is_directory=True)
print('NATIVE_COMPONENT_CACHE_READY',snapshot)
