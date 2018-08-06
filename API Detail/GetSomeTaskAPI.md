**Get A Task**
----
  Returns json data about a task by Id.

* **URL**
    ```
    /tasks
    ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id="string"`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 
    ```
      {
          "status": [
              "done"
          ],
          "_id": "5b67fa167be217363055901e",
          "name": "Design UX/UI",
          "created_date": "2018-08-06T07:34:46.198Z",
          "__v": 0
      }
    ```
 
* **Error Response:**

  * **Code:** 404 Not Found <br />
    **Content:** `{ error : "Task not found." }`

* **Sample Call:**

  ```
   http://localhost:5000/tasks/5b67fa167be217363055901e
  ```