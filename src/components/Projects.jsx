import React from 'react';
import ProjectCard from './ProjectCard';
function Projects() {
   return(
     <div className="m-2" id="project">
       <h1 className="text-center text-2xl dark:text-customColor my-3 m-auto text-primaryColor font-bold">Our Projects</h1>
       <div className="flex flex-wrap">
       <ProjectCard
         img="https://i.imgur.com/FP5N132.jpg"
         title="Project Overseas (REACTjs)"
         tech="REACT TailwindCSS MaterialUI"
         link="https://projectoverseasreact.netlify.app/"
code= "https://github.com/codeliterature/Project-overseas-react"
      />
       <ProjectCard
          img="https://i.imgur.com/QOxeatU.jpg"
          title="Project Overseas (Old)"
          tech="HTML CSS JS UIKIT"
          link="https://projectoverseas.netlify.app/"
       code= "https://github.com/codeliterature/project-overseas"
       />
       <ProjectCard
          img="https://i.imgur.com/qCYGJ1U.jpg"
          title="QR Code Generator"
          tech="NODEjs EXPRESSjs EJS CSS"
          link="https://qrgenereatorbycodeliterature.onrender.com"
       code= "https://github.com/codeliterature/qrcode-generator"
       />
         <ProjectCard
           img="https://i.imgur.com/SK3Dvmb.jpg"
           title="Calculator"
           tech="HTML CSS JS"
           link="https://calculatorbycodeliterature.netlify.app/"
         code= "https://github.com/codeliterature/Calculatorapp"
         />
         <ProjectCard
           img="https://i.imgur.com/0e8Lvrf.jpg"
           title="previous Portfolio"
           tech="HTML CSS JS"
           link="https://codeliterature.netlify.app/"
         code= "https://github.com/codeliterature/CodeLiterature-Portfolio"
         />
         <ProjectCard
           img="https://i.imgur.com/putBOcQ.jpg"
           title="To Do List"
           tech="Nodejs Expressjs EJS CSS"
           link="https://todolistbycodeliterature.onrender.com"
         code= "https://github.com/codeliterature/todo-list-webapp"
         />
         <ProjectCard
           img="https://i.imgur.com/v9tVVtp.jpg"
           title="Blog Site"
           tech="NODEjs EXPRESSjs EJS BootStrap"
           link="https://codeliteratureblogs.onrender.com"
         code= "https://github.com/codeliterature/blog-site-vr.1"
         />
         <ProjectCard
           img="/dark.png"
           title="Keeper App Clone"
           tech="REACT MaterialUI CSS"
           link="https://www.google.com"
         code= "https://github.com/codeliterature"
         />
         </div>
     </div>
   );
}
export default Projects;