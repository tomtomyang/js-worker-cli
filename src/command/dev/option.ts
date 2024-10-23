import type { Argv } from 'yargs';

export function devOptions(yargs: Argv) {
  return yargs
    .positional('entry', {
      describe: '',
      type: 'string',
    })
}
