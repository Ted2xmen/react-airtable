import React from 'react'
import VideoContainer from '../components/Videos/VideoContainer'
import Nav from './Nav'

const VideoPage = () => {
  return (
    <>
      <div className="mx-auto items-center justify-center pt-24 sm:h-full sm:w-full md:h-full md:w-full lg:mx-12 xl:mx-24">
        <Nav />
        <div className="m-4 p-12 text-white">
          <VideoContainer length={12} />
        </div>
      </div>
    </>
  )
}

export default VideoPage