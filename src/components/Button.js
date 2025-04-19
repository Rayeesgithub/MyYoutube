import React from 'react'

const Button = ({name}) => {
  return (
    <div className=' hidden lg:block'>
      <button className=' px-5 py-1 border border-gray-200 bg-gray-200 rounded-lg mt-5 m-2 shadow-sm text-black hover:bg-gray-500 hover:text-white'>{name}</button>
    </div>
  )
}

export default Button

