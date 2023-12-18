import React from "react";

const RestoreButton = ({ id, onRestore }) => {
  return (
    <button className='note-item__archive-button' onClick={() => onRestore(id)}>
      Restore
    </button>
  );
};

export default RestoreButton;
