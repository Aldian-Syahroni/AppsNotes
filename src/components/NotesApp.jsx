import React from "react";
import { getInitialData } from "../utils/index";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import ArchivedNoteList from "./ArchivedNoteList";
import SearchInput from "./SearchInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      searchTerm: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onRestoreHandler = this.onRestoreHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    // Cek apakah catatan yang dihapus ada di dalam catatan aktif
    const activeNoteIndex = this.state.notes.findIndex(
      (note) => note.id === id
    );
    if (activeNoteIndex !== -1) {
      // Catatan ada di dalam catatan aktif, hapus dari catatan aktif
      const updatedNotes = [...this.state.notes];
      updatedNotes.splice(activeNoteIndex, 1);
      this.setState({ notes: updatedNotes });
    } else {
      // Catatan ada di dalam arsip, hapus dari arsip
      const updatedArchivedNotes = this.state.archivedNotes.filter(
        (note) => note.id !== id
      );
      this.setState({ archivedNotes: updatedArchivedNotes });
    }
  }

  onArchiveHandler(id) {
    const noteToArchive = this.state.notes.find((note) => note.id === id);

    if (noteToArchive) {
      noteToArchive.archived = true;
      const updatedNotes = this.state.notes.filter((note) => note.id !== id);
      const updatedArchivedNotes = [...this.state.archivedNotes, noteToArchive];

      this.setState({
        notes: updatedNotes,
        archivedNotes: updatedArchivedNotes,
      });
    }
  }

  onRestoreHandler(id) {
    const noteToRestore = this.state.archivedNotes.find(
      (note) => note.id === id
    );

    if (noteToRestore) {
      noteToRestore.archived = false;
      const restoredNotes = [...this.state.notes, noteToRestore];
      const updatedArchivedNotes = this.state.archivedNotes.filter(
        (note) => note.id !== id
      );

      this.setState({
        notes: restoredNotes,
        archivedNotes: updatedArchivedNotes,
      });
    }
  }

  onAddNotesHandler({ title, body, createdAt, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt,
            archived,
          },
        ],
      };
    });
  }

  handleSearch = (searchTerm) => {
    this.setState({ searchTerm });
  };

  render() {
    return (
      <div>
        <div className='note-app__header'>
          <h1>Notes</h1>
          <SearchInput onSearch={this.handleSearch} />
        </div>
        <div className='note-app__body'>
          <NotesInput addNote={this.onAddNotesHandler} />
          <h2>Catatan Aktif</h2>
          <NotesList
            notes={this.state.notes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            searchTerm={this.state.searchTerm}
          />
          <h2>Catatan Arsip</h2>
          <ArchivedNoteList
            archivedNotes={this.state.archivedNotes}
            onDelete={this.onDeleteHandler}
            onRestore={this.onRestoreHandler}
            searchTerm={this.state.searchTerm}
          />
        </div>
      </div>
    );
  }
}

export default NotesApp;
