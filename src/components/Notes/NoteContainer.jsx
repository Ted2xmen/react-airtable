import React from 'react'
import NoteCard from './NoteCard'

const NoteContainer = ({ tableData }) => {

  return (
    <div className="text-start">
      <h1 className="mx-14 text-white font-bold text-2xl"> Quick Notes </h1>
      <div className="mx-14 my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 ">
        {tableData
        .map((data) => {
          return <NoteCard key={data.id} data={data} />
        })}
      </div>
    </div>
  )
}

export default NoteContainer