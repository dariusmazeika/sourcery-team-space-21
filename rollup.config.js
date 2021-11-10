import { babel } from "@rollup/plugin-babel";

const config = {
  input: "src/components/icon/library/index.js",
  output: {
    file: "src/components/icon/dist/index.esm.js",
    format: "esm",
  },
  external: [/@babel\/runtime/],
  plugins: [
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
  ],
};

export default config;
