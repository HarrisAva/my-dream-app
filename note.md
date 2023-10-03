1. Angular installation - use bash terminal
   Command:
   npm install -g @angular/cli
   ng new project-name
   cd project-name
   ng serve (make sure to keep it running, to quit running, enter Ctrl + c)
   ==================================

2. install bootstrap:
   npm install --save bootstrap@3 // (version 3) \* install it locally \*\*
   // the bootstrap is saved to node_modules folder

Edit the angular.json file, under architect...styles, add location of bootstrap.min.css file, e.g "node_modules/boots/../../bootstrap.min.css"

    You encountered issues during the installation of the CLI or setup of a new Angular project?

A lot of problems are solved by making sure you're using the latest version of NodeJS, npm and the CLI itself.

Updating NodeJS:

Go to nodejs.org and download the latest version - uninstall (all) installed versions on your machine first.

Updating npm:

Run [sudo] npm install -g npm (sudo is only required on Mac/ Linux)

Updating the CLI

[sudo] npm uninstall -g angular-cli @angular/cli

npm cache clean

[sudo] npm install -g @angular/cli

Here are some common issues & solutions:

Creation of a new project takes forever (longer than 3 minutes)
That happens on Windows from time to time => Try running the command line as administrator
You get an EADDR error (Address already in use)
You might already have another ng serve process running - make sure to quit that or use ng serve --port ANOTHERPORT to serve your project on a new port
My changes are not reflected in the browser (App is not compiling)
Check if the window running ng serve displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI

============

Are you stuck in the course? Post your course related questions or find answers already in our Academind Q&A forum: https://board.academind.com/t/how-to-find-help/

// **How an Angular App gets Loaded and Started**

- Ang start with main.ts
- link to app.module.ts
- pass app module as argument to app.component.ts (e.g <app-root>)
- link app-root to index.html file
- link to app.component.html file which have templates

// Generate component
ng generate component "name of component"
or, ng g c "name of component", e.g servers
