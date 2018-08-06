**Update Status**
----
  Set the task status.

* **URL**
    ```
    /tasks/status/id
    ```

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id="string"`

* **Data Params**

  `status=[enum string]`

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
    **Content:** `{ error : "Can't update status task." }`

* **Sample Call:**

  ```
   http://localhost:5000/tasks/status/5b67fa167be217363055901e
  ```
