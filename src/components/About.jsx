import React from "react";

function About() {
  return(
    <div className="p-4 flex flex-col space-y-2" id="about">
      <h1 className="text-center text-2xl dark:text-customColor text-primaryColor font-bold">About Us</h1>
      <div className="flex flex-col space-y-2">
      <p className="text-justify">
        Welcome to <span className="text-primaryColor dark:text-customColor font-bold">CodeLiterature!</span>
      </p>
        <p className="text-justify">
        At CodeLiterature, we specialize in breathing new life into traditional web languages by seamlessly transitioning them into modern, React-powered interfaces. Armed with a toolkit that includes TailwindCSS, jQuery, and React, we craft responsive, sleek, and future-proof front-ends that redefine the digital landscape.
        </p>
        <p className="text-justify">
        Driven by a passion for coding and an unwavering commitment to excellence, we embark on each project with a singular goal: to deliver not only functional but also visually stunning front-end solutions. Our dedication to innovation and our focus on creating immersive user experiences set us apart in an ever-evolving tech landscape. Join us at CodeLiterature as we reimagine the possibilities of web development through our innovative React-based front-end solutions.
      </p>
      </div>
      {/* <p className="text-right">more about us...</p> */}
    </div>
  )
}

export default About;