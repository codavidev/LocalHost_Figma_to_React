# Backend

This is the backend part of the Airbnb clone application, built using Node.js and Express.

## Backend Frameworks and Libraries

- Node.js
- Express
- MongoDB (database)
- Mongoose (Object Data Modeling library)
- JSON Web Tokens (JWT) for authentication

## API Structure

The backend API is structured using Express routes, organized into the following directories:

- `routes/auth.js`: Routes for user authentication (login, signup)
- `routes/properties.js`: Routes for managing properties (create, read, update, delete)
- `routes/users.js`: Routes for managing user profiles

## Data Models

The application uses the following data models:

- `User`: Represents a user account with properties like name, email, password, etc.
- `Property`: Represents a property listing with details like location, description, amenities, etc.

## Installation and Launch Instructions

1. Navigate to the `backend` directory: `cd backend`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. The backend server will be running at `http://localhost:5000`