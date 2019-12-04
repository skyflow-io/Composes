// https://jestjs.io/docs/en/configuration.html

module.exports = {

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ['**/?(*.)+.js?(x)'],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of file extensions your modules use
    moduleFileExtensions: ['js', 'jsx'],

    // The glob patterns Jest uses to detect test files
    // testMatch: ['components/*/*.spec.jsx'],
    testMatch: ['**/?(*.)+(spec|test).js?(x)'],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ['<rootDir>/node_modules/'],

    // Indicates whether each individual test should be reported during the run
    verbose: true,

};