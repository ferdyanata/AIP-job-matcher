# AIP-job-matcher
AIP Project that matches employees to their employers

# How to run
Type npm start to run main file.

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