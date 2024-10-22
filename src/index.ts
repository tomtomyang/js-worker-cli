import { hideBin } from 'yargs/helpers';

import { main } from './main';

main(hideBin(process.argv)).catch(() => {});
