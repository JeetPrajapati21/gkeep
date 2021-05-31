import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import InputArea from "./InputArea";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    axios.post("/api/notes", note)
      .catch(err => console.log(err));
  };

  const deleteNote = (id) => {
    axios.delete(`/api/notes/${id}`)
      .catch(err => console.log(err));
  };


  axios.get("/api/notes")
    .then(response => {
      setNotes(prevNote => {
        return response.data;
      })
    })
    .catch(err => console.log(err));

  return (
    <div>
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
