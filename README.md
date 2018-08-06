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
GET | /tasks | view all item in the list
GET | /tasks/id | view a single task in the list by id
POST | /task | add a task to the list
PUT | /tasks/id | edit existing task by id
PUT | /tasks/status/id | set the task status by id
DELETE | /tasks/id | delete a task from the list by id

* Detail API
  * [Sample Data API](https://github.com/chmizz/WebAPI-Node-js/blob/Dev/API%20Detail/SampleAPI.md)
  * [Get All API](https://github.com/chmizz/WebAPI-Node-js/blob/Dev/API%20Detail/GetAllTaskAPI.md)
  * [Get a Task API](https://github.com/chmizz/WebAPI-Node-js/blob/Dev/API%20Detail/GetSomeTaskAPI.md)
  * [Add Task API](https://github.com/chmizz/WebAPI-Node-js/blob/Dev/API%20Detail/CreateTaskAPI.md)
  * [Update a Task API](https://github.com/chmizz/WebAPI-Node-js/blob/Dev/API%20Detail/UpdateTaskAPI.md)
  * [Set The Task Status API](https://github.com/chmizz/WebAPI-Node-js/blob/Dev/API%20Detail/UpdateStatusTaskAPI.md)
  * [Delete a Task API](https://github.com/chmizz/WebAPI-Node-js/blob/Dev/API%20Detail/DeleteTaskAPI.md)
