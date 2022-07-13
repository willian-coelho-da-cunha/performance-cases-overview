module.exports = {
  displayName: 'marketplace',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>projects/marketplace/src/setup-jest.ts'
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>projects/marketplace/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$'
    }
  },
  coverageDirectory: '<rootDir>coverage/apps/marketplace',
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
