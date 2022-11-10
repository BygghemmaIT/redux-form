module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/**/__tests__/**/*.js'],
  coverageReporters: ['text', 'lcov', 'html'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
  testRegex: '__tests__/.*\\.spec\\.js$',
  testEnvironment: 'jsdom'
}
