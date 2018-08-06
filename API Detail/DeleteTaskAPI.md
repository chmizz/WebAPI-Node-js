**Delete**
----
  Delete a task by ID.

* **URL**
    ```
    /tasks/id
    ```

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
      {
          message: 'Task successfully deleted'
      }
    ```
 
* **Error Response:**

  * **Code:** 403 Forbidden <br />
    **Content:** `{ error : "Can't create tasks." }`

* **Sample Call:**

  ```
   http://localhost:5000/tasks
  ```