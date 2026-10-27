"""SSH helper. Credentials stay in the local OS profile, never in this source."""
import argparse
import getpass
import os
from pathlib import Path
import shlex
import sys
import subprocess
import paramiko

STATE = Path(os.environ.get('LOCALAPPDATA', str(Path.home()))) / 'MuseShow' / 'cloud-fasth3'

def main():
    # Remote compiler/progress logs use Unicode even on Windows with a GBK locale.
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    parser = argparse.ArgumentParser()
    parser.add_argument('--host', required=True)
    parser.add_argument('--port', type=int, required=True)
    parser.add_argument('--user', default='root')
    parser.add_argument('--bootstrap', action='store_true')
    parser.add_argument('--upload', nargs=2)
    parser.add_argument('--download', nargs=2)
    parser.add_argument('--script')
    parser.add_argument('command', nargs='?', default='true')
    args = parser.parse_args()
    if not 1 <= args.port <= 65535:
        parser.error('--port must be 1..65535')
    STATE.mkdir(parents=True, exist_ok=True)
    key_path = STATE / 'id_ed25519'
    if not key_path.exists():
        # Paramiko cannot generate Ed25519 keys; cryptography emits OpenSSH format.
        from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
        from cryptography.hazmat.primitives import serialization
        private = Ed25519PrivateKey.generate()
        key_path.write_bytes(private.private_bytes(serialization.Encoding.PEM,
            serialization.PrivateFormat.OpenSSH, serialization.NoEncryption()))
    if os.name == 'nt':
        account = subprocess.check_output(['whoami'], text=True).strip()
        secured = subprocess.run(['icacls', str(key_path), '/inheritance:r', '/grant:r', account+':F',
            '/remove:g', '*S-1-1-0', '*S-1-5-11', '*S-1-5-32-545'], capture_output=True)
        if secured.returncode:
            raise RuntimeError('Cannot restrict the deployment SSH private-key permissions')
    else:
        key_path.chmod(0o600)
    key = paramiko.Ed25519Key.from_private_key_file(str(key_path))
    client = paramiko.SSHClient()
    hosts = STATE / 'known_hosts'
    if hosts.exists():
        client.load_host_keys(str(hosts))
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    password = getpass.getpass('SSH password (not saved): ') if args.bootstrap else None
    client.connect(args.host, port=args.port, username=args.user,
        password=password, pkey=None if args.bootstrap else key,
        allow_agent=False, look_for_keys=False, timeout=30, banner_timeout=30, auth_timeout=30)
    client.save_host_keys(str(hosts))
    if args.bootstrap:
        public = key.get_name() + ' ' + key.get_base64() + ' museshow-fasth3'
        command = ('umask 077; mkdir -p ~/.ssh; touch ~/.ssh/authorized_keys; '
                   'grep -qxF ' + shlex.quote(public) + ' ~/.ssh/authorized_keys || '
                   'printf "%s\\n" ' + shlex.quote(public) + ' >> ~/.ssh/authorized_keys')
        _, out, err = client.exec_command(command)
        if out.channel.recv_exit_status():
            raise RuntimeError(err.read().decode())
        print('SSH public-key access configured; password was not saved.', flush=True)
    if args.upload or args.download:
        with client.open_sftp() as sftp:
            if args.upload:
                sftp.put(*args.upload)
            else:
                sftp.get(*args.download)
        print('Transfer complete.')
    else:
        command = args.command
        if args.script:
            command = 'bash -s'
        stdin, stdout, stderr = client.exec_command(command)
        if args.script:
            stdin.write(Path(args.script).read_text(encoding='utf-8'))
        stdin.channel.shutdown_write()
        stdout.channel.set_combine_stderr(True)
        for line in stdout:
            print(line, end='', flush=True)
        code = stdout.channel.recv_exit_status()
        client.close()
        sys.exit(code)
    client.close()

if __name__ == '__main__':
    main()
