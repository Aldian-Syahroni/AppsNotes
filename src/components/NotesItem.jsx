import React from "react";
import NotesItemBody from "./NotesItemBody";

const NotesItem = ({ title, date, body, id, onDelete, onArchive }) => {
  return (
    <div>
      <NotesItemBody
        id={id}
        title={title}
        date={date}
        body={body}
        onDelete={onDelete}
        onArchive={onArchive}
      />
    </div>
  );
};

export default NotesItem;
