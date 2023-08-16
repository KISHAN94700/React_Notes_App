import React from 'react';


const Header = ({handleSetDarkMode}) => {
  return (
    <>
      <div className='heading'>
        <h1>Notes</h1>
        <button onClick={()=>handleSetDarkMode((previousDarkMode)=> !previousDarkMode)} className='toggle-button'>Dark Mode🌙</button>
      </div>
    </>
  )
}

export default Header
