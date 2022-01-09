import rollupPluginJSON from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: 'toy-qecode'
  },
  plugins: [rollupPluginJSON()]
}