# Uber Frontend

This is a simple React-based frontend for an Uber-like application. It provides user and captain (driver) authentication flows, including signup and login pages, and a home page. The project uses React Router for navigation and Context API for user state management.

## Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   │   └── Uber.png
│   ├── context/
│   │   └── UserContext.jsx
│   └── pages/
│       ├── CaptainLogin.jsx
│       ├── CaptainSignup.jsx
│       ├── Header.jsx
│       ├── Home.jsx
│       ├── UserLogin.jsx
│       └── UserSignup.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## File Descriptions

### `src/main.jsx`
- Entry point for the React app.
- Wraps the app with `StrictMode`, `UserContext`, and `BrowserRouter`.

### `src/App.jsx`
- Defines the main routes using React Router.
- Routes:
  - `/` → Home
  - `/user-signup` → UserSignup
  - `/user-login` → UserLogin
  - `/captain-signup` → CaptainSignup
  - `/captain-login` → CaptainLogin

### `src/context/UserContext.jsx`
- Provides a React Context for user data.
- Exports `userDataContext` and a `UserContext` provider component.

### `src/pages/Home.jsx`
- Landing page with Uber branding.
- Contains a link to start the login process.

### `src/pages/UserSignup.jsx`
- Signup form for users.
- Collects first name, last name, email, and password.
- On submit, stores the data in local state and resets the form.

### `src/pages/UserLogin.jsx`
- Login form for users.
- Collects email and password.
- On submit, resets the form fields.
- Link to signup if the user is new.

### `src/pages/CaptainSignup.jsx`
- Signup form for captains (drivers).
- Collects first name, last name, email, and password.
- On submit, stores the data in local state and resets the form.
- Link to login if already registered.

### `src/pages/CaptainLogin.jsx`
- Login form for captains.
- Collects email and password.
- On submit, resets the form fields.
- Link to signup if the captain is new.

### `src/pages/Header.jsx`
- Simple header component displaying the Uber logo.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open the app:**
   Visit `http://localhost:5173` in your browser.

## Notes
- This project uses [Vite](https://vitejs.dev/) for fast development.
- Styling is done using Tailwind CSS utility classes.
- No backend integration is present; form submissions only update local state.

---

Feel free to extend the app with backend APIs, authentication, and more features as needed!
