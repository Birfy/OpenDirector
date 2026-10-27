"""Precompile the pinned FlashInfer NVFP4 kernels before loading FastH3 weights."""
import os

os.environ.setdefault('MAX_JOBS', '2')
os.environ.setdefault('FLASHINFER_NVCC_THREADS', '1')

import torch

if torch.cuda.get_device_capability(0) != (12, 0):
    raise RuntimeError('This deployment recipe is validated for Blackwell SM120 only')

from flashinfer.jit.fp4_quantization import gen_fp4_quantization_sm120f_module
from flashinfer.jit.gemm.core import gen_gemm_sm120_module_cutlass_fp4

for make_module in (gen_fp4_quantization_sm120f_module, gen_gemm_sm120_module_cutlass_fp4):
    print('Precompiling', make_module.__name__, flush=True)
    make_module().build_and_load()
print('NVFP4_KERNELS_READY', flush=True)
