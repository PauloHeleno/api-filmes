module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90,
    },
  },
};
