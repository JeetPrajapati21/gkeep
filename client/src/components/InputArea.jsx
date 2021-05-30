import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const InputArea = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  const expand = () => {
    setIsExpanded(() => {
      return true;
    });
  };

  return (
    <form className="create-note">
      {isExpanded ? (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
      ) : null}
      <textarea
        name="content"
        onClick={expand}
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note.."
        rows={isExpanded ? 3 : 1}
      />
      <Zoom in={isExpanded ? true : false}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default InputArea;
