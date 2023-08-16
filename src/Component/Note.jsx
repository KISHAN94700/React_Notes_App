import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <p>{date}</p>
        <DeleteIcon
        onClick = {() => handleDeleteNote(id)} 
        className='delete-icon' />
      </div>
    </div>
  )
}

export default Note
