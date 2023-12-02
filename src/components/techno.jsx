import React, {useState} from "react";
import Card from './Card';

function Techno() {
  const frontend = ['HTML','CSS','Javascript'];
  const backend = ['NodeJS', 'ExpressJS', 'MySql', 'MongoDB', 'Python'];
  const framwork = ['ReactJS', 'jQuery', 'Bootstrap','TailwindCSS', 'EJS', 'Material UI'];
  const tools = ['GIT', 'GitHub', 'Googling']

  
  return (
    <div id="toolsAndTech">
      <h1 className="text-center text-2xl m-2 font-bold dark:text-customColor text-primaryColor">What we know!</h1>
    <div className="flex flex-wrap space-y-2">
      <p></p>
      <Card 
        heading="Frontend"
        array={frontend}
        />
      <Card 
        heading="Backend"
        array={backend}
        />
      <Card 
        heading="Frameworks"
        array={framwork}
        />
      <Card
        heading="Tools"
        array={tools}
        />
    </div>
    </div>
  );
}

export default Techno;