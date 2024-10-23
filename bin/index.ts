#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';

function main() {
  const cmdProcess = spawn(
    process.execPath,
    [
      '--no-warnings',
      '--experimental-vm-modules',
      ...process.execArgv,
      path.join(__dirname, './jwc.js'),
      ...process.argv.slice(2),
    ],
    { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] },
  );

  process.on('SIGINT', () => {
    cmdProcess.kill('SIGTERM');
  });
  process.on('SIGTERM', () => {
    cmdProcess.kill('SIGTERM');
  });

  cmdProcess.on('message', (message: string) => {
    // 
  });

  cmdProcess.on('exit', code => {
    //
  });
}

void main();
