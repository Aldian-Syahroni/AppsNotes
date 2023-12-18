import React from "react";
import NotesItem from "./NotesItem";
import { showFormattedDate } from "../utils/index";

const NotesList = ({ notes, onDelete, onArchive, searchTerm }) => {
  const filterNotes = (note) => {
    const searchText = searchTerm.toLowerCase();
    return (
      note.title.toLowerCase().includes(searchText) ||
      note.body.toLowerCase().includes(searchText)
    );
  };

  const filteredNotes = notes.filter(filterNotes);

  return (
    <div>
      {filteredNotes.length > 0 ? (
        <div className='notes-list'>
          {filteredNotes.map((note) => (
            <NotesItem
              key={note.id}
              title={note.title}
              date={showFormattedDate(note.createdAt)}
              body={note.body}
              id={note.id}
              onDelete={() => onDelete(note.id)}
              onArchive={() => onArchive(note.id)}
            />
          ))}
        </div>
      ) : (
        <p className='notes-list__empty-message'>Catatan Kosong</p>
      )}
    </div>
  );
};

export default NotesList;
