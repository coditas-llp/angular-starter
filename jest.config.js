module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  rootDir: "./",
  modulePaths: [
      "<rootDir>"
    ],
  reporters: ["default", "jest-junit"],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}'],
  testMatch: [
    '<rootDir>/src/**/*.{spec,axe}.{js,ts}',
    '<rootDir>/projects/**/*.{spec,axe}.{js,ts}',
  ],
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/environments',
    'main.ts',
    'polyfills.ts',
    'routes.ts',
    'components.ts',
    'environments.test.ts',
    'public_api.ts',
    '.module.ts',
    '.interface.ts',
  ],
};
