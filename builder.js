require('esbuild')
  .build({
    entryPoints: ['src/index.js', 'src/filter.js'],
    bundle: true,
    minify: false,
    watch: true,
    sourcemap: false,
    outdir: 'dist/',
  })
  .catch(() => ProcessingInstruction.exit(1));
