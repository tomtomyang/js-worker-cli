import { devProcess } from './process';

export async function devHandler(args: any) {
  try {
    await devProcess(args);
  } catch (err) {
    console.error(err?.message);
    process.exit(0);
  }
}
