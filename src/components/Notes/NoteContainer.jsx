import React from 'react'
import TitleBar from '../TitleBar'
import NoteCard from './NoteCard'

const NoteContainer = ({ tableData }) => {
  return (
    <div className="mx-auto">
      <TitleBar label="Notlar" />
      <div className="h-68 w-12/12 my-2 flex space-x-4 overflow-x-auto rounded-lg ">
        {tableData.map((data) => {
          return <NoteCard key={data.id} data={data} />
        })}
      </div>
    </div>
  )
}

export default NoteContainer
