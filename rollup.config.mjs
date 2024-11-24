import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import license from 'rollup-plugin-license'
import pkg from './package.json' assert { type: 'json' };

const { name, version, main, module } = pkg;

const isProduction = false

const plugins = [
  json(),
  resolve({
    jsnext: true,
    main: true
  }),
  typescript(),
  commonjs({
    include: 'node_modules/**',
    extensions: ['.js'],
    ignoreGlobal: false,
    sourceMap: false
  }),
  license({
    banner: `
        Stipula v${version}
        Copyright 2024<%= moment().format('YYYY') > 2024 ? '-' + moment().format('YYYY') : null %> Alireza Hamoony <ubtik@outlook.com>
      `
  })
]

const settings = {
  external: ['react'],
}

const outputSettings = {
  sourcemap: !isProduction,
  inlineDynamicImports: true,
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: main,
        format: 'cjs',
        ...outputSettings
      },
      {
        file: module,
        format: 'es',
        ...outputSettings
      }
    ],
    plugins: isProduction ? [...plugins, terser()] : plugins,
    ...settings
  }
]