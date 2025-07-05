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
