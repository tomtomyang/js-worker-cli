import type { Argv } from 'yargs';

import { initHandler } from './handler';
import { initOptions } from './option';

export function initCommand(cmd: Argv) {
  cmd.command(
    'init [name]',
    'Initialize a js worker project.',
    initOptions,
    initHandler,
  );
}
