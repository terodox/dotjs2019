module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\./window.mjs$': '<rootDir>/__mocks__/window.js'
    }
};
