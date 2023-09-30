# QuizApp

Welcome to the QuizApp Backend! This backend server is designed to support the QuizApp frontend, providing the necessary APIs and services to manage and deliver quizzes to users.

## Tech

The QuizApp Backend uses the following teachnologies :

- [TypeScript](https://www.typescriptlang.org/docs/)
- [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Moongoose](https://mongoosejs.com/docs/)

## Structure
The project structure is organized as follows:

`app.js`: Entry point of the application.

`controllers/`: API controllers.

`models/`: Data models.

`routes/`: API routes.

`middleware/`: Custom middleware functions.

`utils/`: Utility functions.

Feel free to modify the structure to fit your project's needs.

## API Endpoints
The API endpoints provided by this backend include:

- **/auth/register**: This is a POST request and it registers a new user.
- **/auth/login**: This is a POST request and it authenticate and log in a user.
- **/user/:userID**: This is a GET request and it gets details of user.
- **/user/**: This is a PUT request and it updates details of user.
- **/quiz:** This is a POST request and it creates a new quiz.
- **/quiz/:quizID**: This is a Get request and it retrieves a specific quiz.
- **/quiz/:quizId**: This is a Delete request and it deletes a specific quiz.
- **/quiz/publish**: This is a Patch request and it publishes a specific quiz.
- **/exam/:examID**: This is a Get request and it starts a specific quiz.
- **/exam/**: This is a POST request and it submits a specific quiz.
- **/quiz/:quizId**: This is a Delete request and it deletes a specific quiz.
- **/report/:quizId**: This is a Get request and it gives report of  a specific quiz.