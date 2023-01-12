# CoditasAngularStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code folder structure

This project is divided into core, shared and feature-modules based on use cases

```
src
   |-- app
   |   |-- app-routing.module.ts
   |   |-- app.component.html
   |   |-- app.component.scss
   |   |-- app.component.spec.ts
   |   |-- app.component.ts
   |   |-- app.module.ts
   |   |-- core
   |   |   |-- constants
   |   |   |-- guards
   |   |   |-- interceptors
   |   |   |-- interfaces
   |   |   |-- models
   |   |   |-- store
   |   |   |   |-- actions
   |   |   |   |   |-- app.actions.ts
   |   |   |   |-- effects
   |   |   |   |   |-- app.effects.spec.ts
   |   |   |   |   |-- app.effects.ts
   |   |   |   |-- reducers
   |   |   |   |   |-- index.ts
   |   |   |   |-- selector
   |   |   |   |   |-- app.selectors.spec.ts
   |   |   |   |   |-- app.selectors.ts
   |   |   |   |-- state
   |   |   |   |   |-- app.state.ts
   |   |-- feature-modules
   |   |   |-- sample
   |   |   |   |-- components
   |   |   |   |   |-- sample-add-functinality
   |   |   |   |   |   |-- sample-add-functinality.component.html
   |   |   |   |   |   |-- sample-add-functinality.component.scss
   |   |   |   |   |   |-- sample-add-functinality.component.spec.ts
   |   |   |   |   |   |-- sample-add-functinality.component.ts
   |   |   |   |   |-- sample-remove-functinality
   |   |   |   |   |   |-- sample-remove-functinality.component.html
   |   |   |   |   |   |-- sample-remove-functinality.component.scss
   |   |   |   |   |   |-- sample-remove-functinality.component.spec.ts
   |   |   |   |   |   |-- sample-remove-functinality.component.ts
   |   |   |   |-- container
   |   |   |   |   |-- sample-smart
   |   |   |   |   |   |-- sample-smart.component.html
   |   |   |   |   |   |-- sample-smart.component.scss
   |   |   |   |   |   |-- sample-smart.component.spec.ts
   |   |   |   |   |   |-- sample-smart.component.ts
   |   |   |   |-- interfaces
   |   |   |   |   |-- sample.interface.ts
   |   |   |   |-- sample-routing.module.ts
   |   |   |   |-- sample.module.ts
   |   |   |   |-- services
   |   |   |   |   |-- sample.service.spec.ts
   |   |   |   |   |-- sample.service.ts
   |   |   |   |-- store
   |   |   |   |   |-- actions
   |   |   |   |   |   |-- sample.actions.ts
   |   |   |   |   |-- effects
   |   |   |   |   |   |-- sample.effects.spec.ts
   |   |   |   |   |   |-- sample.effects.ts
   |   |   |   |   |-- reducers
   |   |   |   |   |   |-- sample.reducer.spec.ts
   |   |   |   |   |   |-- sample.reducer.ts
   |   |   |   |   |-- selectors
   |   |   |   |   |   |-- sample.selectors.spec.ts
   |   |   |   |   |   |-- sample.selectors.ts
   |   |   |   |   |-- state
   |   |   |   |   |   |-- sample.state.ts
   |   |-- shared
   |   |   |-- components
   |   |   |   |-- dumb-sample
   |   |   |   |   |-- dumb-sample.component.html
   |   |   |   |   |-- dumb-sample.component.scss
   |   |   |   |   |-- dumb-sample.component.spec.ts
   |   |   |   |   |-- dumb-sample.component.ts
   |   |   |-- pipes
   |   |   |-- services
   |   |   |-- utilities
   |-- assets
   |-- environments
   |   |-- environment.prod.ts
   |   |-- environment.ts
   |-- favicon.ico
   |-- index.html
   |-- main.ts
   |-- polyfills.ts
   |-- styles.scss
```

### Create folder structure tree

1. To create folder structure tree we need to add below command in git config-
   `git config --global alias.tree '! git ls-tree --full-name --name-only -t -r HEAD | sed -e "s/[^-][^\/]*\//   |/g" -e "s/|\([^ ]\)/|-- \1/"'`
2. After adding above command we can utilise this as -
   `git tree`

### src/core

Core folder has constants, interfaces, models, interceptoprs, guards and store folder to kept the files based on its use cases.
This folder is divide into following subfolder as per the use cases:

1. `src/core/constants`:- This folder is used to kept constants for your features.
2. `src/core/interfaces`:- This folder is used to kept interfaces for your features.
3. `src/core/models`:- This folder is used to kept models for your features.
4. `src/core/interceptoprs`:- This folder is used to kept interceptoprs for your features.
5. `src/core/guards`:- This folder is used to add auth guard for routing.
6. `src/core/store`:- This folder is used for contain all root level states and its operations.

### src/shared

shared folder has components, pipes, services, utilities to kept the common files across the feature modules

1. `src/shared/components`:- To add common components across all the modules eg. card component
2. `src/shared/pipes`:- To add common pipes across all the modules eg. arrayToString pipe
3. `src/shared/services`:- To add common services across all the modules eg. loader service to handle loader for your project
4. `src/shared/utilities`:- To add utilities across all the modules eg. some common generic function which can we used common across the project

### src/feature-modules

`src/feature-modules` is used to add all your feature modules into this folder. As a sample we have provided sample code for feature module in this branch- [Sample code](https://github.com/coditas-llp/angular-starter/tree/sample)`

## Running unit tests

We have integrated Jest for unit testing

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/docs/cli), it executes `jest` command internally.\
To run single test file `jest <file-name>`. \
To get the coverage of the tests run `npm run test:coverage` , it executes `jest --coverage` command internally.

## Formatting

In this project prettier and eslint added to this project for formatting and lint errors. \
Run `npm run lint` for finding linting errors, it executes `ng lint` command internally.\
Run `npm run lint:fix` for fixing formate and lint errors by lint directly, it executes `ng lint --fix` command internally.

## Ngrx state management

This project has ngrx state management tool, following dependencies are added to this project

1. "@ngrx/effects": "^15.1.0"
2. "@ngrx/store": "^15.1.0"
3. "@ngrx/store-devtools": "^15.1.0"

For reference you can refer this - [Sample code](https://github.com/coditas-llp/angular-starter/tree/sample/src/app/feature-modules/posts)
in this sample code we have provide CRUD operation using ngrx store management

## Sample code

We have this [Sample code](https://github.com/coditas-llp/angular-starter/tree/ngrx-sample) this branch for sample code. \
In this branch we have provided same code for CURD operation in the `src/feature/post` folder
To load post after running serve command go to `http://localhost:4200/posts`
