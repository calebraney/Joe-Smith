require('esbuild')
  .build({
    entryPoints: [
      'src/index.js',
      'src/filter.js',
      'src/accordion.js',
      'src/split.js',
      'src/cta-split.js',
    ],
    bundle: true,
    minify: true,
    watch: true,
    sourcemap: false,
    outdir: 'dist/',
  })
  .catch(() => ProcessingInstruction.exit(1));
