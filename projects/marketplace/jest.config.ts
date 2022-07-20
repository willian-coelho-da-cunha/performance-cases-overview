import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    displayName: 'marketplace',
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
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.{ts,js,jsx}',
      '!**/node_modules/**',
      '!**/coverage/**',
      '!**/vendor/**',
      '!**/dist/**'
    ],
    coverageDirectory: '<rootDir>../../coverage/apps/marketplace',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      'jest.config.ts',
      'main.ts',
      'module.ts',
      'polyfills.ts',
      'environment.ts',
      'environment.prod.ts'
    ],
    moduleNameMapper: {
      '@will/ui-core/src/lib/button': '<rootDir>../../dist/will-ui-core/fesm2020/will-ui-core-src-lib-button.mjs',
      '@will/ui-core/src/lib/email-form-field': '<rootDir>../../dist/will-ui-core/fesm2020/will-ui-core-src-lib-email-form-field.mjs',
      '@will/ui-core/src/lib/password-form-field': '<rootDir>../../dist/will-ui-core/fesm2020/will-ui-core-src-lib-password-form-field.mjs'
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
