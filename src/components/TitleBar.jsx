import React from 'react'

const TitleBar = ({ label, another }) => {
  return (
    <div className="flex items-center pt-4 justify-between text-2xl font-bold  text-gray-400">
      <h1 className="hover:underline hover:decoration-red-400">{label}</h1>
      <span className="mr-24 flex"> {another} </span>{' '}
    </div>
  )
}

export default TitleBar
