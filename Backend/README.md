# User Registration Endpoint Documentation

## Endpoint

`POST /user/register`

## Description
Registers a new user in the system. This endpoint validates the input, hashes the password, creates a user, and returns an authentication token along with the user data.

## Request Body
The request body must be a JSON object with the following structure:

```
{
  "fullName": {
    "firstName": "string (min 3 chars, required)",
    "lastName": "string (min 3 chars, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

### Example
```
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Responses

### Success
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "fieldName",
        "location": "body"
      }
      // ...more errors
    ]
  }
  ```

### Other Errors
- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Error message"
  }
  ```

---

# User Login Endpoint Documentation

## Endpoint

`POST /user/login`

## Description
Authenticates a user with email and password. Returns a JWT token and user info on success.

## Request Body
The request body must be a JSON object with the following structure:

```
{
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)"
}
```

### Example
```
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "email": "john.doe@example.com",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      }
    }
  }
  ```

### Validation Error
- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "fieldName",
        "location": "body"
      }
      // ...more errors
    ]
  }
  ```

### Unauthorized
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Other Errors
- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Error message"
  }
  ```

---

# User Profile Endpoint Documentation

## Endpoint

`GET /user/profile`

## Description
Returns the authenticated user's profile information. Requires a valid JWT token in the `Authorization` header or as a cookie.

## Authentication
- Requires Bearer token in `Authorization` header or `token` cookie.

## Request
- No request body required.

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "<user_id>",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user fields
  }
  ```

### Unauthorized
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized!"
  }
  ```

---

# User Logout Endpoint Documentation

## Endpoint

`POST /user/logout`

## Description
Logs out the authenticated user by blacklisting the JWT token and clearing the authentication cookie. Requires a valid JWT token in the `Authorization` header or as a cookie.

## Authentication
- Requires Bearer token in `Authorization` header or `token` cookie.

## Request
- No request body required.

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Unauthorized
- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized!"
  }
  ```

---

## Notes
- The `email` must be unique for registration.
- The `password` is securely hashed before storage.
- The response includes a JWT token for authentication.
- Passwords are never returned in responses.
