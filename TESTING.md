# Testing

## Uninstall packages

```
npm uninstall @types/jasmine
npm uninstall jasmine-core
npm uninstall karma
npm uninstall karma-chrome-launcher
npm uninstall karma-coverage
npm uninstall karma-jasmine
npm uninstall karma-jasmine-html-reporter
```

## Install Jest

(Jest documentation)[https://jestjs.io/docs/getting-started]

```
npm install --save-dev jest
```

### Using typescript by ts-jest preprocessor

```
npm install --save-dev ts-jest
```

### Type definitions

```
npm install --save-dev @types/jest
```

### Running Jest from command line

```
npm install jest --global
```

### Generating a basic configuration file

```
jest --init
```

- Would you like to use Jest when running "test" script in "package.json"? … yes
- Would you like to use Typescript for the configuration file? … yes
- Choose the test environment that will be used for testing › jsdom (browser-like)
- Do you want Jest to add coverage reports? … yes
- Which provider should be used to instrument code for coverage? › v8
- Automatically clear mock calls, instances, contexts and results before every test? … yes

### Install ts-node

'ts-node' is required for the TypeScript configuration files.

```
npm install ts-node --save-dev
```

### Install jest-environment-jsdom

```
npm install jest-environment-jsdom --save-dev
```

### Install @angular-builders/jest

```
npm install @angular-builders/jest@~13 --save-dev
```

In **will-ui-core** project:
- Delete `projects/will-ui-core/karma.conf.js`.
- Delete `projects/will-ui-core/src/test.ts`.
- In `projects/will-ui-core/tsconfig.spec.json`, `files` array, delete `src/test.ts`.
- In `projects/will-ui-core/tsconfig.lib.json`, `exclude` array, delete `src/test.ts`.
- In `projects/will-ui-core/tsconfig.spec.json`, `compilerOptions:types` array, replace **jasmine** with **jest**.
- In `angular.json`, `projects:will-ui-core:architect:test:builder` put **@angular-builders/jest:run**.
- In `angular.json`, remove `projects:will-ui-core:architect:test:options:main`.

In **marketplace** project:
- Delete `projects/marketplace/karma.conf.js`.
- Delete `projects/marketplace/src/test.ts`.
- In `projects/marketplace/tsconfig.spec.json`, `files` array, delete `src/test.ts`.
- In `projects/marketplace/tsconfig.spec.json`, `compilerOptions:types` array, replace **jasmine** with **jest**.
- In `angular.json`, `projects:marketplace:architect:test:builder` put **@angular-builders/jest:run**.
- In `angular.json`, remove `projects:marketplace:architect:test:options:main`.
- In `angular.json`, remove `projects:marketplace:architect:test:options:karmaConfig`.

- In `tsconfig.json`, `compilerOptions:types` array, add **jest**.

### Install jest-preset-angular

```
npm install jest-preset-angular --save-dev
```

- Create `projects/will-ui-core/src/setup-jest.ts` file.
- Create `projects/marketplace/src/setup-jest.ts` file.
- Add `import 'jest-preset-angular/setup-jest';` to the both files.

## Install Jest-axe

```
npm install jest-axe --save-dev
npm install @types/jest-axe --save-dev
```

## Install Spectator

```
npm install @ngneat/spectator@~10 --save-dev
```
