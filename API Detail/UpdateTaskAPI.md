**Update**
----
  Returns json data about a task with update.

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
    name="string",
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
          "name": "Design UX/UI",
          "created_date": "2018-08-06T07:34:46.198Z",
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