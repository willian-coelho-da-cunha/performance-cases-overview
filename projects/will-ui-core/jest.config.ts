import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    displayName: 'will-ui-core',
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: [
      '<rootDir>src/setup-jest.ts'
    ],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$'
      }
    },
    coverageDirectory: '<rootDir>coverage/libs/will-ui-core',
    moduleNameMapper: {
      '@will/ui-core/src/lib/common': '<rootDir>../../dist/will-ui-core/fesm2020/will-ui-core-src-lib-common.mjs'
    },
    testEnvironment: 'jsdom',
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
    ],
    verbose: true
  };
};
