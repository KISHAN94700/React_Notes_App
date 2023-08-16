import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Search = ({handleSearchNote}) => {
  return (
    <div className='search-bar'>
      <SearchIcon />
      <input 
        onChange={(event) =>handleSearchNote(event.target.value)} 
        type="text" 
        placeholder='Search your notes here...'
      /> 
    </div>
  )
}

export default Search
