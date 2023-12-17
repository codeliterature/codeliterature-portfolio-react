import React from 'react';

function Card(props) {
  const generateKey = (pre) => {
      return `${ pre }+${ new Date().getTime() }`;
  }
  return (
    <div className="p-2 w-[280px] mx-auto rounded-lg border border-1px border-gray-300">
    <h1 className="text-xl  p-2 font-bold dark:text-customColor text-primaryColor">{props.heading}</h1>
      <div className="flex flex-wrap">
        {props.array.map((item, index)=> {
          return <p className="border border-1px dark:border-customColor border-primaryColor mx-2 my-2 p-2 rounded-md" key={generateKey(item)} id={generateKey(item)}>{item}</p>
        })}
      </div>
    </div>
  )
}

export default Card;