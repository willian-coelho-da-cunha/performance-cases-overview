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
