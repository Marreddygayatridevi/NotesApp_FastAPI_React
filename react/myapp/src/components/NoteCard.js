import React from "react";

const NoteCard = ({ note, editNote, setFormData, deleteNote }) => {
  const handleEdit = () => {
    editNote(note.id);
    setFormData({ title: note.title, content: note.content });
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.content}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-sm btn-outline-info" onClick={handleEdit}>
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
  );
};

export default NoteCard;
