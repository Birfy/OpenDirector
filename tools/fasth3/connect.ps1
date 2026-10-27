param(
  [Parameter(Mandatory=$true)][string]$Server,
  [Parameter(Mandatory=$true)][ValidateRange(1,65535)][int]$SshPort,
  [string]$User='root',
  [ValidateRange(1,65535)][int]$LocalPort=18091,
  [ValidateRange(1,65535)][int]$RemotePort=8091,
  [string]$IdentityFile
)
$ErrorActionPreference='Stop'
$sshArgs=@('-N','-o','ExitOnForwardFailure=yes','-o','ServerAliveInterval=30',
  '-o','ServerAliveCountMax=3','-p',"$SshPort",'-L',"127.0.0.1:${LocalPort}:127.0.0.1:${RemotePort}")
if ($IdentityFile) { $sshArgs += @('-i',$IdentityFile) }
$sshArgs += "${User}@${Server}"
Write-Host "MuseShow Base URL: http://127.0.0.1:$LocalPort/v1"
Write-Host 'Keep this window open. Ctrl+C closes the tunnel.'
& ssh @sshArgs
exit $LASTEXITCODE
