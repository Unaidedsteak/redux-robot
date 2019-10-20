module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "coverageReporters": [
    "json-summary",
    "text",
    "lcov"
  ],
  coveragePathIgnorePatterns: ["<rootDir>/build/"],
  modulePathIgnorePatterns: ["<rootDir>/build/"]
};