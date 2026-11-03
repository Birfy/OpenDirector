"""Stdio MCP transport; the parent process owns authorization and business effects."""

import json
import os
import socket
import sys


def connect() -> socket.socket:
    """Connect to the turn's gateway: loopback TCP on Windows, AF_UNIX elsewhere."""
    host = os.environ.get("OPENDIRECTOR_AGENT_HOST")
    if host:
        return socket.create_connection((host, int(os.environ["OPENDIRECTOR_AGENT_PORT"])))
    connection = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    try:
        connection.connect(os.environ["OPENDIRECTOR_AGENT_SOCKET"])
    except BaseException:
        connection.close()
        raise
    return connection


def main() -> None:
    for line in sys.stdin:
        request = json.loads(line)
        if "id" not in request:
            continue
        with connect() as connection:
            payload = {
                "token": os.environ["OPENDIRECTOR_AGENT_TOKEN"],
                "request": request,
            }
            connection.sendall((json.dumps(payload) + "\n").encode())
            with connection.makefile("rb") as reader:
                response = reader.readline(64 * 1024 * 1024)
        sys.stdout.write(response.decode())
        sys.stdout.flush()


if __name__ == "__main__":
    main()
