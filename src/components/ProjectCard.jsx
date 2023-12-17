import React from "react";

function ProjectCard (props) {
  return (
    <div className="flex flex-col my-2 border border-1px rounded-lg w-[280px] m-auto">

      <div className="p-4">
      <img src={props.img} alt="project image" className="h-[200px] w-[100%] rounded-lg object-cover" />
      </div>
      
      <div className="flex flex-col space-between px-4">
        <div className="py-2">
        
        <h1 className="text-xl font-bold dark:text-customColor text-primaryColor">{props.title}</h1>
        <p className="text-gray-500 text-[14px] dark:text-gray-300">{props.tech}</p>
          </div>
        <div className="flex space-x-2 items-center py-2">
      <a href={props.code} target="_blank"><i className="fa-brands fa-square-github text-[48px]"></i></a>
      <a href={props.link} target="_blank" className="border border-1px rounded p-2 border-gray-600 text-[17px] dark:hover:bg-customColor hover:text-black hover:border hover:border-1px dark:hover:border-customColor hover:border-primaryColor hover:bg-primaryColor duration-200 ease-in">Visit the project</a>
      </div>
        
        </div>
    </div>
  )
}

export default ProjectCard;