# Secure Notes App

## Overview

The **Secure Notes App** is a full-stack application that allows users to securely create, edit, view, and delete personal notes. Built with **FastAPI** for the backend and **React** for the frontend, the application ensures that user data is protected with JWT-based authentication. Notes are accessible only to authenticated users, making it a secure environment for personal note-taking.

## Features

- **User Authentication**: Secure login and registration system using JWT tokens.
- **CRUD Operations for Notes**: Users can add, edit, view, and delete notes.
- **Logout Functionality**: Users can securely log out, invalidating their session.
- **Search and Edit Notes**: Search through existing notes and edit them.
- **Secure Storage**: Passwords and notes are securely stored using industry-standard practices (bcrypt hashing).

## Tech Stack

### Frontend:
- React
- Axios
- Bootstrap for UI styling

### Backend:
- FastAPI
- SQLAlchemy
- PostgreSQL or SQLite
- JWT Authentication with python-jose
- Alembic for database migrations

## API Endpoints

### Authentication Endpoints:
- **POST /auth/token**: Log in to get a JWT token.
- **POST /auth/register**: Register a new user.

### Notes Endpoints:
- **GET /notes**: Fetch all notes (only accessible to authenticated users).
- **POST /notes**: Add a new note.
- **PUT /notes/{note_id}**: Edit a specific note.
- **DELETE /notes/{note_id}**: Delete a specific note.

## Usage

### Login:
- Open the app and use the login form to authenticate.
- You will be issued a JWT token, which is stored in local storage for subsequent requests.

### Managing Notes:
- After logging in, you can add new notes, view existing ones, and delete or edit them.
- Each note contains a title and content field, both of which are stored securely on the backend.

### Logout:
- The logout button invalidates the JWT token and redirects you back to the login page.

## Acknowledgements:
- **FastAPI**: The fast, modern web framework for building APIs.
- **React**: A JavaScript library for building user interfaces.
- **PostgreSQL**: Powerful, open-source relational database.
- **JWT**: JSON Web Tokens for secure authentication.
