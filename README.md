# WebAPI-Node-js
Web API using Node.js

## Getting Started
Application details
* A couple of prerequisites are needed to run the application locally
  * [Node.js v8.11.3](https://nodejs.org/en/)
  * [mongo 4.0.1](https://docs.mongodb.org/manual/installation/)

## Setup

* Install mongoose :

```
npm install mongoose
```
  * Link application to local MongoDB
  change the following ```server.js``` files :
  ```
  mongoose.connect('mongodb://localhost/Tododb')
  ```

* Install express :

```
npm install express
```


## API
HTTP verb | URI | Action
------------- | ------------- |-------------
GET | / | sample tasks
GET | /tasks | list all task
GET | /tasks/id | get task with ID
POST | /task | create a new task
PUT | /tasks/id | modify task with ID
PUT | /tasks/status/id | modify status task with ID
DELETE | /tasks/id | delete task with ID

* Detail API
  * [Sample Data API](https://github.com/chmizz/WebAPI-Node-js/tree/Dev/API%20Detail)
  * [Get All API](https://github.com/chmizz/WebAPI-Node-js/tree/Dev/API%20Detail)
  * [Get Some Task API](https://github.com/chmizz/WebAPI-Node-js/tree/Dev/API%20Detail)
  * [Create a Task API](https://github.com/chmizz/WebAPI-Node-js/tree/Dev/API%20Detail)
  * [Update a Task API](https://github.com/chmizz/WebAPI-Node-js/tree/Dev/API%20Detail)
  * [Update Status in a Task API](https://github.com/chmizz/WebAPI-Node-js/tree/Dev/API%20Detail)
  * [Delete a Task API](https://github.com/chmizz/WebAPI-Node-js/tree/Dev/API%20Detail)
