module.exports = {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/jest-setup.js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/config/css-stub.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.(svg||jpg||png)$': '<rootDir>/svgTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(react-leaflet/lib|@react-leaflet/core/lib)/)',
  ],
};
