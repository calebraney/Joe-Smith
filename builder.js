require('esbuild')
  .build({
    entryPoints: ['src/index.js', 'src/filter.js', 'src/accordion.js'],
    bundle: true,
    minify: true,
    watch: true,
    sourcemap: false,
    outdir: 'dist/',
  })
  .catch(() => ProcessingInstruction.exit(1));
