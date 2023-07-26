# Danson-metaverse-server

# ExpressJS User Authentication API Documentation

This documentation provides a comprehensive guide on how to integrate and use the User Authentication API. The API is built using Node.js and Express.js to handle user registration, verification, login, password reset, and other user-related actions. The API supports both email and password-based authentication as well as social media single sign-on (SSO) using Google and Facebook.

## API Endpoints

1. ### User Registration

   Endpoint: `POST /register-request`

   Description: Registers a new user with the provided username, email, and password.

   Request Body:
   ```json
   {
     "username": "example_user",
     "email": "user@example.com",
     "password": "password123"
   }
   ```

2. ### Email Verification

   Endpoint: `POST /register-verification`

   Description: Verifies the user's email using the verification code sent to the user's email during registration.

   Request Body:
   ```json
   {
     "email": "user@example.com",
     "code": "123456"
   }
   ```

3. ### User Login

   Endpoint: `POST /login`

   Description: Logs in the user with the provided email and password.

   Request Body:
   ```json
   {
     "email": "user@example.com",
     "password": "password123"
   }
   ```

4. ### Password Reset

   Endpoint: `POST /password-reset`

   Description: Resets the user's password.

   Request Body:
   ```json
   {
     "email": "user@example.com",
     "oldPassword": "old_password",
     "newPassword": "new_password"
   }
   ```

5. ### Forgot Password

   Endpoint: `POST /password-forgot`

   Description: Initiates the forgot password process and sends a password reset link to the user's email.

   Request Body:
   ```json
   {
     "email": "user@example.com"
   }
   ```

6. ### Forgot Password Reset

   Endpoint: `POST /forgot-reset`

   Description: Resets the user's password during the forgot password process.

   Request Body:
   ```json
   {
     "email": "user@example.com",
     "verificationCode": "123456",
     "newPassword": "new_password"
   }
   ```

## Integration Guide

To integrate the User Authentication API into your frontend application or test it using Postman, follow these steps:

1. Install Node.js and npm on your system.

2. Clone or download the project from the repository.

3. Install project dependencies by running `npm install` in the project directory.

4. Set up the environment variables (e.g., database connection details, JWT secret) in a `.env` file.

5. Run the API server using `npm start`.

6. Make requests to the provided API endpoints using your frontend application or Postman.


## Conclusion

This User Authentication API provides essential functionalities for user registration, email verification, login, and password management. Happy coding!
