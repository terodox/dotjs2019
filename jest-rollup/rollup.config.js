export default {
    input: 'src/truncated-number.js',
    output: {
        compact: false, // Does not minify code, just rollup wrapper
        file: './demo/dist/truncated-number.js',
        format: 'iife',
        globals: {
            window: 'window'
        },
        interop: false,
        sourceMap: 'inline'
    },
};