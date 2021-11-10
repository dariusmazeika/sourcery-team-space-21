import { babel } from '@rollup/plugin-babel';

const config = {
  input: 'src/components/icon/library/index.js',
  output: {
    file: 'src/components/icon/dist/index.esm.js',
    format: 'esm'
  },
  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;
