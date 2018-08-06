**Update**
----
  Edit exiting task.

* **URL**
    ```
    /tasks/id
    ```

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Data Params**

  ```
    subject="string",
    detail="string",
    status=[enum string],
  ```

* **Success Response:**

  * **Code:** 200 OK<br />
    **Content:** 
    ```
      {
          "status": [
              "done"
          ],
          "_id": "5b67fa167be217363055901e",
          "subject": "Design UX/UI",
          "detail": "Design UX/UI",
          "__v": 0
      }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "Can't update task." }`

* **Sample Call:**

  ```
   http://localhost:5000/tasks/5b67fa167be217363055901e
  ```
