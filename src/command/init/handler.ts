import { initProcess } from './process';

export async function initHandler(args: any) {
  try {
    await initProcess(args);
  } catch (err) {
    console.error(err?.message);
    process.exit(0);
  }
}
