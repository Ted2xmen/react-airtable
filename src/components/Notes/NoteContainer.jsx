import React from 'react'
import NoteCard from './NoteCard'

const NoteContainer = ({ tableData }) => {

  return (
    <div className="">
      <h1 className=" text-2xl font-bold text-white"> Quick Notes </h1>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 ">
        {tableData.map((data) => {
          return <NoteCard key={data.id} data={data} />
        })}
      </div>
    </div>
  )
}

export default NoteContainer