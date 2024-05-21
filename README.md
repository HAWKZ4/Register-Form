## Description

Register and Login forms with the following features:
- **Accessibility:** Ensured forms are accessible by following best practices.
- **JWT Authentication:** Integrated JSON Web Tokens (JWT) for secure authentication.
- **Protected Routes:** Added protected routes to restrict access to authenticated users only.
- **Role-based Authorization:** Implemented role-based authorization to manage user permissions and access control.

### Dependencies Added

- **axios:** Used for making HTTP requests to the backend API.
- **jwt-decode:** Utilized for decoding JWT tokens to extract user information.
- **@fortawesome/react-fontawesome:** Incorporated Font Awesome icons for a better user interface.
- **@fvilers/disable-react-devtools:** Disabled React Developer Tools in production to enhance security.


### Instructions

1. **Register:** Users can create a new account using the registration form.
2. **Login:** Existing users can log in with their credentials.
3. **Protected Routes:** Certain routes are only accessible to logged-in users.
4. **Role-based Access:** Different user roles (e.g., admin, user) have different levels of access.
