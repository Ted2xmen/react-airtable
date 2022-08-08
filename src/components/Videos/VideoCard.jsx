import React from 'react'
import moment from 'moment'

const VideoCard = ({ video }) => {
  return (
    <div className="w-10/12 rounded-lg border-2 border-slate-700 transition ">
      <div className="flex flex-col items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            'https://www.youtube.com/watch?v=' +
            video.snippet.resourceId.videoId
          }>
          <img
            src={video.snippet.thumbnails.medium.url} // medium
            alt={video.snippet.title}
            className="w-full rounded-t-lg object-contain "
            //  width={320} // medium 320
            // height={180} // medium 180
          />
        </a>
        <div className="h-44 space-y-2 pt-2 text-center opacity-50 shadow-sm hover:opacity-100">
          <div className="pt-2 text-slate-500">
            <h3 className="text-md"> {video.snippet.videoOwnerChannelTitle}</h3>
            <span className="ml-2 text-xs">
              {moment(video.snippet.publishedAt).startOf('day').fromNow()}{' '}
            </span>
          </div>
          <h4 className="text-sm"> {video.snippet.title} </h4>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
