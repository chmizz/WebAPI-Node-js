**Sample**
----
  Create data tasks.Returns json data about all task.

* **URL**
    ```
    /
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

  * **Code:** 403 Forbidden <br />
    **Content:** `{ error : "Can't create tasks." }`

* **Sample Call:**

  ```
   http://localhost:5000/
  ```
