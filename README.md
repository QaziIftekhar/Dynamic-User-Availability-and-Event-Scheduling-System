# Dynamic User Availability and Event Scheduling System

## Overview

This project is a web-based application that allows users to dynamically set their availability for specific days or the entire week. The admin can view this availability and schedule sessions accordingly, including one-on-one or group sessions.

## Features

- Users can log in, manage their availability, and view their scheduled sessions.
- Admins can view user availability, schedule sessions, and manage session details.
- Includes a responsive, user-friendly interface.

## Tech Stack

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Other**: Axios for HTTP requests

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm

## Setup

### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm run dev
    ```

The backend server will run on `http://localhost:5000`.

### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

The frontend application will run on `http://localhost:3000`.

## API Endpoints

### User

- **POST /api/user/register**: Register a new user.
- **POST /api/user/login**: Log in an existing user.
- **GET /api/user/availability**: Get the current user's availability.
- **PUT /api/user/availability**: Update the current user's availability.

### Session

- **POST /api/session/create**: Create a new session.
- **GET /api/session/user/:userId**: Get all sessions for a user.

## Usage

1. Register a new user or log in with an existing user.
2. Manage your availability through the "Availability" page.
3. Admins can view user availability and create sessions through the admin interface.

## Running Tests

Currently, there are no automated tests included in this project.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and ensure they are tested.
4. Submit a pull request with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React, Node.js, and MongoDB for their amazing frameworks and libraries.
- The open-source community for tools and resources.
