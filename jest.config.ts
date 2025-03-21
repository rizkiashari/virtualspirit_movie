export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/dist/"],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/components/**",
    "!<rootDir>/src/hooks/**",
  ],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};
