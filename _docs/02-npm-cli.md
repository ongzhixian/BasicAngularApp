# NPM CLI

## Install Angular CLI

```
npm install -g @angular/cli
ng new basic-angular-app
ng serve --open
ng serve --port 9800

ng build --output-path docs --base-href /basic-angular-app/
copy .\docs\index.html .\docs\404.html

View at 
https://ongzhixian.github.io/BasicAngularApp/

```

``` Add support for Material and/or PWA
ng add @angular/material
ng add @angular/pwa
```

## Generator

ng generate component xyz
ng test
ng build


## Deployment

### Basic deployment to a remote server

For the simplest deployment, create a production build and copy the output directory to a web server.

Start with the production build:

`ng build`

Copy everything within the output folder (`dist/project-name/` by default) to a folder on the server.
Configure the server to redirect requests for missing files to index.html. 
Learn more about server-side redirects below.
This is the simplest production-ready deployment of your application.

### Deploy to GitHub Pages

Create and check out a git branch named gh-pages

`git checkout -b gh-pages`

Build your project using the Github project name, with the Angular CLI command `ng build` and the following options, 
where your_project_name is the name of the project that you gave the GitHub repository in step 1.

Be sure to include the slashes on either side of your project name as in /your_project_name/.

`ng build --output-path docs --base-href /your_project_name/`

Make a copy of docs/index.html and name it docs/404.html.

`copy .\docs\index.html .\docs\404.html`

https://<user_name>.github.io/<project_name>


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
