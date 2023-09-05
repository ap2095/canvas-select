import sourcemaps from "rollup-plugin-sourcemaps";
import babel from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    exports: "auto",
    file: "lib/canvas-select.min.js",
    format: "umd",
    name: "CanvasSelect",
    sourcemap: true,
  },
  plugins: [
    sourcemaps(),
    babel({ babelHelpers: "bundled" }),
    resolve(),
    commonjs(),
    typescript(),
    json(),
    terser(),
  ],
};
