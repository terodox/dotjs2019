module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: '> 2%, not dead',
                loose: true
            }
        ]
    ]
};