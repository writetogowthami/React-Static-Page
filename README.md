# React-Static-Page
0. Go to https://nodejs.org/en/download/ and install node with (.msi file extension)
1. Go to https://reactjs.org and Click on Docs Tab. In the top Right corner click on Installation, then go for "Add React to a New App".
2. Run the below commands in command prompt, which will download and install all the required dependencies along with React Js in one go.
    * Installing React along with the supporting installations
    npm install -g create-react-app
    * Creating my-app
    create-react-app my-app
    * Go to my-app folder
    cd my-app
    npm start
    *Runs the app in the development mode
3. In browser look for http://localhost:3000/ which will start running as soon as npm start is run
4. `npm test`
    Launches the test runner in the interactive watch mode.
    `npm run build`
    Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance. npm run build will create an optimized build of your app in the build folder
5. `npm run eject`
    This command will remove the single build dependency from your project.
6. In index.html we can edit Title
  In App.js - added our HTML content
  In App.css - added CSS content

*** Folder Structure

After creation, project folder structure looks like this:
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.
