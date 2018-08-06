**Sample**
----
  Returns json data about all task.

* **URL**
    ```
    /tasks
    ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 
    ```
    [
      {
          "status": [
              "done"
          ],
          "_id": "5b67fa167be217363055901e",
          "name": "Design UX/UI",
          "created_date": "2018-08-06T07:34:46.198Z",
          "__v": 0
      },
      {
          "status": [
              "doing"
          ],
          "_id": "5b67fa167be217363055901f",
          "name": "Design database",
          "created_date": "2018-08-06T07:34:46.199Z",
          "__v": 0
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 403 Forbidden <br />
    **Content:** `{ error : "Can't create tasks." }`

* **Sample Call:**

  ```
   http://localhost:5000/tasks
  ```