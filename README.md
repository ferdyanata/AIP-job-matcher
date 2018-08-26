# AIP-job-matcher
AIP Project that matches employees to their employers

# How to run
Type npm run dev to run project.
We used concurrently package to run both server and client at the same time.

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

**axios**
> Axios helps cut the middle step with just using Promised HTTP requests. Using Axios, returns the data object as expected, rather than having to convert the data from Promise to JSON format.

**bcryptjs**
> Module to hash passwords

**passport**
> Authentication middleware for Node.

# Dev dependencies
**nodemon**
To install as a dev dependency:
npm install nodemon --save-dev
> nodemon reloads the server each time it finds changes in the file. Doing so removes the need to run node index each time there are file changes.