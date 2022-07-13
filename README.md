# CoditasAngularStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code folder structure
This project is divided into core, shared and feature-modules based on uses cases
### src/core
Core folder has core has constants, interfaces, modals, interceptoprs and guards folder to kept the files based on its use cases.
This folder is divide into following subfolder as per the use cases:
1. src/core/constants:- This folder is used to kept constants for your features. 
2. src/core/interfaces:- This folder is used to kept interfaces for your features. 
3. src/core/modals:- This folder is used to kept modals for your features. 
4. src/core/interceptoprs:- This folder is used to kept interceptoprs for your features. 
5. src/core/guards:- This folder is used to add auth guard for routing. 

### src/shared
shared folder has components, pipes, services, utilities to kept the common files across the feature modules 

1. src/core/components:- To add common components across all the modules eg. card component
2. src/core/pipes:- To add common pipes across all the modules eg. arrayToString pipe
3. src/core/services:- To add common services across all the modules eg. loader service to handle loader for your project
4. src/core/utilities:- To add utilities across all the modules eg. some common generic function which can we used common across the project

### src/feature-modules
/feature-modules is used to add all your the feature modules into this folder. As a sample we have provided sample code for feature module in this branch- [Sample code](https://github.com/raviparmar-coditas/angular-starter/tree/state-management)
Each

## Running unit tests
We have integrated Jest for unit testing

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/docs/cli), it executes `jest` command internally. 
To run single test file `jest <file-name>`. 
To get the coverage of the tests run `npm run test:coverage` , it executes `jest --coverage` command internally. 

## Formatting
In this project prettier and eslint added to this project for formatting and lint errors.
Run `ng lint` for finding linting errors.
Run `ng lint --fix` for fixing formate and lint errors by lint directly.

## Ngrx state management
This project has ngrx state management tool, following dependencies are added to this project
1. "@ngrx/effects": "^14.0.0"
2. "@ngrx/store": "^13.2.0"
3. "@ngrx/store-devtools": "^13.2.0"

For reference you can refer this - [Sample code](https://github.com/raviparmar-coditas/angular-starter/tree/state-management/src/app/feature-modules/posts).
in this sample code we have provide CRUD operation using ngrx store management 

## Sample code 
We have this [Sample code](https://github.com/raviparmar-coditas/angular-starter/tree/state-management) this branch for sample code.
In this branch we have provided same code for CURD operation in the `src/feature/post` folder 


