import React, { useEffect, useState } from "react";
import api from "./api";
import notebookIcon from "./notebook.png";
import "./App.css"; 

const App = () => {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [token, setToken] = useState("");
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [editNoteId, setEditNoteId] = useState(null);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchNotes();
    }
  }, [token]);

  const fetchNotes = async () => {
    try {
      const res = await api.get("/");
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err.response?.data || err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        "/auth/token",
        new URLSearchParams({
          username: loginData.username,
          password: loginData.password,
        })
      );
      setToken(res.data.access_token);
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const handleNoteSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editNoteId !== null) {
        await api.put(`/note/${editNoteId}/`, formData);
        setEditNoteId(null);
      } else {
        await api.post("/note/", formData);
      }
      setFormData({ title: "", content: "" });
      fetchNotes();
    } catch (err) {
      console.error("Error saving note:", err.response?.data || err.message);
    }
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/note/${id}/`);
      fetchNotes();
    } catch (err) {
      console.error("Error deleting note:", err.response?.data || err.message);
    }
  };

  const editNote = (note) => {
    setFormData({ title: note.title, content: note.content });
    setEditNoteId(note.id);
  };

  const handleLogout = () => {
    setToken("");
    setNotes([]);
    setLoginData({ username: "", password: "" });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      {!token ? (
        <div className="login-card shadow p-4 rounded">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              className="form-control mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              className="form-control mb-3"
            />
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">
              <img src={notebookIcon} alt="Notebook" width="50" className="me-3" />
              <h2 className="mb-0">My Notes</h2>
            </div>
            <button className="btn btn-outline-warning" onClick={handleLogout}>
              Logout
            </button>
          </div>

          <input
            type="text"
            placeholder="Search notes..."
            className="form-control mb-3 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="note-form shadow-sm p-3 rounded mb-4 bg-light">
            <form onSubmit={handleNoteSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="form-control mb-2"
              />
              <textarea
                name="content"
                placeholder="Content"
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                className="form-control mb-2"
              ></textarea>
              <button type="submit" className="btn btn-success w-100">
                {editNoteId ? "Update Note" : "Add Note"}
              </button>
            </form>
          </div>

          <div className="row">
            {filteredNotes.map((note) => (
              <div className="col-md-4 mb-3" key={note.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.content}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <button
                      className="btn btn-sm btn-outline-info"
                      onClick={() => editNote(note)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
