# AIP-job-matcher
AIP Project that matches employees to their employers

# Coding Standards we follow

**General**
> Use camel-case for naming files and variables (e.g. "firstName").
> 4 space indentation.
> Method brackets must open on the same line as method name and end on a new line.
> Line length must not exceed 80.
> Tags with no children must self-close (" />"), not "</div>" for instance.

**React-Specific**
> No more than one class component per file.
> Components may only share directories is they are very closely related (e.g parent child relationship) and the sub-component is ONLY used by the parent.
> Use meaningful, detailed variable names for varibles to be accessed via props and state.
> Break up App.js where possible into sub-components, in order to keep it simple.
> Use PascalCase notation for file and class name for components (e.g. "MyComponent")
> Use function notation for stateless components


# How to run
Type npm start to run individual main file such as (client-react-redux or express-server folders).
Alternatively you can type npm run dev to run both at the same time.

# Software and Tools used
**RoboMongo**
> RoboMongo/Robo 3T is a GUI for MongoDB
> Postman is a chrome extension/desktop app for interacting HTTP API's. This will be used to test our API routes for responses, especially posts, put and deletes.

# Stack
MongoDB, Express, React and NodeJS

# Dependencies
**express**
> Express node is to provide small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.

**mongoose**
> Adds a layer of methods fo easily save, edit, retrieve and delete data from mongodb. Also allows us to create our Models and Schemas easily.

**body-parser**
> Body-parser will be used to parse incoming request HTML body in JSON format. The reason for this use is to test POST requests on Postman.

# Dev dependencies
**nodemon**
To install as a dev dependency:
npm install nodemon --save-dev
> nodemon reloads the server each time it finds changes in the file. Doing so removes the need to run node index each time there are file changes.
