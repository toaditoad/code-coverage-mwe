# (Not yet) Minimal Working Example for Code Coverage Generation

This repository should provide a minimal working example for code coverage generation with Vue, Typescript and Cypress by automatic code instrumentation.

Unfortunately, the results are not as expected:
The test `FooPage.spec.js` only covers the `FooPage` component but does not touch the other component `BarPage`. 
When generating code coverage the report should show that the `BarPage` component is not covered. The current report is misleading:

![Unexpected code coverage](./images/unexpectedCodeCoverage.png)

## Installation

```
npm install
```

## Steps to reproduce

```
npm run coverage:test:component
```

Code coverage report can be found in `tests/coverage/lcov-report/index.html`.
