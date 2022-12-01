module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '<rootDir>/prisma/generated',
    '<rootDir>/node_modules/'
  ],
  testTimeout: 10000
}
