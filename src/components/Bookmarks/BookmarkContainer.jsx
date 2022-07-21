import { useEffect, useState } from 'react'
import axios from 'axios'
import BookmarkCard from './BookmarkCard'
import TitleBar from '../TitleBar'
import ListCard from './ListCard'

const BookmarkContainer = () => {
  const [data, setData] = useState([])
  const publicCollection = 'https://api.raindrop.io/rest/v1/raindrops/25912218'

  useEffect(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_RAINDROP}`,
      },
    }

    axios
      .get(publicCollection, options)
      .then(function (response) {
        // handle success
        setData(response.data.items)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }, [])

  return (
    <div className="mx-5">
      <TitleBar label="Bookmarks from Raindrop.io" />
      <ul className="my-4 grid  grid-cols-1 gap-2  md:grid-cols-1 2xl:grid-cols-1">
        {data.map((bookmark) => {
          return <BookmarkCard key={bookmark._id} bookmark={bookmark} />
        })}
      </ul>
      {/* <ListCard />  // delete later */}
    </div>
  )
}

export default BookmarkContainer
