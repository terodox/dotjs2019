module.exports = {
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\./window.js$': '<rootDir>/__mocks__/window.js'
    }
};
