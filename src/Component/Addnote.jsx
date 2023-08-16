import React from 'react';
import {useState} from 'react';
const Addnote = ({handleAddNote}) => {
   
    const [noteText,setNoteText] = useState('');
    const charLimit = 200;


    const handleChange = (event) =>{
        //character limit greater than 200 then break
        if(charLimit - event.target.value.length >=0){
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText);  
            setNoteText('');  
        }
    }
  return (
    <div className='note new'>
        <textarea name="textarea" id="textarea" 
        placeholder='Type your note here...'
        cols="10" 
        rows="8"
        value={noteText}
        onChange = {handleChange}
        ></textarea>
      <div className='note-footer'>
        <span>{charLimit-noteText.length} remaining</span>
        <button className='save-button' onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default Addnote;
