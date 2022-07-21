import React from 'react'
import moment from 'moment'

const BookmarkCard = ({ bookmark }) => {
  return (
    <>
      <a href={bookmark.link} rel="noreferrer" target="_blank">
        <li className="my-1 flex flex-row items-center rounded-lg bg-green-700 hover:bg-green-500 md:flex-row lg:flex-row 2xl:flex-row">
          <img
            src={bookmark.media[0].link}
            className=" h-20 w-20 rounded-xl object-contain p-1"
            alt={bookmark.title}
          />
          <div className="m-2">
            <h2 className="text-md m-1 font-bold">{bookmark.title}</h2>
            <span className="ml-2 text-xs">
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

            <div className="h-18 m-2 overflow-auto text-sm">
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
