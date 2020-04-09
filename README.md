express-mysql
================

## Description
This is part of the series of exercises to demonstrate MERN stack.

* Server: [express-mysql](http://github.com/supershaneski/express-mysql) (this repository)
* Server: [express-mongodb](http://github.com/supershaneski/express-mongodb) (MongoDB version)
* Client: [react-crud-app](http://github.com/supershaneski/react-crud-app)

This is a simple CRUD server that provides API service for a todo app.

## Important Note
This assumes that you have mySQL installed in your local computer.

For my circumstance, I use a separate [XAMPP](https://xampp.site/) running for testing.

## Installation
Clone repository and run

```
npm install
```

## Create/Initialize Database
Creates a database named ***mydb***

```
npm run create-db
```

Creates a table named ***todo***

```
npm run init-db
```

## Run
Runs the app in the development mode

```
npm start
```

Point your device to [http://localhost:9000](http://localhost:9000) to access the server.
