import React from 'react'
import moment from 'moment'

const BookmarkCard = ({ bookmark }) => {
  return (
    <>
      <a href={bookmark.link} rel="noreferrer" target="_blank">
        <div className="m-2 flex flex-row rounded-lg bg-green-700 hover:bg-green-500">
          <img
            src={bookmark.media[0].link}
            className="rounded-lg p-1"
            width="200"
            height="200"
            alt={bookmark.title}
          />
          <div className="m-2">
            <h2 className="text-md m-1 font-bold">{bookmark.title}</h2>
            <span>
              {bookmark.tags.map((tag, i) => {
                return (
                  <p
                    className="mx-1 inline-flex rounded-lg  p-1 text-xs  text-white"
                    key={i}>
                    {tag}
                  </p>
                )
              })}
            </span>
            <span className="text-xs">
              {moment(bookmark.lastUpdate).calendar()}{' '}
            </span>
            <div className="m-2 h-12 overflow-auto text-sm">
              <p>{bookmark.excerpt}</p>
              <div className="text-xs"></div>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}

export default BookmarkCard
