module.exports = {
  displayName: 'will-ui-core',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>projects/will-ui-core/src/setup-jest.ts'
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>projects/will-ui-core/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$'
    }
  },
  coverageDirectory: '<rootDir>coverage/libs/will-ui-core',
  testEnvironmentOptions: {
    url: 'https://jestjs.io'
  },
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular'
  },
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)'
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ]
};
