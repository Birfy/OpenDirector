"""Drain blocking media work before leaving its workspace on cancellation."""
import asyncio


async def blocking(function, /, *args, **kwargs):
    pending = asyncio.create_task(asyncio.to_thread(function, *args, **kwargs))
    try:
        return await asyncio.shield(pending)
    except asyncio.CancelledError:
        # Cancelling to_thread does not terminate FFmpeg or its worker thread.
        # Keep its files and task ownership alive until it has really stopped.
        try:
            await pending
        except Exception:
            pass
        raise
