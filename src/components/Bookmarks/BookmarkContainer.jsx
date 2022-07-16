import { useEffect, useState } from 'react'
import axios from 'axios'
import BookmarkCard from './BookmarkCard'

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
    <div className="">
      <h1 className=" text-2xl font-bold text-white"> Reading List & Bookmarks </h1>
      <ul className="my-4 grid h-96 grid-cols-1 overflow-y-auto md:grid-cols-1">
        {data.map((bookmark) => {
          return <BookmarkCard key={bookmark._id} bookmark={bookmark} />
        })}
      </ul>
    </div>
  )
}

export default BookmarkContainer
