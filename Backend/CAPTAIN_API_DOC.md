# Captain Registration Endpoint Documentation

## Endpoint

`POST /captains/register`

## Description
Registers a new captain in the system. This endpoint validates the input, hashes the password, creates a captain, and returns an authentication token along with the captain data.

## Request Body
The request body must be a JSON object with the following structure:

```
{
  "fullName": {
    "firstName": "string (min 3 chars, required)",
    "lastName": "string (optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 chars, required)",
  "vehicle": {
    "color": "string (min 3 chars, required)",
    "plate": "string (1-7 uppercase letters/numbers, required, no spaces)",
    "capacity": "integer (min 2, required)",
    "vehicleType": "string (one of: car, bike, auto, required)"
  }
}
```

### Example
```
{
  "fullName": {
    "firstName": "Shinchan",
    "lastName": "Nohara"
  },
  "email": "shinchan@example.com",
  "password": "securePass123",
  "vehicle": {
    "color": "White",
    "plate": "MH28AU3",
    "capacity": 3,
    "vehicleType": "car"
  }
}
```

## Responses

### Success
- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "message": "Captain registered successfully",
    "captain": {
      "_id": "<captain_id>",
      "fullName": {
        "firstName": "Shinchan",
        "lastName": "Nohara"
      },
      "email": "shinchan@example.com",
      "vehicle": {
        "color": "White",
        "plate": "MH28AU3",
        "capacity": 3,
        "vehicleType": "car"
      }
    },
    "token": "<jwt_token>"
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

# Captain Login Endpoint Documentation

## Endpoint

`POST /captains/login`

## Description
Authenticates a captain with email and password. Returns a JWT token and captain info on success.

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
  "email": "shinchan@example.com",
  "password": "securePass123"
}
```

## Responses

### Success
- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Captain logged in successfully",
    "captain": {
      "_id": "<captain_id>",
      "fullName": {
        "firstName": "Shinchan",
        "lastName": "Nohara"
      },
      "email": "shinchan@example.com",
      "vehicle": {
        "color": "White",
        "plate": "MH28AU3",
        "capacity": 3,
        "vehicleType": "car"
      }
    },
    "token": "<jwt_token>"
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

# Captain Profile Endpoint Documentation

## Endpoint

`GET /captains/profile`

## Description
Returns the authenticated captain's profile information. Requires a valid JWT token in the `Authorization` header or as a cookie.

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
    "message": "Captain profile retrieved successfully",
    "captain": {
      "_id": "<captain_id>",
      "fullName": {
        "firstName": "Shinchan",
        "lastName": "Nohara"
      },
      "email": "shinchan@example.com",
      "vehicle": {
        "color": "White",
        "plate": "MH28AU3",
        "capacity": 3,
        "vehicleType": "car"
      }
    }
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

# Captain Logout Endpoint Documentation

## Endpoint

`GET /captains/logout`

## Description
Logs out the authenticated captain by blacklisting the JWT token and clearing the authentication cookie. Requires a valid JWT token in the `Authorization` header or as a cookie.

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
    "message": "Captain logged out successfully"
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
