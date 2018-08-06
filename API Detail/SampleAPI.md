**Sample**
----
  Create data tasks.Returns json data about a single user.

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

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "status": ["done"],
        "_id": "5b67fb8c4fb3e116e493df55",
        "name": "Create database",
        "created_date": "2018-08-06T07:41:00.250Z",
        "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 403 Forbidden <br />
    **Content:** `{ error : "Can't create tasks." }`

* **Sample Call:**

  ```
   http://localhost:5000/
  ```