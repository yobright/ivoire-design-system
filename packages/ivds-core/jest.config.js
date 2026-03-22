module.exports = {
  displayName: 'IVDS Core SCSS Tests',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.test.scss',
    '<rootDir>/src/**/*.test.scss'
  ],
  moduleFileExtensions: ['js', 'scss', 'css'],
  transform: {
    '^.+\\.scss$': '<rootDir>/jest-scss-transformer.js'
  },
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/**/*.scss',
    '!src/**/_*.scss', // Exclude partials from coverage
    '!src/**/*.stories.*',
    '!src/**/__tests__/**/*'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  verbose: true
};