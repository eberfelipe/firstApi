# Students Management Project Documentation

This project is a Node.js application that uses the Express framework to create a RESTful API for managing students. The application allows for listing all students, searching for students by ID, creating new students, and removing existing students.

## Project Structure

The project consists of the following main files:

- `index.js`: The main file that sets up the Express server, defines the authentication middleware, and the main routes.
- `middlewares.js`: Contains the authenticate middleware that checks if the password provided in the query is correct.
- `router.js`: Defines the routes for student-related operations (list, search by ID, create, and remove).
- `database_students.js`: Simulates an in-memory database with a list of students.
- `studentsController.js`: Contains the control logic for CRUD operations on students.

## Setup and Execution

To run the project, Node.js must be installed. Project dependencies can be installed using the `npm install` command, and the server can be started with `npm start`.

## Available Endpoints

The application offers the following endpoints:

- `GET /`: Root route that requires authentication. Once authenticated, it redirects to `/students`.
- `GET /students`: Lists all students.
- `GET /students/:id`: Searches for a student by their ID.
- `POST /students`: Creates a new student. Requires name, surname, age, and course fields to be provided in the request body.
- `DELETE /students/:id`: Removes a student based on the provided ID.

## Authentication

Authentication is required to access the root route `/`. To authenticate, the correct password (`cubos123`) must be provided as a query parameter (`?password=cubos123`).

## Usage Example

To create a new student, a POST request to `/students` with the following JSON body can be sent:

```
json structure:
{
"name": "New",
"surname": "Student",
"age": 20,
"course": "Computer Science"
}
```

## Contributing

Contributions to the project are welcome. To contribute, please create a pull request with your modifications.
