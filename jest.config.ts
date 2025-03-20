export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Adjust if you're using absolute imports
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Specify setup file for testing library
    testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'], // Ignore test files in these directories

};