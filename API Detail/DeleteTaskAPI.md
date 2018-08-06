**Delete**
----
  Delete a task form the list.

* **URL**
    ```
    /tasks/id
    ```

* **Method:**

  `DELETE`
  
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
          message: 'Task successfully deleted'
      }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ error : "Can't delete tasks." }`

* **Sample Call:**

  ```
   http://localhost:5000/tasks/5b67fa167be217363055901e
  ```
