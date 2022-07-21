import React from 'react'
import Card from './Card'

const GridContainer = ({ tableData }) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-white text-center "> Media </h1>
      <div className="my-4 grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        {tableData.map((data) => {
          return <Card key={data.id} data={data} />
        })}
      </div>
    </div>
  )
}

export default GridContainer
