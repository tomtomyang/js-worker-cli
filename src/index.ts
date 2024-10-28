import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

async function main(argv: string[]) {
  try {
    const jwc = yargs(argv).strict().scriptName('jwc').wrap(null);;
    await jwc.parse();
  } catch {}
}

main(hideBin(process.argv)).catch(() => {
  process.exit(1);
});
