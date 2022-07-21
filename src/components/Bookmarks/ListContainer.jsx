import React from 'react'
import TitleBar from '../TitleBar'
import ListCard from './ListCard'
import firefox from './firefox.json'

const ListContainer = () => {
  return (
    <div >
      <div className="mx-5 w-1/2">
        <TitleBar label="Favorite Youtuber's" />
        <ul className="my-4 grid h-72 grid-cols-1 gap-2 overflow-y-auto md:grid-cols-1 2xl:grid-cols-1">
          {firefox.map((im,i) => {
            return <ListCard key={i} firefox={im} />
          })}
        </ul>

      </div>
    </div>
  )
}

export default ListContainer