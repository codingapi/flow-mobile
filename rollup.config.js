import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';

export default {
    input: 'src/index.ts',
    external: [
        'react',
        'react-dom',
        'antd',
        '@codingapi/ui-framework',
        '@logicflow/core',
        '@logicflow/extension',
        '@reduxjs/toolkit',
        'react-redux'
    ],
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
            entryFileNames: 'index.js',
            exports: 'named',
            preserveModules: false,
        },
        {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
            entryFileNames: 'index.es.js',
            exports: 'named',
            preserveModules: false,
        },
    ],
    plugins: [
        del({targets: 'dist/*'}),
        peerDepsExternal(),
        resolve({
            preferBuiltins: true,
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        }),
        commonjs(),
        typescript({
            tsconfig: 'tsconfig.json',
            sourceMap: true,
            declaration: true,
            declarationDir: 'dist'
        }),
        postcss({
            extract: false,
            modules: {
                generateScopedName: '[name]__[local]___[hash:base64:5]',
            },
            use: ['sass'],
            minimize: true,
            inject: {
                insertAt: 'top',
            },
        }),
    ],
};
