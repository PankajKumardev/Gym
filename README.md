# Gym Membership System API Documentation

A RESTful API for managing gym memberships built with Express.js, TypeScript, MongoDB, and Zod validation.

## Base URL

```
http://localhost:3000/api
```

## Authentication

Currently, the API doesn't require authentication.

## Endpoints

### 1. Create New Member

Creates a new gym member in the system.

**Endpoint:** `POST /members`

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "membershipType": "Premium"
}
```

**Validation Rules:**

- `name`: Minimum 2 characters
- `email`: Valid email format
- `phone`: Exactly 10 digits
- `membershipType`: Must be either "Basic" or "Premium"

**Success Response (201 Created):**

```json
{
  "id": "65f1a2b3c4d5e6f7g8h9i0j1",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "membershipType": "Premium",
  "joinedAt": "2024-03-19T10:00:00.000Z"
}
```

**Error Responses:**

- `400 Bad Request`: Invalid input data
  ```json
  {
    "error": "Email already exists"
  }
  ```
- `500 Internal Server Error`:
  ```json
  {
    "error": "Internal server error"
  }
  ```

### 2. Get Member Profile

Retrieves a specific member's profile by their ID.

**Endpoint:** `GET /members/:id`

**URL Parameters:**

- `id`: MongoDB ObjectId of the member (24 characters hexadecimal)

**Success Response (200 OK):**

```json
{
  "id": "65f1a2b3c4d5e6f7g8h9i0j1",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "membershipType": "Premium",
  "joinedAt": "2024-03-19T10:00:00.000Z"
}
```

**Error Responses:**

- `400 Bad Request`: Invalid member ID format
  ```json
  {
    "error": "Invalid member ID"
  }
  ```
- `404 Not Found`: Member not found
  ```json
  {
    "error": "Member not found"
  }
  ```
- `500 Internal Server Error`:
  ```json
  {
    "error": "Internal server error"
  }
  ```

### 3. List All Members

Retrieves a list of all registered gym members.

**Endpoint:** `GET /members`

**Success Response (200 OK):**

```json
[
  {
    "id": "65f1a2b3c4d5e6f7g8h9i0j1",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "membershipType": "Premium",
    "joinedAt": "2024-03-19T10:00:00.000Z"
  },
  {
    "id": "65f1a2b3c4d5e6f7g8h9i0j2",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "9876543211",
    "membershipType": "Basic",
    "joinedAt": "2024-03-19T11:00:00.000Z"
  }
]
```

**Error Response:**

- `500 Internal Server Error`:
  ```json
  {
    "error": "Internal server error"
  }
  ```

## Running the API

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables in `.env`:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

3. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build the TypeScript project
- `npm start`: Run the built project in production mode
