import React from "react";
import ArchiveNotesItemBody from "./ArchiveNotesItemBody";

function ArchivedNotesItem({ title, date, body, id, onDelete, onRestore }) {
  return (
    <div>
      <ArchiveNotesItemBody
        id={id}
        title={title}
        date={date}
        body={body}
        onDelete={onDelete}
        onRestore={onRestore}
      />
    </div>
  );
}

export default ArchivedNotesItem;
