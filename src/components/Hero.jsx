import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Modal from '@mui/material/Modal';
import Snackbar from '@mui/material/Snackbar';

function Hero(props) {

  const [isOpen, setOpen] = React.useState(false);
  const [isSub, openSub] = React.useState(false);
  const [input, setInput] = React.useState('Please enter your email correctly');


  function handleInput(e) {
  const value = e.target.value;
    if (value === '') {
      setInput("Please enter your email correctly")
    } else {
      setInput("Your Message has been successfully submitted")
    }
  }
// function handSub (e) {
//   openSub(true);
//   e.preventDefault()
// }

  
  
  return (
    <div className="p-4 flex flex-wrap space-y-2 items-center" id="home">
      <img src={props.img} alt="CodeLiterature Logo" className="h-[300px]" />
      <div className="flex flex-col">
        <h1 className="text-left text-2xl dark:text-customColor font-bold text-primaryColor">Code Literature</h1>
        <p>Your very own Coding Grammar</p>
          <p>Build Innovative, React based Front-End</p>
          <p>Convert your boring old HTML, CSS, JS into React powered Front-End</p>
          <p>With Tools like TailwindCSS, jQuery, and React, we build a Responsive and Modern Front-End</p>

          
      </div>
      <div className="justify-self-end">
        <button className="dark:bg-customColor px-3 py-2 text-black rounded bg-primaryColor dark:hover:bg-opacity-0 hover:border hover:border-1px dark:hover:border-customColor hover:border-primaryColor dark:hover:text-white hover:bg-opacity-0 duration-200 ease-in" onClick={()=>{setOpen(true)}}><a href="mailto:codeliterature1@gmail.com">Contact Us</a></button>
        {/* <Dialog open={isOpen} onClose={()=> {setOpen(false)}}>
        <DialogContent className="rounded">
          
          <div className=" w-[220px] flex flex-col">
            
            <form className="flex flex-col space-y-3" Netlify name="contact" method="POST">
            <input name="name" type="text" placeholder="Name" required className="bg-transparent border-b-2 border-customColor invalid:border-red-500 w-full p-2 focus:outline-none" />
              <input name="email" type="email" placeholder="Email" required className="bg-transparent border-b-2 border-customColor invalid:border-red-500 w-full p-2 focus:outline-none" onChange={handleInput} />
              <textarea className="bg-transparent border-b-2 border-customColor w-full invalid:border-red-500 focus:outline-none" required placeholder="Enter Your Message Here" cols="6" rows="5" name="message">
              </textarea>
              <button type="submit" className="dark:bg-customColor px-3 py-2 text-black rounded bg-primaryColor" >Submit</button>
        </form>
          </div> 
        </DialogContent>
          </Dialog> */}
        </div>
        </div>
  );
}

export default Hero;
