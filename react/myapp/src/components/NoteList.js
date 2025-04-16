import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, searchQuery, editNote, setFormData, deleteNote }) => {
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="row">
      {filteredNotes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          editNote={editNote}
          setFormData={setFormData}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;