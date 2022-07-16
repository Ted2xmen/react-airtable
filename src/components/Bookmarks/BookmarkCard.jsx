import React from 'react'
import moment from 'moment'

const BookmarkCard = ({ bookmark }) => {
  return (
    <>
      <a href={bookmark.link} rel="noreferrer" target="_blank">
        
        <li className="flex flex-col md:flex-row lg:flex-row xl:flex-row my-3 items-center rounded-lg bg-green-700 hover:bg-green-500 ">
          <img
            src={bookmark.media[0].link}
            className="rounded-xl p-1 object-contain w-36 md:w-36 lg:w-42 xl:w-40"
            alt={bookmark.title}
          />
          <div className="m-2">
            <h2 className="text-md m-1 font-bold">{bookmark.title}</h2>
            <span className="text-xs">
              {moment(bookmark.lastUpdate).calendar()}{' '}
            </span>
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

            <div className="m-2 h-18 overflow-auto text-sm">
              <p>{bookmark.excerpt}</p>
              <div className="text-xs"></div>
            </div>
          </div>
        </li>
      </a>
    </>
  )
}

export default BookmarkCard
