# PruebaFront

## DEPLOY AWS
```
https://main.d2hvzjtgoshjno.amplifyapp.com/
```
# EXPLICACION
Si que hace login a la api (en console se puede apreciar ya que hay varios console.log para confirmar que los datos son correctos), pero no he podido implementar correctamente el traspaso de datos entre componentes. El navbar está en app.component, que es donde controlaba que se mostraba segun isLogin o no, pero dado
que es en el componente login donde se efectua el login como tal, app.component no esta recibiendo ese cambio de estado. Con logout, pasa lo mimo. 
Por otro lado falla al querer mostrar los elementos, los recupera bien de la api (se puede apreciar en consola) pero dado que devuelve un objeto, en vez de array, no es iterable por tanto no muestra los datos correctamente. 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
