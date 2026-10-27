"""A rejected canvas edit must not poison later history reads or replay writes."""
from pathlib import Path
import shutil
import os
import subprocess

import pytest


def test_serial_action_queue_failure_barriers(tmp_path):
    root = Path(__file__).resolve().parents[1]
    bundler = root / ('apps/web/node_modules/@esbuild/win32-x64/esbuild.exe' if os.name == 'nt' else 'apps/web/node_modules/.bin/esbuild')
    if not shutil.which('node') or not bundler.exists():
        pytest.skip('Install frontend dependencies for action queue checks')
    bundle = tmp_path / 'queue.cjs'
    subprocess.run([str(bundler), str(root / 'apps/web/src/lib/actionQueue.ts'), '--bundle', '--platform=node',
                    '--format=cjs', f'--outfile={bundle}'], check=True, capture_output=True)
    script = tmp_path / 'queue-check.cjs'
    script.write_text("""
const assert = require('node:assert/strict');
const {createActionQueue} = require('./queue.cjs');
const deferred = () => {
  let resolve, reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return {promise, resolve, reject};
};
(async () => {
  const queue = createActionQueue();
  const rejected = new Error('material target rejected');
  let submissions = 0;
  await assert.rejects(queue.run(async () => { submissions++; throw rejected; }), error => error === rejected);
  await queue.flush(); // A completed failure cannot disable a later read.
  assert.equal(submissions, 1); // No implicit retry.
  assert.equal(await queue.run(async () => 'next operation'), 'next operation');

  const save = deferred(), following = deferred(), order = [];
  const first = queue.run(async () => { order.push('save'); return save.promise; });
  const second = queue.run(async () => { order.push('following'); return following.promise; });
  const failure = new Error('current save failed');
  const observedFirst = assert.rejects(first, error => error === failure);
  const observedBarrier = assert.rejects(queue.flush(), error => error === failure);
  await Promise.resolve();
  assert.deepEqual(order, ['save']); // The following operation cannot overtake a write.
  save.reject(failure);
  await observedFirst;
  await observedBarrier; // A currently pending save still blocks opening history on failure.
  let flushed = false;
  const laterBarrier = queue.flush().then(() => { flushed = true; });
  await Promise.resolve();
  assert.equal(flushed, false); // Other queued work remains pending after the first failure.
  following.resolve('saved');
  assert.equal(await second, 'saved');
  await laterBarrier;
  assert.deepEqual(order, ['save', 'following']);
  await queue.flush();

  // Synchronous validation errors also leave the queue usable.
  await assert.rejects(queue.run(() => { throw new Error('invalid input'); }), /invalid input/);
  await queue.flush();
  assert.equal(await queue.run(async () => 42), 42);
})().catch(error => { console.error(error); process.exit(1); });
""")
    subprocess.run(['node', '--unhandled-rejections=strict', str(script)], check=True, capture_output=True)
