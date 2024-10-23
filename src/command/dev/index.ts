import type { Argv } from 'yargs';

import { devHandler } from './handler';
import { devOptions } from './option';

export function devCommand(cmd: Argv) {
  cmd.command(
    'dev [entry]',
    'Start a local server for developing your worker.',
    devOptions,
    devHandler,
  );
}
