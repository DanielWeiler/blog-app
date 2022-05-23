# Blog app

## Project Description

This blog app is a fullstack web app that I have built while learning fullstack web development. The app works effectively as a basic blog app where users can sign in, create blog posts, and interact with other users' blog posts. 

## Demo

A working live version can be found at [blog-app-1234.herokuapp.com](https://blog-app-1234.herokuapp.com/)

One can sign in with a test account that has already been created:
- username: Tester
- password: pass

## Technologies

- React
- Node.js
- NPM
- Express
- Axios
- Redux
- React-Bootstrap
- MongoDB
- Mongoose
- Cypress (End to end testing)
- Jest
- Supertest
- Nodemon
- ESLint
- Bcrypt
- Lodash

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

The backend (server) of the application is in the root folder, and frontend is in the frontend folder.
- Clone the project repository
- Install the dependencies in the root folder and frontend folder with npm.

```
# Clone this repository
C:/> git clone https://github.com/DanielWeiler/blog-app.git

# Navigate to the project
C:/> cd blog-app

# Install dependencies
C:/> npm install

# Navigate to the frontend folder
C:/> cd blog-app/frontend

# Install dependencies
C:/> npm install
```

### Running frontend and backend in development mode

- Navigate to the root folder and run the backend with the command:

```
C:/> cd blog-app
C:/> npm run dev
```

- Navigate to the frontend folder in a different terminal window and run the frontend with the command:

```
C:/> cd blog-app/frontend
C:/> npm start
```

Now you can open [http://localhost:3000](http://localhost:3000) to view it in the browser. The backend is running in [http://localhost:3003](http://localhost:3003/api).

### Running tests:

The app has end-to-end tests and tests for the backend.

You can run the end-to-end tests with the following commands:

- Run the project backend in the test environment with the command:

```
C:/> blog-app
C:/> npm run start:test
```

- Navigate to the frontend folder in a different terminal window and run the frontend with the command:

```
C:/> cd blog-app/frontend
C:/> npm start
```

- Navigate to a different terminal window and run cypress end-to-end tests with the command:

```
C:/> cd blog-app/frontend
C:/> npm run test:e2e
```

You can run all the backend tests in the backend directory with the command:

```
C:/> blog-app
C:/> npm test
```

- To run an individual test or set of tests run:

```
C:/> blog-app
C:/> npm test -- -t 'name of test'
```

## Additional Information

The .env files have been added to git for the purpose that anyone can run the project and tests locally. Otherwise, the environment variables would be gitignored.

## Author

Daniel Weiler