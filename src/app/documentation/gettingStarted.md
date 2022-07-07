# CoditasAngularStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code folder structure
### /core
1. constants:- To add constant for the project
2. interfaces:- To add interfaces for the project
3. modals:- To add modals for the project
### /shared
shared folder is used to common things between all the modules
1. components:- To add common components across all the modules
2. pipes:- To add common pipes across all the modules
3. services:- To add common services across all the modules
4. utilities:- To add utilities across all the modules

### /feature-modules
feature-modules is used to add all the feature modules into this folder

## Running unit tests
We have integrated Jest for unit testing

Run `jest` to execute the unit tests via [Jest](https://jestjs.io/docs/cli)

## Formatting
In this project prettier and eslint added to this project for formatting and lint errors 

Run `ng lint` for finding linting errors
Run `ng lint --fix` for fixing formate and lint errors

## Ngrx state management
This project has ngrx state management tool, following dependencies are added to this project
1. "@ngrx/effects": "^14.0.0"
2. "@ngrx/store": "^13.2.0"
3. "@ngrx/store-devtools": "^13.2.0"

## Sample code 
In the feature folder This project has provide some sample code for reference inside the /feature-module


