# 📝 Notes Application

A full-stack Notes application built with **React** (frontend) and **FastAPI** (backend), featuring **JWT Authentication** and **SQLite3** as the database.

---

## 🚀 Getting Started

Follow these steps to set up and run the app locally.

---

### Frontend

📁 **Directory**: `react\\myapp\\src`

1. Navigate to the frontend directory:
   ```bash
   cd react_fastapi/react/myapp
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. The application frontend runs at: [http://localhost:3000](http://localhost:3000)

---

### Backend

📁 **Directory**: `Task`

1. Navigate to the backend directory:
   ```bash
   cd react_fastapi/NotesApp
   ```
2. Create and activate a virtual environment:
   - **Windows**:
     ```bash
     python -m venv env
     env\Scripts\activate
     ```
   - **macOS/Linux**:
     ```bash
     python -m venv env
     source env/bin/activate
     ```
3. Install the required Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the FastAPI backend server:
   ```bash
   uvicorn main:app --reload
   ```
5. Alternatively, start the server on a custom port:
   ```bash
   uvicorn main:app --reload --port 8001
   ```
6. Access the API documentation at: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### SQLite3 Database Access

📁 **File**: `notes.db`

1. Launch the SQLite CLI in the project directory:
   ```bash
   cd react_fastapi/NotesApp
   sqlite3 notesapp.db
   ```
2. Inside the SQLite CLI:
   - View tables:
     ```sql
     .tables
     ```
   - Change the output format:
     ```sql
     .mode box  -- Or use .mode table / .mode list
     ```
   - View users:
     ```sql
     SELECT * FROM users;
     ```
   - View notes:
     ```sql
     SELECT * FROM notes;
     ```

📝 **Example Schema for Manual Table Creation**:
```sql
CREATE TABLE users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_name TEXT UNIQUE,
  email TEXT,
  hashed_password TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  is_active BOOLEAN
);

CREATE TABLE notes (
  note_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  title TEXT,
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME,
  FOREIGN KEY(user_id) REFERENCES users(user_id)
);
```

---

## 🔐 Features

- User authentication with JWT (Registration & Login).
- CRUD operations for notes (Create, Read, Update, Delete).
- Secure API endpoints requiring authentication.
- Responsive design using Bootstrap.
- Backend with support for SQLite and PostgreSQL.
- Persistent login via local storage.

---

Here’s the directory structure formatted exactly like your request:

---

## 🗂 Directory Structure

- **Frontend (`react/myapp/src`)**:
  - `index.js`: Application entry point.
  - `api.js`: Axios configuration for API requests.
  - `notebook.png`: Application assets.
  - **components**:
    - `Navbar.js`: Navigation bar for the app.
    - `Login.js`: User login page with JWT-based authentication.
    - `Register.js`: User registration page for creating new accounts.
    - `NotesPage.js`: Main page for managing notes (CRUD operations).
    - `NoteCard.js`: Component for displaying individual notes on the Notes Page.
    - `NoteForm.js`: Form component for creating or editing notes.

- **Backend (`Task`)**:
  - `auth.py`: Authentication routes (Register & Login).
  - `notes.py`: CRUD APIs for managing notes.
  - `main.py`: Entry point for the FastAPI application.
  - `database.py`: SQLite database configuration and setup.
  - `models.py`: Database models defined using SQLAlchemy.

---

Let me know if you need any further modifications!
---

## API Endpoints

### Authentication

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| POST   | `/auth/`          | Register a new user     |
| POST   | `/auth/token/`    | Obtain access token     |

### Notes Management

| Method | Endpoint                  | Description             |
| ------ | ------------------------- | ----------------------- |
| GET    | `/notes/notes/`           | Fetch all user notes    |
| POST   | `/notes/notes/`           | Create a new note       |
| PUT    | `/notes/notes/{note_id}/` | Update a specific note  |
| DELETE | `/notes/notes/{note_id}/` | Delete a specific note  |

---


## ✍ Author

by **Marreddy Gayatri Devi**.

---

## 📜 License

This project is available for free use in personal and educational contexts.

---
