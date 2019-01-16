module.exports = {
  globals: {
    __TRANSFORM_HTML__: true,
    'ts-jest': {
      tsConfig: '<rootDir>/src/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  testMatch: [
    '**/__tests__/**/*.+(ts|js)?(x)',
    '**/?(*.)+(spec|test).+(ts|js)?(x)',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx', 'html'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^environments/(.*)$': '<rootDir>/src/environments/$1',
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
  setupFiles: ['<rootDir>/.jest/register-context.js'],
};
