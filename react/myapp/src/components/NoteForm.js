import React from "react";
import api from "../api";

const NoteForm = ({
  formData,
  setFormData,
  editNoteId,
  setEditNoteId,
  fetchNotes,
}) => {
  const handleNoteSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editNoteId !== null) {
        await api.put(`/note/${editNoteId}/`, formData); // ✅ FIXED
        setEditNoteId(null);
      } else {
        await api.post("/note/", formData);
      }
      setFormData({ title: "", content: "" });
      fetchNotes();
    } catch (err) {
      console.error("Save error:", err.response?.data || err.message);
    }
  };

  return (
    <form
      onSubmit={handleNoteSubmit}
      className="note-form shadow-sm p-3 rounded mb-4 bg-light"
    >
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="form-control mb-2"
      />
      <textarea
        placeholder="Content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-success w-100">
        {editNoteId ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
