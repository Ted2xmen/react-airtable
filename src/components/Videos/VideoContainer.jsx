import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import VideoCard from './VideoCard'
import TitleBar from '../TitleBar'
import ListCard from '../Bookmarks/ListCard'
import firefox from './../Bookmarks/firefox.json'

const VideoContainer = ({ length }) => {
  const [videos, setVideo] = useState([])
  const maxVideoItems = length

  useEffect(() => {
    const { REACT_APP_YOUTUBE } = process.env

    const latest = 'PL74ZG4NnebTrLoz4fKX_k8DPKlC9z8he8'
    const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${latest}&key=${REACT_APP_YOUTUBE}`

    axios.get(youtubeURL).then((res) => {
      setVideo(res.data.items.reverse().slice(0, maxVideoItems))
    })
  }, [])

  return (
    <>
      <div className="xs:space-y-5 grid grid-cols-1 justify-items-center gap-3 pt-10 text-xl text-white md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 2xl:justify-items-stretch ">
        {videos.map((video, i) => {
          return <VideoCard key={i} video={video} />
        })}
        <ul className="ml-6 pt-3 h-96 overflow-y-auto rounded-lg ">
          {firefox.map((im, i) => {
            return <ListCard key={i} firefox={im} />
          })}
        </ul>
      </div>
    </>
  )
}

export default VideoContainer
