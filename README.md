
# MERN Project - Login Signup

This repository contains a simple login and signup application built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User registration
- User login
- Session authentication
- Forgot Password
- Email Verification
- Protected routes
- Responsive design

## Technologies Used

- **Frontend:**
  - React
  - Redux (for state management)
  - Axios (for making HTTP requests)
  - TailwindCSS (for styling)
  - Routes
  - Formik
  - Yup
  - Redux-react-session
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ODM)
  - bcrypt (for password hashing)
  - Axios
  - Nodemailer

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node package manager) or Yarn
- MongoDB

Add `.env` file at same level of `package.json` in both `frontend-service` and `backend-service`

1. ### frontend-service

   add following environment variables.
    ```bash
    REACT_APP_API_BASE_URL = http://localhost:5000  // replace url with if you have deployed backend.
    ```
2. ### backend-service

   add following environment variables.
   ```bash
   PORT = 5000 
   HOST_URI = http://localhost:5000 // replace url with if you have deployed backend.
   MONGODB_URI = "your mongodb url"
   AUTH_EMAIL = "your email"  // for sending emails
   AUTH_PASS = "your password"
   ```

Nodemailer requires host and credentials in order to send email bellow is a example replace host based on your email host for example: gmail, etc. [See Nodemailer documentation](https://nodemailer.com/)

![image](https://github.com/VipEvel/mern-project-login-signup/assets/66152577/493e56e3-cc95-40af-b42e-45c97d949243)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VipEvel/mern-project-login-signup.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mern-project-login-signup
   ```

3. Install the dependencies for both the client and server:

   ```bash
   # navigate to the respected directoy
   
   # For the server
        cd backend-service

   # For the client
        cd frontend-service
   ```
   ```bash
        npm install
   ```
   Or if you are using Yarn
   ```bash
        yarn install
   ```

### Running the Application

#### Backend

1. Start the Express server:

   ```bash
   npm start
   # Or if you are using Yarn
   yarn start
   ```

   The server should now be running on `http://localhost:5000`

#### Frontend

1. Start the React development server:

   ```bash
   npm start
   # Or if you are using Yarn
   yarn start
   ```

   The frontend should now be running on `http://localhost:3000`


## API Endpoints

### Auth Routes

- `POST /user/signup` - Register a new user
- `POST /user/login`  - Login a user


## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes.


## Contact

For any questions or inquiries, please open an issue or contact the repository owner.

---

Happy coding!
