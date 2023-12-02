
import React, {useState} from 'react';
import {AppBar, Toolbar, Typography } from "@mui/material";

function DeskNav({darkMode}) {
  const [initialState, setState] = useState(false);

  function handleClick() {
    setState(!initialState);
    darkMode(initialState);
  }
  return (
    <>
    <AppBar color="default" elevation={0} position="static">
    <div className="flex items-center justify-between px-4">
    <Typography variant="h6" color="primary" sx={{fontWeight: 'bold'}}>
      CodeLiterature
    </Typography>
      <ul className="m-3 flex  space-x-5 items-center">
        <></>
      <li><a href="#home" className="hover:text-customColor">Home</a></li>
        <li><a href="#about" className="hover:text-customColor">About</a></li>
        <li><a href="#toolsAndTech" className="hover:text-customColor">Tools & Technologies</a></li>
        <li><a href="#project" className="hover:text-customColor">Projects</a></li>
        <span onClick={handleClick} className="cursor-pointer">{initialState ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}</span>
      </ul>
    </div>
    </AppBar>
      
    </>

  )
}
export default DeskNav;