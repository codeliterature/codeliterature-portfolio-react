import React from "react";

function ProjectCard (props) {
  return (
    <div className="flex flex-col my-2 border border-1px rounded w-[280px] m-auto ">

      <div className="p-2">
      <img src={props.img} alt="project image" className="h-[200px] w-[100%] rounded bg-cover" />
      </div>
      
      <div className="flex flex-col space-between p-2">
        <div className="py-2">
        
        <h1 className="text-xl font-bold dark:text-customColor text-primaryColor">{props.title}</h1>
        <p className="text-gray-500 text-[14px] dark:text-gray-300">{props.tech}</p>
          </div>
        <div className="self-end flex space-x-2 items-center">
      <a href={props.code} target="_blank" className="border border-1px rounded p-1 border-gray-600 text-[12px]"><i className="fa-brands fa-github"></i> source code </a>
      <a href={props.link} target="_blank" className="border border-1px rounded p-1 border-gray-600 text-[12px]"><i className="fa-solid fa-desktop"></i> live demo</a>
      </div>
        
        </div>
    </div>
  )
}

export default ProjectCard;