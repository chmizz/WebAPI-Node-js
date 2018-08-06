**All Tasks**
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
          "subject": "Design UX/UI",
          "detail": "Design UX/UI",
          "__v": 0
      },
      {
          "status": [
              "pending"
          ],
          "_id": "5b67fa167be217363055901f",
          "subject": "Design UX/UI",
          "detail": "Design UX/UI",
          "__v": 0
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "Task doesn't exist." }`

* **Sample Call:**

  ```
   http://localhost:5000/tasks
  ```
