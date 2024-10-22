import type { Argv } from 'yargs';

import { initHandler } from './handler';
import { initOptions } from './option';

export function initCommand(tef: Argv) {
  tef.command(
    'init [name]',
    'Initialize a EdgeFunction project with tef.toml configuration file.',
    initOptions,
    initHandler,
  );
}
