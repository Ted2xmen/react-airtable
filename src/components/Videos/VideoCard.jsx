import React from 'react'
import moment from 'moment'

const VideoCard = ({video}) => {
  return (
    <div className="rounded-lg border-2 border-slate-700 transition ">
      <div className="flex flex-col items-center">
        <img
          src={video.snippet.thumbnails.medium.url} // medium
          alt={video.snippet.title}
          className="rounded-t-lg object-contain md:object-cover"
          width={320} // medium 320
          height={180} // medium 180
        />

        <div className="h-48 space-y-2 pt-2 text-center opacity-50 shadow-sm hover:opacity-100">
          <div className="pt-2 text-slate-500">
            {video.snippet.videoOwnerChannelTitle}
            <span className="ml-2 text-xs">
              {moment(video.snippet.publishedAt).startOf('day').fromNow()}{' '}
            </span>
          </div>
          <h4> {video.snippet.title} </h4>
        </div>
      </div>
    </div>
  )
}

export default VideoCard