# Simple RESTful API

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [Usage](#usage)
- [Author](#author)

## Overview
RESTful API with Node js for study and practice!

### Screenshot

![Create](./screenshots/Create.png)
![Read - ALL](./screenshots/Read-ALL.png)
![Read - by ID](./screenshots/Read-byID.png)
![Update](./screenshots/Update.png)
![Delete](./screenshots/Delete.png)

## My process
-Setup of packages(express, nodemon and mongoose)
-Creation and setup of the index.js file
-Creation of a Database with MongoDB through MongoDB Atlas
-Build the CRUD methods and responses
-Test the API with Postman

### Built with

- Node js
- Express js
- Nodemon
- Mongoose
- MongoDB

## Usage

```
// Set your MongoDB user in index.js file 

const DB_USER = "";
const DB_PASSWORD = encodeURIComponent("");
const YourDatabaseURLHere = "";

// Set your APICluster to connect to your Database

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.{{YourDatabaseURLHere}}`
  )
  .then(() => {
    console.log("Conected");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

```

## Author

- LinkedIn - [Anderson Melo](https://www.linkedin.com/in/anderson-melo-3aaa94198/)
