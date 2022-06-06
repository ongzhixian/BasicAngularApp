# NPM CLI

## Install Angular CLI

```
npm install -g @angular/cli
ng new basic-angular-app
ng serve --open
```

``` Add support for Material and/or PWA
ng add @angular/material
ng add @angular/pwa
```

## Generator

ng generate component xyz
ng test
ng build


## Using a different Angular version from installed version

Install npx from npm

`npm install -g npx`

Create new project with the desired cli version. Use @angular/cli@latest or just @angular/cli for the latest version.

`npx -p @angular/cli@6.0.0 ng new my-project`

Inside the project root folder, execute ng --version to see the version of you cli. 
But I recommend you use npx prefix to every command that uses ng as follows.

`npx ng --version`

`npx ng generate component my-component`

Here the npx look for the ng command exists locally in ./node_modules/.bin/ directory and executes it.
