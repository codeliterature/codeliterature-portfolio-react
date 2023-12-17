import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';


import {List, ListItem, Box} from '@mui/material';
import Link from '@mui/material/Link';





function Navbar({darkMode}) {
  const [open, setOpen] = useState(false);
  const [initialState, setState] = useState(false);

  function handleClick() {
    setOpen(false);
    setState(!initialState);
    darkMode(initialState);
  }
  const closeIt = ()=>{setOpen(false)}

  return (
    <>
      <AppBar color="inherit" elevation={0} position="fixed">
      <Toolbar> 
      <IconButton onClick={()=>{setOpen(true)}}>
      <MenuIcon />
      </IconButton>
        <Typography variant="h6" color="primary" sx={{fontWeight: 'bold'}}>
      CodeLiterature
    </Typography>
        </Toolbar>
    </AppBar>
    <Dialog open={open}>
      <div className="m-2">
        <CloseIcon  onClick={closeIt}/>
      </div>
      <DialogContent>
      <ul className="card m-3 flex flex-col space-y-5 items-center">
      <li><a href="#home" onClick={closeIt}>Home</a></li>
        <li><a href="#about" onClick={closeIt}>About</a></li>
        <li><a href="#toolsAndTech" onClick={closeIt}>Tools & Technologies</a></li>
        <li><a href="#project" onClick={closeIt}>Projects</a></li>

      <span onClick={handleClick} className="cursor-pointer">{initialState ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}</span>
        <div className="flex space-x-3 items-center justify-center text-2xl">
        <a href="https://github.com/codeliterature" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://instagram.com/codeliterature" target="_blank"><i className="fa-brands fa-instagram"></i></a><a href="https://twitter.com/CodeLiterature" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        </ul>
        </DialogContent>
    </Dialog>
    </>
  )
}
export default Navbar;