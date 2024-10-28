import esbuild, { BuildOptions } from 'esbuild';

const EXTERNAL_DEPENDENCIES = ['esbuild', 'chokidar'];

const ESBUILD_CONFIG: BuildOptions = {
  platform: 'node',
  target: 'node12',
  format: 'cjs',
  bundle: true,
  minify: true,
  sourcemap: false,
  treeShaking: true,
  external: EXTERNAL_DEPENDENCIES,
};

async function bundle() {
  await Promise.all([
    esbuild.build({
      ...ESBUILD_CONFIG,
      entryPoints: ['./src/index.ts'],
      outfile: './dist/jwc.js',
    }),
    esbuild.build({
      ...ESBUILD_CONFIG,
      entryPoints: ['./bin/index.ts'],
      outfile: './dist/bin.js',
    }),
  ]);
}

bundle().catch(err => {
  console.error(err?.message || err);
  process.exit(1);
});
