import React from "react";
import ArchivedNotesItem from "./ArchivedNotesItem";
import { showFormattedDate } from "../utils/index";

const ArchivedNoteList = ({
  archivedNotes,
  onDelete,
  onRestore,
  searchTerm,
}) => {
  const filterArchivedNotes = (note) => {
    const searchText = searchTerm.toLowerCase();
    return (
      note.title.toLowerCase().includes(searchText) ||
      note.body.toLowerCase().includes(searchText)
    );
  };

  const filteredArchivedNotes = archivedNotes.filter(filterArchivedNotes);

  return (
    <div>
      {filteredArchivedNotes.length > 0 ? (
        <div className='notes-list'>
          {filteredArchivedNotes.map((note) => (
            <ArchivedNotesItem
              id={note.id}
              key={note.id}
              title={note.title}
              date={showFormattedDate(note.createdAt)}
              body={note.body}
              onDelete={() => onDelete(note.id)}
              onRestore={() => onRestore(note.id)}
            />
          ))}
        </div>
      ) : (
        <p className='notes-list__empty-message'>Catatan Arsip Kosong</p>
      )}
    </div>
  );
};

export default ArchivedNoteList;
