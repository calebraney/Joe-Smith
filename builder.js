import * as esbuild from 'esbuild';

await esbuild
  .build({
    entryPoints: [
      'src/accordion.js',
      'src/home.js',
      'src/cta-primary.js',
      'src/cta-split.js',
      'src/filter.js',
      'src/split.js',
    ],
    bundle: true,
    minify: true,
    watch: true,
    sourcemap: false,
    outdir: 'dist/',
  })
  .catch(() => ProcessingInstruction.exit(1));
