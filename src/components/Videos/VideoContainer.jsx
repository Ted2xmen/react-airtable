import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import VideoCard from './VideoCard'
import TitleBar from '../TitleBar'

const VideoContainer = () => {
  const [videos, setVideo] = useState([])
  const maxVideoItems = 6

  useEffect(() => {
    const { REACT_APP_YOUTUBE } = process.env

    const latest = 'PL74ZG4NnebTrLoz4fKX_k8DPKlC9z8he8'
    const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${latest}&key=${REACT_APP_YOUTUBE}`

    axios.get(youtubeURL).then((res) => {
      setVideo(res.data.items.slice(0, maxVideoItems))
    })
  }, [])

  return (
    <>
      <TitleBar label="Son İzlediklerim" />
      <div className="grid grid-cols-1 gap-3 text-xl text-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
        {videos.map((video, i) => {
          return <VideoCard key={i} video={video} />
        })}
      </div>
    </>
  )
}

export default VideoContainer
