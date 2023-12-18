import React from "react";

const NotesItemBody = ({ title, date, body, onDelete, onArchive }) => {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{title}</h3>
        <p className='note-item__date'>{date}</p>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className='note-item__action'>
        <button className='note-item__delete-button' onClick={onDelete}>
          Delete
        </button>
        <button className='note-item__archive-button' onClick={onArchive}>
          Archive
        </button>
      </div>
    </div>
  );
};

export default NotesItemBody;
