import React from 'react';

function Footer() {

  const year = new Date().getFullYear();
  function getYear () {
  if (year !== 2023) {
    return year;
  } 
  }
  
   return(
   <div>
      <footer className="m-2">
        <p className="text-[14px] text-center">Copyright &#169; 2023 - {getYear} <span className="text-primaryColor dark:text-customColor">CodeLiterature</span>.All Rights Reserved.</p>
      </footer>
   </div>
    );
}

export default Footer;