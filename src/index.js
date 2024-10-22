import yargs from 'yargs';

export async function main(argv) {
  try {
    const jwc = yargs(argv).strict().scriptName('jwc').wrap(null);;
    await jwc.parse();
  } catch {}
}
