// import { Create } from '@mui/icons-material';
import './App.css';
import Header from './Component/Header';
import { useState, useEffect } from 'react';
import {nanoid} from 'nanoid';
import Noteslist from './Component/Noteslist';
import Search from './Component/Search';

function App() {
  const [notes,setNotes] = useState([
    {
      id:nanoid(),
      text:'Type text1...',
      date:'14/08/2023'
    },
    {
      id:nanoid(),
      text:'Type text2...',
      date:'16/08/2023'
    },
  ]);

  const [searchText,setSearchText] = useState('');
  const [darkMode,setDarkMode] = useState(false);

  useEffect(()=>{
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
      console.log(savedNotes);
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);
  useEffect(()=>{
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  },[notes])

  const addNote = (text) =>{
    const date = new Date();
    const newNote ={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString(),
    };
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=>note.id !== id)
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'} container`}>
     
        <Header handleSetDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <div className="App">
          <Noteslist 
          notes={notes.filter((note)=>
            note.text.toLowerCase().includes(searchText)
          )} 
          handleAddNote={addNote}
          handleDeleteNote = {deleteNote}
          />
        </div>
      
    </div>
  );
}

export default App;
