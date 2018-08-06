# WebAPI-Node-js
Web API using Node.js

## Getting Started
Application details
* A couple of prerequisites are needed to run the application locally
  * [Node.js v8.11.3](https://nodejs.org/en/)
  * [mongo 4.0.1](https://docs.mongodb.org/manual/installation/)

## Setup

* Install mongoose (version 5.0.0)

```
npm install mongoose
```

HTTP verb | URI | Action
------------- | ------------- |-------------
GET | /tasks | list all task
GET | /tasks/id | get task with ID
POST | /task | create a new task
PUT | /tasks/id | modify task with ID
POST | /tasks/status | modify staus task with ID
DELETE | /tasks/ID | delete task with ID
