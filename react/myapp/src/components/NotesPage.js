import React, { useEffect, useState } from "react";
import api from "../api";
import Navbar from "./Navbar";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [editNoteId, setEditNoteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Merged fetchNotes function
  const fetchNotes = async () => {
    try {
      const response = await api.get("/note/");
      console.log("Fetched Notes:", response.data); // Optional debug
      setNotes(response.data);
    } catch (error) {
      console.error(
        "Failed to fetch notes:",
        error.response?.data || error.message
      );
    }
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/note/${id}/`);
      fetchNotes();
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const editNote = (id) => {
    setEditNoteId(id);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="container mt-4">
        <NoteForm
          formData={formData}
          setFormData={setFormData}
          editNoteId={editNoteId}
          setEditNoteId={setEditNoteId}
          fetchNotes={fetchNotes}
        />
        <input
          type="text"
          placeholder="Search notes..."
          className="form-control mb-3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <NoteList
          notes={notes}
          searchQuery={searchQuery}
          editNote={editNote}
          setFormData={setFormData}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default NotesPage;
